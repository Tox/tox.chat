#!/usr/bin/env bash

export TZ=UTC

pybabel init -i themes/i18n/messages.pot -d themes/i18n/translations -l $1
