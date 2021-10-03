Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.network:"forwarded_port", guest: 3000, host: 8000
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "docker" do |d| 
    d.build_image "/vagrant/app", args: "-t app:v0.1"
    d.run "app:v0.1", args: "-p 3000:3000"
  end

end
