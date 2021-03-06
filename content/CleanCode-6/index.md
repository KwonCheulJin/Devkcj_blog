---
emoji: ๐
title: ์ ๋ก๋ฒ ์ด์ค-ํ๋ฌํ๊ถ ํด๋ฆฐ์ฝ๋(Chapter.7)
date: '2022-01-12 20:20:00'
author: ์ดฌ์ค
tags: ๋ธ๋ก๊ทธ Java CleanCode TIL
categories: CleanCode
---

# Chapter 7 - ์ค๋ฅ ์ฒ๋ฆฌ

## 01. ์์ธ ์ฒ๋ฆฌ ๋ฐฉ์

### ์ค๋ฅ ์ฝ๋๋ฅผ ๋ฆฌํดํ์ง ๋ง๊ณ , ์์ธ๋ฅผ ๋์ ธ๋ผ

```java
public class DeviceController {
...
  public void sendShutDown() {
    //Check the state of the device
    if(handle != DeviceHandle.INVALID) {
      //Save the device status to the record field
      retrieveDeviceRecord(handle);
      // If not suspended, shut down
      if(record.getStatus() != DEVICE_SUSPENDED) {
        pauseDevice(handle);
        clearDeviceWorkQueue(handle);
        closeDevice(handle);
      } else {
        logger.log("Device suspended. Unable to shut down");
      }
    } else {
        logger.log("Invalid handle for : " + DEV1.toString());
    }
  }
...
}
```

<h3 style="text-align: center;"> โฌ๏ธ Bad Case </h3>

- ์๋ ์๋ ์ค๋ฅ๋ฅผ ๋ํ๋ผ ๋ ์๋ฌ์ฝ๋๋ฅผ ๋์ก๋ค.
- ํ์ง๋ง ์์ธ๋ฅผ ๋์ง๋ ๊ฒ์ด ๋ชํํ๊ณ , ์ฒ๋ฆฌ ํ๋ฆ์ด ๊น๋ํด์ง๋ค.

```java
public class DeviceController {
...
  public void sendShutDown() {
    try {
      tryToShutDown();
    } catch (DeviceShutDownError e) {
      logger.log(e);
    }
  }
  private void tryToShutDown() throws DeviceShutDownError {
      DeviceHandle handle = getHandle(DEV1);
      DeviceRecord record = retrieveDeviceRecord(handle);
      pauseDevice(handle);
      clearDeviceWorkQueue(handle);
      closeDevice(handle);
  }

  private DeviceHandle getHandle(DeviceId id) {
    ...
    throw new DeviceShutDownError("Invalid handle for: " + id.toString());
    ...
  }
...
}
```

<h3 style="text-align: center;"> โฌ๏ธ Good Case </h3>

- ์ค๋ฅ๊ฐ ๋ฐ์ํ ๋ถ๋ถ์์ ์์ธ๋ฅผ ๋์ง๋ค. (๋ณ๋์ ์ฒ๋ฆฌ๊ฐ ํ์ํ ์์ธ๋ผ๋ฉด checked Exception์ผ๋ก ๋์ง๋ค.)
- checked exception์ ๋ํ ์์ธ์ฒ๋ฆฌ๋ฅผ ํ์ง ์๋๋ค๋ฉด ๋ฉ์๋ ์ ์ธ๋ถ์ throws๋ฅผ ๋ช์ํด์ผ ํ๋ค.
- ์์ธ๋ฅผ ์ฒ๋ฆฌํ  ์ ์๋ ๊ณณ์์ catchํ์ฌ ์ฒ๋ฆฌํ๋ค.

## 02. Unchecked Exception์ ์ฌ์ฉํ๋ผ

### Checked vs Unchecked Exeption

- Exception์ ์์ํ๋ฉด Checked Exeption ๋ช์์ ์ธ ์์ธ์ฒ๋ฆฌ๊ฐ ํ์ํ๋ค
  - (์) IOException, SQLException
- RuntimeException์ ์์ํ๋ฉด Unchecked Exeption ๋ช์์ ์ธ ์์ธ์ฒ๋ฆฌ๊ฐ ํ์ํ์ง ์๋ค.
  - (์) NullPointException, IllegalArgumentException, IndexOutOfBoundException

### &lt;Effective Java&gt; Exception์ ๊ดํ ๊ท์ฝ

> ์๋ฐ ์ธ์ด ๋ช์ธ๊ฐ ์๊ตฌํ๋ ๊ฒ์ ์๋์ง๋ง, ์๊ณ์ ๋๋ฆฌ ํผ์ง ๊ท์ฝ์ผ๋ก <br> > `Errorํด๋์ค๋ฅผ ์์ํด ํ์ ํด๋์ค๋ฅผ ๋ง๋๋ ์ผ์ ์์ ํ์.` <br>
> ์ฆ, ์ฌ์ฉ์๊ฐ ์ง์  ๊ตฌํํ๋ unchecked throwable์ ๋ชจ๋ `RuntimeException์ ํ์ ํด๋์ค`์ฌ์ผ ํ๋ค. <br>
> Exception, RuntimeException, Error๋ฅผ ์์ํ์ง ์๋ throwable์ ๋ง๋ค ์๋ ์์ง๋ง, ์ด๋ฌํ throwable์ ์ ์์ ์ธ ์ฌํญ๋ณด๋ค ๋์ ๊ฒ ํ๋๋ ์์ผ๋ฉด์ API ์ฌ์ฉ์๋ฅผ ํท๊ฐ๋ฆฌ๊ฒ ํ  ๋ฟ์ด๋ฏ๋ก ์ ๋๋ก ์ฌ์ฉํ์ง ๋ง์.

### Checked Exeption์ด ๋์ ์ด์ 

```java
public class DeviceController {
...
  public void sendShutDown() { // 3
    try {
      tryToShutDown();
    } catch (DeviceShutDownError e) {
      logger.log(e);
    }
  } // 3
  private void tryToShutDown() throws DeviceShutDownError { // 2
      DeviceHandle handle = getHandle(DEV1);
      DeviceRecord record = retrieveDeviceRecord(handle);
      pauseDevice(handle);
      clearDeviceWorkQueue(handle);
      closeDevice(handle);
  }

  private DeviceHandle getHandle(DeviceId id) {
    ...
    throw new DeviceShutDownError("Invalid handle for: " + id.toString()); // 1
    ...
  }
...
}
```

1. ํน์  ๋ฉ์๋์์ checked exception์ throwํ๊ณ  ์์ ๋ฉ์๋์์ ๊ทธ exception์ catchํ๋ค๋ฉด ๋ชจ๋  ์ค๊ฐ๋จ๊ณ ๋ฉ์๋์ exception์ throwsํด์ผ ํ๋ค.
2. OCP(๊ณ๋ฐฉ ํ์ ์์น) ์๋ฐฐ
   - ์์ ๋ ๋ฒจ ๋ฉ์๋์์ ํ์ ๋ ๋ฒจ ๋ฉ์๋์ ๋ํ์ผ์ ๋ํด ์์์ผ ํ๊ธฐ ๋๋ฌธ์ OCP ์์น์ ์๋ฐฐ๋๋ค.
3. ํ์ํ ๊ฒฝ์ฐ checked exception์ ์ฌ์ฉํด์ผ ๋์ง๋ง ์ผ๋ฐ์ ์ธ ๊ฒฝ์ฐ ๋๋ณด๋ค ์ค์ด ๋ง๋ค.

### Unchecked Exeption์ ์ฌ์ฉํ์

> ์์ ์ ์ธ ์ํํธ์จ์ด๋ฅผ ์ ์ํ๋ ์์๋ก ํ์ธ๋ ์์ธ๊ฐ ๋ฐ๋์ ํ์ํ์ง๋ ์๋ค๋ ์ฌ์ค์ด ๋ถ๋ชํด์ก๋ค. <br>
> C#์ ํ์ธ๋ ์์ธ๋ฅผ ์ง์ํ์ง ์๋๋ค ์์์ ์ธ ์๋์๋ ๋ถ๊ตฌํ๊ณ  <br>
> C++์ญ์ ํ์ธ๋ ์์ธ๋ฅผ ์ง์ํ์ง ์๋๋ค. ํ์ด์ฌ์ด๋ ๋ฃจ๋น๋ ๋ง์ฐฌ๊ฐ์ง๋ค. <br>
> ๊ทธ๋ผ์๋ ๋ถ๊ตฌํ๊ณ  C#, C++, ํ์ด์ฌ, ๋ฃจ๋น๋ ์์ ์ ์ธ ์ํํธ์จ์ด๋ฅผ ๊ตฌํํ๊ธฐ์ ๋ฌด๋ฆฌ๊ฐ ์๋ค.

## 03. Exeption ์ ์ฐ๊ธฐ

### ์์ธ์ ๋ฉ์์ง๋ฅผ ๋ด๊ธฐ

```java
public class DeviceController {
...
  private DeviceHandle getHandle(DeviceId id) {
    ...
    throw new DeviceShutDownError("Invalid handle for: " + id.toString());
    ...
  }
...
}
```

- ์ค๋ฅ๊ฐ ๋ฐ์ํ ์์ธ๊ณผ ์์น๋ฅผ ์ฐพ๊ธฐ ์ฝ๋๋ก, ์์ธ๋ฅผ ๋์ง ๋๋ ์ ํ ์ํฉ์ ์ถฉ๋ถํ ๋ง๋ถ์ธ๋ค.
- ์คํจํ ์ฐ์ฐ ์ด๋ฆ๊ณผ ์ ํ ๋ฑ ์ ๋ณด๋ฅผ ๋ด์ ์์ธ๋ฅผ ๋์ง๋ค.

### exception wrapper

```java
ACMEport port = new ACMEport(12);
try{
  port.open();
} catch(DeviceResponseException e) {
  reportPortError(e);
  logger.log("Device response exception", e);
} catch(ATM1212UnlockedEcveption e) {
  reportPortError(e);
  logger.log("Unlock exception", e);
} catch(GMXError e) {
  reportPortError(e);
  logger.log("Device response exception", e);
} finally {
  ...
}
```

- ๋ก๊ทธ๋ฅผ ์ฐ์ ๋ฟ ํ  ์ ์๋๊ฒ ์๋ค.

```java
LocalPort port = new Localport(12);
try{
  port.open();
} catch(PortDeviceFailure e) {
  reportPortError(e);
  logger.log(e.getMessage(), e);
} finally {
  ...
}

public class Localport {
  private ACMEport innerPort;
  public Localport(int portNumber) {
    innerPort = new ACMEport(portNumber);
  }

  public void open(){
    try{
      innerPort.open();
    } catch(DeviceResponseException e) {
      throw new PortDeviceFailure(e);
    } catch(ATM1212UnlockedEcveption e) {
      throw new PortDeviceFailure(e);
    } catch(GMXError e) {
      throw new PortDeviceFailure(e);
    }
  }
}
```

#### ์์ธ๋ฅผ ๊ฐ์ธ๋ ํด๋์ค๋ฅผ ๋ง๋ ๋ค.

- port.open() ์ ๋ฐ์ํ๋ checked exception๋ค์ ๊ฐ์ธ๋๋ก port๋ฅผ ๊ฐ์ง๋ LocalPort ํด๋์ค๋ฅผ ๋ง๋ ๋ค.
- port.open()์ด ๋์ง๋ checked exception๋ค์ ํ๋์ PortDeviceFailure exception์ผ๋ก ๊ฐ์ธ์ ๋์ง๋ค.

## 04. ์ค๋ฌด ์์ธ ์ฒ๋ฆฌ ํจํด

### getOrElse - ์์ธ ๋์  ๊ธฐ๋ณธ๊ฐ์ ๋ฆฌํดํ๋ค.

1. null์ด ์๋ ๊ธฐ๋ณธ๊ฐ์ ๋ฆฌํดํ๋ค.

```java
List<Employee> employees = getEmployee();
if(employees != null) {
  for(Employee e : employees) {
    totalPay += e.getPay()
  }
}
```

<h3 style="text-align: center;"> โฌ๏ธ Bad Case </h3>
- getEmployees๋ฅผ ์ค๊ณํ  ๋, ๋ฐ์ดํฐ๊ฐ ์๋ ๊ฒฝ์ฐ๋ฅผ null๋ก ํํํ๋๋ฐ null์ ๋ฆฌํดํ๋ค๋ฉด ์ดํ ์ฝ๋์์ ๋ชจ๋ null ์ฒดํฌ๊ฐ ์์ด์ผ ํ๋ค.

```java
List<Employee> employees = getEmployee();
for(Employee e : employees) {
  totalPay += e.getPay()
}

public List<Employee> getEmployees() {
  if(.. there are no employees ..) {
    return Collection.emptyList();
  }
}
```

<h3 style="text-align: center;"> โฌ๏ธ Good Case </h3>
- ๋ณต์ํ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ๋๋ ๋ฐ์ดํฐ์ ์์์ ์๋ฏธํ๋ ์ปฌ๋ ์์ ๋ฆฌํดํ๋ฉด ๋๋ค. null ๋ณด๋ค size๊ฐ 0์ธ ์ปฌ๋ ์์ด ํจ์ฌ ์์ ํ๋ค.

### ๋น ์ปฌ๋ ์, ๋น ๋ฌธ์์ด์ ์ ์ฉํ  ์ ์๋ ๊ฒฝ์ฐ

2. ๋๋ฉ์ธ์ ๋ง๋ ๊ธฐ๋ณธ๊ฐ์ ๊ฐ์ ธ์จ๋ค.

```java
UserLevel userLevel = null;
try {
  User user = userRepository.findByUserId(userId);
  userLevel = user.getUserLevel();
} catch (UserNotFoundException e) {
  userLevel = UserLevel.BASIC;
}
// userLevel์ ์ด์ฉํ ์ฒ๋ฆฌ
```

- ํธ์ถ๋ถ์์ ์์ธ ์ฒ๋ฆฌ๋ฅผ ํตํด userLevel ๊ฐ์ ์ฒ๋ฆฌํ๋ค. ๊ทธ๋ฌ๋ ์ฝ๋๋ฅผ ๊ณ์ ์ฝ์ด ๋๊ฐ๋ฉด์ ๋ผ๋ฆฌ์ ์ธ ํ๋ฆ์ด ๋๊ธด๋ค.
<h3 style="text-align: center;"> โฌ๏ธ </h3>

`ํธ์ถ๋ถ`

```java
UserLevel userLevel = userService.getUserLevelOrDefault(userId);
// userLevel์ ์ด์ฉํ ์ฒ๋ฆฌ
```

---

```java
pubilc class UserService {
  private static final UserLevel USER_BASIC_LEVEL = UserLevel.BASIC;

  public UserLevel getUserLevelOrDefault(Long userId) {
    try {
      User user = userRepository.findByUserId(userId);
      return user.getUserLevel();
    } catch (UserNotFoundException e) {
      return USER_BASIC_LEVEL;
    }
  }
}
```

- ์์ธ ์ฒ๋ฆฌ๋ฅผ ๋ฐ์ดํฐ๋ฅผ ์ ๊ณตํ๋ ์ชฝ์์ ์ฒ๋ฆฌํด ํธ์ถ๋ถ ์ฝ๋๊ฐ ์ฌํํด์ง๋ค.
- ์ฝ๋๋ฅผ ์ฝ์ด๊ฐ๋ฉฐ ๋ผ๋ฆฌ์ ์ธ ํ๋ฆ์ด ๋๊ธฐ์ง ์๋๋ค.
- ๋๋ฉ์ธ์ ๋ง๋ ๊ธฐ๋ณธ๊ฐ์ ๋๋ฉ์ธ ์๋น์ค์์ ๊ด๋ฆฌํ๋ค.

### ๋๋ฉ์ธ์ ๋ง๋ ๊ธฐ๋ณธ๊ฐ์ด ์๋ ๊ฒฝ์ฐ

### getOrElseThrow - null ๋์  ์์ธ๋ฅผ ๋์ง๋ค.

1. null ์ฒดํฌ ์ง์ฅ์์ ๋ฒ์ด๋์.

```java
public void registerItem(Item item) {
  if(item != null) {
    ItemRepository registry = persistentStore.getItemRegistry();
    if(registry != null) {
      Item existing = registry.getItem(item.getId());
      if(existing.getBillingPeriod().hasRetailOwner()) {
        existing.register(item);
      }
    }
  }
}
```

- null ์ฒดํฌ๊ฐ ๋น ์ง ๋ถ๋ถ์ด ๋ฐ์ํ  ์ ์๋ค.
- persistentStore์ ๋ํ null ์ฒดํฌ๊ฐ ๋น ์ ธ ์์ง๋ง ์์์ฑ ์ ์๋ค.
- ์ฝ๋ ๊ฐ๋์ฑ์ด ํ์ ํ ๋จ์ด์ง๋ค.

2. ๊ธฐ๋ณธ๊ฐ์ด ์์ ๋ null ๋์  ์์ธ๋ฅผ ๋์ง๋ค.

```java
User user = userRepository.findByUserId(userId);
if(user != null) {
  // user๋ฅผ ์ด์ฉํ ์ฒ๋ฆฌ
}
```

- user๋ฅผ ์ฌ์ฉํ๋ ์ชฝ์์  ๋งค๋ฒ null ์ฒดํฌ๋ฅผ ํด์ผํ๋ค.
- ๊ฐ๋์ฑ๋ฟ ์๋๋ผ ์์ ์ฑ๋ ๋จ์ด์ง๋ค.
<h3 style="text-align: center;"> โฌ๏ธ </h3>

`ํธ์ถ๋ถ`

```java
User user = userService.getUserOrElseThrow(userId);
// user์ ์ด์ฉํ ์ฒ๋ฆฌ
```

---

```java
pubilc class UserService {
  private static final UserLevel USER_BASIC_LEVEL = UserLevel.BASIC;

  public User getUserOrElseThrow(Long userId) {
    User user = userRepository.findByUserId(userId);
    if(user == null) {
      throw new IllegalArgumentException("User is not found. userId = " + userId);
    }
    return user;
  }
}
```

- ๋ฐ์ดํฐ๋ฅผ ์ ๊ณตํ๋ ์ชฝ์์ null ์ฒดํฌ๋ฅผ ํ์ฌ, ๋ฐ์ดํฐ๊ฐ ์๋ ๊ฒฝ์ฐ์ ์์ธ๋ฅผ ๋์ง๋ค.
- ํธ์ถ๋ถ์์ ๋งค๋ฒ null ์ฒดํฌ๋ฅผ ํ  ํ์ ์์ด ์์ ํ๊ฒ ๋ฐ์ดํฐ๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
- ํธ์ถ๋ถ์ ๊ฐ๋์ฑ์ด ์ฌ๋ผ๊ฐ๋ค.

### ํ๋ผ๋ฏธํฐ์ null์ ์ ๊ฒํ๋ผ

```java
public class MetricsCalculator {
  public double xProjection(Point p1, Point p2) {
    return (p2.x - p1.x) * 1.5;
  }
}

// calculator.xProjection(null, new Point(12, 13));
// NullPointerException ๋ฐ์ํ๋ค.
```

- null์ ๋ฆฌํดํ๋ ๊ฒ๋ ๋์์ง๋ง null์ ๋ฉ์๋๋ก ๋๊ธฐ๋ ๊ฒ์ ๋ ๋์๋ค.
- null์ ๋ฉ์๋์ ํ๋ผ๋ฏธํฐ๋ก ๋ฃ์ด์ผ ํ๋ API๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๊ฐ ์๋๋ฉด null์ ๋ฉ์๋๋ก ๋๊ธฐ์ง ๋ง๋ผ.
<h3 style="text-align: center;"> โฌ๏ธ </h3>

```java
public class MetricsCalculator {
  public double xProjection(Point p1, Point p2) {
    if(p1 == null || p2 == null) {
      throw InvalidArgumentException("Invalid argument for MetricsCalculator.xProjection");
    }
    return (p2.x - p1.x) * 1.5;
  }
}
```

- null์ด ๋ค์ด์ค๋ฉด unchecked exception์ ๋ฐ์์ํจ๋ค.

```java
public class MetricsCalculator {
  public double xProjection(Point p1, Point p2) {
    assert p1 != null : "p1 should not be null";
    assert p2 != null : "p2 should not be null";

    return (p2.x - p1.x) * 1.5;
  }
}
```

- assert๋ฅผ ํตํด null์ด ๋ค์ด์ค๋ฉด ์๋ฌ๋ฅผ ๋ฐ์์ํจ๋ค.
- ์ค๋ฌด์์๋ ์๋ฌ๋ฅผ ๋์ ธ์ฃผ๋ ๋ฐฉ๋ฒ์ ๋ ์ ํธํ๋ค.

### ์ค๋ฌด์์๋ ๋ณดํต ์์ ์ ์์ธ๋ฅผ ์ ์ํ๋ค.

```java
public class MyProjectException extends RuntimeException {
  private MyErrorCode errorCode;
  private String errorMessage;

  public MyProjectException(MyErrorCode errorCode) {
    //..
  }

  public MyProjectException(MyErrorCode errorCode, String errorMessage) {
    //..
  }
}

public enum MyErrorCode {
  private String defaultErrorMessage;

  INVALID_REQUEST("์๋ชป๋ ์์ฒญ์๋๋ค."),
  DUPLICATED_REQUEST("๊ธฐ๋ณธ ์์ฒญ๊ณผ ์ค๋ณต๋์ด ์ฒ๋ฆฌ ํ  ์ ์์ต๋๋ค."),
  //..
  INTERNAL_SERVER_ERROR("์ฒ๋ฆฌ ์ค ์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค.");
}

// ํธ์ถ๋ถ
if (request.getUserName() == null) {
  throw new MyProjectException(ErrorCode.INVALID_REQUEST, "userName is null");
}
```

#### ์ฅ์ 

- ์๋ฌ ๋ก๊ทธ์์ stacktrace ํด๋ดค์ ๋ ์ฐ๋ฆฌ๊ฐ ๋ฐ์์ํจ ์์ธ๋ผ๋ ๊ฒ์ ๋ฐ๋ก ์ธ์งํ  ์ ์๋ค.
- ๋ค๋ฅธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ๋ฐ์ํ ์๋ฌ์ ์์ด์ง ์๋๋ค. ์ฐ๋ฆฌ๋ IllegalArgumentException์ ๋์ง๋ ๊ฒ๋ณด๋ค ์ฐ๋ฆฌ ์์ธ๋ก ๋์ง๋๊ฒ ์ด๋ ๋ถ๋ถ์์ ์๋ฌ๊ฐ ๋ฌ๋ ์ง ํ์ํ๊ธฐ์ ์ฉ์ดํ๋ค.
- ์ฐ๋ฆฌ ์์คํ์์ ๋ฐ์ํ ์๋ฌ์ ์ข๋ฅ๋ฅผ ๋์ดํ  ์ ์๋ค.

`์ค๋ฅ ์ฒ๋ฆฌ์ ๋ํ ๋ฐฉ์์ ์ต๊ทผ์ ํ๋ก์ ํธ ํ๋ฉด์ ์ฌ๋ฌ๊ฐ์ง ์ผ์ ๊ฒช๋ค๋ณด๋ ์ค์ํ๋ค๊ณ  ๋ง์ด ๋๋ผ๊ณ  ์์๋ค. ๋ด๊ฐ ์ง์  Exception์ ๋ง๋ค์ด์ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๋ฅผ ์์ง ๊ฒช์ด๋ณด์ง ์์์ ์ค๋ ๋ฐฐ์ด ๋ถ๋ถ์ ๋ํด์ ์ ์ดํดํ๊ณ  ์๋ค๊ฐ ๋น์ทํ ์ผ์ด์ค๊ฐ ๋ฐ์ํ์ ๋ ์ ์ฉ์ ํด๋ด์ผ ๊ฒ ๋ค.`

```toc

```
