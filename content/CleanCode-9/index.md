---
emoji: π
title: μ λ‘λ² μ΄μ€-νλ¬νκΆ ν΄λ¦°μ½λ(Chapter.10)
date: '2022-01-18 21:38:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java CleanCode TIL
categories: CleanCode
---

# Chapter 10 - ν΄λμ€ μ μ€κ³νκΈ°

## 01. μΊ‘μν(Encapsulation)

### κ°μ²΄μ μ€μ  κ΅¬νμ μΈλΆλ‘λΆν° κ°μΆλ λ°©μ

- ν΄λμ€λ₯Ό κ°λ°ν  λ κΈ°λ³Έμ μΌλ‘ κ΅¬νμ κ°μΆκ³ , μΈλΆ κ°μ²΄μ μνΈμμ©νλ λΆλΆλ§ λΈμΆνλ€.
- μΈλΆμ μλͺ»λ μ¬μ©μ λ°©μ§νλ€.
- κ²½κ³μμ λ°°μ λ λΆλΆ! (Mapμ νμ©νλ μμ )

#### Stack μμ 

```java
public class Stack {
    private int topOfStack = 0;
    private List<Integer> elements = new LinkedList<Integer>();

    public List<Integer> getElements() {
        return elements;
    }

    public int size() {
        return topOfStack;
    }

    public void push(int element) {
        topOfStack++;
        elements.add(element);
    }

    public void pop() throws PopedWhenEmpty {
        if (topOfStack == 0)
            throw new PopedWhenEmpty();
        int element = elements.get(--topOfStack);
        elements.remove(topOfStack);
        return element;
    }
}
```

- νλλ₯Ό `private`μΌλ‘ μ ν, `get`μΌλ‘ μ½κΈ°

- μμ μ `push`, `pop` λ©μλλ₯Ό ν΅ν΄μ μΌμ΄λλλ‘ μ ν

## 02. λ¨μΌ μ±μ μμΉ (SRP - Single Responsibility Principle)

### ν΄λμ€λ μμμΌ νλ€.

#### ν΄λμ€κ° λ§‘μ μ±μμ΄ ν κ°μΈκ°

- ν¨μμ λ§μ°¬κ°μ§λ‘ ν΄λμ€λ μμμΌ νλ€.
- ν¨μλ λΌμΈ μλ‘ ν¬κΈ°λ₯Ό μΈ‘μ νλλ°, ν΄λμ€λ λ§‘μ μ±μμ μλ‘ ν¬κΈ°λ₯Ό μΈ‘μ νλ€.
- ν΄λμ€ μ€λͺμ λ§μΌ(if), κ·Έλ¦¬κ³ (and), νλ©°(or), νμ§λ§(but)μ μ¬μ©νμ§ μκ³  25λ¨μ΄ λ΄μΈλ‘ κ°λ₯ν΄μΌ νλ€. -> μ±μμ΄ ν κ°μ§ μ¬μΌ νλ€.

```java
public class SuperDashboard extends JFrame implements MetaDataUser {
    public Component getLastFocusedComponent()
    public void setLastFocused(Component lastFocused)
    public int getMajorVersionNumber()
    public int getMinorversionNumber()
    public int getBuildNumber()
}
// focus, version λ κ°μ§ μ±μμ΄ λ³΄μΈλ€.
```

<h3 style="text-align: center;">β¬οΈ</h3>

```java
public class Version {
    public int getMajorVersionNumber()
    public int getMinorversionNumber()
    public int getBuildNumber()
}
// λ€λ₯Έ κ³³μμλ μ¬νμ©ν  μ μλ€.
```

> "λκ΅¬μμλ₯Ό μ΄λ»κ² κ΄λ¦¬νκ³  μΆμκ°? μμ μλμ λ§μ΄ λκ³  κΈ°λ₯κ³Ό μ΄λ¦μ΄ λͺνμ μ»΄ν¬λνΈλ₯Ό λλ  λ£κ³  μΆμκ°? μλλ©΄ ν° μλ λͺκ°λ₯Ό λκ³  λͺ¨λλ₯Ό λμ Έ λ£κ³  μΆμκ°?"

#### λ¨μΌ μ±μ μμΉ (SRP)μ μ€μμ±

- μμν λ¨μΌ ν΄λμ€κ° λ§μμ§λ©΄ ν° κ·Έλ¦Όμ μ΄ν΄νκΈ° μ΄λ ΅λ€κ³  μ°λ €νλ€.νμ§λ§ μμ ν΄λμ€κ° λ§μ μμ€νμ΄λ  ν° ν΄λμ€κ° λͺ κ° λΏμΈ μμ€νμ΄λ  λμκ°λ λΆνμ κ·Έ μκ° λΉμ·νλ€.

- νΌμ§ν λ€λͺ©μ  ν΄λμ€ λͺκ°λ‘ μ΄λ€μ§ μμ€νμ (λ³κ²½μ κ°ν  λ) λΉμ₯ μ νμκ° μλ μ¬μ€κΉμ§ λ€μ΄λ°μ΄ λμλ₯Ό λ°©ν΄νλ€.

```java
class PaymentService {
    public void pay();
    public void cancel();
    public void getAccount();
    public void getAccountHistory();
}
```

> μκ΅¬μ¬ν­ : νλΆ κΈ°λ₯μ μΆκ°νλΌ

- ν΄λμ€κ° λ§μ κΈ°λ₯μ κ°μ§ λ§νΌ λͺ¨λ  κΈ°λ₯μ μ΄ν΄νκ³  μΆκ° κΈ°λ₯μ κ΅¬νν  μ μλ€. κ·Έλ¦¬κ³  ν΄λμ€λ λ λ§μ κΈ°λ₯μ κ°μ§κ² λλ€.

<h3 style="text-align: center;">β¬οΈ</h3>

- μμ ν΄λμ€λ κ°μ λ§‘μ μ±μμ΄ νλλ©°, λ³κ²½ν­ μ΄μ κ° νλλ©°, λ€λ₯Έ μμ ν΄λμ€μ νλ ₯ν΄ μμ€νμ νμν λμμ μννλ€.

```java
PaymentService::pay
    (accountService.getAccount)
PaymentCancelService::cancel
    (paymentService.getPay, accountService.getAccount)
AccountService::getAccount
AccountHistoryService::getAccountHistory
```

## 03. λ?μ κ²°ν©λ, λμ μμ§λ (Low Coupling, High Cohesion)

### κ²°ν©λμ μμ§λ

#### κ²°ν©λ - λ€λ₯Έ λͺ¨λκ°μ μμ‘΄λ

#### μμ§λ - λͺ¨λ λ΄λΆμ κΈ°λ₯ μ§μ€λ

- κ²°ν©λλ λ?μ μλ‘ μμ§λλ λμ μλ‘ μ μ§λ³΄μμ±μ΄ μ’λ€.

- κ²°ν©λκ° λμ ν΄λμ€μ λ¬Έμ μ 
  - μ°κ΄λ ν΄λμ€κ° λ³κ²½λλ©΄ μμ μ΄ νμνλ€.
  - κ²°ν©λκ° λμΌλ©΄ μ°κ΄λ ν΄λμ€λ€μ λͺ¨λ μ΄ν΄ν΄μΌ νλ€.
- μμ§λκ° λ?μ ν΄λμ€μ λ¬Έμ μ 
  - μ¬λ¬ κΈ°λ₯μ΄ μμΌλ―λ‘ μ΄ν΄νκΈ° μ΄λ ΅λ€.
  - μ¬μ¬μ©νκΈ° μ΄λ ΅λ€.

### λ?μ κ²°ν©λ

#### κ²°ν©λλ λ?μμΌ νλ€.

- μμ€νμ κ²°ν©λλ₯Ό λ?μΆλ©΄ μ μ°μ±κ³Ό μ¬μ¬μ©μ±λ λμ± λμμ§λ€.
- DIP(Dpendency Inversion Principle - μμ‘΄μ± μ­μ  μμΉ) - ν΄λμ€κ° μμΈν κ΅¬νμ΄ μλλΌ μΆμνμ μμ‘΄ν΄μΌ νλ€.
- `μΆμνλ₯Ό μ΄μ©νλ©΄ νμ€νΈ μ½λ μ§κΈ°μ μ©μ΄νλ€`

```java
public class TokyoSrockExchange {
    public Money currentPrice(String symbol);
}

public Portfolio {
    private TokyoSrockExchange tokyoSrockExchange;
    public Portfolio(TokyoSrockExchange exchange) {
        this.tokyoSrockExchange = tokyoSrockExchange;
    }
}
// Portfolio ν΄λμ€μ νμ€νΈ μ½λλ₯Ό μ§μΌνλλ°,
// TokyoSrockExchange ν¨μμ APIλ 5λΆλ§λ€ κ°μ΄ λ¬λΌμ§λ€λ©΄...?
```

<h3 style="text-align: center;">β¬οΈ</h3>

```java
public interface SrockExchange {
    Money currentPrice(String symbol);
}

public class TokyoSrockExchange implements SrockExchange {
    public Money currentPrice(String symbol) {
        // call API...
    }
}

public Portfolio {
    private StockExchange exchange;
    public Portfolio(StockExchange exchange) {
        this.exchange = exchange;
    }
}
// StockExchange μΈν°νμ΄μ€λ₯Ό ν΅ν΄ Portfolioμ
// TokyoSrockExchangeμ κ²°ν©λλ₯Ό λμ΄μ€λ€.
```

`PortfolioTest`

```java
public PortfolioTest {
    private FixedStockExchangeStub exchange;
    private Portfolio portfolio;

    @Before
    protected void setUp() throws Exception {
        exchange = new FixedStockExchangeStub();
        exchange.fix("MSFT", 100);
        portfolio = new Portfolio(exchange);
    }

    @Test
    public void GivenFiveMSFTTotalShouldBe500() throws Exception {
        portfolio.add(5, "MSFT");
        Assert.assertEquals(500, portfolio.value());
    }
}
// νμ€νΈ κ²°κ³Όκ° λ κ°λλ‘ νλ€.
// κ·Έλ¬λ.. νμ₯λ  κ°λ₯μ±μ΄ μ λ€λ©΄ μΌλ¨μ κ²°ν©νκ³ , λμ€μ μΆμνν΄λ μ’λ€.
// κ°μ²΄λ₯Ό Mockking νλ©΄ λ³κ²½λλ ν΄λμ€λ νμ€νΈν  μ μλ€.
```

### λμ μμ§λ

#### μμ§λλ λμμΌ νλ€.

- ν΄λμ€λ μΈμ€ν΄μ€ λ³μ μκ° μ μ΄μΌ νλ€. λ©μλλ μΈμ€ν΄μ€ λ³μλ₯Ό νλ μ΄μ μ¬μ©ν΄μΌ νλ€. λ©μλκ° μΈμ€ν΄μ€ λ³μλ₯Ό λ§μ΄ μ¬μ©ν μλ‘ μμ§λκ° λλ€.
- μμ§λκ° λλ€ = ν΄λμ€μ μν λ©μλμ λ³μκ° μλ‘ μμ‘΄νλ©° λΌλ¦¬μ μΈ λ¨μλ‘ λ¬ΆμΈλ€ = μλ‘ κ΄κ³μλ μ λ€λ§ λͺ¨μ¬μλ€.
- ν΄λμ€κ° μμ§λλ₯Ό μμ΄κ°λ€λ©΄ ν¨μλ₯Ό μͺΌκ°μΌνλ€.

<h3 style="text-align: center;">[Stock μμ  μ°Έκ³ ]</h3>

## 04. λ³κ²½νκΈ° μ¬μμΌ νλ€

```java
public class Sql {
    public Sql(String table, Column[] columns)
    public String create()
    public String insert(Object[] fields)
    public String selectAll()
    public String findByKey(String keyColumn, String keyValue)
    public String select(Column column, String pattern)
    public String select(Criteria criteria)
    public String preparedInsert()
    public String columnList(Column[] columns)
    public String valuesList(Object[] fields, final Column[] columns)
    public String selectWithCriteria(String criteria)
    public String placeholderList(Column[] columns)
}
// Updateλ¬Έμ μΆκ°ν΄μΌ νλ€λ©΄....?
// μλ‘μ΄ SQLμ μΆκ°ν  λλ μμ μ΄ λ°μνκ³ , κΈ°μ‘΄ SQLλ¬Έμ μμ ν  λλ μμ μ΄ λ°μνλ―λ‘ OCP(Open Close Principle)μ μλ°νλ€.
```

<h3 style="text-align: center;">β¬οΈ</h3>

```java
abstract public class Sql {
    public Sql(String table, Column[] columns)
    abstract public String generate();
}

public class CreateSql extends Sql {
    public CreateSql(String table, Column[] columns)
    @Override public String generate()
}

public class SelectSql extends Sql {
    public SelectSql(String table, Column[] columns)
    @Override public String generate()
}

public class InsertSql extends Sql {
    public InsertSql(String table, Column[] columns)
    @Override public String generate()
    private String valuesList(Object[] fields, final Column[] columns)
}

public class Where {
    public Where(String criteria)
    public String generate()
}

public class ColumnList {
    public ColumnList(Column[] columns)
    public String generate()
}
```

- κ³΅κ° μΈν°νμ΄μ€λ₯Ό μ λΆ SQL ν΄λμ€μμ νμνλ ν΄λμ€λ‘ λ§λ€κ³ , λΉκ³΅κ° λ©μλλ ν΄λΉ ν΄λμ€λ‘ μ?κΈ°κ³ , κ³΅ν΅λ μΈν°νμ΄μ€λ λ°λ‘ ν΄λμ€λ‘ λΊλ€.
- κΈ°μ‘΄μ ν΄λμ€λ₯Ό κ±΄λλ¦¬μ§ μμλ λλ€.

```toc

```
