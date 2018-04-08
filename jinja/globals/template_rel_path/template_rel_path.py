#!/usr/bin/python
import os
from jinja2.exceptions import TemplateRuntimeError
from jinja2.loaders import FileSystemLoader, PrefixLoader
from jinja2 import contextfunction

@contextfunction
def template_rel_path(context):
    template_dirs = []
    for l in context.environment.loader.loaders:
        if isinstance(l, FileSystemLoader):
            template_dirs.extend(l.searchpath)
        elif isinstance(l, PrefixLoader):
            for p, pl in l.mapping.items():
                if isinstance(pl, FileSystemLoader):
                    template_dirs.extend(pl.searchpath)
    template_path = None
    for td in template_dirs:
        maybe_tp = os.path.join(td, context.name)
        if os.path.isfile(maybe_tp):
            template_path = maybe_tp
            break
    if not template_path:
        raise TemplateRuntimeError("Couldn't find the template path for {}".format(context.name))
    return os.path.relpath(template_path)
