#!/bin/bash

# Disclaimer
echo "This is a naive attempt to get and env up and running without testing all scenarios"
sudo apt-get update
sudo apt-get install -y virtualenvwrapper python-pip python-dev bash-completion vim libjpeg-dev make

echo \
'# Virtualenvwrapper stuff
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
' >> /home/vagrant/.bashrc

pushd /vagrant/

export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
source /etc/bash_completion.d/virtualenvwrapper
mkvirtualenv shellegDoc
workon shellegDoc
pip install -r requirements.txt
make watch

popd
