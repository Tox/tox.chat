#!/usr/bin/env bash

export TZ=UTC

if [ -e themes/i18n/messages.pot ]; then
    mv themes/i18n/messages.pot themes/i18n/messages.pot.old
fi

pybabel extract --msgid-bugs-address="https://github.com/Tox/tox.chat/issues" \
                --copyright-holder="Project Tox Website Contributors" \
                --project="Tox Website" \
                --version="(https://tox.chat)" \
                --sort-by-file \
                -F themes/i18n/babel.cfg \
                -o themes/i18n/messages.pot \
                .

if [ -e themes/i18n/messages.pot.old ]; then
    if diff -u <(sed '/POT-Creation-Date/d' themes/i18n/messages.pot) <(sed '/POT-Creation-Date/d' themes/i18n/messages.pot.old); then
        echo "No translation strings changed, keeping the old POT"
        mv themes/i18n/messages.pot.old themes/i18n/messages.pot
    else
        echo "Translation strings changed, using the new POT"
        rm themes/i18n/messages.pot.old
    fi
fi

