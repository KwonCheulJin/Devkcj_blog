---
emoji: π
title: μ λ‘λ² μ΄μ€-νλ¬νκΆ ν΄λ¦°μ½λ(Chapter.9)
date: '2022-01-15 20:38:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java CleanCode TIL
categories: CleanCode
---

# Chapter 9 - λ¨μ νμ€νΈ

## 01. νμ€νΈ μ½λμ μ€μμ±

1. νμ€νΈ μ½λλ μ€μλ₯Ό λ°λ‘μ‘μμ€λ€.
2. νμ€νΈ μ½λλ λ°λμ μ‘΄μ¬ν΄μΌνλ©°, μ€μ  μ½λ λͺ»μ§μκ² μ€μνλ€.
3. νμ€νΈ μΌμ΄μ€λ λ³κ²½μ΄ μ½λλ‘ νλ€. μ½λμ μ μ°μ±, μ μ§λ³΄μμ±, μ¬μ¬μ©μ±μ μ κ³΅νλ λ²νλͺ©μ΄ λ°λ‘ λ¨μνμ€νΈλ€. νμ€νΈ μΌμ΄μ€κ° μμΌλ©΄ λ³κ²½μ΄ λλ ΅μ§μλ€. νμ€νΈ μΌμ΄μ€κ° μλ€λ©΄ λͺ¨λ  λ³κ²½μ΄ μ μ μ μΈ λ²κ·Έλ€. νμ€νΈ μ»€λ²λ¦¬μ§κ° λμμλ‘ λ²λκ² λν μ½©λ³΄κ° μ€μ΄λ λ€.
4. μ§μ λΆν νμ€νΈ μ½λλ νμ€νΈλ₯Ό μνλλ§ λͺ»νλ€.

### &lt;Effective Unit Test&gt; νμ€νΈμ μ€μμ±

> νμ€νΈλ μ€μ¬μ©μ μ ν©ν μ€κ³λ₯Ό λμ΄λ΄μ€λ€. <br>
> νμ€νΈλ₯Ό μμ±ν΄μ μ»κ² λλ κ°μ₯ ν° μνμ νμ€νΈ μμ²΄κ° μλλ€. μμ± κ³Όμ μμ μ»λ κΉ¨λ¬μμ΄λ€.

### νμ€νΈλ μλνλμ΄μΌ νλ€.

## 02. νμ€νΈμ μ’λ₯

### Test Pyramid

- Unit Test: νλ‘κ·Έλ¨ λ΄λΆμ κ°λ³ μ»΄ν¬λνΈμ λμμ νμ€νΈνλ€. λ°°ν¬νκΈ° μ μ μλμΌλ‘ μ€νλλλ‘ λ§μ΄ μ¬μ©νλ€.

- Integration Test: νλ‘κ·Έλ¨ λ΄λΆμ κ°λ³ μ»΄ν¬λνΈλ€μ ν©μ³μ λμμ νμ€νΈνλ€. Unit Testλ κ° μ»΄ν¬λνΈλ₯Ό κ³ λ¦½μμΌ νμ€νΈ νκΈ° λλ¬Έμ μ»΄ν¬λνΈμ interactionμ νμΈνλ Integration Testκ° νμνλ€.

- E2E Test: End to End Test. μ€μ  μ μ μ μλλ¦¬μ€λλ‘ λ€νΈμν¬λ₯Ό ν΅ν΄ μλ²μ Endpointλ₯Ό νΈμΆν΄ νμ€νΈνλ€.

## 03. Unit Test μμ±

### νμ€νΈ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νμ.

- [JUnit](https://junit.org/junit5/):forunittest
- [Mockito](https://site.mockito.org/):formockingdependencies
- [Wiremock](http://wiremock.org/):forstubbingoutexternalservices
- [Pact](https://docs.pact.io/):forwritingCDCtests
- [Selenium](https://www.selenium.dev/):forwritingUI-drivenend-to-endtests
- [REST-assured](https://github.com/rest-assured/rest-assured):forwritingRESTAPI-drivenend-to-endtests

### Test Double

- νμ€νΈμμ μλ³Έ κ°μ²΄λ₯Ό λμ νλ κ°μ²΄

#### Stub

- μλμ κ΅¬νμ μ΅λν λ¨μν κ²μΌλ‘ λμ²΄νλ€.

- νμ€νΈλ₯Ό μν΄ νλ‘κ·Έλλ°λ ν­λͺ©μλ§ μλ΅νλ€.

#### Spy

- Stubμ μ­ν μ νλ©΄μ νΈμΆμ λν μ λ³΄λ₯Ό κΈ°λ‘νλ€.

- μ΄λ©μΌ μλΉμ€μμ λ©μμ§κ° λͺ λ² μ μ‘λμλμ§ νμΈν  λ

#### Mock

- νμλ₯Ό κ²μ¦νκΈ° μν΄ κ°μ§ κ°μ²΄λ₯Ό λ§λ€μ΄ νμ€νΈνλ λ°©λ²

- νΈμΆμ λν λμμ νλ‘κ·Έλλ°ν  μ μλ€.

- Stubμ μνλ₯Ό κ²μ¦νκ³  Mockμ νμλ₯Ό κ²μ¦νλ€.

### given-when-then ν¨ν΄μ μ¬μ©νμ

- given : νμ€νΈμ λν pre-condition

- when : νμ€νΈνκ³  μΆμ λμ νΈμΆ

- then : νμ€νΈ κ²°κ³Ό νμΈ

```java
public void testGetPageHierarchyAsXml() throws Exception {
  givenPages("PageOne", "PageOne.ChildOne", "PageTwo");

  whenRequestIsIssued("root", "type:pages");

  thenResponseShouldBeXml();
}

public void testGetPageHierarchyHasRightTags() throws Exception {
  givenPages("PageOne", "PageOne.ChildOne", "PageTwo");

  whenRequestIsIssued("root", "type:pages");

  thenResponseShouldContain(
    "<name>PageOne</name>", "<name>PageTwo</name>", "<name>ChildOne</name>"
  );
}
```

### Spring Boot Application Test μμ 

Code from - [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)

#### ExampleController - main Code

```java
@RestController
public class ExampleController {

    private final PersonRepository personRepo;

    @Autowired
    public ExampleController(final PersonRepository personRepo) {
        this.personRepo = personRepo;
    }

    @GetMapping("/hello/{lastName}")
    public String hello(@PathVariable final String lastName) {
        Optional<Person> foundPerson = personRepo.findByLastName(lastName);

        return foundPerson
                .map(person -> String.format("Hello %s %s!",
                        person.getFirstName(),
                        person.getLastName()))
                .orElse(String.format("Who is this '%s' you're talking about?",
                        lastName));
    }
}
```

#### ExampleController - Unit Test

- PersonRepository Mock μ¬μ©
- given-when-then κ΅¬μ‘°
- repositoryμμ κ°μ μ½μ΄μμ λμ μ½μ΄μ€μ§ λͺ»νμ λ 2κ°μ§ κ²½μ°λ₯Ό νμ€νΈ

```java
public class ExampleControllerTest {

    private ExampleController subject;

    @Mock
    private PersonRepository personRepo;

    @Before
    public void setUp() throws Exception {
        initMocks(this);
        subject = new ExampleController(personRepo);
    }

    @Test
    public void shouldReturnFullNameOfAPerson() throws Exception {
        Person peter = new Person("Peter", "Pan");
        given(personRepo.findByLastName("Pan"))
            .willReturn(Optional.of(peter));

        String greeting = subject.hello("Pan");

        assertThat(greeting, is("Hello Peter Pan!"));
    }

    @Test
    public void shouldTellIfPersonIsUnknown() throws Exception {
        given(personRepo.findByLastName(anyString()))
            .willReturn(Optional.empty());

        String greeting = subject.hello("Pan");

        assertThat(greeting, is("Who is this 'Pan' you're talking about?"));
    }
}
```

#### Integration Test(Database)

- PersonRepositoryμ΄ λ°μ΄ν° λ² μ΄μ€μ μ°κ²°λ  μ μλμ§ νμΈ
- in-memory DBμΈ h2λ‘ νμ€νΈ
- findByLastNameκ° μ μμ μΌλ‘ λμνλμ§ νμΈ

```java
@RunWith(SpringRunner.class)
@DataJpaTest
public class PersonRepositoryIntegrationTest {
    @Autowired
    private PersonRepository subject;

    @After
    public void tearDown() throws Exception {
        subject.deleteAll();
    }

    @Test
    public void shouldSaveAndFetchPerson() throws Exception {
        Person peter = new Person("Peter", "Pan");
        subject.save(peter);

        Optional<Person> maybePeter = subject.findByLastName("Pan");

        assertThat(maybePeter, is(Optional.of(peter)));
    }
}
```

#### Integration Test(Service)

- WireMockμ μ΄μ©ν΄ mock μλ²λ₯Ό λμ΄λ€.
- clientκ° μ€μ  μλ²κ° μλ mock μλ²λ‘ μμ²­νκ² ν΄μ clientμ λμμ νμ€νΈνλ€.

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class WeatherClientIntegrationTest {

    @Autowired
    private WeatherClient subject;

    @Rule
    public WireMockRule wireMockRule = new WireMockRule(8089);

    @Test
    public void shouldCallWeatherService() throws Exception {
        //given
        wireMockRule.stubFor(get(urlPathEqualTo("/some-test-api-key/53.5511,9.9937"))
                .willReturn(aResponse()
                        .withBody(FileLoader.read("classpath:weatherApiResponse.json"))
                        .withHeader(CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .withStatus(200)));
        //when
        Optional<WeatherResponse> weatherResponse = subject.fetchWeather();
        //then
        Optional<WeatherResponse> expectedResponse = Optional.of(new WeatherResponse("Rain"));
        assertThat(weatherResponse, is(expectedResponse));
    }
}
```

## 04. FIRST μμΉ

#### F(Fast): λΉ λ₯΄κ²

- νμ€νΈλ λΉ¨λ¦¬ λμμΌ νλ€. μμ£Ό λλ €μΌ νκΈ° λλ¬Έμ΄λ€.

#### I(Independent): λλ¦½μ μΌλ‘

- κ° νμ€νΈλ₯Ό λλ¦½μ μΌλ‘ μμ±νλ€. μλ‘μκ² μμ‘΄νλ©΄ μ€ν¨ν μμΈμ μ°ΎκΈ° μ΄λ €μμ§λ€.(λ€λ₯Έ νμ€νΈμ μ€ν¨λ‘ μΈνκ±΄μ§, μ½λ μ€λ₯μΈμ§)

#### R(Repeatable): λ°λ³΅κ°λ₯νκ²

- νμ€νΈλ μ΄λ€ νκ²½μμλ λ°λ³΅κ°λ₯ν΄μΌ νλ€. μ€μ  νκ²½, QAνκ²½, λͺ¨λ  νκ²½μμ λμκ°μΌ νλ€.

#### S(Self-Validating): μκ°κ²μ¦νλ

- νμ€νΈλ boolκ°μΌλ‘ κ²°κ³Όλ₯Ό λ΄μΌ νλ€.

#### T(Timely): μ μμ

- νμ€νΈ νλ €λ μ€μ  μ½λλ₯Ό κ΅¬ννκΈ° μ§μ μ κ΅¬ννλ€.

```toc

```
