#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from jinja2 import nodes
from jinja2.ext import Extension
from jinja2.exceptions import TemplateRuntimeError

class ErrorExtension(Extension):
    tags = set(['error'])

    def parse(self, parser):
        lineno = next(parser.stream).lineno
        args = [parser.parse_expression()]
        return nodes.CallBlock(self.call_method('_error', args),
                               [], [], []).set_lineno(lineno)

    def _error(self, arg, caller):
        raise TemplateRuntimeError(arg)
