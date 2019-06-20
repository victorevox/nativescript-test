#FROM "thyrlian/android-sdk"
FROM "thyrlian/android-sdk-vnc"

#RUN apt-get update -y && \
#    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends xfce4 xfce4-goodies xfonts-base dbus-x11 tightvncserver expect
# ENV USER=0
#ENV ENV DISPLAY=:1
#COPY vncpass.sh /usr/bin    
#RUN chmod +x /usr/bin/vncpass.sh && /usr/bin/vncpass.sh

RUN sdkmanager --update && \
    sdkmanager \
    "build-tools;28.0.3" \
    "emulator" \
    "platforms;android-28" \
    # "extras;m2repository;com;android;support;constraint;constraint-layout;1.0.2" \
    "extras;google;auto" \
    # "extras;google;instantapps" \
    # "extras;google;webdriver" \
    # "extras;google;market_licensing" \
    "extras;google;m2repository" \
    "system-images;android-25;google_apis;x86_64" \
    "extras;google;google_play_services" \
    # "system-images;android-25;google_apis;arm64-v8a" \
    # "system-images;android-25;default;x86_64" \
    "platform-tools" && \
    export ANDROID_SDK_ROOT=$ANDROID_HOME
RUN echo "Creating AVD's" && \
    # echo "no" | avdmanager create avd -n test-arm -k "system-images;android-25;google_apis;arm64-v8a" && \
    # echo "no" | avdmanager create avd -n test-d-64 -k "system-images;android-25;default;x86_64" && \
    echo "no" | avdmanager create avd -n test-emulator -k "system-images;android-25;google_apis;x86_64"

# RUN $ANDROID_HOME/emulator/emulator -avd test-g-64 -noaudio -no-boot-anim -accel off -gpu swiftshader_indirect
# COPY supervisord_vncserver.conf /etc/supervisor/conf.d/
#emulator -avd test -noaudio -no-boot-anim -no-window -accel off -gpu off &
#CMD [ "/usr/bin/supervisord" ]
# CMD [ "/bin/bash" ]
RUN apt-get update && apt-get install --no-install-recommends \ 
    curl gnome-screenshot -y && \
    apt-get autoremove -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
ENV NODE_VERSION v8.11.2
ENV NVM_DIR /root/.nvm
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"
ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH
    # nvm install v8.11.2 && \
    # nodejs npm -y && \
RUN echo npm --version && \ 
    npm install -g npm && \
    echo npm --version
RUN npm config set user 0 && \
    npm config set unsafe-perm true
RUN /bin/bash -c "echo \"n\" | npm install -g nativescript@5.4"  && \
    /bin/bash -c "npm install -g appium@1.13.0"
RUN mkdir /home/app
WORKDIR /home/app
ENV ENV DISPLAY=:1
COPY entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh
# WORKDIR /home/app
CMD ["/usr/bin/entrypoint.sh"]
# CMD [ "/bin/bash" ]