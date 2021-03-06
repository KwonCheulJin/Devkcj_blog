---
emoji: π±
title: PRG (Post/Redirect/Get)
date: '2021-10-05 22:44:00'
author: μ΄¬μ€
tags: λΈλ‘κ·Έ Java SpringMVC TIL
categories: SpringMVC
---

μ€λμ μΈνλ°μ κΉμνλ [μ€νλ§ MVC 1νΈ - λ°±μλ μΉ κ°λ° ν΅μ¬ κΈ°μ ](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1/dashboard)μ λ§λ¬΄λ¦¬νμλ€.

λ§€μΌ 1~2μκ°μ© λμ΄κ°λ©΄μ κ°μλ₯Ό λ£λ€λ³΄λ λ°°μΈ λλ§ κΈ°μ΅λκ³  λ€μ λ€μλλ μ μ λ°°μ λ λ΄μ©μ΄ μ κΈ°μ΅λμ§λ μλλ€.

μκ°λ΄μ μ μ²΄λ₯Ό λ€μ νλ² λ€μ΄λ΄μΌκ² λ€.

κ°μ λ΄μ© μ€ λ§μ§λ§ λ΄μ©μΈ PRG(Post/Redirect/Get)μ λν΄μ κΈμ λ¨κΈ΄λ€.

## 1. PRG(Post/Redirect/Get) μ μ© μ 

- μνμ λ±λ‘νκ³  λμ μλμ κ²½λ‘λ‘ μ΄λνκ² λμμ λμ λ¬Έμ μ μ μλ‘κ³ μΉ¨μ νκ² λλ©΄ μνμ΄ μ§μμ μΌλ‘ λ±λ‘μ΄ λλ€λ κ²μ΄λ€.

`BasicItemController.java`

```java
@PostMapping("/add")
public String addItemV4(Item item) {
    itemRepository.save(item);
    return "basic/item";
}
```

<div align = "center">

![form-post-redirectX.gif](form-post-redirectX.gif)

</div>

- gifλ‘ λ³νμ νλ€λ³΄λ ν΄μλκ° μ’μ§λ μμλ° μνIDκ° μλ‘κ³ μΉ¨ ν  λ λ§λ€ μ¬λΌκ°λ κ²μ νμΈ ν  μ μλ€.
- μ΄λ κ² λ§λ¬΄λ¦¬κ° λλ©΄ μ¬μ©μκ° μ€μλ‘ μλ‘κ³ μΉ¨μ λλ μ κ²½μ°μ λκ°μ μνμ΄ κ³μ μ μ₯λκ² λλ€.
- κ·Έλμ μ΄λ κ² μ μ₯λμ§ μλλ‘ ν΄μ£Όλ λ°©λ²μ΄ PRG(Post/Redirect/Get)μ΄λ€.

## 2. PRG(Post/Redirect/Get) μ μ© ν

```java
@PostMapping("/add")
public String addItemV5(Item item) {
    itemRepository.save(item);
    return "redirect:/basic/items/" + item.getId();
}

@PostMapping("/add")
public String addItemV6(Item item, RedirectAttributes redirectAttributes) {
    Item savedItem = itemRepository.save(item);
    redirectAttributes.addAttribute("itemId", savedItem.getId());
    redirectAttributes.addAttribute("status", true);
    return "redirect:/basic/items/{itemId}";
}
```

- λ κ°μ§ λ°©λ²μΌλ‘ μ μ©μ μμΌλ³΄μλλ° μ²«λ²μ§Έ λ°©λ²μΌλ‘λ μ¬μ©νμ§ μλ κ²μ΄ μ’λ€.
- `return`ν  λ μ°μ°μλ‘ κ°μ λ£μ΄μ€¬μ κ²½μ°μλ μ«μμ κ²½μ°λ μκ΄μμ§λ§ λ¬Έμκ° λ€μ΄κ°λ κ²½μ°μλ μΈμ½λ© λ¬Έμ κ° λ°μν  μ μλ€.
- κ·Έλμ λλ²μ§Έ λ°©λ²μΌλ‘ `RedirectAttribute`λ₯Ό μ¬μ©νκ²λλ©΄ μΈμ½λ©λ ν΄κ²°νκ³  μΆκ° `Parameter`κΉμ§ μ μ‘μ΄ κ°λ₯νκ² λλ€.

<div align = "center">

![form-get-redirect.gif](form-get-redirect.gif)

</div>

μ€λμ κ°λ¨νκ² PRGμ λν΄μ κΈ°λ‘ν΄λ³΄μλ€.
μ΄μ  [μ€νλ§ MVC 2νΈ - λ°±μλ μΉ κ°λ° νμ© κΈ°μ ](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-2/dashboard)λ λΉ λ₯ΈμμΌλ΄μ μκ°ν΄μΌκ² λ€.

μ μ κΈ°λ‘νμ§ λͺ»νλ λΆλΆλ€λ λ€μ λ³΅μ΅ν  λ νμν λΆλΆμ κΈ°λ‘νλλ‘ ν΄μΌκ² λ€.

## Reference

- [μ€νλ§ MVC 1νΈ - λ°±μλ μΉ κ°λ° ν΅μ¬ κΈ°μ ](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1/dashboard)

## μ μ²΄ μμ€μ½λ

- [https://github.com/KwonCheulJin/springMVC-web-page](https://github.com/KwonCheulJin/springMVC-web-page)

```toc

```
