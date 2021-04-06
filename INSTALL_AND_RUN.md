# INSTALL AND RUN Android

## INSTALL JDK 8
> https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
    
    > java -version
    java version "1.8.0_121"

## INSTALL Gradle

    > brew install gradle
    > export PATH=$PATH:/opt/gradle/gradle-6.8.3/bin
    
## Android Studio
> https://developer.android.com/studio

    Configuration
        SDK Manager : 
            -install Android 10 (Q) 
                -Google APIs Intel x86 Atom(_64) System Image
                -Google Play Intel x86 Atom(_64) System Image
            
            -install Android 9 (Pie)
                    -Google APIs Intel x86 Atom(_64) System Image
                    -Google Play Intel x86 Atom(_64) System Image
                    
            -install Android 8 (Oreo)
                    -Google APIs Intel x86 Atom(_64) System Image
                    -Google Play Intel x86 Atom(_64) System Image
                    
         AVD Manager :
            ...
        
    
    
## PATH    
    npm install cordova-res 
    npm i -g cordova 
    npm i -g native-run 
    ionic cordova platform --list 
    cordova platform remove android
    cordova platform add android
    export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
    export ANDROID_HOME=/Users/workspace/Library/Android/sdk
    export  ANDROID_SDK_ROOT=/Users/workspace/Library/Android/sdk
    ionic cordova run android
    
    ionic cordova emulate android


