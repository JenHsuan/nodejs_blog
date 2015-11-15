:: Program:
::	back up homepage folder to server side
:: History:
:: 2015/11/07	Sean	First release

@echo off
set curDir=%cd%
set /p IP="Please enter destination IP: "
@echo Y | reg delete HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys

::back up files to server
@echo Yes | "%curDir%/util/pscp" -p -r %curDir%/ ubuntu@%IP%:/home/ubuntu/myhomepage
::echo %curDir%\