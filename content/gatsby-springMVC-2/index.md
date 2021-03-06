---
emoji: π
title: Spring Boot + Mybatis + MariaDB μ°κ²°νκΈ°
date: '2021-10-06 21:33:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java SpringMVC TIL
categories: SpringMVC
---

μ€λμ νμ¬μμ VCMS νλ‘ν νμ κ°λ° μ§νμ νκ²λμ΄μ μ²μμΌλ‘ AWS RDS MariaDBμ μ°λνλ μμμ μ§ννμλ€. DB μΏΌλ¦¬ μμμ μμνκ² λμμ£Όλ Mybatisλ μ΄μ©νμλ€.

μ€μ νλ κ³Όμ  μ€μ κ²ͺμλ λ¬Έμ μ μ μμ§ μκΈ° μν΄μ κΈ°λ‘νλ€.

## 1. DB μ°λνκΈ°

- `application.properties`μμ DB μ€μ  λ° Mybatis μ€μ μ ν΄μ€λ€.

```yml
#mariadb μ€μ 
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.datasource.url=jdbc:mariadb://aws rds μ£Όμ:3306/dbμ΄λ¦
spring.datasource.username=username
spring.datasource.password=password

# mapper.xml μμΉ μ§μ 
mybatis.mapper-locations:classpath:mappers/*.xml
# model νλ‘νΌν° camel case μ€μ 
mybatis.configuration.map-underscore-to-camel-case=true
# ν¨ν€μ§ λͺμ μλ΅ν  μ μλλ‘ alias μ€μ 
mybatis.type-aliases-package.com.prototype.domain.entity
# mapper λ‘κ·Έλ λ²¨ μ€μ 
logging.level.com.prototype.domain.repository=TRACE
```

- λ΄κ° μ¬μ©μ νμν λΆλΆμ μ€μ ν΄μ£Όμλ€.

## 2. DB μ°λ TEST

```java
public class MariadbConnectionTest {

 // MySQL Connector μ ν΄λμ€. DB μ°κ²° λλΌμ΄λ² μ μ
    private static final String DRIVER = "org.mariadb.jdbc.Driver";
    // DB κ²½λ‘
    private static final String URL = "jdbc:mariadb://aws rds μ£Όμ:3306/dbμ΄λ¦";
    private static final String USER = "username";
    private static final String PASSWORD = "password";

    @Test
    public void testConnection() throws Exception {
        // DBMSμκ² DB μ°κ²° λλΌμ΄λ²μ μμΉλ₯Ό μλ €μ£ΌκΈ° μν λ©μλ
        Class.forName(DRIVER);
        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println(connection);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

- testλ₯Ό ν΅ν΄μ dbμ μ°κ²°λλμ§ νμΈμ νλ€.

## 3. Mybatis μ¬μ©μ μν Entity / Repository class μΆκ°

`main > java > com > prototype > domain > entity > Member`

### Member

```java
@Data
public class Member {

    private int no;
    private String grade;
    private String name;
    private String id;
    private String department;
    private String email;
    private String phoneNumber;
    private Date dateOfSignUp;

}
```

- ν΄λμ€ λ λ²¨μμ `@Data` μ΄λΈνμ΄μμ λΆμ¬μ£Όλ©΄, λͺ¨λ  νλλ₯Ό λμμΌλ‘ μ κ·Όμμ μ€μ μκ° μλμΌλ‘ μμ±λκ³ , `final` λλ `@NonNull` νλ κ°μ νλΌλ―Έν°λ‘ λ°λ μμ±μκ° λ§λ€μ΄μ§λ©°, `toStirng`, `equals`, `hashCode` λ©μλκ° μλμΌλ‘ λ§λ€μ΄μ§λ€.

`main > java > com > prototype > domain > repository > MemberRepository`

### MemberRepository

```java
@Mapper
public interface MemberRepository {
    List<Member> allMember();
}
```

- `@Mapper`λ MyBatisμ mappersλ₯Ό μν marker interfaceλ‘ μ¬μ©

## 4. Mybatis `mapper.xml` μ€μ 

`main > resources > mappers > mapper.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >

<mapper namespace="com.prototype.domain.repository.MemberRepository">
    <select id="allMember" resultType="Member">
        SELECT * FROM member
    </select>
</mapper>
```

> `λ€μμ€νμ΄μ€(Namespaces)`κ° μ΄μ λ²μ μμλ μ¬μ€ μ νμ¬ν­μ΄μλ€. νμ§λ§ μ΄μ λ ν¨ν€μ§κ²½λ‘λ₯Ό ν¬ν¨ν μ μ²΄ μ΄λ¦μ κ°μ§ κ΅¬λ¬Έμ κ΅¬λΆνκΈ° μν΄ νμλ‘ μ¬μ©ν΄μΌ νλ€.
> `λ€μμ€νμ΄μ€`λ μΈν°νμ΄μ€ λ°μΈλ©μ κ°λ₯νκ² νλ€. λ€μμ€νμ΄μ€μ μ¬μ©νκ³  μλ° ν¨ν€μ§μ λ€μμ€νμ΄μ€μ λλ©΄ μ½λκ° κΉλν΄μ§κ³  λ§μ΄λ°ν°μ€μ μ¬μ©μ±μ΄ ν¬κ² ν₯μλ  κ²μ΄λ€.

- `mybatis.type-aliases-package.com.prototype.domain.entity`
- ν¨ν€μ§ λͺμ μλ΅ν  μ μλλ‘ alias μ€μ νμ¬μ `resultType`μ `Member` μ§§κ² λ£μ μ μλ€.

## 5. DBμμ κ°μ Έμ¨ λ°μ΄ν°λ₯Ό JSONννλ‘ λ³΄μ¬μ£ΌκΈ°

`main > java > com > prototype > domain > controller > MemberController`

### MemberController

```java
@Slf4j
@RestController
@RequestMapping("/api")
public class MemeberController {

    @Autowired
    MemberRepository memberRepository;

    @GetMapping("/member")
    public List<Member> allMember() {
        log.info("allmember = {}", memberRepository.allMember());

        return memberRepository.allMember();
    }
}
```

- `@Slf4j`λ logλ₯Ό μΆλ ₯νκΈ° μν μ΄λΈνμ΄μ
- `@RestController`λ Spring MVC Controlleμ `@ResponseBody`κ° μΆκ°λ κ²μ΄λ€. `RestController`μ μ£Όμ©λλ `Json` ννλ‘ κ°μ²΄ λ°μ΄ν°λ₯Ό λ°ννλ κ²μ΄λ€.
- `@RequesMapping`μ μμ²­μ λν΄ μ΄λ€ Controller, μ΄λ€ λ©μλκ° μ²λ¦¬ν μ§λ₯Ό λ§΅ννκΈ° μν μ΄λΈνμ΄μ(classμμ μ μΈμ κ³΅ν΅ urlμ μ μΈν  μ μλ€)
- `@Autowired`μ νμν μμ‘΄ κ°μ²΄μ `νμ`μ ν΄λΉνλ λΉμ μ°Ύμ μλ μ£Όμνλ€.
- `@GetMapping`μ `@GetMapping : @RequestMapping(method = RequestMethod.GET)` μ μΆμ½ν

μ€λ κ²½νν κ²μ λ€μ νλ² μ λ¦¬ν΄λ³΄λκΉ μ‘°κΈ μ λ¦¬κ° λλ λ―νλ€. νμ¬μμ μ°λμμ κ³μ μλ¬κ° λ°μν΄μ νμ°Έμ κ²μν΄λ ν΄κ²°μ΄ λμ§μμλλ° κ°μ₯ ν° μ€μλ₯Ό ν λΆλΆμ΄ db μ€μ  λΆλΆμμ λ°μ€μΉ λΆλΆμ λλ½ν΄μ μκΈ°λ μλ¬μλ€.

<p align ="center"> 
spring.datasource.url=jdbc:mariadb://aws rds μ£Όμ<b><u>:3306/dbμ΄λ¦</u></b>
</p>

λ€μλ κΉλ¨Ήμ§ μμ μ λμ μν©νΈμλ€.

μ‘°κΈμ© λλ¦¬λλΌλ μ€λκ°μ΄ λ°°μκ°λ©΄μ μ§μμ μΌλ‘ μ±μ₯ ν  μ μκ² λΈλ ₯νμ!

```toc

```
