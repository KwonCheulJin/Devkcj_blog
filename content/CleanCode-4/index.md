---
emoji: π
title: μ λ‘λ² μ΄μ€-νλ¬νκΆ ν΄λ¦°μ½λ(Chapter.5)
date: '2022-01-08 19:08:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java CleanCode TIL
categories: CleanCode
---

# Chapter 5 - νμ λ§μΆκΈ°

## μ½λμ κ°λμ±μ νμμ μΈ ν¬λ©§ν

## 01. ν¬λ§·νμ΄ μ€μν μ΄μ 

```java
public void horriblyFormattedMethod() {
  System.out.println("First line");
      System.out.println("Second line");
    System.out.println("Third line");
  for (int i = 0; i <3; i++)
  System.out.println("number " + i);
}
```

- μμ κ°μ΄ νμμ΄ λ§μΆ°μ Έ μμ§ μμ μ½λλ₯Ό λ³΄λ©΄ μ½λλ₯Ό μ΄ν΄νκΈ° λν΄ν κ²½μ°κ° μκΈ΄λ€.
- μμ μμ λ λ¨μνμ§λ§ μμ²­ κΈ΄ λ¬Έμ₯μ λ§€μλλΌλ©΄ μ΄λ¨κΉ?

```java
public void horriblyFormattedMethod() {
  System.out.println("First line");
  System.out.println("Second line");
  System.out.println("Third line");
  for (int i = 0; i <3; i++) {
    System.out.println("number " + i);
  }
}
```

### κ°λμ±μ μ’κ² νκΈ° μν΄μ ν¬λ§·νμ΄ μ€μνλ€.

- μ½λλ₯Ό μμνκ² μ½μ΄λκ° μ μλ€.
- μλ§μΆμ΄μ²λΌ λ³΄μ΄μ§ μλλ€.
- ν¬λ§·νμΌλ‘ μΈν΄ μ½λλ₯Ό μλͺ»ν΄μν΄ λ²κ·Έλ₯Ό λ°μν  μνμ μ€μΈλ€.

## 02. ν΄λ¦°μ½λ ν¬λ§·ν

### μ μ ν κΈΈμ΄ μ μ§νλκ² μ’λ€.

#### 200λΌμΈμμ 500λΌμΈ μ΄νλ‘ μ μ§νλκ² μ’λ€.

- μ½λ κΈΈμ΄λ₯Ό 200μ€ μ λλ‘ μ ννλ κ²μ λ°λμ μ§ν¬ μκ²©ν κ·μΉμ μλμ§λ§, μΌλ°μ μΌλ‘ ν° νμΌ λ³΄λ€λ μμ νμΌμ΄ μ΄ν΄νκΈ° μ½λ€.
  - νμμμλ λλΆλΆμ μ½λλ€λ 200λΌμΈ μ λλ₯Ό μ μ§νλ€κ³  νλ€.
- μ½λ κΈΈμ΄κ° 200λΌμΈμ λμ΄κ°λ€λ©΄, ν΄λμ€κ° μ¬λ¬ κ°μ μΌμ νκ³  μμ μ μλ€.
  - SRP(Single Responbility Principle - λ¨μΌ μ±μ μμΉ)μλ°° νμ κ°λ₯μ±μ΄ ν¬λ€.

### λ°μ ν κ°λμ μλ‘ κ°κΉμ΄ λλ€.

```java
package fitnesse.wikitext.widgets;

import java.util.regex.*;

public class BoldWidget extends ParentWidget {
  public static final String REGEXP = "'''.+?'''";
  private static final Pattern pattern = Pattern.compile("'''(.+?)'''", Pattern.MULTILINE + Pattern.DOTALL);

  public BoldWidget(ParentWidget parent, String text) throws Exception {
    super(parent);
    Matcher match = pattern.matcher(text);
    match.find();
    addChildWidgets(match.group(1));
  }

  public String render() throws Exception {
    StringBuffer html = new StringBuffer("<b>");
    html.append(childHtml()).append("</b>");
    return html.toString();
  }
}
```

- ν λ¬Άμμ μκ²°λ μκ° νλλ₯Ό νννκΈ° λλ¬Έμ κ°λμ λΉ νμΌλ‘ λΆλ¦¬νλ€.
- λ³μλ μ¬μ©λλ μμΉμμ μ΅λν κ°κΉμ΄ μ μΈνλ€.

## 03. Java Class Declarations

![javaclassdeclarations.png](javaclassdeclarations.png)

### Reference From [https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852](https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852)

### Class λ΄λΆ μ½λ μμ

1. static λ³μ
   - public -> prorected -> package level -> private μμ
2. instance λ³μ
   - public -> prorected -> package level -> private μμ
3. μμ±μ
4. λ©μλ
   - public λ©μλμμ νΈμΆλλ private λ©μλλ κ·Έ μλμ λλ€. κ°λμ± μμ£Όλ‘ κ·Έλ£Ήν

```java
/*
 * Copyright 2000-2021 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 package java.blah;

 import java.blah.blahby.BlahBlah;

 /**
 *
 * Class description goes here.
 *
 * @author chars
 * @version 1.0.0
 *
**/
public class Blah extends SomeClass {

  public static int classVar1;

  private static Object classVar2;

  public Object instanceVar1;

  protected int instanceVar2;

  private Object[] instanceVar3;

  public Blah() {
    // ...implementation goes here...
  }

  public void doSomething() {
    // ...implementation goes here...
  }

  public void doSomethingElse(Object someParam) {
    // ...implementation goes here...
  }
}
```

## 04. Team Coding Convention

### νμ μ½λ© μ€νμΌμ κ΄ν μ½μ

### κ°λ° μΈμ΄μ μ»¨λ²€μμ΄ μ°μ μ΄μ§λ§, μ λ§€ν λΆλΆμ ν μ»¨λ²€μμ λ°λ₯Έλ€.

`MySQL Convention`

- μ»¬λΌλͺμ snake_caseλ‘ λ€μ΄λ°νλ€.

`Team Convention`

- enum νμμΌλ‘ μ¬μ©νλ varchar νμμ κ²½μ° μ»¬λΌλͺμ \_typeμΌλ‘ λλλλ‘ λ€μ΄λ° νλ€.

### μ°Έκ³ ν  λ§ν μ»¨λ²€μ

<h3 style="text-align: center;"> Google java Style Guide </h3>
<h3 style="text-align: center;"><a href="https://google.github.io/styleguide/javaguide.html" > https://google.github.io/styleguide/javaguide.html </a></h3>
<h3 style="text-align: center;"> Naver Hackday Java Convention </h3>
<h3 style="text-align: center;"><a href="https://naver.github.io/hackday-conventions-java/" > https://naver.github.io/hackday-conventions-java/ </a></h3>

```toc

```
