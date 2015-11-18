#!/bin/bash
# Program:
#	back up homepage folder to server side
# History:
# 2015/11/07	Sean	First release
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
sudo rm ~/.ssh/known_hosts

#read -p "Please input destination name: " userName      # 提示使用者輸入
read -p "Please input destination IP:  " IP       # 提示使用者輸入

pwd=$(pwd)
#back up files to server
scp -o "StrictHostKeyChecking no" -prd $pwd/. ubuntu@192.168.158.140:/home/ubuntu/myhomepage 
exit 0
