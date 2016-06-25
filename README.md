How to setup Shelleg docs
=========================

Minimal requirements
--------------------
* python 2.7 or greater
* virtualenv
* All the requirements specified in requirements.txt

Full equirements
----------------
* all Minimal requiremsnts
* Vagrant (tested with 1.8.4)
* Virtualbox (tested with 5.0.16)

QuickStart
-----------
Just execute `vagrant up` then point your browser @ http://172.16.1.2, 
every time you make a change and don't want to push it yet but review it just run `vagrant provision`

ShellegDoc Playbook
-------------------
This is pretty straight-forward / quick an dirty implementation of the `python_env.sh`
- Install required packages
- Create VirtualEnv 4 shellgDoc
- Install pip requirements from `requirements.txt`
- Execute `make html`
- Clean `/var/www/html`
- link `/var/www/html` to `/vagrant/build/html`

**please note: this is like i said quick and dirty ...**


### For local development (on your local machine): 
Everything you need is described in `python_env.sh` which used to be executed by vagrant, **please note this file isn't maintained anymore**

It basically install's all requirements and then runs make targets to get the docs served by `sphinx-autobuild`.
worth noting:
    `make html` is the make targer that will build the site from `./source/...` into `./build/*`
    `make watch` uses `sphinx-autobuild` module to instatiate an http server on port 8000.

Minimal requirements, as specified above will suffice for local development. 
 
#### install required packadges:

_On ubuntu_
 `sudo apt-get install -y virtualenvwrapper python-pip python-dev bash-completion vim libjpeg-dev make`

_On MaxOSX_
  install virtualenv & virtualenv wrapper via `homebrew`
  `brew install pyenv-virtualenvwrapper`
  
#### Create a virtualenv:
 `export WORKON_HOME=$HOME/.virtualenvs`
 `export PROJECT_HOME=$HOME/Devel`
 `source /etc/bash_completion.d/virtualenvwrapper`
 `mkvirtualenv OSTKLdocs`
 
#### Switch to virtualenv shellegDoc:
`workon shellegDoc` will force all python packages to be installed in the `shallegDoc` virtual environment
 
#### Install requirements in virtualenv `shellegDoc`:
cd /path/to/dir
pip install -r requirements.txt
 
#### make html / watch
In the root folder execute `make watch` this will instatiate a web server listening on 0.0.0.0 on port 8000
output should look like so:
```shell
$ make watch 
sphinx-autobuild -q --host 0.0.0.0 source build/html

+--------- manually triggered build ---------------------------------------------

[I 160625 18:35:33 server:281] Serving on http://0.0.0.0:8000
[I 160625 18:35:33 handlers:59] Start watching changes
[I 160625 18:35:33 handlers:61] Start detecting changes
[I 160625 18:35:40 handlers:132] Browser Connected: http://localhost:8000/index.html
```

