#! /bin/sh
sdkmanager --update
sdkmanager "build-tools;28.0.3" "platforms;android-25" "emulator" "system-images;android-25;google_apis;arm64-v8a" "platform-tools"
export ANDROID_SDK_ROOT=$ANDROID_HOME
echo "no" | avdmanager create avd -n test -k "system-images;android-25;google_apis;arm64-v8a"
#emulator64-arm -avd test -noaudio -no-boot-anim -no-window -accel off -gpu off &
export USER=0
export ENV DISPLAY=:1
apt-get update -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends xfce4 xfce4-goodies xfonts-base dbus-x11 tightvncserver expect
/usr/bin/expect <<EOF
spawn vncpasswd
expect "Password:"
send "android\r"
expect "Verify:"
send "android\r"
expect "Would you like to enter a view-only password (y/n)?"
send "n\r"
expect eof
exit
EOF
#emulator -avd test -noaudio -no-boot-anim -no-window -accel off -gpu off &
/usr/bin/supervisord