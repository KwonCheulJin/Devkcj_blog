---
emoji: ๐ค๐ป
title: TDD ์ค์ฒ๋ฒ๊ณผ ๋๊ตฌ ์ฑ์ ํ์ฉํ TDD์ต์ํด์ง๊ธฐ (CHAPTER.2-1)
date: '2021-12-27 20:46:00'
author: ์ดฌ์ค
tags: ๋ธ๋ก๊ทธ Java TDD JUnit TIL
categories: TDD JUnit
---

# github link - [TDD_practice](https://github.com/KwonCheulJin/TDD_practice)

# Chapter 2 - JUnit๊ณผ Hamcrest

## - ์ฒดํฌ๋ฆฌ์คํธ

- <input type="checkbox" checked/> **ํ์คํธ ํฝ์ค์ฒ์ ๊ฐ๋**
- <input type="checkbox" checked/> **JUnit 3**
  - ๋จ์ ๋ฌธ
  - ํ์คํธ ์ค์ํธ
- <input type="checkbox"/> **JUnit 4**
  - @Test
  - @BeforeClass, @AfterClass, @Before, @After
  - ์์ธ์ฒ๋ฆฌ ํ์คํธ
  - ์๊ฐ ์ ํ ํ์คํธ
  - @Runwith
  - @SuiteClasses
  - [**๊ณ ๊ธ ๊ธฐ๋ฅ ์๊ฐ**]
    - ํ๋ผ๋ฏธํฐํ๋ ํ์คํธ
    - Rule
    - Theory
- <input type="checkbox"/> **Hamcrest**

## - JUnit

์๋ฆญ ๊ฐ๋ง์ ์ผํธ ๋ฐฑ์ด ํ์์ํจ JUnit์ ์  ์ธ๊ณ์ ์ผ๋ก ๊ฐ์ฅ ๋๋ฆฌ ์ฌ์ฉ๋๋ Java ๋จ์ ํ์คํธ ํ๋ ์ ์ํฌ๋ค.<br>
TDD์ ๊ทผ๊ฐ์ด ๋๋ ํ๋ ์์ํฌ์ด๋ฉฐ, ์์ xUnit ์๋ฆฌ์ฆ๋ผ๊ณ  ๋ถ๋ฆฌ๋ ๋ค์ํ ๋จ์ ํ์คํธ ํ๋ ์์ํฌ๋ค์ ๊ธฐ์์ด ๋๋ ํ๋ ์์ํฌ๋ค.

### - JUnit์ด ๊ธฐ๋ณธ์ ์ผ๋ก ์ ๊ณตํ๋ ๊ธฐ๋ฅ

- ํ์คํธ ๊ฒฐ๊ณผ๊ฐ ์์๊ณผ ๊ฐ์์ง๋ฅผ ํ๋ณํด์ฃผ๋ ๋จ์ ๋ฌธ(assertions)
- ์ฌ๋ฌ ํ์คํธ์์ ๊ณต์ฉ์ผ๋ก ์ฌ์ฉํ  ์ ์๋ ํ์คํธ ํฝ์ค์ฒ(test fixture)
- ํ์คํธ ์์์ ์ํํ  ์ ์๊ฒ ํด์ฃผ๋ ํ์คํธ ๋ฌ๋(test runner)

## - ํ์คํธ ํฝ์ค์ฒ(ํ์คํธ ๊ธฐ๋ฐํ๊ฒฝ ๋๋ ํ์คํธ๋ฅผ ์ํ ๊ตฌ์กฐ๋ฌผ)

์ผ๋ฐ์ ์ผ๋ก ์ํํธ์จ์ด ํ์คํธ์์ ์ด์ผ๊ธฐํ๋ 'ํ์คํธ ํฝ์ค์ฒ'๋ ํ์คํธ๋ฅผ ๋ฐ๋ณต์ ์ผ๋ก ์ํํ  ์ ์๊ฒ ๋์์ฃผ๊ณ  ๋งค๋ฒ ๋์ผํ ๊ฒฐ๊ณผ๋ฅผ ์ป์ ์ ์๊ฒ ๋์์ฃผ๋ `'๊ธฐ๋ฐ์ด ๋๋ ์ํ๋ ํ๊ฒฝ'`์ ์๋ฏธํ๋ค.(`์ผ๊ด๋ ํ์คํธ ์คํํ๊ฒฝ ๋๋ ํ์คํธ ์ปจํ์คํธ`๋ผ ๋ถ๋ฅด๊ธฐ๋ ํ๋ค.)<br>
1์ฅ ์์ ์์ ์ฌ์ฉํ setUp์ด๋ tearDown ๋ฉ์๋๋ ํ์คํธ ํฝ์ค์ฒ๋ฅผ ๋ง๋ค๊ณ , ์ ๋ฆฌํ๋ ์์์ ์ํํ๋ ๋ฉ์๋์ธ๋ฐ, ์ด๋ฐ ๋ฉ์๋๋ฅผ ํ์คํธ ํฝ์ค์ฒ ๋ฉ์๋(`test fixture method`)๋ผ๊ณ  ํ๋ค.

### ํ์คํธ ์ผ์ด์ค์ ํ์คํธ ๋ฉ์๋

- ํ์คํธ ์ผ์ด์ค(test case)์ ํ์คํธ ๋ฉ์๋(test method)๋ผ๋ ์ฉ์ด๋ ํํ ํผ์ฉ๋์ด ์ฌ์ฉ๋๋ค. ์ ํํ๋ ๋จ์ ํ์คํธ ์ผ์ด์ค์ ๋จ์ ํ์คํธ ๋ฉ์๋๊ฐ ์ ๋๋ก ๋ ๋ช์นญ์ด๋ค.
- `ํ์คํธ ์ผ์ด์ค`: ํ์คํธ ์์์ ๋ํ ์๋๋ฆฌ์ค์ ์ธ ์๋ฏธ๊ฐ ๊ฐํจ
- `ํ์คํธ ๋ฉ์๋`: JUnit์ ๋ฉ์๋๋ฅผ ์ง์นญ

### ๋จ์ ๋ฌธ

#### ๋ํ์ ์ธ ๋จ์ ๋ฌธ

- `assertEquals`([message], expected, actual) (JUnit3, 4)
- `assertEquals`(expected, actual, [message]) (JUnit5)
- `assertTrue`([message], expected) / `assertFalse`([message], expected) (JUnit3, 4)
- `assertTrue`(expected, [message]) / `assertFalse`(expected, [message]) (JUnit5)
- `assertNull`([message], expected) / `assertNotNull`([message], expected) (JUnit3, 4)
- `assertNull`(actual, [message]) / `assertNotNull`(actual, [message]) (JUnit5)
- `fail`([message]) (๋์ผ)

#### [ Reference : [Assertion-API(JUnit 5.0.1)](https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/Assertions.html) ]

### `assertEquals([message], expected, actual)`

- ๋ ๊ฐ์ด ๊ฐ์์ง ๋น๊ตํ๋ ๋จ์ ๋ฌธ
- ์์์ ํด๋นํ๋ expected์ ์ค์  ํ์คํธ ์ํ ๊ฒฐ๊ณผ์ ํด๋นํ๋ actual์ด ์๋ก ์ผ์นํ๋์ง ๋น๊ตํ๋จ๋ค.
- expect์ actual์ Java์ธ์ด์ ๊ธฐ๋ณธ ํ์(primitive type) ์ ์ฒด์ ๋ํด ์ค์ฒฉ๊ตฌํ(overloading)๋์ด ์๊ธฐ ๋๋ฌธ์ ๋ค์ํ ๊ฐ์ ์๋ก ๋น๊ตํ  ์ ์๋ค.

```java
[์ฑ ์์ ]
static public void assertEquals(String message, Object expected, Object actual) {
  if(expected == null && actual == null) return;
  if(account != null && expected.equals(actual)) return;
  failNotEquals(message, expected, actual);
}
```

```java
[JUnit 5 AssertEquals.class]
static void assertEquals(Object expected, Object actual, String message) {
  if (!objectsAreEqual(expected, actual)) {
    failNotEqual(expected, actual, message);
  }
}
```

```toc

```
