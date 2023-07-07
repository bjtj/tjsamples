# What is Vagrant? #

<https://developer.hashicorp.com/vagrant/tutorials/getting-started/getting-started-index>

## Prerequisites ##

- Install the latest version of [Vagrant](https://developer.hashicorp.com/vagrant/docs/installation).
- Install a virtualization product such as; [VirtualBox](https://www.virtualbox.org), [VMware Fusion](https://customerconnect.vmware.com/downloads/get-download?downloadGroup=FUS-PUBTP-2021H1), or [Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v).


# Vagrant vs. Terraform #

<https://developer.hashicorp.com/vagrant/intro/vs/terraform>

Vagrant and Terraform are both projects from HashiCorp. Vagrant is a tool focused for managing development environments and Terraform is a tool for building infrastructure.

Terraform can describe complex sets of infrastructure that exist locally or remotely. It is focused on building and changing that infrastructure over time. The minimal aspects of virtual machine lifecycle can be reproduced in Terraform, sometimes leading to confusion with Vagrant.

Vagrant provides a number of higher level features that Terraform doesn't. Synced folders, automatic networking, HTTP tunneling, and more are features provided by Vagrant to ease development environment usage. Because Terraform is focused on infrastructure management and not development environments, these features are out of scope for that project.

The primary usage of Terraform is for managing remote resources in cloud providers such as AWS. Terraform is designed to be able to manage extremely large infrastructures that span multiple cloud providers. Vagrant is designed primarily for local development environments that use only a handful of virtual machines at most.

Vagrant is for development environments. Terraform is for more general infrastructure management.
