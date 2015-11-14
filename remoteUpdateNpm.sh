#!/bin/bash
# Program:
#	User inputs his first name and last name.  Program shows his full name.
# History:
# 2015/11/14	Sean	First release
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
sudo rm ~/.ssh/known_hosts

read -p "Please input destination IP:  " IP       # 提示使用者輸入

pwd=$(pwd)
scp -o "StrictHostKeyChecking no" -prd $pwd/package.json ubuntu@${IP}:/home/ubuntu/myhomepage
ssh -t ubuntu@${IP} "cd /home/ubuntu/myhomepage; ./refreshModule.sh" 
exit 0
