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

clients = [{
		'name': 'qTox',
		'platforms': {
			'Windows': {
				'stable': {
					'x86': 'https://build.tox.chat/view/qtox/job/qTox-stable_build_windows_x86_release/lastSuccessfulBuild/artifact/qTox-stable_build_windows_x86_release.zip',
					'x86-64': 'https://build.tox.chat/view/qtox/job/qTox-stable_build_windows_x86-64_release/lastSuccessfulBuild/artifact/qTox-stable_build_windows_x86-64_release.zip'
				},
				'nightly': {
					'x86': 'https://build.tox.chat/view/qtox/job/qTox_pkg_windows_x86_stable_release/lastSuccessfulBuild/artifact/setup-qtox.exe',
					'x86-64': 'https://build.tox.chat/view/qtox/job/qTox_pkg_windows_x86-64_stable_release/lastSuccessfulBuild/artifact/setup-qtox.exe'
				}
			},
			'Linux': {
				'packages': {
					'OBS': 'https://software.opensuse.org/download.html?project=home%3Aantonbatenev%3Atox&package=qtox'
				}
			},
			'macOS': {
				'stable': {
					'x86-64': 'https://github.com/qTox/qTox/releases/download/v1.5.1/qTox.dmg'
				}
			},
			'FreeBSD': {
				'FreshPorts': {
					'Experimental': 'https://www.freshports.org/net-im/qTox'
				}
			}
		}
		
	},
	{
		'name': 'uTox',
		'platforms': {
			'Windows': {
				'stable': {
					'x86': 'https://build.tox.chat/job/uTox_build_windows_x86_release/lastSuccessfulBuild/artifact/utox_windows_x86.zip',
					'x86-64': 'https://build.tox.chat/job/uTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/utox_windows_x86-64.zip'
				},
				'nightly': {
					'x86-64': 'https://build.tox.chat/view/uTox/job/uTox-nightly_build_windows_x86-64_debug/lastSuccessfulBuild/artifact/utox_nightly.zip'
				}
			},
			'Linux': {
				'stable': {
					'x86': 'https://build.tox.chat/job/uTox_build_linux_x86_release/lastSuccessfulBuild/artifact/utox_linux_x86.tar.xz',
					'x86-64': 'https://build.tox.chat/job/uTox_build_linux_x86-64_release/lastSuccessfulBuild/artifact/utox_linux_x86-64.tar.xz'
				},
				'packages': {
					'tox.chat': {
						'name': 'utox',
						'stable': {
							'Debian': ['Jessie', 'Stretch', 'Sid'],
							'Ubuntu': ['Willy', 'Xenial']
						},
						'nightly': {
							'Debian': ['Jessie', 'Stretch', 'Sid'],
							'Ubuntu': ['Willy', 'Xenial']
						}
					}
				}
			},
			'macOS': {
				'stable': {
					'x86-64': 'https://github.com/uTox/uTox/releases/download/v0.9.8/uTox-0.9.8.dmg'
				}
			},
			'FreeBSD': {
				'FreshPorts': {
					'Experimental': 'https://www.freshports.org/net-im/uTox'
				}
			}
		}
	},
	{
		'name': 'Toxygen',
		'platforms': {
			'Windows': {
				'stable': {
					'x86': 'https://github.com/toxygen-project/toxygen/releases/download/v0.2.5/toxygen_windows.zip'
				}
			},
		 	'Linux': {
		 		'stable': {
					'x86': 'https://github.com/toxygen-project/toxygen/releases/download/v0.2.5/toxygen_linux.tar.gz'
				},
				'packages': {
					'tox.chat': {
						'name': 'toxygen',
						'stable': {
							'Debian': ['Jessie'   'Stretch', 'Sid'],
							'Ubuntu': ['Willy', 'Xenial']
						},
						'nightly': {
							'Debian': ['Jessie'   'Stretch', 'Sid'],
							'Ubuntu': ['Willy', 'Xenial']
						}
					}
				}
		 	}
		 }
	},
	{
		'name': 'Ricin',
		'platforms': {
			'Linux': {   
				'stable': {
					'x86': 'https://cdn.ricin.im/linux/ricin-0.2.1.app'
				},
				'packages': {
					'tox.chat': {
						'name': 'ricin',
						'stable': {
							'Debian': ['Jessie', 'Stretch', 'Sid'],
							'Ubuntu': ['Willy', 'Xenial']
						},
						'nightly': {
							'Debian': ['Jessie', 'Stretch', 'Sid'],
							'Ubuntu': ['Willy', 'Xenial']
						}
					}
				}
			}
		}
	},
	{
		'name': 'Antidote',
		'platforms': {
			'iOS': {
				'links': {
					'iTunes': 'https://itunes.apple.com/app/antidote-for-tox/id933117605'
				}
			}
		}
	},
	{
		'name': 'Antox',
		'platforms': {
			'Android': {
				'links': {
					'Google Play': 'https://play.google.com/store/apps/details?id=chat.tox.antox',
					'APK': 'https://pkg.tox.chat/fdroid/repo/antox.apk',
					'F-droid': '#antox-fdroid'
				}
			}
		}
	}
]