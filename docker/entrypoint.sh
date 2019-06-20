#! /bin/bash

/usr/bin/supervisord &
$ANDROID_HOME/emulator/emulator -avd test-emulator -memory 1500 -no-boot-anim -wipe-data -noaudio -no-snapshot-load -no-accel -gpu swiftshader_indirect -no-snapstorage -no-snapshot-save &
gnome-screenshot --interactive &
cd /home/app
echo n | npm install
tns build android
find platforms -name *.apk | xargs npm run e2e -- --runType test --verbose --reuseDevice --appPath
# /bin/bash