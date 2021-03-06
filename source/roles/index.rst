Roles
=============

The roles built for Shelleg project will eventually cover a wide matrix of integrations.

+--------------------+------------------------------------------------+----------------+----------------+
| Toolchain / Impl   | Options                                        | Milestone 0.1  | Milestone 0.2  |
+====================+================================================+================+================+
| SCM                | Gitlab / Gerrit / Github / Bitbucket (Stash)   | Gitlab         |                |
+--------------------+------------------------------------------------+----------------+----------------+
| CI / orchestration | Jenkins                                        | Jenkins        |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Binary repo        | Artifactory / Nexus                            | Artifactory    |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Issue tracker      | redmine                                        | redmine        |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Code Quality       | Sonae Qube                                     | SonaeQube      |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Image creation     | Gitlab / Gerrit / Github / Bitbucket (Stash)   | Gitlab         |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Deployment         | virtualbox / AWS / GCE / DGocean / Azure       | virtualbox     | AWS ?          |
+--------------------+------------------------------------------------+----------------+----------------+
| Image creation     | Packer                                         | Packer         |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Inventory          | Ralph                                          |        -       | Ralph          |
+--------------------+------------------------------------------------+----------------+----------------+
| Database support   | for sonar / artifactory                        | MariaDB        |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Queue service      | RabbitMQ, ActiveMQ                             |        -       |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Docker Daemon      |                                                |                |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Docker Registery   |                                                |                |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Docker swarm       |                                                |                |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Logging            | ELK                                            |                |                |
+--------------------+------------------------------------------------+----------------+----------------+
| Monitoring         | Zabbix                                         |                |                |
+--------------------+------------------------------------------------+----------------+----------------+


.. toctree::
   :maxdepth: 2

   dbmanage
   gitlab
   jenkins



Adding roles
############
Adding more roles to link below by adding a <role_name>.rst file in the source/roles/directory and adding it to the doctree entry in the index.rst (this file)


.. disqus::
