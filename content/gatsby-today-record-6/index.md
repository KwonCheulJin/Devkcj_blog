---
emoji: π­
title: μ€λμ κΈ°λ‘ - DBλ ν¨μ€! μ΄μ λ νλ‘ν νμ νλ©΄κ΅¬μ± μμ
date: '2021-10-27 20:07:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ TIL DB SIμμ²΄ gulp nodejs nvm
categories: μ€λμκΈ°λ‘
---

μ€λμ μ΄μ¬λμ΄ ν΄λ³΄λΌκ³  νλ DBκ΄λ ¨ μλ¬΄λ₯Ό λ§λ¬΄λ¦¬ μ§κ³  λ΄μΌλΆν°λ νλ‘ν νμ νλ©΄ κ°λ° νλ μλ¬΄λ‘ μ ννλ€.
DBμ€κ³ κ΄λ ¨ μ΄μ¬λκ»μ μ£Όμ¨λ λ―Έμμ΄ λ¬΄μΈκ° λ§λνκ² λλ¬λ€κ³  νκΈ°μλ λΆμ‘±νκ² λ§μμ§λ§ κ·Έλλ νλ¦μ κ°μ‘λλ°λ λμμ΄ λμλ κ² κ°λ€.
νμ΄λΈμ λ§λ€λ μΏΌλ¦¬λ₯Ό μμ±νλ κ²μ λμ€μ λ κ³ μν΄μΌ ν  κ² κ°μ§λ§...

## μ»μ κ²μ κΈ°λ‘μΌλ‘!

- λλ DBκ΄κ³λ₯Ό μκ° ν  λ JOIN μΏΌλ¦¬κ° λ§μΌλ©΄ μ±λ₯μμ λ¬Έμ κ° λ§μ κ±°λΌκ³  μκ°νλ€.

- νμ§λ§ μ΄μ¬λμ΄ ν΄μ£Όμ  λ§μ μ¬μ©μκ° λ§μ§ μμ μ΄λλ―Όμμ€νμ κ²½μ°μλ 3κ°μ νμ΄λΈμ JOINν΄λ μ±λ₯μμ ν¬κ² λλ μ΄κ° λμ§ μλλ€κ³  νλ€.

- μκ°μ΄ μ’ μ§λμ DBμ λ°μ΄ν°κ° λ§μ΄ μμμ λλ λ§μ΄κ·Έλ μ΄μμ κ³ λ €ν΄λ΄μΌ κ² μ§λ§ νμ¬λ ν¬κ² κ³ λ €ν΄μΌ ν  μ¬ν­μ μλλ€.

- κ³΅ν΅μ½λλ λ©λ΄νμ΄λΈμ κ²½μ°λ ν λ² λ±λ‘νλ©΄ λ°λμ§ μλ νμ΄λΈμ΄λ€.

- λ°μ΄ν°κ° κ³μ μ μ₯λλ νμ΄λΈ κ°μ κ²½μ° μ΄λ€ λ°©λ²μΌλ‘ μ΅μ  λ°μ΄ν°λ₯Ό λ³΄μ¬μ€ μ κ³ λ―Όν΄μΌλλ€. λ±λ±

- λ§μ κ±Έ μλ € μ£Όμ¨μ§λ§ λ΄κ° κΈ°μ΅ν΄μ κΈ°λ‘ν΄λ¨λ λ΄μ©μ μ΄μ λ...

- λμ€μ νμ΄λΈ λ° μΏΌλ¦¬ μμ±ν  λ νμ¬ μμ€νμ νλ¦μ μ κΈ°μ΅ν΄λ¬μΌκ² λ€.

## νλ©΄ κ°λ° μ  μ΄λλ―Ό ννλ¦Ώ νμΈ!

- νλ©΄κ°λ° μ μ νμ¬ FOκ΄λ ¨ κ°λ°μκ° μμ΄μ νλ‘ν νμμ μ΄λλ―Ό ννλ¦Ώμ κ΅¬λ§€ν΄μ μμ΄μ΄νλ μμ λ§κ² ννλ¦Ώμ μμ ν΄μ κ°λ°μ νλ€.

- μ€λμ ννλ¦Ώμ μ¬μ© μ μ ννλ¦Ώμ setupνλ λ°©λ²μ ννλ¦Ώ Documentλ₯Ό λ³΄κ³  μ€ν ν΄ λ³΄μλλ° μ΄ ννλ¦Ώμ gulp.jsλ₯Ό νμ©ν΄μ μ€νλκ² λμ΄μμλ€.

- gulp.jsκ° μ²μμ΄μ΄μ μ°¨κ·Όμ°¨κ·Ό μ€νν΄ λ³΄κΈ°λ‘ νμλ€.

  1. nodejsμ gulp μ€μΉλ₯Ό νΈνκ² νκΈ° μν΄μ windowsμμ μννΈμ¨μ΄ μ€μΉν΄μ λ€μ΄λ°μλ€
  2. [chocolatey](https://community.chocolatey.org/courses/installation/installing?method=installing-chocolatey)λ₯Ό BasicμΌλ‘ PowerShellμ μ€μΉλ₯Ό νμλ€.
  3. chocolateyλ μ¬μ©λ²μ΄ μ΄λ ΅μ§ μμμ PowerShellμμ nodejsμ yarnμ μ€μΉνλ€.

  ```bash
  choco install nodejs
  choco install yarn
  ```

  4. κ·Έλ¦¬κ³  windowsμμλ nvmμ μ¬μ©νλ €λ©΄ μ§μ  μ€μΉλ₯Ό ν΄μ€μΌ μ¬μ©μ΄ κ°λ₯νλ€. κ·Έλμ κ΅¬κΈλ§μ κ²μν΄μ [Heropy](https://heropy.blog/2018/02/17/node-js-install/)λμ λΈλ‘κ·Έμμ μ λ³΄λ₯Ό μ»μ΄μ μ€μΉν΄μ£Όμλ€.

- μ΄λ κ² μνμ ν΄μ£Όκ³  μ΄μ  λ³Έκ²©μ μΌλ‘ ννλ¦Ών΄λμ κ°μ gulpλ₯Ό μ¬μ©νκΈ° μν΄μ npm installμ ν΄μ node_modulesλ₯Ό λ€μ΄λ°μλ€.
  ```bash
  npm install
  ```

## νμ§λ§ λ΄ λ§μμ²λΌ λλ κ²μ μμλ€.

- μ²μλΆν° μλ¬ λ°μ!!!

```bash
  PS C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin> npm install
npm WARN deprecated ini@1.3.5: Please update to ini >=1.3.6 to avoid a prototype pollution issue
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated har-validator@5.1.3: this library is no longer supported
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
npm WARN deprecated popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
npm WARN deprecated core-js@2.6.11: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
npm ERR! code 1
npm ERR! path C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\node-sass
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node scripts/build.js
npm ERR! Building: C:\Program Files\nodejs\node.exe C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\node-gyp\bin\node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp verb cli [
npm ERR! gyp verb cli   'C:\\Program Files\\nodejs\\node.exe',
npm ERR! gyp verb cli   'C:\\Users\\username\\Downloads\\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\\UBold_v5.2.0\\Admin\\node_modules\\node-gyp\\bin\\node-gyp.js',
npm ERR! gyp verb cli   'rebuild',
npm ERR! gyp verb cli   '--verbose',
npm ERR! gyp verb cli   '--libsass_ext=',
npm ERR! gyp verb cli   '--libsass_cflags=',
npm ERR! gyp verb cli   '--libsass_ldflags=',
npm ERR! gyp verb cli   '--libsass_library='
npm ERR! gyp verb cli ]
npm ERR! gyp info using node-gyp@3.8.0
npm ERR! gyp info using node@17.0.1 | win32 | x64
npm ERR! gyp verb command rebuild []
npm ERR! gyp verb command clean []
npm ERR! gyp verb clean removing "build" directory
npm ERR! gyp verb command configure []
npm ERR! gyp verb check python checking for Python executable "python2" in the PATH
npm ERR! gyp verb which failed Error: not found: python2
npm ERR! gyp verb which failed     at getNotFoundError (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:13:12)
npm ERR! gyp verb which failed     at F (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:68:19)
npm ERR! gyp verb which failed     at E (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:80:29)
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:89:16
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\index.js:42:5
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb which failed     at FSReqCallback.oncomplete (node:fs:198:21)
npm ERR! gyp verb which failed  python2 Error: not found: python2
npm ERR! gyp verb which failed     at getNotFoundError (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:13:12)
npm ERR! gyp verb which failed     at F (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:68:19)
npm ERR! gyp verb which failed     at E (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:80:29)
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:89:16
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\index.js:42:5
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb which failed     at FSReqCallback.oncomplete (node:fs:198:21) {
npm ERR! gyp verb which failed   code: 'ENOENT'
npm ERR! gyp verb which failed }
npm ERR! gyp verb check python checking for Python executable "python" in the PATH
npm ERR! gyp verb which failed Error: not found: python
npm ERR! gyp verb which failed     at getNotFoundError (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:13:12)
npm ERR! gyp verb which failed     at F (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:68:19)
npm ERR! gyp verb which failed     at E (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:80:29)
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:89:16
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\index.js:42:5
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb which failed     at FSReqCallback.oncomplete (node:fs:198:21)
npm ERR! gyp verb which failed  python Error: not found: python
npm ERR! gyp verb which failed     at getNotFoundError (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:13:12)
npm ERR! gyp verb which failed     at F (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:68:19)
npm ERR! gyp verb which failed     at E (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:80:29)
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\which\which.js:89:16
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\index.js:42:5
npm ERR! gyp verb which failed     at C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb which failed     at FSReqCallback.oncomplete (node:fs:198:21) {
npm ERR! gyp verb which failed   code: 'ENOENT'
npm ERR! gyp verb which failed }
npm ERR! gyp verb could not find "python". checking python launcher
npm ERR! gyp verb could not find "python". guessing location
npm ERR! gyp verb ensuring that file exists: C:\Python27\python.exe
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
npm ERR! gyp ERR! stack     at PythonFinder.failNoPython (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\node-gyp\lib\configure.js:484:19)
npm ERR! gyp ERR! stack     at PythonFinder.<anonymous> (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\node-gyp\lib\configure.js:509:16)
npm ERR! gyp ERR! stack     at callback (C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\graceful-fs\polyfills.js:299:20)
npm ERR! gyp ERR! stack     at FSReqCallback.oncomplete (node:fs:198:21)
npm ERR! gyp ERR! System Windows_NT 10.0.19043
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Users\\username\\Downloads\\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\\UBold_v5.2.0\\Admin\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
npm ERR! gyp ERR! cwd C:\Users\username\Downloads\themeforest-BiWFCoJT-ubold-responsive-web-app-kit\UBold_v5.2.0\Admin\node_modules\node-sass
npm ERR! gyp ERR! node -v v17.0.1
npm ERR! gyp ERR! node-gyp -v v3.8.0
npm ERR! gyp ERR! not ok
npm ERR! Build failed with error code: 1
```

- μ¬κΈ°μ λ³΄μΈ λ¨μ΄λ pythonμ΄μλ€. κ·Έλμ ν΄λΉ μλ¬λ₯Ό κ²μν΄ λ³΄λκΉ [node-sass](https://github.com/JeremyEnglert/JointsWP/issues/317)κ΄λ ¨ μλ¬κ° μμ΄μ μ΄κ±°λ₯Ό μ°Έμ‘°ν΄μ ν΄κ²°ν΄ λ³΄λ €κ³  νμλ€.

```bash
npm install --global windows-build-tools
npm install --global node-gyp
```

- μ λκ°μ λͺλ Ήμ΄λ₯Ό μλ ₯νλ©΄ ν΄κ²°λλ€κ³  νμ¬μ μλλ₯Ό ν΄λ³΄μλ€.

```bash
PS C:\Windows\System32> npm install --gplobal windows-build-tools
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated windows-build-tools@5.2.2: Node.js now includes build tools for Windows. You probably no longer need this tool. See https://github.com/felixrieseberg/windows-build-tools for details.
npm ERR! code 3221225786
npm ERR! path C:\Windows\System32\node_modules\windows-build-tools
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node ./dist/index.js
Downloading python-2.7.15.amd64.msi
npm ERR! [>                                            ] 0.0% (0 B/s)
npm ERR! Downloaded python-2.7.15.amd64.msi. Saved to C:\Users\mobd_κΆμ² μ§\.windows-build-tools\python-2.7.15.amd64.msi.
Downloading vs_BuildTools.exe
npm ERR! [>                                            ] 0.0% (0 B/s)
npm ERR! Downloaded vs_BuildTools.exe. Saved to C:\Users\mobd_κΆμ² μ§\.windows-build-tools\vs_BuildTools.exe.
npm ERR!
npm ERR! Starting installation...
npm ERR! Launched installers, now waiting for them to finish.
npm ERR! This will likely take some time - please be patient!
npm ERR!
npm ERR! Status from the installers:
---------- Visual Studio Build Tools ----------
npm ERR! Still waiting for installer log file...
```

- λ¨Όμ  `npm install --global node-gyp`μ ν° λ¬Έμ μμ΄ μ€μΉκ° λμμ§λ§ `npm install --global windows-build-tools` λͺλ Ήμ΄λ₯Ό μ€ννλ©΄ μ°κ²°μ λμλ€κ³  λ¨λλ° κ·Έ λ€μλ 20λΆμ λλ₯Ό κΈ°λ€λ €λ μ§νμ΄ λμ§μμμ ν¬κΈ°λ₯Ό νκ³  λ€λ₯Έ λ°©λ²μ μλν΄ λ³΄κΈ°λ‘ νλ€.

  ![node_modules_not_found.jpeg](node_modules_not_found.jpeg)

- λ€μ μ²μμΌλ‘ λμκ°μ λ€λ₯Έ λ¬Έμ μ μ μ°Ύμλ³΄κΈ°λ‘ νλ€. κ·Έ λ€μμΌλ‘ λ³΄μΈκ²μ΄ node λ²μ μ΄μλ€. λλ μ²μμλ node μ΅μ λ²μ μ μ€μΉν΄μ 17λ²μ μΌλ‘ μ€ννμλλ° κ²μκ³Όμ μμ node-sassμλ¬κ° λ²μ μ΄ μλ§μμ μλ¬κ° λλ€λ κ²μ λ³΄κ³  14λ²μ μΌλ‘ λ€μ΄κ·Έλ μ΄λ ν΄μ€¬λ€. μ΄ κ³Όμ μμ λ λ€λ₯Έ μλ¬λ₯Ό λ§λκ² λλ€.

  ![nvmκ²½λ‘_νκΈμλ¬.jpeg](nvmκ²½λ‘_νκΈμλ¬.jpeg)

- μ μλ¬λ `nvm install 14` λ²μ μΌλ‘ λ€μ΄κ·Έλ μ΄λ νλ μμμ΄μλλ° μ²μ μ€μλ λ΄κ° λ²μ μ κ΄λ ¨ν΄μ `14.18.1` λ²μ μ μ λλ‘ μ μ΄μ£Όμ§ μμλ λΆλΆμ΄ κ³μ μ€ν¨λ₯Ό νμλ€. κ·Έ λ€μ λ€μ λ²μ μ μ λλ‘ μ μλλ°λ μλκΈΈλ λ¬Έμ μ μ μ°Ύμλ³΄μλλ° `nvm_setup`μ΄ μ€μΉλ κ²½λ‘μ ν΄λμ΄λ¦μ΄ λμ νκΈμ΄λ¦μΌλ‘ λμ΄μμ΄μ κ²½λ‘μλ¬κ° λλ κ±°μλ€.

- κ·Έλμ `nvm root`λ₯Ό λ³κ²½ν΄μ£Όλ μμμ νμλ€. μλμ μ¬μ§μ²λΌ κ²½λ‘λ₯Ό λ³κ²½ν΄μ£Όλ `node version`μ΄ μ λ³κ²½μ΄ λμλ€.

  ![nvm_root_modify.jpeg](nvm_root_modify.jpeg)

- μμ²λΌ λ³κ²½ν΄μ£Όκ³  λ€μ `npm install`μ ν΄μ£Όκ³  `node_modules`ν΄λκ° μ μμ±λ κ²μ νμΈνκ³  `gulp`λ₯Ό μ€νν΄λ³΄μλ€.

  ![node_version_different.jpeg](node_version_different.jpeg)

- μλ¬λ§ μ λ³΄λ©΄ μ¬μ΄ λ¬Έμ μλλ° μμ΄λ₯Ό μ λͺ» ν΄μν΄μ μλ±ν λΆλΆμ μμ νλ €κ³  μ½μ§μ νλ€... λ¬Έμ λ `node versionμ 11.xμ μ°Ύμ μ μλ€`λΌλ κ±΄λ° κ²°λ‘ μ nodeλ²μ μ 11.xλ‘ λ°κΎΈλ©΄ ν΄κ²°λλ κ±°μλ€.

  ![node_version_11.jpeg](node_version_11.jpeg)

- λ²μ μ λ€μ λ€μ΄κ·Έλ μ΄λν΄μ£Όκ³ λμ μ΄μ  `node_modules`λ₯Ό λ€μ μ­μ νκ³  `npm install`μ μ§νν ν `gulp`λ₯Ό μ€νν΄λ³΄μλ€.

  ![gulp_success.jpeg](gulp_success.jpeg)

  ![gulp_server.jpeg](gulp_server.jpeg)

- νλ£¨μ’μΌ μλ¬λ₯Ό ν΄κ²°νκ³  κ²°κ΅­μλ `gulp`μ€νμ μ±κ³΅νμλ€!

- μ½μ§μ ν λ² νκ³  λμ λλ μκ°μ μλ¬μ½λλ₯Ό μμΈν λ³΄λκ² μ€μνλ€λ κ±°μλ€.

- μκ°λ³΄λ€ κ·Έ μμμ λ€ μ»μ μ μλ κ±΄λ° λ΄ λμ λ³΄μ΄λ κ²λ§ μ°ΎμΌλ € νλ€λ³΄λ λΉλΉλμλ κ² κ°λ€. κ·Έλλ ν΄κ²°ν΄μ λΏλ―νλ€.

- λ΄μΌ νλ©΄κ°λ°μ μ ν΄λ΄μΌκ² λ€!

```toc

```
