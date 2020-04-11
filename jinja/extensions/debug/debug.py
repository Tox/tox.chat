#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# From https://github.com/pallets/jinja/pull/798
# Under Jinja's BSD license.

import pprint

from jinja2 import nodes
from jinja2.ext import Extension
from jinja2.nodes import ContextReference


class DebugExtension(Extension):
    """
    A {% debug %} tag that dumps the variables, filters and tests available.
    This is roughyl equivalent to the DTL {% debug %} tag, and typical usage
    like this:

        <pre>{% debug %}</pre>

    produces output like this:

        {'context': {'_': <function _gettext_alias at 0x7f9ceabde488>,
                 'csrf_token': <SimpleLazyObject: 'lfPE7alA8V0YloBnwKDoyzdW7zoCLTUSHI61sobC5GulVTuRfbAq3bykS4txKfb3'>,
                 'cycler': <class 'jinja2.utils.Cycler'>,
                 ...
                 'view': <polls.views_auth.Login object at 0x7f9cea2cbe48>},
        'filters': ['abs', 'add', 'addslashes', 'attr', 'batch', 'bootstrap',
                 'bootstrap_classes', 'bootstrap_horizontal', 'bootstrap_inline',
                 ...
                 'yesno'],
        'tests': ['callable', 'checkbox_field', 'defined', 'divisibleby', 'escaped',
               'even', 'iterable', 'lower', 'mapping', 'multiple_checkbox_field',
               ...
               'string', 'undefined', 'upper']}
    """
    tags = {'debug'}

    def __init__(self, environment):
        super(DebugExtension, self).__init__(environment)

    def parse(self, parser):
        lineno = parser.stream.expect('name:debug').lineno
        context = ContextReference()
        call = self.call_method('_render', [context], lineno=lineno)
        return nodes.Output([nodes.MarkSafe(call)])

    def _render(self, context):
        result = {
            'filters': sorted(self.environment.filters.keys()),
            'tests': sorted(self.environment.tests.keys()),
            'context': context.get_all()
        }
        #
        # We set the depth since the intent is basically to show the top few
        # names. TODO: provide user control over this?
        #
        text = pprint.pformat(result, depth=6)
        return text
