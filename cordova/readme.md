第一次安装npm run add

然后cordova plugin add cordova-plugin-diagnostic用这个命令，后面插件名替换掉，安装 "cordova-plugin-android-permissions" "cordova-plugin-device" "cordova-plugin-file" "cordova-plugin-file-opener2" "cordova-plugin-file-transfer" "cordova.plugins.diagnostic" 这几个插件，版本不用在意

config.xml 里面 <!-- <config-file target="AndroidManifest.xml" parent="/manifest">
            <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
            <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
            <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />
        </config-file> --> 这个代码第一次需要打开，保证cordova\platforms\android\app\src\main\AndroidManifest.xml 这个里面有这个几个uses-permission，然后再注释掉，再进行打包，后续一直处于注释状态就可以了
