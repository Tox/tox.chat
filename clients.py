def get_clients():
    clients = [
        {
            'name': 'qTox', 
            'logo': 'theme/img/client/qtox_mac.png', 
            'platforms': ['Windows', 'Linux', 'OSX', 'FreeBSD'], 
            'Windows': 
            {
                'nightly': 
                {
                    '32-bit': 'https://build.tox.chat/view/qtox/job/qTox_pkg_windows_x86_stable_release/lastSuccessfulBuild/artifact/setup-qtox.exe',
                    '64-bit': 'https://build.tox.chat/view/qtox/job/qTox_pkg_windows_x86-64_stable_release/lastSuccessfulBuild/artifact/setup-qtox.exe'
                } ,
                'stable':
                {
                    '32-bit': 'https://build.tox.chat/view/qtox/job/qTox-stable_build_windows_x86_release/lastSuccessfulBuild/artifact/qTox-stable_build_windows_x86_release.zip',
                    '64-bit': 'https://build.tox.chat/view/qtox/job/qTox-stable_build_windows_x86-64_release/lastSuccessfulBuild/artifact/qTox-stable_build_windows_x86-64_release.zip'
                }
            },
            'Linux':
            {
                'packages':
                {
                    'OBS': 'https://software.opensuse.org/download.html?project=home%3Aantonbatenev%3Atox&package=qtox'
                }
            },
            'OSX':
            {
                'stable': 
                {
                    '64-bit': 'https://github.com/qTox/qTox/releases/download/v1.5.1/qTox.dmg'
                }
            },
            'FreeBSD': 
            {
                'link':
                {
                    'Experimental port': 'https://www.freshports.org/net-im/qTox'
                }
            }
        },
        {
            'name': 'uTox',
            'logo': 'theme/img/client/utox_mac.png',
            'platforms': ['Windows', 'Linux', 'OSX', 'FreeBSD'],
            'Windows':
            {
                'stable': 
                {
                    '32-bit': 'https://build.tox.chat/job/uTox_build_windows_x86_release/lastSuccessfulBuild/artifact/utox_windows_x86.zip',
                    '64-bit': 'https://build.tox.chat/job/uTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/utox_windows_x86-64.zip'
                } ,
                'nightly':
                {
                    '64-bit': 'https://build.tox.chat/view/uTox/job/uTox-nightly_build_windows_x86-64_debug/lastSuccessfulBuild/artifact/utox_nightly.zip'
                }
            },
            'Linux':
            {
                'stable':
                {
                    '32-bit': 'https://build.tox.chat/job/uTox_build_linux_x86_release/lastSuccessfulBuild/artifact/utox_linux_x86.tar.xz',
                    '64-bit': 'https://build.tox.chat/job/uTox_build_linux_x86-64_release/lastSuccessfulBuild/artifact/utox_linux_x86-64.tar.xz'
                },
                'packages':
                {
                    'OBS': 'https://software.opensuse.org/download.html?project=home%3Aantonbatenev%3Atox&package=utox',
                    'tox.chat':
                    {
                        'name': 'utox',
                        'stable':
                        {
                            'Debian': ['Jessie'   'Stretch', 'Sid'],
                            'Ubuntu': ['Vivid', 'Willy', 'Xenial']
                        },
                        'nightly':
                        {
                            'Debian': ['Jessie'   'Stretch', 'Sid'],
                            'Ubuntu': ['Vivid', 'Willy', 'Xenial']
                        }
                    }
                }
            },
            'OSX':
            {
                'stable':
                {
                    '64-bit': 'https://github.com/GrayHatter/uTox/releases/download/v0.9.8/uTox-0.9.8.dmg'
                }
            },
            'FreeBSD': 
            {
                'link':
                {
                    'Experimental port': 'https://www.freshports.org/net-im/uTox'
                }
            }
        },
        {
            'name': 'Toxygen',
            'logo': 'theme/img/client/toxygen_1.png', 
            'platforms': ['Windows', 'Linux'],
            'Windows':
            {
                'stable':
                {
                    '32-bit': 'https://github.com/toxygen-project/toxygen/releases/download/v0.2.4.1/toxygen_windows.zip'
                }
            },
            'Linux':
            {
                'stable':
                {
                    '32-bit': 'https://github.com/toxygen-project/toxygen/releases/download/v0.2.4.1/toxygen_linux.tar.gz'
                },
                'packages':
                {
                    'tox.chat':
                    {
                        'name': 'toxygen',
                        'stable':
                        {
                            'Debian': ['Jessie'   'Stretch', 'Sid'],
                            'Ubuntu': ['Vivid', 'Willy', 'Xenial']
                        },
                        'nightly':
                        {
                            'Debian': ['Jessie'   'Stretch', 'Sid'],
                            'Ubuntu': ['Vivid', 'Willy', 'Xenial']
                        }
                    }
                }
            }
        },
        {
            'name': 'Ricin',
            'logo': 'theme/img/client/ricin_linux.png',
            'platforms': ['Linux'],
            'Linux':
            {   
                'stable':
                {
                    '32-bit': 'https://cdn.ricin.im/linux/ricin-0.2.1.app'
                },
                'packages':
                {
                    'tox.chat':
                    {
                        'name': 'ricin',
                        'stable' :
                        {
                            'Debian': ['Jessie'   'Stretch', 'Sid'],
                            'Ubuntu': ['Vivid', 'Willy', 'Xenial']
                        },
                        'nightly' :
                        {
                            'Debian': ['Jessie'   'Stretch', 'Sid'],
                            'Ubuntu': ['Vivid', 'Willy', 'Xenial']
                        }
                    }
                }
            }
        },
        {
            'name': 'Antidote',
            'logo': 'theme/img/client/antidote_1.png',
            'platforms': ['iOS'],
            'iOS':
            {
                'link':
                {
                    'stable': 'https://antidote.im/'
                }
            }
        },
        {
            'name': 'Antox',
            'logo': 'theme/img/client/antox.png',
            'platforms': ['Android'],
            'Android': 
            {
                'link':
                {
                    'Google Play': 'https://play.google.com/store/apps/details?id=chat.tox.antox',
                    'APK': 'https://pkg.tox.chat/fdroid/repo/antox.apk'

                }
            }
        },
    ]
    return clients