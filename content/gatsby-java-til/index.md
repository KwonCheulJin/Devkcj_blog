---
emoji: ๐ฆพ
title: Spring MVC๋ฅผ ์ด์ฉํ ๊ฐ๋จํ ํ์ผ์๋ก๋
date: '2021-09-28 22:13:00'
author: ์ดฌ์ค
tags: ๋ธ๋ก๊ทธ SpringMVC TIL
categories: SpringMVC
---

VCMS(Video Content Management System) ํ๋ก์ ํธ๋ฅผ ์งํํ๊ฒ ๋์ด์
์ด์ฌ๋๊ป์ Spring version 4๋ก ๋ง๋ค์ด ์ฃผ์  ๊ธฐ๋ณธํด๋๋ฅผ ์ด์ฉํด์ ๊ฐ๋จํ๊ฒ ์ถ๊ฐํด ์งํ์ ํด๋ณด์๋ค.

## 1. ํ์ผ์๋ก๋๋ฅผ ์ํ `pom.xml` ์ค์ 

- fileupload์ ํ์ํ pom.xml์ dependency๋ฅผ ์ถ๊ฐํ๋ ์์์ ํ์์ต๋๋ค.

`pom.xml`

```xml
<!-- ํ์ผ ์๋ก๋ -->
<dependency>
  <groupId>commons-fileupload</groupId>
  <artifactId>commons-fileupload</artifactId>
  <version>1.3.2</version>
</dependency>
```

## 2. `servlet-context.xml`์ `MultipartResolver` ๋ฑ๋ก

- Multipart ์ง์ ๊ธฐ๋ฅ์ ์ด์ฉํ๋ ค๋ฉด ๋จผ์  MultipartResolver๋ฅผ ์คํ๋ง ์ค์  ํ์ผ์ ๋ฑ๋กํด ์ฃผ์ด์ผ ํฉ๋๋ค
- MultipartResolver๋ Multipart ํ์์ผ๋ก ๋ฐ์ดํฐ๊ฐ ์ ์ก๋ ๊ฒฝ์ฐ, ํด๋น ๋ฐ์ดํฐ๋ฅผ ์คํ๋ง MVC์์ ์ฌ์ฉํ  ์ ์๋๋ก ๋ณํํด์ค๋๋ค.

`servlet-context.xml`

```xml
<bean id="multipartResolver" class="org.springframework.web.multipart.support.StandardServletMultipartResolver"></bean>
```

## 3. `web.xml`์ `multipart-config` ์ ์ฉ

```xml
<servlet>
  <servlet-name>web</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>
      classpath:config/spring/servlet-context.xml
    </param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
  <multipart-config>
    <location>/Users/chars/Documents/TestDir</location><!-- ์๋ก๋ ํ์ผ ์ ์ฅ๋๋ ๊ธฐ๋ณธ ๊ฒฝ๋ก -->
    <max-file-size>20971520</max-file-size> <!-- ํํ์ผ: 1mb * 20 -->
    <max-request-size>41943040</max-request-size> <!-- ํ๋ฒ์ ์ฌ๋ฌ๊ฐ์ฌ๋ฆฌ๋๋ฐ ์ ์ฒด๊ฐ 40mb -->
    <file-size-threshold>20971520</file-size-threshold> <!-- ๋์ผ๋ฉด temp์ ๋ฃ๊ณ  ์๋ก๋์ ๋ค์ด๊ฐ์ง ์๋๋ค : 20mb -->
  </multipart-config>
</servlet>
```

| ์ด๋ฆ              | ํ์   | ํ์     | ์ค๋ช                                                                                                                                                                                |
| ----------------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileSizeThreshold | int    | Optional | ์๋ก๋ ํ์ผ์ ์์๋ก ์ ์ฅํ  ๋ ํฌ๊ธฐ ์๊ณ๊ฐ์ ์ง์ ํฉ๋๋ค. ์๋ก๋ ํ์ผ์ ํฌ๊ธฐ๊ฐ ์ด ์๊ณ๊ฐ๋ณด๋ค ํฌ๋ฉด ๋์คํฌ์ ์ ์ฅ๋ฉ๋๋ค. ๊ทธ๋ ์ง ์์ผ๋ฉด ํ์ผ์ด ๋ฉ๋ชจ๋ฆฌ์ ์ ์ฅ๋ฉ๋๋ค. ํฌ๊ธฐ(๋ฐ์ดํธ)์๋๋ค. |
| location          | String | Optional | ์๋ก๋ ํ์ผ์ด ์ ์ฅ๋๋ ๋๋ ํ ๋ฆฌ ์ง์                                                                                                                                                 |
| maxFileSize       | long   | Optional | ์๋ก๋ ํ์ผ์ ์ต๋ ํฌ๊ธฐ๋ฅผ ์ง์ ํฉ๋๋ค. ํฌ๊ธฐ(๋ฐ์ดํธ)์๋๋ค.                                                                                                                           |
| maxRequestSize    | long   | Optional | ์์ฒญ์ ์ต๋ ํฌ๊ธฐ๋ฅผ ์ง์ ํฉ๋๋ค(์๋ก๋ ํ์ผ ๋ฐ ๊ธฐํ ์์ ๋ฐ์ดํฐ ๋ชจ๋ ํฌํจ). ํฌ๊ธฐ(๋ฐ์ดํธ)์๋๋ค.                                                                                       |

์์ ๊ฐ์ด ์ค์ ์ ํด์ฃผ๋ฉด ๋ฉ๋๋ค.

์ด๋ ๊ฒ ์ค์ ํ๊ธฐ ์ ์ ์ฌ๋ฌ ๋ธ๋ก๊ทธ๋ฅผ ์ฐธ์กฐํด์ ์งํํ์๋๋ฐ ์ ์ ์คํ๋ง ๋ฒ์ ์ ๋ง๊ฒ ์ค์ ํ๋ ๊ฒ์ ์ฐพ๋ ๊ฒ๋ ์ฝ์ง ์๋ค๋ ๊ฒ์ ๋๊ผ์ต๋๋ค.

## 4. `FileUploadController` ์์ฑ

`common.properties`์ file๊ฒฝ๋ก๋ฅผ ์ง์ ํด ์ฃผ์์ต๋๋ค.

```
## FilePath
file.path=/Users/chars/Documents/TestDir
```

`FileUploadController`

```java
package com.kyobobook.controller;

import java.io.File;
import java.io.IOException;
import java.util.Locale;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/sample")
@PropertySource("classpath:config/properties/common.properties")
public class FileUploadController {

    private Logger logger = LoggerFactory.getLogger(FileUploadController.class);

    // ํ์ผ ์ ์ฅํ  ์์น
    @Value("${file.path}")
    private String file_Path;

    // ํ์ผ ํผ ๋งคํ
    @RequestMapping(value = "/fileForm", method = {RequestMethod.GET, RequestMethod.POST})
    public String fileForm(Locale locale, Model model) {
        logger.info("fileForm file.path={}", file_Path);
        return "sample/upload";
    }

    // ํ์ผ ๋ฑ๋ก ๋งคํ
    @RequestMapping(value = "/fileUpload", method = RequestMethod.POST)
    public String fileUpload(@RequestParam MultipartFile file,
            RedirectAttributes redirectAttributes) throws IOException {
        logger.info("fileUpload={}", file);
        String uuid = UUID.randomUUID().toString();
        // file upload to system
        File converFile = new File(file_Path, uuid + file.getOriginalFilename());
        logger.info("fileUpload converFile={}", converFile);
        file.transferTo(converFile);

        String msg = file.getOriginalFilename() + " is saved in server db";
        redirectAttributes.addFlashAttribute("msg", msg);
        logger.info("fileUpload={}", msg);
        return "redirect:fileForm";
    }
}

```

์ปจํธ๋กค๋ฌ๋ฅผ ๋ง๋ค๊ณ  ๋์ ๊น์ํ๋์ ์คํ๋งMVC ๊ฐ์๋ฅผ ๋ฃ๊ณ ์์ด์ `@RequestMapping`์ `@GetMapping`๊ณผ `@PostMapping`์ผ๋ก ๋ช์์ ์ผ๋ก ์ง์ ํด ์ฃผ๋ ค๊ณ  ํ์์ผ๋ ์ ์ฉ์ด ๋์ง๋ฅผ ์์์ ํ์ธํด ๋ณด๋ `@GetMapping`๊ณผ `@PostMapping` ์ด๋ธํ์ด์์ Spring 5๋ถํฐ ๊ฐ๋ฅํ๋ค๋ ๊ฒ์ ์๊ฒ ๋์์ต๋๋ค. ๊ทธ๋์ `@RequestMapping`์์ `method`๋ก ๋ช์ํ์๊ณ  `fileForm`์ `GET, POST`๊ฐ ๊ฐ๋ฅํ๊ฒ ํด์ฃผ์์ต๋๋ค.

`Hosting.kr ์ค์  ํ์ด์ง`

## 5. `upload.jsp` ์์ฑ

```html
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body>
    <form action="fileUpload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" multiple /><br />
      <br />
      <button>Submit</button>
    </form>
  </body>
</html>
```

์ปจํธ๋กค๋ฌ์ ๊ฒฝ๋ก์ ๋ง์ถฐ์ ์ค์ ํด ์ฃผ๋ฉด ๋์ด๋ฉ๋๋ค.

![file-upload.gif](file-upload.gif)

๋น๋ก ์ปจํธ๋กค๋ฌ ์ฝ๋๋ ์ฌ๋ฌ ๋ธ๋ก๊ทธ๋ฅผ ๊ฒ์ํด์ ๊ฐ์ ธ์จ ์ฝ๋์ธ๋ฐ ์ด๊ณณ์ ๊ณณ์ ๋ค๋ฅด๋ค ๋ณด๋ ์ถ์ฒ๋ฅผ ๊ฐ์ ธ์ค๋ ๊ฒ์ ๊น๋นกํ์๋ค์.
๋ค์์๋ ์ถ์ฒ๋ ์ ๊ฐ์ ธ์์ ๋งํฌ๋ฅผ ๊ฑธ์ด ๋์ด์ผ๊ฒ ๋ค์.
์ด๋ ๊ฒ ๊ฐ๋จํ๊ฒ ํ์ผ์๋ก๋ ํ๋ ๊ฒ์ ํ๋๋ฐ๋ ์ค์ ํ๋ ๊ณณ์์ ํ์ฐธ์ ํด๋งค์ 3-4์๊ฐ ์ ๋ ๊ฑธ๋ฆฐ ๊ฒ ๊ฐ๋ค์.
์ด๋ฒ์๋ ํด๋์ ์ ์ฅํ๋ ๊ฒ์ผ๋ก ํ์์ง๋ง ๋ค์๋ฒ์๋ ์คํ๋ง ๋ถํธ ๋ฐ DB์ ์ ์ฅํ๋ ๊ฒ๊น์ง ํด์ ๊ตฌํํด์ ๊ธ์ ๋จ๊ฒจ๋ณด๋๋ก ํด์ผ๊ฒ ๋ค์.

```toc

```
