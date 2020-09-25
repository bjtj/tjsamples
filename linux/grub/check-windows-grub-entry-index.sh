#!/usr/bin/env bash

# https://askubuntu.com/a/913037

# WINDOWS_TITLE=`grep -i 'windows' /boot/grub/grub.cfg|cut -d"'" -f2`
WINDOWS_TITLE=$(grep -i 'windows' /boot/grub/grub.cfg|grep "^[^#;]"|cut -d"'" -f2)
echo $WINDOWS_TITLE

# NOT WORKING
# ===========
#
# https://askubuntu.com/a/18186
#
# WINDOWS_ENTRY=`grep menuentry /boot/grub/grub.cfg  | grep --line-number Windows`
# MENU_NUMBER=$(( `echo $WINDOWS_ENTRY | sed -e "s/:.*//"` - 1 ))
# echo $MENU_NUMBER
