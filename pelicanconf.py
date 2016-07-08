#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Tox'
SITENAME = u'Tox'

PATH = 'content'

TIMEZONE = 'UTC'

DEFAULT_LANG = u'en'

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

DEFAULT_PAGINATION = False

THEME = "themes/website"


# pelican is mainly aimed at blogs and a regular pelican template has only
# a predefined set of files with predefined names which do blog things.
# since we don't need blog things, we override that, making pelican process
# all template files (that don't start with '_') and don't treat them as some
# special blog templates.
DIRECT_TEMPLATES = []

TEMPLATE_PAGES = {}

import fnmatch
import os

templates_dir = THEME + '/templates'
for root, dirnames, filenames in os.walk(templates_dir):
    for filename in fnmatch.filter(filenames, '*.html'):
        if not filename.startswith("_"):
            template = os.path.join(root, filename)[len(templates_dir)+1:]
            TEMPLATE_PAGES[template] = template
