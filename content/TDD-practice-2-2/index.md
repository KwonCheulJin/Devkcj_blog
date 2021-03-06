---
emoji: ๐ค๐ป
title: TDD ์ค์ฒ๋ฒ๊ณผ ๋๊ตฌ ์ฑ์ ํ์ฉํ TDD์ต์ํด์ง๊ธฐ (CHAPTER.2-2)
date: '2021-12-29 21:37:00'
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

### ๋จ์ ๋ฌธ

### `assertEquals([message], expected, actual)`

#### [์ด์  ๋ด์ฉ์ ์ด์ด์ ์งํ]

- assertEquals ์๋ฆฌ์ฆ ์ค ๋ชจ์์ด ๋ค์ ๋ค๋ฅธ ๊ฒ์ด ์๋๋ฐ ๋ฐ๋ก `assertEquals(double expected, double actual, double delta, [message])`๋ฉ์๋๋ค.
- ๋ฉ์๋ ์ธ์ ๋ง์ง๋ง์ delta๋ผ๋ ํญ๋ชฉ์ด ํ๋ ๋ ์๋ค.
- ์์์ ์ ๊ฐ๋ float๋ double ๋ฐ์ดํฐํ์ ๊ฒฝ์ฐ์๋ ์ ํํ๊ฒ ์ผ์นํ๋ ๊ฐ์ ์ฐพ๊ธฐ ์ด๋ ค์ธ ์ ์๋ค. ๊ทธ๋ด ๊ฒฝ์ฐ delta๋ผ๋ ์ค์ฐจ ๋ณด์  ๊ฐ์ ์ด์ฉํด ์ ์ ํ ์ค์ฐจ ๋ฒ์ ๋ด์ ๊ฐ์ ๋์ผํ ๊ฐ์ผ๋ก ํ๋จํ  ์ ์๊ฒ ํด์ค๋ค.

```java
@Test
void testAssertDouble() {
    assertEquals(0.3333, 1/3d, 0.00001);
}
```

![assertEquals-double.png](assertEquals-double.png)

```java
@Test
void testAssertDouble() {
    assertEquals(0.3333, 1/3d, 0.0001);
}
```

![assertEquals-double-success.png](assertEquals-double-success.png)

- ์์๊ฐ์ ๊ฐ์ ์์์๋ฆฌ๋ฅผ ๋ง์ถฐ์ฃผ์ด์ผ ํ์คํธ์ ์ฑ๊ณต์ ํ๋ค.
- ์ฑ์์๋ floatํ์๋ผ๋ฆฌ์ ๋น๊ต๋ ์ ๊ณตํ์ง ์๋๋ค๋ผ๊ณ  ๋์ด์๋๋ฐ ํ์ฌ JUnit API ๋ฌธ์์๋ float๋ ๋น๊ต๊ฐ ๊ฐ๋ฅํ ๊ฒ์ผ๋ก ๋์ด์๋ค.(2010๋๋์ ๋์๋ ๋น์์๋ ๋ถ๊ฐ ํ๋ ๊ฒ ๊ฐ๋ค.)
- ์ฐธ๊ณ ๋ก float๋ 4๋ฐ์ดํธ ์ ์ฅ์์ญ์ 2<sup>23</sup>์ ์ ๋ฐ๋๋ฅผ ๊ฐ๊ณ , double์ 8๋ฐ์ดํธ ์ ์ฅ์์ 2<sup>52</sup>์ ์ ๋ฐ๋ ์์ญ์ ๊ฐ๋๋ค.

### `assertSame(expected, actual, [message])`

### `assertNotSame(expected, actual, [message])`

- assertSame์ ๋ ๊ฐ์ฒด๊ฐ ์ ๋ง ๋์ผํ ๊ฐ์ฒด์ ์ฃผ์๊ฐ์ผ๋ก ๋น๊ตํ๋ ๋จ์ ๋ฌธ์ด๋ค.
- ๊ฐ์ฒด๋ฅผ ๋น๊ตํ  ๋ equals ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ๋ฐ๋ก ๋ฑ๊ฐ๋น๊ต(==)๋ฅผ ํ๋ค.
- assertNotSame๋ ๋ง์ฐฌ๊ฐ์ง๋ก ๋ ๊ฐ์ฒด๋ฅผ ์ฃผ์๋ก ๋น๊ตํ๋ค. ๋ค๋ง ์ด ๊ฒฝ์ฐ ์ฃผ์๊ฐ์ด ๋ค๋ฅด๋ฉด ๋ฌด์กฐ๊ฑด true๊ฐ ๋๋ค.
- assertSame์ ์ฃผ๋ก ๋์ผ ๊ฐ์ฒด์์ ์ฆ๋ชํ๋๋ฐ ์ฐ์ธ๋ค.

#### ์ฑ๊ธํค(Singleton) : ๋์์ธ ํจํด์์ ๋์จ ๊ฐ๋์ผ๋ก, ํน์  ํด๋์ค์ ์ธ์คํด์ค๊ฐ ์ค์ง ํ๋๋ง ์์ฑ๋  ์ ์๊ฒ ๋ง๋ค์ด์ฃผ๋ ํจํด์ด๋ค. ์ด๋ static์ผ๋ก ์ง์ ๋ getInstance() ๊ฐ์ ๋ฉ์๋๋ฅผ ํตํด์๋ง ๊ฐ์ฒด์ ์ ๊ทผ ๊ฐ๋ฅํ๊ฒ ๋ง๋ ๋ค. ๋ฐ๋ผ์ ๋ช ๋ฒ์ ํธ์ถํด๋ ๋์ผํ ๊ฐ์ฒด๊ฐ ์ง์์ ์ผ๋ก ๋ฐํ๋๊ฑฐ๋ ์ด์ฉ๋๋ค. ์ผ๋ฐ์ ์ผ๋ก ๊ฐ์ฒด ์์ฑ๊ณผ ์๋ฉธ์ ๋น์ฉ์ด ๋ง์ด ๋๋ ๊ฐ์ฒด๋ฅผ ์ฑ๊ธํค์ผ๋ก ๋ง๋ค์ด๋์ ํจ์จ์ ๋์ธ๋ค.

```java
[์ฑ ์์ ]
static public void assertSame(String message, Object expected, Object actual) {
  if(expected == actual) return;
  failNotSame(message, expected, actual);
}

```

```java
[JUnit 5 AssertSame.class]
static void assertSame(Object expected, Object actual, String message) {
  if (expected != actual) {
    failNotSame(expected, actual, message);
  }
}
static void assertSame(Object expected, Object actual, Supplier<String> messageSupplier) {
  if (expected != actual) {
    failNotSame(expected, actual, nullSafeGet(messageSupplier));
  }
}
```

### `assertTrue(expected, [message])`

### `assertFalse(expected, [message])`

- ์์๊ฐ์ ์ฐธ / ๊ฑฐ์ง์ ํ๋ณํ๋ ๋จ์ ๋ฌธ์ด๋ค.
- boolean ํ์ ๋ฉ์๋๋ฅผ ์ด์ฉํ  ๊ฒฝ์ฐ๋, ๋ถ๋ฑํธ ๋น๊ต, ๋ฒ์ ๋น๊ต๋ฑ์ ํ๋จํ  ๋ ์ฌ์ฉํ๋ค.
- ๊ฐ๋ assertTrue(account.getBalance()==0)๊ฐ์ ์์ผ๋ก ๋ฑ๊ฐ๋น๊ต๋ฅผ ํ๋ ๊ฒฝ์ฐ๊ฐ ์๋๋ฐ, ์ด๋ ๋จ์ ๋ฌธ์ด ์คํจํ  ๊ฒฝ์ฐ account.getBalance()์ ๊ฐ์ ๋ฐ๋ก ์ ์ ์์ด ๋ถํธํ๋ค. ๋ฑํธ ๋น๊ต๋ ๊ฐ๊ธ์  assertEquals(0, account.getBalance())ํ์์ ์ฌ์ฉํ๋๋ก ๊ถ์ฅํ๋ค.

```java
[JUnit 5 AssertTrue.class]
static void assertTrue(boolean condition, String message) {
  if (!condition) {
    fail(buildPrefix(message) + EXPECTED_TRUE, true, false);
  }
}
```

### `assertNull(actual, [message])`

### `assertNotNull(actual, [message])`

- ๋์ ๊ฐ์ null ์ฌ๋ถ๋ฅผ ํ๋จํ๋ ๋จ์ ๋ฌธ์ด๋ค.

```java
@Test
void testNUllAccount() {
    account = null;
    assertNull(account);
}
```

![assertNull.png](assertNull.png)

```java
static void assertNull(Object actual, String message) {
  if (actual != null) {
    failNotNull(actual, message);
  }
}
```

- assert ์๋ฆฌ์ฆ๋ ์์๊ฐ์ด assert ๋ฌธ์ฅ ๋ค์์ ์ด์ด์ง๋ ๊ธ์์ ์ํ๊ฐ ์ผ์นํ๋ค๋ ๊ฑธ ํ์ธํ๋ ๋ฌธ์ฅ์ด๋ค.
- assert๋ฅผ '~์ด์ด์ผ ํจ!'์ผ๋ก ํด์ํ๋ฉด ํท๊ฐ๋ฆฌ์ง ์์ ์ ์๋ค. ๊ทธ๋ด

### `fail([message])`

- ์ด ๋ฉ์๋๊ฐ ํธ์ถ๋๋ฉด ํด๋น ํ์คํธ ์ผ์ด์ค๋ ๊ทธ ์ฆ์ ์คํจํ๋ค.
- ํ์ฌ ์์ฑ ์ค์ธ ๋ฉ์๋์ ๊ฒฝ์ฐ ๋จ์ ๋ฌธ์ ์ฐ์ง ์์์ผ๋ฉด ์์ธ๊ฐ ๋ฐ์ํ์ง ์๋ ์ด์ ๋ฌด์กฐ๊ฑด ์ฑ๊ณตํ๋ ํ์คํธ ์ผ์ด์ค๊ฐ ๋๋ค.
- ๋ง์ผ ์์ง ํ์คํธ ์ผ์ด์ค๋ฅผ ์์ฑ ์ค์ธ๋ฐ ์๋ฃํ์ง ๋ชปํ ์ฑ ๊ตฌํ์ ์ค๋จํด์ผ ํ๋ ๊ฒฝ์ฐ๋ผ๋ฉด ๋ ๋ถ๋ถ์ fail()์ ์ถ๊ฐํด๋์ผ๋ฉด ๋์์ด ๋๋ค.
- ์์ธ์ฒ๋ฆฌ๋ฅผ ํ์คํธ ํ๊ธฐ ์ํ ํธ๋ฆญ์ผ๋ก fail()์ ์ฌ์ฉํ๊ธฐ๋ ํ๋ค.

```java
public void testWithdraw_ํ์ฌ์๊ณ ์ดํ_์ธ์ถ์๊ตฌ์() throws Exception {
  Account account = new Account(10000);
  account.withdraw(20000); //OverWithdrawRequestException์ด ๋ฐ์ํด์ผํจ!
}
```

- ์์ ๊ฐ์ ๊ฒฝ์ฐ์ฒ๋ผ ํน์  ์กฐ๊ฑด์์ ์์ธ๊ฐ ๋ฐ์ํด์ผ ์ ์ฐ์ธ ๊ฒฝ์ฐ๋ฅผ ํ์คํธ ์ผ์ด์ค๋ก ์์ฑํ๋ ค๋ฉด ์๋์ ๊ฐ์ด ํ๋ฉด ๋๋ค.

```java
public void testWithdraw_ํ์ฌ์๊ณ ์ดํ_์ธ์ถ์๊ตฌ์() throws Exception {
  Account account = new Account(10000);
  try {
    account.withdraw(20000); //1
    fail(); //2
  } catch (OverWithdrawRequestException e) {
    assertTrue(true); //3
  }
}
```

1. OverWithdrawRequestException์ด ๋ฐ์ํด์ผ ํจ!
2. ๋ง์ผ ์์์ ์์ธ๊ฐ ๋ฐ์ํ์ง ์์์ ์ด ๋ถ๋ถ๊น์ง ์คํ๋๋ฉด ์คํจํจ.
3. ๋น ์ค๋ก ๋จ๊ฒจ๋ฌ๋ ๋ฌด๋ฐฉํ๋ค ๋ช์์ ์ผ๋ก ํ์ํจ.

### ํ์คํธ ๋ฌ๋(Test Runner)

```text
- junit.swingui.TestRunner.run(ํ์คํธํด๋์ค.class);
- junit.textui.TestRunner.run(ํ์คํธํด๋์ค.class);
- junit.awtui.TestRunner.run(ํ์คํธํด๋์ค.class);
```

- JUnit ํ๋ ์์ํฌ๋ ๋ช๋ นํ ํ๋กฌํํธ์์ ์คํํ๊ฑฐ๋ ์ธ ์คํฌ๋ฆฝํธ ๋ฑ์ ์ด์ฉํด ์คํํ  ์๋ ์๋ค.
- ์ด๋ฅผ ์ํด JUnit์ ํ์คํธ ๋ฌ๋๋ผ๋ ํ์คํธ ์คํ ํด๋์ค๋ฅผ ์ ๊ณตํ๋ค.
- ์์ ๊ธฐ๋ฅ์ Junit3์์๋ง ์ ๊ณตํ๋ค.
- ์ถ๊ฐ ๋ด์ฉ์ ์๋ตํ๊ฒ ๋ค.xml์

### ํ์คํธ ์ค์ํธ(Test Suite)

```text
- ์ฌ๋ฌ ๊ฐ์ ํ์คํธ ์ผ์ด์ค๋ฅผ ํ๊บผ๋ฒ์ ์ํํ๊ณ ์ ํ  ๋
- ํ์คํธ ์ค์ํธ๋ ํ์คํธ ์ผ์ด์ค์ ๋ค๋ฅธ ํ์คํธ ์ค์ํธ๋ฅผ ํฌํจ์ํฌ ์ ์๋ค.
- ๋ฉ์๋๋ ๋ฐ๋์ public static Test suite()์ฌ์ผ ํ๋ค.
- ํ์คํธ ์ถ๊ฐ๋ suite.addTestSuite(ํ์คํธํด๋์ค.class) ํ์์ ๊ฐ๋๋ค.
```

- ์๋์ ์ฌ์ดํธ์์ JUnit 5 TestSuite ์์ ๋ฅผ ํ์ธ ํ  ์ ์๋ค.

Reference : [JUnit 5 TestSuite Example](https://howtodoinjava.com/junit5/junit5-test-suites-examples/)

- ํ์คํธ ์ค์ํธ๋ ์ฌ๋ฌ ๊ฐ์ ํ์คํธ ์ผ์ด์ค๋ฅผ ํจ๊ป ์ํํ  ๋ ์ฌ์ฉํ๋ค.

```toc

```
