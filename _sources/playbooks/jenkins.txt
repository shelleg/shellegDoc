<name> playbook
================

Synopsis:
    This playbook configures / install's <playbook name>

Defaults:


| variable key       | Type             | default value  |
+--------------------+------------------+----------------+
| some key           | String           | val            |
| Jenkins plugins    | Array / Dict     | plugins:       |
|                    |                  |  1. MultiJob   |
|                    |                  |  2. Git        |
| some key           | String           | val            |
| some key           | String           | val            |


Variable overrides:
| variable key       | override value  |
+--------------------+-----------------+
| allow_override     | True            |

Tested on:
    - Ubuntu
    - Other 

Roles in Playbook:
    * role 1
    * role 2

.. disqus::