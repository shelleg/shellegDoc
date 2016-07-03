dbmanage role
=============

Synopsis
--------
Maanages database servers, I plan to support `mariadb` [ complete ], `mysql community`, `postgresql`.
Out of the box with no changes you get **mariadb 10.0** on both **Centos 7** & **Ubunutu 16.04**.

Usage
-----
Just include in your playbook for example:

    - hosts: servers
      roles:
         - { role: dbmanage-ansible-role }
	     - { role: sonar-ansible-role }

or - override defaults such as flavor and mode like so:

    - hosts: servers
      roles:
         - { role: dbmanage-ansible-role, db_mode: remote, db_flavor: rds }
	     - { role: artifactory-ansible-role }
	     - { role: jenkins-ansible-role }


Detail
------

This secion will definitely grow as we add support for other databases.. 

Used in Playbook(s)
-------------------

- ./playbook.yml line 7 -> to check defaults
- ./playbook.yml line 8,9 -> to check postgresql or mysql flavors ...

Tested on
---------
* Ubuntu 16.04
* Centos 7
