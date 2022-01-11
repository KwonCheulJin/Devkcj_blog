---
emoji: 🤘🏻
title: TDD 실천법과 도구 책을 활용한 TDD익숙해지기 (CHAPTER.2-1)
date: '2021-12-27 20:46:00'
author: 촬스
tags: 블로그 Java TDD JUnit TIL
categories: TDD JUnit
---

# github link - [TDD_practice](https://github.com/KwonCheulJin/TDD_practice)

# Chapter 2 - JUnit과 Hamcrest

## - 체크리스트

- <input type="checkbox" checked/> **테스트 픽스처의 개념**
- <input type="checkbox" checked/> **JUnit 3**
  - 단정문
  - 테스트 스위트
- <input type="checkbox"/> **JUnit 4**
  - @Test
  - @BeforeClass, @AfterClass, @Before, @After
  - 예외처리 테스트
  - 시간 제한 테스트
  - @Runwith
  - @SuiteClasses
  - [**고급 기능 소개**]
    - 파라미터화된 테스트
    - Rule
    - Theory
- <input type="checkbox"/> **Hamcrest**

## - JUnit

에릭 감마와 켄트 백이 탄생시킨 JUnit은 전 세계적으로 가장 널리 사용되는 Java 단위 테스트 프레임 워크다.<br>
TDD의 근간이 되는 프레임워크이며, 소위 xUnit 시리즈라고 불리는 다양한 단위 테스트 프레임워크들의 기원이 되는 프레임워크다.

### - JUnit이 기본적으로 제공하는 기능

- 테스트 결과가 예상과 같은지를 판별해주는 단정문(assertions)
- 여러 테스트에서 공용으로 사용할 수 있는 테스트 픽스처(test fixture)
- 테스트 작업을 수행할 수 있게 해주는 테스트 러너(test runner)

## - 테스트 픽스처(테스트 기반환경 또는 테스트를 위한 구조물)

일반적으로 소프트웨어 테스트에서 이야기하는 '테스트 픽스처'란 테스트를 반복적으로 수행할 수 있게 도와주고 매번 동일한 결과를 얻을 수 있게 도와주는 `'기반이 되는 상태나 환경'`을 의미한다.(`일관된 테스트 실행환경 또는 테스트 컨텍스트`라 부르기도 한다.)<br>
1장 예제에서 사용한 setUp이나 tearDown 메소드는 테스트 픽스처를 만들고, 정리하는 작업을 수행하는 메소드인데, 이런 메소드를 테스트 픽스처 메소드(`test fixture method`)라고 한다.

### 테스트 케이스와 테스트 메소드

- 테스트 케이스(test case)와 테스트 메소드(test method)라는 용어는 흔히 혼용되어 사용된다. 정확히는 단위 테스트 케이스와 단위 테스트 메소드가 제대로 된 명칭이다.
- `테스트 케이스`: 테스트 작업에 대한 시나리오적인 의미가 강함
- `테스트 메소드`: JUnit의 메소드를 지칭

### 단정문

#### 대표적인 단정문

- `assertEquals`([message], expected, actual) (JUnit3, 4)
- `assertEquals`(expected, actual, [message]) (JUnit5)
- `assertTrue`([message], expected) / `assertFalse`([message], expected) (JUnit3, 4)
- `assertTrue`(expected, [message]) / `assertFalse`(expected, [message]) (JUnit5)
- `assertNull`([message], expected) / `assertNotNull`([message], expected) (JUnit3, 4)
- `assertNull`(actual, [message]) / `assertNotNull`(actual, [message]) (JUnit5)
- `fail`([message]) (동일)

#### [ Reference : [Assertion-API(JUnit 5.0.1)](https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/Assertions.html) ]

### `assertEquals([message], expected, actual)`

- 두 값이 같은지 비교하는 단정문
- 예상에 해당하는 expected와 실제 테스트 수행 결과에 해당하는 actual이 서로 일치하는지 비교판단다.
- expect와 actual은 Java언어의 기본 타입(primitive type) 전체에 대해 중첩구현(overloading)되어 있기 때문에 다양한 값을 서로 비교할 수 있다.

```java
[책 예제]
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
