---
emoji: π
title: μ λ‘λ² μ΄μ€-νλ¬νκΆ ν΄λ¦°μ½λ(Chapter.3)
date: '2022-01-04 22:17:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java CleanCode TIL
categories: CleanCode
---

# Chapter 3 - ν¨μ

## 01. SOLID μμΉ

> S : SRP(Single Responsibility Principle) - λ¨μΌ μ±μ μμΉ <br>
> O : OCP(Open Close Principle) - κ°λ°©-νμ μμΉ <br>
> L : LSP(Liskov's Substitution Principle) - λ¦¬μ€μ½ν μΉν μμΉ <br>
> I : ISP(Interface Segregaion Principle) - μΈν°νμ΄μ€ λΆλ¦¬ μμΉ <br>
> D : DIP(Dpendency Inversion Principle) - μμ‘΄μ± μ­μ  μμΉ

### SRP (Single Responsibility Principle) - λ¨μΌ μ±μ μμΉ

#### ν ν΄λμ€λ νλμ μ±μλ§ κ°μ ΈμΌ νλ€.

- ν΄λμ€λ νλμ κΈ°λ₯λ§ κ°μ§λ©°, μ΄λ€ λ³νμ μν΄ ν΄λμ€λ₯Ό λ³κ²½ ν΄μΌ νλ μ΄μ λ μ€μ§ νλ λΏμ΄μ΄μΌ νλ€.
- SRP μ±μμ΄ λΆλͺν΄μ§κΈ° λλ¬Έμ, λ³κ²½μ μν μ°μμμ©μμ μμ λ‘μμ§ μ μλ€.
- κ°λμ± ν₯μκ³Ό μ μ§λ³΄μκ° μ©μ΄ν΄μ§λ€.
- μ€μ μμλ μ½μ§ μμ§λ§ λ μκΈ°ν΄μΌ νλ€!

### OCP(Open Close Principle) - κ°λ°©-νμ μμΉ

#### μννΈμ¨μ΄ μμλ νμ₯μλ μ΄λ € μμΌλ λ³κ²½μλ λ«ν μμ΄μΌνλ€.

- λ³κ²½μ μν λΉμ©μ κ°λ₯ν μ€μ΄κ³ , νμ₯μ μν λΉμ©μ κ°λ₯ν κ·Ήλν ν΄μΌ νλ€.
- μκ΅¬μ¬ν­μ λ³κ²½μ΄λ μΆκ°μ¬ν­μ΄ λ°μνλλΌλ, κΈ°μ‘΄ κ΅¬μ±μμμλ μμ μ΄ μΌμ΄λμ§ μκ³ , κΈ°μ‘΄ κ΅¬μ± μμλ₯Ό μ½κ² νμ₯ν΄μ μ¬μ¬μ©νλ€.
- κ°μ²΄μ§ν₯μ μΆμνμ λ€νμ±μ νμ©νλ€.

### LSP(Liskov's Substitution Principle) - λ¦¬μ€μ½ν μΉν μμΉ

#### μλΈ νμμ μΈμ λ κΈ°λ° νμμΌλ‘ κ΅μ²΄ν  μ μμ΄μΌ νλ€.

- μλΈ νμμ κΈ°λ° νμμ΄ μ½μν κ·μ½(μ κ·Όμ νμ, μμΈ ν¬ν¨)μ μ§μΌμΌ νλ€.
- ν΄λμ€ μμ, μΈν°νμ΄μ€ μμμ μ΄μ©ν΄ νμ₯μμ νλνλ€.
- λ€νμ±κ³Ό νμ₯μ±μ κ·ΉλννκΈ° μν΄ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ κ²μ΄ λ μ’λ€.
- ν©μ±(composition)μ μ΄μ©ν  μλ μλ€.

### ISP(Interface Segregaion Principle) - μΈν°νμ΄μ€ λΆλ¦¬ μμΉ

#### μμ μ΄ μ¬μ©νμ§ μλ μΈν°νμ΄μ€λ κ΅¬ννμ§ λ§μμΌ νλ€.

- κ°λ₯ν μ΅μνμ μΈν°νμ΄μ€λ§ κ΅¬ννλ€.
- λ§μ½ μ΄λ€ ν΄λμ€λ₯Ό μ΄μ©νλ ν΄λΌμ΄μΈνΈκ° μ¬λ¬ κ°κ³ , μ΄λ€μ΄ ν΄λμ€μ νΉμ  λΆλΆλ§ μ΄μ©νλ€λ©΄, μ¬λ¬ μΈν°νμ΄μ€λ‘ λΆλ₯νμ¬ ν΄λΌμ΄μΈνΈκ° νμν κΈ°λ₯λ§ μ λ¬νλ€.
- SRPκ° ν΄λμ€μ λ¨μΌ μ±μμ΄λΌλ©΄, ISPλ μΈν°νμ΄μ€μ λ¨μΌ μ±μ

### DIP(Dpendency Inversion Principle) - μμ‘΄μ± μ­μ  μμΉ

#### μμ λͺ¨λΈμ νμ λͺ¨λΈμ μμ‘΄νλ©΄ μλλ€. λ λ€ μΆμνμ μμ‘΄ν΄μΌ νλ€.

#### μΆμνλ μΈλΆ μ¬ν­μ μμ‘΄ν΄μλ μλλ€. μΈλΆ μ¬ν­μ μΆμνμ λ°λΌ λ¬λΌμ§λ€.

- νμ λͺ¨λΈμ λ³κ²½μ΄ μμ λͺ¨λμ λ³κ²½μ μκ΅¬νλ μκ³κ΄κ³λ₯Ό λλλ€.
- μ€μ  μ¬μ©κ΄κ³λ κ·Έλλ‘μ΄μ§λ§, μΆμνλ₯Ό λ§€κ°λ‘ λ©μμ§λ₯Ό μ£Όκ³  λ°μΌλ©΄μ κ΄κ³λ₯Ό λμ¨νκ² λ§λ λ€.

```java
class PaymentController {
  @RequestMapping(value = "/api/payment", method = RequestMethod.POST)
  public void pay(@RequestBody ShinhanCardDto.PaymentRequest req) {
    shinhanCardPaymentService.pay(req);
  }
}

class ShinhanCardPaymentService {
  public void pay(ShinhanCardDto.PaymentRequest req) {
    shinhanCardApi.pay(req);
  }
}
```

<h3 style="text-align: center;"> μλ‘μ΄ μΉ΄λμ¬κ° μΆκ°λλ€λ©΄? </h3>
<p style="text-align: center;"> β¬οΈ </p>

```java
class PaymentController {
  @RequestMapping(value = "/api/payment", method = RequestMethod.POST)
  public void pay(@RequestBody CardPaymentCardDto.PaymentRequest req) {
    if(req.getType() == CardType.SHINHAN) {
      shinhanCardPaymentService.pay(req);
    } else if(req.getType() == CardType.WOORI) {
      wooriCardPaymentService.pay(req);
    }
  }
}
```

<h3 style="text-align: center;"> νμ₯μ μ μ°νμ§ μλ€. </h3>
<h3 style="text-align: center;"> κ·Έλμ λ λ€ μΆμνλ μΈν°νμ΄μ€μ μμ‘΄νλλ‘ νλ€. </h3>
<p style="text-align: center;"> β¬οΈ </p>

```java
class PaymentController {
  @RequestMapping(value = "/payment", method = RequestMethod.POST)
  public void pay(@RequestBody CardPaymentCardDto.PaymentRequest req) {
    final CardPaymentService cardPaymentService = cardPaymentFactory.getType(req.getType());
    cardPaymentService.pay(req);
  }
}

public interface CardPaymentService {
  void pay(CardPaymentCardDto.PaymentRequest req);
}

public class ShinhanCartdPaymentService implements CardPaymentService {
  @Override
  public void pay(CardPaymentDto.PaymentRequest req) {
    shinhanCardApi.pay(req);
  }
}
```

#### Reference from [https://cheese10yun.github.io/spring-solid-dip/](https://cheese10yun.github.io/spring-solid-dip/)

## 02. κ°κ²°ν ν¨μ μμ±νκΈ°!

```java
public static String renderPageWithSetupsAndTeardowns(PageData pageData, boolean isSuite) throws Exception {
  boolean isTestPage = pageData.hasAttribute("Test");
  if(isTestPage) {
    WikiPage testPage = pageData.getWikiPage();
    StringBuffer newPageContent = new StringBuffer();
    includeSetupPages(testPage, newPageContent, isSuite);
    newPageContent.append(pageData.getContent());
    includeTeardownPages(testPage, newPageContent, isSuite);
    pageData.setContent(newPageContent.toString());
  }
  return pageData.getHtml();
}
```

<h3 style="text-align: center;">'ν¨μκ° κΈΈκ³ , μ¬λ¬κ°μ§ κΈ°λ₯μ΄ μμ¬μλ€...'</h3>
<p style="text-align: center;"> β¬οΈ </p>

```java
public static String renderPageWithSetupsAndTeardowns(PageData pageData, boolean isSuite) throws Exception {
  if(isTestPage(pageData)) {
    includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
}
```

<h3 style="text-align: center;">μκ² μͺΌκ° λ€.</h3>
<h3 style="text-align: center;">ν¨μ λ΄ μΆμν μμ€μ λμΌνκ² λ§μΆλ€.</h3>

### 02-1. ν κ°μ§λ§ νκΈ°(SRP), λ³κ²½μ λ«κ² λ§λ€κΈ°(OCP)!

> ν¨μλ ν κ°μ§λ₯Ό ν΄μΌ νλ€. κ·Έ ν κ°μ§λ₯Ό μ ν΄μΌ νλ€. κ·Έ ν κ°μ§λ§μ ν΄μΌνλ€.

```java
public Money calculatePay(Employee e) throws InvalidEmployeeType {
  switch(e.type) {
    case COMMISSIONED:
      return calculateCommissionedPay(e);
    case HOURLY:
      return calculateHourlyPay(e);
    case SALARIED:
      return calculateSalariedPay(e);
    default:
      throw new InvalidEmployeeType(e.type);
  }
}
```

<h3 style="text-align: center;">κ³μ°λ νκ³ , Moneyλ μμ±νλ€. λκ°μ§ κΈ°λ₯μ μννλ€.</h3>
<h3 style="text-align: center;">μ¬κΈ°μ μλ‘μ΄ μ§μ νμμ΄ μΆκ°λλ€λ©΄ μ΄λ»κ² λ κΉ? </h3>
<p style="text-align: center;"> β¬οΈ </p>

```java
public abstract class Employee {
  public abstract boolean isPayday();
  public abstract Money calculatePay();
  public abstract void deliverPay(Money pay);
}

public interface EmployeeFactory {
  public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;
}

public class EmployeeFactoryImpl implements EmployeeFactory {
  public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {
    switch(r.type) {
      case COMMISSIONED:
        return new CommissionedEmployee(r);
      case HOURLY:
        return new HourlyEmployee(r);
      case SALARIED:
        return SalaliedEmployee(r);
      default:
        throw new InvalidEmployeeType(r.type);
    }
  }
}
```

<h3 style="text-align: center;">κ³μ°κ³Ό νμκ΄λ¦¬λ₯Ό λΆλ¦¬ν΄μ€λ€.</h3>
<h3 style="text-align: center;">νμμ λν μ²λ¦¬λ μ΅λν Factoryμμλ§ ν΄μ€λ€.</h3>

### 02-2. ν¨μ μΈμ

#### μΈμμ κ°―μλ 0~2κ°κ° μ λΉνλ€.

#### 3κ° μ΄μμΈ κ²½μ°μλ μ΄λ€ λ°©μμ΄ μ’μκΉ?

```text
// κ°μ²΄λ₯Ό μΈμλ‘ λκΈ°κΈ°
Circle makeCircle(double x, double y, double radius); //β
Circle makeCircle(Point center, double radius); //β­οΈ

// κ°λ³ μΈμλ₯Ό λκΈ°κΈ° -> νΉλ³ν κ²½μ°κ° μλλ©΄ μ μ¬μ©νμ§ μλλ€κ³  νλ€.
String.format(String format, Object... args);
```

## 03. μμ ν ν¨μ μμ±νκΈ°

### λΆμ ν¨κ³Ό(Side Effect) μλ ν¨μ

#### λΆμ ν¨κ³Ό - κ°μ λ°ννλ ν¨μκ° μΈλΆ μνλ₯Ό λ³κ²½νλ κ²½μ°

```java
public class UserValidator {
  private Cryptographer cryptographer;
  public boolean checkPassword(String userName, String password) {
    User user = UserGateway.findByName(userName);
    if(user != User.NULL) {
      String codedPhrase = user.getPhraseEncodedByPassword();
      String phrase = cryptographer.decrypt(codedPhrase, password);
      if("Valid Password".equals(phrase)) {
        Session.initialize(); <- ν¨μμ κ΄κ³μλ μΈλΆ μνλ₯Ό λ³κ²½μν¨λ€.
        return true;
      }
    }
    return false;
  }
}
```

## 04. ν¨μ λ¦¬ν©ν°λ§

<h3 style="text-align: center;">κΈ°λ₯μ κ΅¬ννλ μν¬λ₯Έ ν¨μλ₯Ό μμ±νλ€.</h3>
<p style="text-align: center;">κΈΈκ³ , λ³΅μ‘νκ³ , μ€λ³΅λ μλ€.</p>
<p style="text-align: center;"> β¬οΈ </p>

<h3 style="text-align: center;">νμ€νΈ μ½λλ₯Ό μμ±νλ€.</h3>
<p style="text-align: center;">ν¨μ λ΄λΆμ λΆκΈ°μ μ£μ§κ°λ§λ€ λΉ μ§μμ΄ νμ€νΈνλ μ½λλ₯Ό μ§ λ€.</p>
<p style="text-align: center;"> β¬οΈ </p>

<h3 style="text-align: center;">λ¦¬ν©ν°λ§ νλ€.</h3>
<p style="text-align: center;">μ½λλ₯Ό λ€λ¬κ³ , ν¨μλ₯Ό μͺΌκ°κ³ , μ΄λ¦μ λ°κΎΈκ³ , μ€λ³΅μ μ κ±°νλ€.</p>

`μ±μλ λ λ§μ λ΄μ©μ΄ μμ§λ§ μ€μν λΆλΆλ§ μμ½ν΄μ μ€λͺμ ν λΆλΆμ μ λ¦¬ νμλ€. λκ°μ κ°λ°μ΄λ³΄λ ν μλΏλ λ€ λ³΄λ€λ μ΄λ κ² νλ €κ³  λΈλ ₯μ ν΄μΌ κ² λ€λ μκ°μ΄ λ§μ΄ λ€μλ€. μμ¦ κ°λ°νλ©΄μ ν¨μκ° λ±λ±ν΄μ§κ³  μ¬λ¬κ°μ§ κΈ°λ₯μ νλ ν¨μλ₯Ό μ μ μμ΄ κ°λ°νλ€ λ³΄λ©΄ μκΈ°λ κ² κ°λ€. μ€κ°μ€κ° λ¦¬ν©ν λ§μ ν΄μ£Όλ©΄μ ν¨μλ₯Ό κΈ°λ₯ λ¨μλ‘ μͺΌκ°λ μ°μ΅μ νκ³  μμ§λ§ μ½μ§λ μλ€. μμνλ©΄μ μ½λλ₯Ό μμ±νλλ‘ κ³μ λΈλ ₯ν΄μΌκ² λ€.`

```toc

```
