#!/usr/bin/python
import os
from jinja2 import contextfunction

@contextfunction
def pelican_content_rel_path(context):
    if 'article' in context:
        return os.path.relpath(context['article'].source_path)
    elif 'page' in context:
        return os.path.relpath(context['page'].source_path)
    return None
