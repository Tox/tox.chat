#!/usr/bin/env bash

export TZ=UTC

pybabel update -i themes/i18n/messages.pot -d themes/i18n/translations

for file in themes/i18n/translations/*/LC_MESSAGES/*.po; do
    sed -i '/^#~/,+2d' $file
done

