#!/usr/bin/env python

from pelican import signals
from pelican.generators import Generator

def patchup_generator(generator):
    if '_JINJA_GLOBALS' in generator.settings:
        generator.env.globals.update(generator.settings['_JINJA_GLOBALS'])
    if '_JINJA_TESTS' in generator.settings:
        generator.env.tests.update(generator.settings['_JINJA_TESTS'])

def register():
    signals.generator_init.connect(patchup_generator)
