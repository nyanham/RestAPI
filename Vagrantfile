Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.network:"forwarded_port", guest: 3000, host: 3000
  config.vm.network:"forwarded_port", guest: 8000, host: 8000
  config.vm.synced_folder "app/", "/app"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "docker" do |d| 
    d.build_image "/vagrant/app", args: "-t app:v0.1"
    d.run "app:v0.1", args: "-p 3000:3000"
  end

  config.vm.provision "shell", inline: <<-SHELL 
    sed -i 's/v0.1/v0.2/' /vagrant/app/index.js
    sed -i 's/3000/8000/' /vagrant/app/index.js
  SHELL


  config.vm.provision "docker" do |d1| 
    d1.build_image "/vagrant/app", args: "-t app:v0.2"
    d1.run "app:v0.2", args: "-p 8000:8000"
  end


end
