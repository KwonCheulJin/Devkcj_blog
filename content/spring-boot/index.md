---
emoji: ๐ค
title: Spring Boot Gradle war ๋ฐฐํฌ
date: '2021-11-13 14:21:00'
author: ์ดฌ์ค
tags: ๋ธ๋ก๊ทธ Java SI์์ฒด SpringBoot Gradle War TIL
categories: ์ค๋์๊ธฐ๋ก SpringBoot
---

์ค๋๋ง์ ๋จ๊ธฐ๋ ์ค๋์ ๊ธฐ๋ก
2์ฃผ๋์ VCMS ํ๋ฉด ํผ๋ธ๋ฆฌ์ฑ ์์์ผ๋ก ๋ค๋ฅธ ๊ธฐ๋ก์ ๋จ๊ธฐ์ง ๋ชปํ๊ณ  ๋์ค์ ํ์๋ฆฌํ ์ฌ์ฉ ๊ด๋ จํด์ ์ ๋ฆฌ ํด์ ๊ธ์ ๋จ๊ฒจ๋ด์ผ๊ฒ ๋ค

- ์ค๋ ๋จ๊ธธ ๊ฒ์ ํผ๋ธ๋ฆฌ์ฑ ์์์ด ๋๋ ํ ๋ด๊ฐ ์์ํ ์์๋ฌผ์ ๋ค๋ฅธ ์ฌ๋๋ค๊ณผ ๊ณต์ ํด์ ๋ณผ ์ ์๊ฒ EC2์ ์ฌ๋ฆฌ๋ ์์์ ํด์ผ ํ๋๋ฐ ์ด ๋ถ๋ถ์์ ๋ฌธ์ ๊ฐ ์๊ฒผ๋ค.
- ๋๋ ํผ๋ธ๋ฆฌ์ฑ ์์์ ์ฒ์ ํ๋ ๊ฑฐ์๋๋ฐ ๋ด๊ฐ ๊ฐ๋ฐ์ ํ๋ ์์ฅ์ด๋ผ ํ์๋ฆฌํ ํฌํ๋ฆฟ์ ์ด์ฉํด์ ํ๋ฉด ๊ตฌ์ฑ์ ํ์๋ค. ๋ฐ๋ณต๋๋ ๋ถ๋ถ์ด ๋ง๋ค๋ณด๋ fragment๋ก ์์์ ๋ง์ด ํ์๊ณ  ๊ทธ๋ฌ๋ค๋ณด๋ ์ฉ htmlํ์ผ๋ง ์ด๋ฉด ๊ทธ๋ฅ ๋ณผ ์๊ฐ ์์๋ค. ๋์ ์์๋ฌผ์ ๋ณธ ์ด์ฌ๋์ ๊ทธ๋ฅ html, css์ผ๋ก ์์ํ์ผ๋ฉด ์๋ฒ๊น์ง ๋์ธ์ผ์ ์์์ ํ๋ฐ๋ผ๋ฉฐ... ํ์๋ฉด์ ์๋ชปํ๋ค๊ณ  ํ์ ๊ฑด ์๋์ง๋ง ๋ด๊ฐ ๋ฃ๊ธฐ์ ๋ด๊ฐ ์ ๋ชปํ๋ค ๋ผ๋ ๊ฒ์ฒ๋ผ ๋ค๋ ธ๋ค... ๊ทธ๋ฅ ๋ด ๋๋์ด๊ฒ ์ง...
  ์๋ฌดํผ ์ด๋ฐ ์ฌ๊ฑด์ผ๋ก ์ธํด์ ๋ด๊ฐ ์์ํ ํ์ผ์ EC2์์ WAS๋ก ๊ตฌ๋ํ๋ ค๋ฉด jar๊ฐ ์๋ war๋ก ๋ฐฐํฌ๋ฅผ ํด์ ์๋ฒ์ ๋์์ผ ํ๋ค.

- ๊ทธ๋ ๊ฒ spring boot + tomcat์ฐ๋์ผ๋ก ์ด์ฌ๋์ด ์ฐพ์๋ณด๋ผ๊ณ  ํด์ ๊ตฌ๊ธ๋ง์ ํ๋๋ฐ ์ํ๋ ๋ต์ ์ฐพ์ ์๋ ์์๊ณ  gradle์์ warํ์ผ์ ์์ฑํด ๋ก์ปฌ์์ tomcat์ ๊ตฌ๋ํด ๋ฐฐํฌํ๋ ๋ฐฉ๋ฒ์ ์ฐพ๊ฒ ๋์ด ์์ํ ๋ด์ฉ์ ๊ธฐ๋กํ๋ค.

## 1. War ํ์ผ ์์ฑ์ ์ํ ์ค์ 

- `application.properties`์์ ์ค์ ์ ๋ณ๊ฒฝ ํด์ค๋ค.

- ์์  ์ 

  ![gradle-์์ ์ .png](gradle-์์ ์ .png)

  ์๋์ ์ฝ๋๋ฅผ ์ถ๊ฐ๋ก ๋ฃ์ด์ค๋ค.

  ```yml
  apply plugin: 'war'

  //War ์์ฑ๊ด๋ จ ์ค์ ์ ํ  ์ ์์ต๋๋ค.
  //Name ๊ณผ Version, File Name ๋ฑ์ ์ค์ ํ  ์ ์์ผ๋ฉฐ ๋ฐ๋ก
  //์ค์ ์ด ์๋ค๋ฉด ํ๋ก์ ํธ๋ช + Version ์ด ๋ถ์ด์ ์์ฑ๋ฉ๋๋ค.

  bootWar {
      archiveBaseName="prototype"
      archiveVersion="0.0.1-SNAPSHOT"
  }

  bootWar.enabled = false
  war.enabled = true

  dependencies {
      providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'
  }

  ```

- ์์  ํ

  ![gradle-์์ ํ.png](gradle-์์ ํ.png)

## 2. SpringBoot Application class ์ค์ 

- ์ธ์ฅ ํฐ์บฃ์ผ๋ก ์๋น์ค๋ฅผ ์ ๊ณตํ๊ธฐ ์ํด์๋ SpringBootServletInitializer์์(configure ๋ฉ์๋ ์ค๋ฒ ๋ผ์ด๋ฉ)์ด ๋ฐ๋ก ํ์ํ๋ค. ๊ธฐ๋ณธ ํด๋์ค์ SpringBootServletInitializer์์ ์ SpringFramework์ Servlet 3.0 ์์์ ์ฌ์ฉํ๊ณ , ์๋ธ๋ฆฟ ์ปจํ์ด๋์ ์ํด ์์๋  ๋ ์ ํ๋ฆฌ์ผ์ด์์ด ๊ตฌ์ฑ๋๋ค.

  ์ถ์ฒ:[Hailey's Daily Logs\_](https://hye0-log.tistory.com/29)

```java
package kyobobook.prototype;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PrototypeApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(PrototypeApplication.class);
    }


    public static void main(String[] args) {
        SpringApplication.run(PrototypeApplication.class, args);
    }

}

```

## 3. Gradle์์ War ํ์ผ ์์ฑ

- ์์ ๊ฐ์ด ์์ ์ด ๋๋ ํ `Gradle > build > bootWar`๋ฅผ ์คํํ๋ฉด ์๋์ ๊ฐ์ด ์์์ด ์ด๋ค์ง๊ณ  warํ์ผ์ด ํ๋ก์ ํธ build > lib ํด๋์ ์์ฑ๋๋ค.
  ![war์์ฑ.png](war์์ฑ.png)

  ![์์์์.png](์์์์.png)

  ![์์์๋ฃ.png](์์์๋ฃ.png)

### 4. ๋ก์ปฌ์์ war๋ฐฐํฌํ์ผ ์คํํ๊ธฐ

- warํ์ผ์ tomcatํด๋ > webapps์ ์ด๋์ํค๊ณ  ํฐ๋ฏธ๋์ binํด๋๋ก ์ด๋์ ํด์ ์๋ฒ๋ฅผ ์คํํ๋ค.

  ![war-tomcat.png](war-tomcat.png)

- binํด๋๋ก ์ด๋ํด์ `startup.sh, shutdown.sh`ํ์ผ์ ์ด์ฉํด์ ์๋ฒ๋ฅผ ์์ํ๊ณ  ์ข๋ฃํ๋ฉด ๋๋ค.

- ๋๋ ๋ฐ๋ก ๊ถํ์ ์ฃผ์ง ์์ ์ํ์ฌ์ ๊ถํ์ ๋ถ์ฌํ๊ณ  ์์์ ํ๋ค.

  ```zsh
  chmod u+x ./startup.sh
  chmod u+x ./shutdown.sh
  ```

  ![์๋ฒ์ ์ด.png](์๋ฒ์ ์ด.png)

- ์ด๋ ๊ฒ ํ๊ณ  ๋ก์ปฌ์๋ฒ๋ก ๋ฐฐํฌํ warํ์ผ๋ช์ผ๋ก ์ ์ํ๋ฉด ๋ฐฐํฌ๋ ํ๋ก์ ํธ์ ์ ์ ํ  ์ ์๋ค.

  ![ํ๋ก์ ํธ์ ์.png](ํ๋ก์ ํธ์ ์.png)

์ด๋ ๊ฒ ํ๋ฒ ์์์ ํด๋ณด๋๊น ๋์ค์ ๋ฐฐํฌ๊น์ง ์ด๋ป๊ฒ ์งํ๋๋์ง ๋๋ต์ ์ผ๋ก ์ ์ ์์๋ ๊ฒ ๊ฐ๋ค. springBoot ๋ด์ฅํฐ์ผ ๋๋ถ์ ์์ฒญ ํธํ๊ฒ ์์ํ๊ณ  ์ฌ์ฉํ์๋๋ฐ ์ธ์ฅํฐ์ผ์ผ๋ก ๋ฐฐํฌ๋๋ ๊ณผ์ ๋ ์๊ฒ๋ ์๊ฐ์ด์๋ค.

gradle๋ก ์์ํ๋ฉด eclipse์ IntelliJ IDEA์ ๊ฐ์ด ์ฌ์ฉํ๊ธฐ์ ํธํ๋๋ฐ ์ด์ฌ๋์ด ์ฃผ์  ์์ค ํ์ผ๋ก ๋ค์ ์์์ ํ๋ผ๊ณ  ํด์ ๋ค์ ์ ์ํ๋ ค๋ฉด ์ข ํ๋ค๊ฒ ๊ฐ์ง๋ง ์ด๋๊ฐ์ ๋ ๊ฑฐ์๋ฅผ ๋ง๋  ์๋ ์์ผ๋ ๊ทธ๋๋ ํธํ๊ฒ ์์ ํ  ์ ์์๊ฑฐ๋ผ ์๊ฐํ์

์ด๋ฒ์ฃผ๋ ๋๋ฌด ๊ณ ์ํ๋ค!!

```toc

```
