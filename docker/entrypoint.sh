#! /bin/bash

/usr/bin/supervisord &
gnome-screenshot --interactive &
cd /home/app
echo n | npm install
$ANDROID_HOME/emulator/emulator -avd test-emulator -memory 1500 -no-boot-anim -wipe-data -noaudio -no-snapshot-load -no-accel -gpu swiftshader_indirect -no-snapstorage -no-snapshot-save &
tns build android
find platforms -name *.apk | xargs npm run e2e -- --runType test --verbose --reuseDevice --ignoreDeviceController --appPath
# /bin/bash