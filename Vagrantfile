# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "bento/ubuntu-16.04"
  config.vm.box_check_update = false
  config.vm.synced_folder ".", "/vagrant"

  # network settings
  config.vm.network "forwarded_port", guest: 8000, host: 80
  config.vm.network "private_network", ip: "172.16.1.2"

  # provision
  #config.vm.provision :shell, :path => "python_env.sh"
  config.vm.provision :ansible do |ansible|

        ansible.playbook = "playbook.yml"
        ansible.sudo = "true"
        ansible.sudo_user = "root"
        ansible.host_key_checking = "false"
        ansible.verbose = "-vvv"
      end
end
