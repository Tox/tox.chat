#!/bin/bash

# Tox repository installer
 
# Figure out the version of Debian/Ubuntu that you're running
CODENAME=`/usr/bin/lsb_release -cs`
 
# All supported versions
SUPPORTED_VERSIONS=("jessie" 
                    "wheezy" 
                    "xenial" 
                    "wily"
                    "vivid"
                    "trusty")

# If running operating system isn't supported -> Abort installation	              
if [[ ! ${SUPPORTED_VERSIONS[*]} =~ "$CODENAME" ]]; then
  echo "Your operating system isn't supported. Abort installation."
  exit 0
else
  echo "Start installation of the Tox repository..."
fi

echo "deb https://pkg.tox.chat/debian nightly $CODENAME" | sudo tee /etc/apt/sources.list.d/tox.list
wget -qO - https://pkg.tox.chat/debian/pkg.gpg.key | sudo apt-key add -
sudo apt-get install apt-transport-https
sudo apt-get update