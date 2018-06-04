## EVERLIGHT

**叫修机台项目**

### 基本运行与调试:
---

#### 安装 node

##### for windows
直接下载安装包：https://nodejs.org/en/

##### for mac os
```
brew install node
```
brew的安装见：https://brew.sh/

#### 安装 ionic
```
npm install -g ionic cordova
```

#### git代码
```
git clone https://git.oschina.net/deanchou/everlight.git
```
windows下需要先安装git：https://git-scm.com/

#### 安装依赖包
```
cd everlight
npm install
```

### 平台特性运行与调试:
---
*在虚拟机或真机运行时可以添加参数--livereload，实现实时调试*

#### for ios
非mac os系统此步骤会报错
```
ionic cordova platform add ios
ionic cordova run ios
```

#### for android
```
ionic cordova platform add android
ionic cordova run android
```

### 打包发布:
---
*更多关于发布的信息请参考：http://ionicframework.com/docs/intro/deploying/*  
*另可使用tools目录下打包脚本*
```
./tools/build.sh
```

#### for ios
```
ionic cordova build ios --prod --release --minifyjs --minifycss --optimizejs
```

#### for android
```
# 生成未签名apk
ionic cordova build android --prod --release --minifyjs --minifycss --optimizejs
# 生成自签名证书（不需要每次都生成）
keytool -genkey -v -keystore MJS.keystore -alias MJS -keyalg RSA -keysize 2048 -validity 10000
# 签名我们的apk
jarsigner -verbose -keystore MJS.keystore "platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" MJS

# 优化（可省略）
# zipalign -v 4 "platforms/android/build/outputs/apk/android-release-unsigned.apk" "platforms/android/build/outputs/apk/android-release.apk"
```

### 常见问题:
---

* Error: Cannot read property 'replace' of undefined  
解决方法：cd platforms/ios/cordova && npm install ios-sim

* 在WebStorm中提示cannot detect ios-sim and ios-deploy in path  
解决办法：此为WebStorm对于依赖项的检查（官方认为是bug），可以不理会。
如果一定要去除警告，可以执行:
`npm install -g ios-sim && npm install -g ios-deploy`

* 如何更改图标  
解决方法：替换*resources*根目录下的*icon.png*和*splash.png*,然后在命令行执行
`ionic cordova resources`，其中*icon.png*是logo(1024×1024)，*splash.png*是启动图（全屏那种2732×2732）。
可替代方案：
https://github.com/AlexDisler/cordova-icon 和
https://github.com/AlexDisler/cordova-splash

### 待解决问题:
---
