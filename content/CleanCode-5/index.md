---
emoji: π
title: μ λ‘λ² μ΄μ€-νλ¬νκΆ ν΄λ¦°μ½λ(Chapter.6)
date: '2022-01-09 15:23:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java CleanCode TIL
categories: CleanCode
---

# Chapter 6 - κ°μ²΄μ μλ£κ΅¬μ‘°λ‘ λ°μ΄ν° νννκΈ°

## 01. μλ£κ΅¬μ‘° vs κ°μ²΄

| μλ£κ΅¬μ‘°(Data Structure)                                                                           | κ°μ²΄(Object)                                                                        |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| λ°μ΄ν° κ·Έ μμ²΄                                                                                     | λΉμ¦λμ€ λ‘μ§                                                                       |
| μλ£λ₯Ό κ³΅κ°νλ€.                                                                                   | μλ£λ₯Ό μ¨κΈ°κ³ , μΆμν νλ€.<br>μλ£λ₯Ό λ€λ£¨λ ν¨μλ§ κ³΅κ°νλ€.                       |
| λ³μ μ¬μ΄μ μ‘°ν ν¨μμ μ€μ  ν¨μλ‘ <br> λ³μλ₯Ό λ€λ£¬λ€κ³  κ°μ²΄κ° λμ§ μλλ€. <br> (getter, setter) | μΆμ μΈν°νμ΄μ€λ₯Ό μ κ³΅ν΄ μ¬μ©μκ° κ΅¬νμ λͺ¨λ₯Έ μ± <br> μλ£μ ν΅μ¬μ μ‘°μν  μ μλ€. |

### μλ£κ΅¬μ‘° vs κ°μ²΄ μμ(1) Vehicle

```java
// μλ£κ΅¬μ‘°
public interface Vehicle {
  double getFuelTankCapacityInGallons() // μ°λ£ν±ν¬ μ©λ(κ°€λ λ¨μ)
  double getGallonsOfGasoline() // κ°μλ¦°(κ°€λ λ¨μ)
}

public class Car implements Vehicle {
  double fuelTankCapacityInGallons;
  double gallonsOfGasoline;

  public double getFuelTankCapacityInGallons() {
    return this.fuelTankCapacityInGallons;
  }

  public double getGallonsOfGasoline() {
    return this.gallonsOfGasoline;
  }
}
```

- μμ κ°μ΄ νΉλ³νκ² λΉμ¦λμ€ λ‘μ§μ΄ λ€μ΄κ° μμ§ μκ³  λ¨μν κ°μ λ°ννλ κ²½μ°μλ κ°μ²΄κ° μλκ³  μλ£κ΅¬μ‘°λΌκ³  ν  μ μλ€.

```java
// κ°μ²΄
public interface Vehicle {
  double getPercentFuelRemain()
}

public class Car implements Vehicle {
  double fuelTankCapacityInGallons;
  double gallonsOfGasoline;

  public Car (double fuelTankCapacityInGallons, double gallonsOfGasoline) {
    if(fuelTankCapacityInGallons <= 0) {
      throw new IlligalArgumentException("fuelTankCapacityInGallons must be greater than zero");
    }
    this.fuelTankCapacityInGallons = fuelTankCapacityInGallons;
    this.gallonsOfGasoline = gallonsOfGasoline;
  }

  public double getPercentFuelRemain() {
    return this.gallonsOfGasoline / this.fuelTankCapacityInGallons * 100;
  }
}
```

### μλ£κ΅¬μ‘° vs κ°μ²΄ μμ(2) Shape

```java
public class Square {
  public Point topLeft;
  public double side;
}

public class Rectangle {
  public Point topLeft;
  public double height;
  public double width;
}

public class Circle {
  public Point topLeft;
  public double radius;
}

public class Geometry {
  public final double PI = 3.141592653588793;

  public double area(Object shape) throws NoSuchShapeException {
    if (shape instanceof Square) {
        Square s = (Square) shape;
        return s.side * s.side;
    } else if (shape instanceof Rectangle) {
        Rectangle r = (Rectangle) shape;
        return r.height * r.width;
    } else if (shape instanceof Circle) {
        Circle c = (Circle) shape;
        return PI * c.radius * c.radius;
    }
    throw new NoSuchShapeException();
  }
}
```

### μ μ°¨μ μΈ μ½λλ μλ‘μ΄ μλ£ κ΅¬μ‘°λ₯Ό μΆκ°νκΈ° μ΄λ ΅λ€.

### μλ£ κ΅¬μ‘°κ° μΆκ°λλ©΄ ν¨μλ₯Ό κ³ μ³μΌ νλ€.

```java
public interface Shape {
  public double area();
}
public class Square implements Shape{
  public Point topLeft;
  public double side;

  @Override
  public double area() {
      return side * side;
  }
}

public class Rectangle implements Shape{
  public Point topLeft;
  public double height;
  public double width;

  @Override
  public double area() {
      return height * width;
  }
}

public class Circle implements Shape{
  public Point topLeft;
  public double radius;
  public final double PI = 3.141592653588793;

  @Override
  public double area() {
      return PI * radius * radius;
  }
}
```

### κ°μ²΄μ§ν₯ μ½λλ μλ‘μ΄ ν΄λμ€λ₯Ό μΆκ°νκΈ° μ½λ€.

### νμ§λ§ Shapeμ ν¨μκ° μΆκ° λλ€λ©΄ λͺ¨λ  ν΄λμ€μ μΆκ° λ ν¨μλ₯Ό λͺ¨λ μΆκ° ν΄μ€μΌ νλ λ¨μ μ΄μλ€.

### κ·Έλμ μλ£κ΅¬μ‘°λ κ°μ²΄λ μν©μ λ§λ μ νμ ν΄μ μ¬μ©νλ©΄λλ€.

- μλ£κ΅¬μ‘°λ₯Ό μ¬μ©νλ μ μ°¨μ μΈ μ½λ λ κΈ°λ³Έ μλ£ κ΅¬μ‘°λ₯Ό λ³κ²½νμ§ μμΌλ©΄μ μ ν¨μλ₯Ό μΆκ°νκΈ° μ½λ€.
- μ μ°¨μ μΈ μ½λλ μλ‘μ΄ μλ£ κ΅¬μ‘°λ₯Ό μΆκ°νκΈ° μ΄λ ΅λ€. κ·Έλ¬λ €λ©΄ λͺ¨λ  ν¨μλ₯Ό κ³ μ³μΌ νλ€.

- κ°μ²΄μ§ν₯ μ½λλ κΈ°μ‘΄ ν¨μλ₯Ό λ³κ²½νμ§ μμΌλ©΄μ μ ν΄λμ€λ₯Ό μΆνκΈ° μ½λ€.
- κ°μ²΄ μ§ν₯ μ½λλ μλ‘μ΄ ν¨μλ₯Ό μΆκ°νκΈ° μ΄λ ΅λ€. κ·Έλ¬λ €λ©΄ λͺ¨λ  ν΄λμ€λ₯Ό κ³ μ³μΌ νλ€.

## 02. κ°μ²΄ - λλ―Έν° λ²μΉ

![lawofdemeter.png](lawofdemeter.png)
Image from [https://blog.knoldus.com/the-law-of-demeter/](https://blog.knoldus.com/the-law-of-demeter/)

- λ΄ μΉκ΅¬λ₯Ό νΈμΆνλ κ²μ λμ§λ§ μΉκ΅¬μ μΉκ΅¬λ₯Ό νΈμΆνλ κ²μ μ κ·Όνλ©΄ μλλ€.

### ν΄λμ€ Cμ λ©μλ fλ λ€μκ³Ό κ°μ κ°μ²΄μ λ©μλλ§ νΈμΆν΄μΌ νλ€.

- ν΄λμ€ C
- μμ μ΄ μμ±ν κ°μ²΄
- μμ μ μΈμλ‘ λμ€μ¨ κ°μ²΄
- C μΈμ€ν΄μ€ λ³μμ μ μ₯λ κ°μ²΄

`ν΄λ¦¬μ€ν±: κ²½νμ κΈ°λ°νμ¬ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ λ°κ²¬ν λ°©λ², μμ¬κ²°μ μ λ¨μννκΈ° μν λ²μΉλ€ -> κ²½νμ μΌλ‘ λ§λ€μ΄λΈ λ²μΉ`

### κΈ°μ°¨ μΆ©λ - λλ―Έν°μ λ²μΉμ μ΄κΈλλ μν©

```java
// κ°μ²΄ - κΈ°μ°¨ μΆ©λ. λλ―Έν°μ λ²μΉ μλ°°
final String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();

// μλ£κ΅¬μ‘° - OK
final String outputDir = ctxt.options.scratchDir.absolutePath;

// κ°μ²΄μ λν ν΄κ²°μ±μ΄ μλλ€. getterλ₯Ό ν΅νμ λΏ, κ°μ κ°μ Έμ€λ κ²μ μλ£κ΅¬μ‘°μ΄λ€.
ctxt.getAbsolutePathOfScratchDirectoryOption();
ctxt.getScratchDirectoryOption().getAbsolutePath();

// μ μ λ κ²½λ‘λ₯Ό κ°μ Έμ€λ μ§μ λν΄μ κ·Όλ³Έμ μΈ μμΈμ μκ°ν΄μΌ νλ€.
// κ°μ²΄λ μλ£λ μ¨κΈ°κ³  μλ£λ₯Ό λ€λ£¨λ ν¨μλ§ κ³΅κ°νλ€.
BufferedOutputStream bos = ctxt.createScratchFileStream(classFileName);
```

## 03. DTO (Data Transfer Object) = μλ£κ΅¬μ‘°

```java
public class AddressDto {
  private String street;
  private String zip;
}

public AddressDto(String street, String zip) {
  this.street = street;
  this.zip = zip;
}

public String getStreet() {
  return street;
}

public String setStreet(String street) {
  this.street = street;
}

public String getZip() {
  return zip;
}

public String setZip(String zip) {
  this.zip = zip;
}
```

### λ€λ₯Έ κ³μΈ΅ κ° λ°μ΄ν°λ₯Ό κ΅νν  λ μ¬μ©

- λ‘μ§ μμ΄ νλλ§ κ°λλ€.
- μΌλ°μ μΌλ‘ ν΄λμ€λͺμ΄ Dto(or DTO)λ‘ λλλ€.
- getter / setterλ₯Ό κ°κΈ°λ νλ€.

### \*Beans

- Java Beans: λ°μ΄ν° ννμ΄ λͺ©μ μΈ μλ° κ°μ²΄
- λ§΄λ² λ³μλ private μμ±μ΄λ€.
- getter / setterλ₯Ό κ°μ§λ€.

## 04. Active Record

```java
public class Employee extends ActiveRecord {
  private String name;
  private String address;
  ...
}
// -----

Employee bob = Employee.findByName("Bob Martin");

bob.setName("Robert C. Martin");
bob.save();
```

### Database rowλ₯Ό κ°μ²΄μ λ§΅ννλ ν¨ν΄

- λΉμ¦λμ€ λ‘μ§ λ©μλλ₯Ό μΆκ°ν΄ κ°μ²΄λ‘ μ·¨κΈνλ κ±΄ λ°λμ§νμ§ μλ€.
- λΉμ¦λμ€ λ‘μ§μ λ΄μΌλ©΄μ λ΄λΆ μλ£λ₯Ό μ¨κΈ°λ κ°μ²΄λ λ°λ‘ μμ±νλ€.
- νμ§λ§.. κ°μ²΄κ° λ§μμ§λ©΄ λ³΅μ‘νκ³ , κ°κΉμ΄ κ³³μ κ΄λ ¨ λ‘μ§μ΄ μλ κ²μ΄ μ’μΌλ―λ‘ νμμμλ Entityμ κ°λ¨ν λ©μλλ₯Ό μΆκ°ν΄ μ¬μ©νλ€.

Reference from [https://sites.google.com/site/unclebobconsultingllc/active-record-vs-objects](https://sites.google.com/site/unclebobconsultingllc/active-record-vs-objects)

![activerecord.png](activerecord.png)

### Active Record

- κ°μ²΄κ°rowλ₯Όλ΄μλΏμλλΌ databaseμ λν μ κ·Όμ ν¬ν¨νλ€.
- Personμμμ±μλ΄μλΏμλλΌ,μμ± μμ λκ°μ²΄μμμμνν μμλ€.
- μ¬λ‘- `Ruby on rails`

Reference from [https://martinfowler.com/eaaCatalog/activeRecord.html](https://martinfowler.com/eaaCatalog/activeRecord.html)

![datamapper.png](datamapper.png)

### Data Mapper

- rowλ₯Ό λ΄λ κ°μ²΄μ databaseμ μ κ·Όν  μ μλ κ°μ²΄κ° λΆλ¦¬λμ΄ μλ€.
- Personμ κ°λ§ λ΄κ³  μκ³ ,μμ±,μμ λ± μ‘μμ Person Mapperμμ λ΄λΉνλ€.
- μ¬λ‘-`Hibernate`

Reference from [https://martinfowler.com/eaaCatalog/dataMapper.html](https://martinfowler.com/eaaCatalog/dataMapper.html)

`νμ¬ λ΄κ° μΌνλ κ΄μ μμ μκ°ν΄ λ³Έλ€λ©΄ λ΄κ° μ§κΈκΉμ§ λ§λ  κ²λ€μ΄ κ°μ²΄κ° μλκ³  μλ£κ΅¬μ‘° μκ΅¬λ λΌλ κ²μ λκΌλ€. ν­μ κ°μ²΄κ° μ΄λ€ κ±΄μ§ νμ€νκ² μλΏμ§λ μμλλ° μ΄λ² κ³κΈ°λ₯Ό ν΅ν΄μ νμ€νκ² λ€ μμλ€ λ³΄λ€λ κ·Έλλ κ°μ²΄μ λν΄μ κ°λμ μΈ μ΄ν΄λ₯Ό λμ΄μ μ€μ λ‘ μ΄λ€ κ²μ΄ κ°μ²΄λ₯Ό κ°λ¦¬ν€λ κ²μΈμ§μ λν΄μλ μκ² λ κ³κΈ°μλ κ² κ°λ€.`

```toc

```
