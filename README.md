How to setup Shelleg docs
=========================


What you need
------------
* python 2.7 or greater
* virtualenv
* all the requirements specified in requirements.txt

Walk-through (Temporary until moved to playbook + role)
-------------------------------------------------------

Everything you need is described in _python_env.sh_ which will be executed by vagrant.
**Considering this is the first version I haven't fully tested it's compatebilty with the rest of the project.**
Hence, there is a Vagrantfile + a setup which makes sure we have everything needed to runt the documentation site.
So until this script / setup moved into Ansible you can:

`vagrant up` will run the script python_env.sh install all the requirements stated in `requirements.txt` and 
run `make html`

`make html` is the make targer that will build the site from `./source/...` into `./build/*`

Once Vagrant completed you can open the brwser pointing to your directroy file://<path to project>/build/html/index.html 
 
### For local development: 
 
#### install required packadges:
 `sudo apt-get install -y virtualenvwrapper python-pip python-dev bash-completion vim libjpeg-dev make`
 
#### Create a virtualenv:
 `export WORKON_HOME=$HOME/.virtualenvs`
 `export PROJECT_HOME=$HOME/Devel`
 `source /etc/bash_completion.d/virtualenvwrapper`
 `mkvirtualenv OSTKLdocs`
 
#### Switch to virtualenv OSTKLdocs:
 `workon OSTKLdocs`
 
 
To be continued ...