#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# here we define perlican settings.
# read more on available settings and what each of them does at
# http://docs.getpelican.com/en/stable/settings.html#basic-settings

# by default in pelican static pages and the blog share the same root, but we
# want static pages to be generated in the root and blog to go into /blog.
# pelican allows to do this, but it requires redefining paths, which is what
# the majority of the first half of this file does. we also want to be able to
# have global templates, blog templates and website templates in separate
# directories, which is a bit non-obvious to achieve in pelican, but it's still
# possible. in order to achieve this, you should make THEME point to the common
# root of all of your templates and write your jinja templates with
# include/extend statements using URLs starting at this root. also, pelican
# would be expecting blog templates to reside in THEME/templates/, which it
# wouldn't find as there is no such directory, we have the blog templates
# reside in THEME/blog/templates instead, but you can add this path explicitly
# to EXTRA_TEMPLATES_PATHS setting, which pelican would fallback to when
# failing to find the blog templates at the regular path.

# where to find markdown content
PATH = 'content/'
PAGE_PATHS = ['website']
ARTICLE_PATHS = ['blog']

# where to find static files linked in markdown content using {filename}
STATIC_PATHS = ['blog/static']
# by default pelican expects articles to be placed directly in PATH and will
# treat any subdirectories in there, like the 'blog' subdirectory we have, as
# a category the articles that are in that directory were posted under, which
# is not we want, we don't want pelican to derive blgo post categories based
# on directory structure at all. this setting does that.
USE_FOLDER_AS_CATEGORY = False
# articles are required to have a category set, so if you don't set a category
# pelican sets one for you, 'misc' by default. we'd rather have pelican failing
# if an article author forgot to specify its category, rather than pelican
# interpret it 'ah, you meant the default category', but apparently there is no
# way to make it fail, if you set default category to None it causes some
# internal error in pelican. https://github.com/getpelican/pelican/issues/2323
DEFAULT_CATEGORY = 'forgot-to-specify-category'

# output root
OUTPUT_PATH = 'public'

# grab the URL slug and lang metadata for pages and articles from the markdown
# filename, instead of having to define 'Slug:', etc. metadata in the markdown
# file. the filenames might optionally start with 'yyyy_mm_dd_' purely for
# filename sorting purposes, we don't use that for an article date, the 'Date:'
# metadata inside the markdown file is used for that. The reason why we don't
# use it as a date is that we want to make that part of filename optional, as
# unlike with articles, it doesn't make much sense to prefix pages with date,
# but pelican doesn't allow optional named groups, at least until this fix is
# released: https://github.com/getpelican/pelican/pull/2117
# note that this regex is used to match against article/pages filenames only,
# moreover filenames with a dropped extension, so if you end it with '\.md' it
# won't match anything! (figured this out the hard way)
FILENAME_METADATA = '(\d{4}-\d{2}-\d{2}_)?(?P<slug>.*)\.(?P<lang>.*)'

# capture page's the filepath, so that we could re-create the the direcotry
# structure in the output directory
PATH_METADATA = '{}/(?P<pages_filepath_no_lang_ext>.*)\..*\..*'.format(PAGE_PATHS[0])

# staic pages go in the root, preserving the source directory structure
PAGE_URL          = '{pages_filepath_no_lang_ext}.html'
PAGE_SAVE_AS      = PAGE_URL
PAGE_LANG_URL     = PAGE_URL
PAGE_LANG_SAVE_AS = PAGE_SAVE_AS

# blog-y pages go into blog/
INDEX_SAVE_AS = 'blog/index.html'

ARTICLE_URL          = 'blog/posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS      = 'blog/posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
ARTICLE_LANG_URL     = ARTICLE_URL
ARTICLE_LANG_SAVE_AS = ARTICLE_SAVE_AS

DRAFT_URL          = 'blog/drafts/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
DRAFT_SAVE_AS      = 'blog/drafts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
DRAFT_LANG_URL     = DRAFT_URL
DRAFT_LANG_SAVE_AS = DRAFT_SAVE_AS

ARCHIVES_SAVE_AS      = 'blog/posts/index.html'
YEAR_ARCHIVE_SAVE_AS  = 'blog/posts/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'blog/posts/{date:%Y}/{date:%m}/index.html'
DAY_ARCHIVE_SAVE_AS   = 'blog/posts/{date:%Y}/{date:%m}/{date:%d}/index.html'

AUTHORS_SAVE_AS = 'blog/authors/index.html'
AUTHOR_URL      = 'blog/authors/{slug}/'
AUTHOR_SAVE_AS  = 'blog/authors/{slug}/index.html'

CATEGORIES_SAVE_AS = 'blog/categories/index.html'
CATEGORY_URL       = 'blog/categories/{slug}/'
CATEGORY_SAVE_AS   = 'blog/categories/{slug}/index.html'

# we don't use tags, they tend to be heavily misused and not used consistently,
# a single category per post should be enough for keeping things organized.
TAGS_SAVE_AS = ''
TAG_URL      = ''
TAG_SAVE_AS  = ''

DEFAULT_PAGINATION = 8
PAGINATION_PATTERNS = (
    (1, '{base_name}/', '{base_name}/index.html'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)

# keeps all urls '/<url>'
SITEURL = ''

# feeds can't into relative url
FEED_DOMAIN = 'https://tox.chat'

# blog feed should also go into blog/
FEED_ALL_ATOM = ''
FEED_ALL_RSS = ''
TRANSLATION_FEED_ATOM = 'blog/feed-%s.atom.xml'
TRANSLATION_FEED_RSS = 'blog/feed-%s.rss.xml'
CATEGORY_FEED_ATOM = 'blog/categories/%s/feed.atom.xml'
CATEGORY_FEED_RSS = 'blog/categories/%s/feed.rss.xml'
AUTHOR_FEED_ATOM = 'blog/authors/%s/feed.atom.xml'
AUTHOR_FEED_RSS = 'blog/authors/%s/feed.rss.xml'

# used in generation of feeds, without it pelican inserts some generic
# 'Pelican Blog' name
SITENAME = 'Tox Blog'

TIMEZONE = 'UTC'
DEFAULT_DATE_FORMAT = '%B %-d, %Y'
DEFAULT_LANG = 'en'

THEME = 'themes'
EXTRA_TEMPLATES_PATHS = ['themes', 'themes/blog/templates']

THEME_STATIC_DIR = 'static'
THEME_STATIC_PATHS = ['global/static', 'blog/static', 'website/static']

# tell pelican that our template pages reside in themes/website/templates and
# they should go into OUTPUT_PATH. Also preserve the directory structure. Also
# don't process any files or directories that start with '_', those usually
# contain partial templates or macros.
TEMPLATE_PAGES = {}

import fnmatch
import os

TEMPLATES_DIR = THEME + '/website/templates'
for root, dirnames, filenames in os.walk(TEMPLATES_DIR):
    dirnames[:] = [d for d in dirnames if not d.startswith('_')]
    for filename in fnmatch.filter(filenames, '*.html'):
        if not filename.startswith('_'):
            template_src = os.path.join(root, filename)[len(THEME)+1:]
            template_dst = os.path.join(root, filename)[len(TEMPLATES_DIR)+1:]
            print(template_src + ' -> ' + template_dst)
            TEMPLATE_PAGES[template_src] = template_dst

# we need to copy some files/directories from the theme's subdirectory into the
# output diretory
import shutil

def copy(src, dst_dir):
    dst_dir = os.path.join(OUTPUT_PATH, dst_dir)
    if not os.path.exists(src):
        raise Exception("Can't copy '{}', it doesn't exist".format(src))
    if os.path.exists(dst_dir) and not os.path.isdir(dst_dir):
        raise Exception("Can't copy to '{}', there already something exists that is not a directory".format(src))

    if os.path.isfile(src):
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        shutil.copy(src, dst_dir)
    elif os.path.isdir(src):
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        for root, _, filenames in os.walk(src):
            current_dir = os.path.join(dst_dir, os.path.relpath(root, src))
            if not os.path.exists(current_dir):
                os.mkdir(current_dir)
            for f in filenames:
                shutil.copy(os.path.join(root, f), os.path.join(current_dir, f))
    else:
        raise Exception("Can't copy '{}', it's neither a file or directory".format(src))

def copy_list(l):
    for (src, dst_dir) in l:
        copy(src, dst_dir)

#copy_list([
#    ('themes/blog/static',    'blog/static'),
#    ('themes/website/static', 'static'),
#    ('themes/global/static',  'static')
#])

# add pelican plugins
PLUGINS = [
    'plugins.jinja_globals_tests.jinja_globals_tests',
    'plugins.read_more_link.read_more_link',
    'plugins.i18n_subsites.i18n_subsites'
]

# settings for plugins.read_more_link.read_more_link
SUMMARY_MAX_LENGTH = 120
# This is the format of the read more link
READ_MORE_LINK_FORMAT = '<a class="read-more" href="{url}"><span> {text}</span></a>'
# this is what '{text}' is set to in the above
READ_MORE_LINK = 'Read More'

# plugins.i18n_subsites.i18n_subsites settings.
# here are some sources on using this plugin:
# https://github.com/getpelican/pelican-plugins/tree/master/i18n_subsites
# http://jinja.pocoo.org/docs/2.10/templates/#i18n
# http://mozweb.readthedocs.io/en/latest/reference/l10n.html
I18N_UNTRANSLATED_ARTICLES = 'keep'
I18N_UNTRANSLATED_PAGES = 'keep'
I18N_SUBSITES = {
    'de': {
        # those need to be translated from their english counterparts that are
        # defined above
        'SITENAME': '???',
        'READ_MORE_LINK': '???'
    }
}

# add our own (or 3rd party) jinja extensions, filters, globals, tests, etc.
import sys
sys.path.append('.')

import jinja.extensions
JINJA_ENVIRONMENT = {
    'extensions':  ['jinja2.ext.i18n'] + jinja.extensions.get_extensions()
}
print('JINJA_ENVIRONMENT = {}'.format(JINJA_ENVIRONMENT))

import jinja.filters
JINJA_FILTERS = jinja.filters.get_filters()
print('JINJA_FILTERS = {}'.format(JINJA_FILTERS))

import jinja.globals
_JINJA_GLOBALS = jinja.globals.get_globals()
print('_JINJA_GLOBALS = {}'.format(_JINJA_GLOBALS))

import jinja.tests
_JINJA_TESTS = jinja.tests.get_tests()
print('_JINJA_TESTS = {}'.format(_JINJA_TESTS))

# markdown options
MARKDOWN = {
    # see the list of all available extensions at
    # https://python-markdown.github.io/extensions/
    'extension_configs': {
        'markdown.extensions.extra' : {},
        'markdown.extensions.sane_lists' : {},
        # no so much for the actual Table of Contents functionality as for
        # adding unique ids to html headers generated from Markdown, e.g.
        # <h1 id="...">, so that we could refer to them with anchors, as
        # well as for adding ¶ permalinks
        'markdown.extensions.toc': {'permalink': True},
    },
    'output_format': 'html5',
}

# non-pelican settings, used by our templates
GITHUB_URL = 'https://github.com/Tox/tox.chat'
