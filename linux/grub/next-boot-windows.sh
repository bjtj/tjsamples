#!/usr/bin/env bash

# https://askubuntu.com/a/913037

WINDOWS_TITLE=$(grep -i 'windows' /boot/grub/grub.cfg|grep "^[^#;]"|cut -d"'" -f2)
sudo grub-reboot "$WINDOWS_TITLE"
echo "Your computer will reboot on ${WINDOWS_TITLE} in 3 seconds, press Ctrl+C if you want to abord it"
sleep 3 && sudo reboot
