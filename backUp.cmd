@echo off
set curDir=%cd%
set /p IP="Please enter destination IP: "
echo Y | reg delete HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys
%curDir%/util/pscp -p -r %curDir%/ ubuntu@%IP%:/home/ubuntu/myhomepage
::echo %curDir%\