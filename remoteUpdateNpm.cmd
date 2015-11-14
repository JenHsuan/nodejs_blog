@echo off
set curDir=%cd%
set /p IP="Please enter destination IP: "
@echo Y | reg delete HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys
@echo Yes | "%curDir%/util/pscp" %curDir%/package.json ubuntu@%IP%:/home/ubuntu/myhomepage
%curDir%/util/cwRsync_5.4.1_x86_Free/ssh -t ubuntu@%IP% "cd /home/ubuntu/myhomepage; ./refreshModule.sh" 
::echo %curDir%\