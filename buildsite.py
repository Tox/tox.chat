#!/usr/bin/env python3
# buildsite.py
# Copyright (c) 2013-2016, Zodiac Labs.

import os
import pystache
import shutil
import sys
import json
import re
from collections import OrderedDict

# yes, technically we are parsing html with regex, that is bad
# but i trust you webdevs to not fuck it up
REGEX = r"<tl\s+([^<>\s]+?)>([^<>]+?)</tl>".replace(".", r"\s*?")
REGEX = re.compile(REGEX, re.I)

def extract_strings(fromdoc):
    strings = OrderedDict()
    for key, value in REGEX.findall(fromdoc):
        if key.endswith("@"):
            key = key[:-1]
            val = strings.get(key, [])
            val.append(value)
            strings[key] = val
        else:
            strings[key] = value
    return strings

def preprocess_for_mustache(fromdoc):
    # converts <tl key>origtext</tl> type tags to mustache tags for
    # final substitution.
    def sub(match):
        return "{{{{ {0} }}}}".format(match.group(1))
    return REGEX.sub(sub, fromdoc)

class MagicProxy(object):
    def __init__(self, wrapping, dont_return_none=False):
        self.wrapping = wrapping
        self.arrays = {}
        self.dont_return_none = dont_return_none

    def arrayget(self, key):
        if key in self.arrays:
            return next(self.arrays[key])
        else:
            if isinstance(self.wrapping.get(key), list):
                self.arrays[key] = iter(self.wrapping[key])
                return self.arrayget(key)
        if self.dont_return_none:
            return "NO ARRAY FOR KEY: '{0}'".format(key)

    def __getattr__(self, key):
        #import pdb; pdb.set_trace()
        if key.endswith("@"):
            return self.arrayget(key[:-1])
        elif key in self.wrapping:
            return self.wrapping[key]
        elif self.dont_return_none:
            return "MISSING KEY: '{0}'".format(key)

class Overlay(object):
    def __init__(self, src, fallback_to):
        self.src = src
        self.fallback = fallback_to

    def __getattr__(self, key):
        res = getattr(self.src, key)
        if res is None:
            return getattr(self.fallback, key)
        else:
            return res

class Langs(object):
    def __init__(self):
        self.cache = {}
        for a in filter(lambda fn: fn.endswith(".json"), os.listdir("tl")):
            with open(os.path.join("tl", a)) as sf:
                self.cache[a.replace(".json", "")] = json.load(sf)

    def is_eligible_for_translation(self, rel):
        return True if rel in self.cache["en"] else False

    def to_tl_tags(self, file, using_strings, to):
        stab = self.cache["en"]["multi"].copy()
        if using_strings in self.cache["en"]:
            stab.update(self.cache["en"][using_strings])
        mp = MagicProxy(stab, dont_return_none=1)

        def sub(match):
            print(match)
            return "<tl {1}>{0}</tl>".format(getattr(mp, match.group(1)), match.group(1))

        with open(file, "r") as f:
            template = f.read()
        with open(file, "w") as f:
            f.write(REGEX.sub(sub, template))

    def format(self, file, using_strings, to):
        with open(file, "r") as f:
            template = preprocess_for_mustache(f.read())

        renderer = pystache.renderer.Renderer()

        print("Rendering", file, "...", end=" ")
        for language in self.cache:
            fbmulti = self.cache["en"]["multi"]
            multi = self.cache[language].get("multi")
            multi_overlay = Overlay(MagicProxy(multi),
                fallback_to=MagicProxy(fbmulti, dont_return_none=1)) if multi else MagicProxy(fbmulti, dont_return_none=1)

            fbpage = self.cache["en"][using_strings]
            page = self.cache[language].get(using_strings)
            page_overlay = Overlay(MagicProxy(page), fallback_to=MagicProxy(fbpage)) if page else MagicProxy(fbpage)

            # The search order is: page [translated] -> page [english] -> multi [translated] -> multi [english]
            with open(to.replace(".html", ".{0}.html".format(language)), "w") as outfile:
                outfile.write(renderer.render(template, Overlay(page_overlay, fallback_to=multi_overlay),
                                                        {"language": language},
                                                        {"all_languages": self.cache}))
            print(language, end=" ", flush=1)
        print()

def main():
    if len(sys.argv) >= 2:
        act = sys.argv[1]
    else:
        act = None

    cache = Langs()

    for root, folders, files in os.walk("src"):
        # lmao
        rel = root.replace("src", "")[len(os.path.sep):]
        destroot = os.path.join("htmlroot", rel)
        try:
            os.makedirs(destroot)
        except FileExistsError:
            pass

        for f in files:
            file_path = os.path.join(root, f)
            dest_file = os.path.join(destroot, f)
            spec_key = os.path.join(rel, f)
            if f.endswith(".html") and cache.is_eligible_for_translation(spec_key):
                if act == "ist":
                    cache.to_tl_tags(file_path, using_strings=spec_key, to=dest_file)
                elif act == "ext":
                    with open(file_path, "r") as take:
                        embedded = extract_strings(take.read())
                    with open("tl/en.json", "r") as tlf:
                        tmp = json.load(tlf)
                    if spec_key in tmp:
                        tmp[spec_key].update(embedded)
                    else:
                        tmp[spec_key] = embedded
                    print("= = = = = = = = = = = = = = =")
                    print("I found the following keys in", spec_key, ":")
                    print(json.dumps(tmp[spec_key], indent=4, ensure_ascii=0))
                else:
                    cache.format(file_path, using_strings=spec_key, to=dest_file)
            else:
                shutil.copy2(file_path, dest_file)

if __name__ == "__main__":
    main()
