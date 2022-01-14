---
emoji: 😱
title: Jqeury validation Plugin를 활용한 사용자 추가 폼 개발
date: '2022-01-14 21:13:00'
author: 촬스
tags: 블로그 Javascript Jquery Jquery-validator
categories: 오늘의기록
---

# 오늘의 기록 - Jqeury validation Plugin을 활용한 사용자 추가 폼 개발

- VCMS를 지속적으로 개발하던 중에 관리자가 사용자를 추가해야하는 폼을 개발하기 위해 사용했던 Jqeury-validator를 나름 잘 사용했다고 생각해서 블로그에 남긴다.
  폼의 validation은 와이어프레임 기준으로 작성하였다.
  사용하면서 내가 생각한 대로 작동하지 않아서 많은시간을 구글링으로 보냈지만 그래도 나름 원하는 결과를 만들어서 다행이다.

- Plugin 주소 - [Jqeury Validation Plugin](https://jqueryvalidation.org/)

- 나는 직접 js 파일을 받아서 사용하였지만 아래와 같이 cdn을 사용해도 된다.

```text
https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.js
https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js
https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/additional-methods.js
https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/additional-methods.min.js
```

`user.html`

```html
<script th:src="@{/static/libs/jquery-validation-1.19.3/dist/additional-methods.js}"></script>
<script th:src="@{/static/libs/jquery-validation-1.19.3/dist/jquery.validate.js}"></script>
```

- 사용자 추가 폼은 모달 화면으로 개발하였다. 템플릿은 `Thymeleaf`를 사용하였고 조각으로 따로 만들어서 `user.html`에 추가하여 사용하였다.

- 화면 레이아웃은 기본 js 및 css는 bootstrap기반 탬플릿을 따로 구매하여 구성하였다.

`user-new.html`

```html
<html xmlns:th="http://www.thymeleaf.org">
  <!-- add_user_modal -->
  <div
    th:fragment="add_user_modal"
    class="modal fade"
    id="add_user_modal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-bottom">
          <h4 class="modal-title fw-bold" id="addUserModal">사용자추가</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-hidden="true"
          ></button>
        </div>
        <div class="modal-body p-4">
          <form
            id="insertUserForm"
            name="insertUserForm"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="table-responsive overflow-hidden mt-2">
              <table class="table table-bordered">
                <tr>
                  <th class="font-13">권한그룹 <span class="text-danger">*</span></th>
                  <td class="font-12" width="280">
                    <div class="row d-flex ">
                      <div class="col-12 d-flex justify-content-start">
                        <select class="form-select" id="groupId" name="groupId"></select>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="font-13" style="vertical-align: middle">프로필 등록</th>
                  <td class="font-12">
                    <div class="row">
                      <div class="col-12 px-0">
                        <div class="card mb-0">
                          <div
                            class="card-body d-flex align-items-center justify-content-start flex-wrap px-2 py-0"
                          >
                            <img
                              th:src="@{/static/images/users/blank-profile-picture.png}"
                              id="photo"
                              alt="user-image"
                              class="rounded me-1"
                              name="photo"
                              width="80"
                              height="80"
                            />
                            <div class="d-flex flex-column justify-content-start">
                              <span class="text-center">(권장 사이즈 200X200)</span>
                              <div class="d-flex justify-content-start mt-2">
                                <button id="photo-del" type="button" class="btn btn-light width-xs">
                                  삭제
                                </button>
                              </div>
                            </div>
                            <div class="mt-1 justify-content-end input-group">
                              <input
                                class="form-control form-control-sm"
                                id="img_select"
                                type="file"
                                accept="image/gif, image/jpeg, image/png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="font-13">이름<span class="text-danger font-13">*</span></th>
                  <td class="font-12">
                    <input type="text" class="form-control" id="userName" name="userName" />
                  </td>
                </tr>
                <tr>
                  <th class="font-13">아이디 <span class="text-danger font-13">*</span></th>
                  <td>
                    <input type="text" class="form-control" id="userId" name="userId" />
                  </td>
                </tr>
                <tr>
                  <th class="font-13">비밀번호 <span class="text-danger font-13">*</span></th>
                  <td>
                    <input type="password" class="form-control" id="userPw" name="userPw" />
                  </td>
                </tr>
                <tr>
                  <th class="font-13">비밀번호 확인 <span class="text-danger font-13">*</span></th>
                  <td>
                    <input
                      type="password"
                      class="form-control"
                      id="userPwCheck"
                      name="userPwCheck"
                    />
                  </td>
                </tr>
                <tr>
                  <th class="font-13">소속</th>
                  <td>
                    <input type="text" class="form-control" id="belong" name="belong" />
                  </td>
                </tr>
                <tr>
                  <th class="font-13">이메일</th>
                  <td>
                    <input type="email" class="form-control" id="email" name="email" />
                  </td>
                </tr>
                <tr>
                  <th class="font-13">연락처</th>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="contactPlace"
                      name="contactPlace"
                      placeholder="010-0000-0000"
                    />
                  </td>
                </tr>
              </table>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-light waves-effect waves-light width-md me-2"
                  data-bs-dismiss="modal"
                >
                  취소
                </button>
                <button type="submit" class="btn btn-primary waves-effect waves-light width-md">
                  저장
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- add_user_modal -->
</html>
```

- 먼저 화면 렌더링 시에 바로 작동하게 하기 위해 `$(document).ready()`안에서 호출을 해주었다.

- `$.validator.addMethod()`는 내가 원하는 validation condition을 정규식 또는 조건을 넣어서 사용 할 수 있는 custom function이다.

- 와이어프레임에 작성되어있는 정책을 기준으로 조건들을 넣었다.

`user-new.js`

```javascript
$(document).ready(() => {
  $.validator.addMethod('nameCheck', function (input, element) {
    if (/^(?=.*[~!@#$%^&*()_+|<>?:{}])/.test(input)) {
      return false;
    }
    return true;
  });

  $.validator.addMethod('idCheck', function (input, element) {
    if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(input)) {
      return false;
    }
    return true;
  });

  $.validator.addMethod(
    'pwCheck',
    function (input, element) {
      let password = input;
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}])(.{8,16}$)/.test(password)
      ) {
        return false;
      }
      return true;
    },
    function (value, element) {
      let password = $(element).val();
      if (!/^(.{8,16}$)/.test(password)) {
        return '비밀번호는 8~16자 사이여야 합니다.';
      } else if (!/^(?=.*[A-Z])/.test(password)) {
        return '비밀번호는 하나 이상의 대문자를 포함해야 합니다.';
      } else if (!/^(?=.*[a-z])/.test(password)) {
        return '비밀번호는 하나 이상의 소문자를 포함해야 합니다.';
      } else if (!/^(?=.*[0-9])/.test(password)) {
        return '비밀번호는 하나 이상의 숫자를 포함해야 합니다.';
      } else if (!/^(?=.*[~!@#$%^&*()_+|<>?:{}])/.test(password)) {
        return '비밀번호는 하나 이상의 특수문자를 포함해야 합니다.';
      }
      return false;
    },
  );

  $.validator.addMethod('email', function (input, element) {
    if (input.length == 0) {
      return true;
    } else if (!/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(input)) {
      return false;
    }
    return true;
  });

  $.validator.addMethod('phone', function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, '');
    if (phone_number.length == 0) {
      return true;
    } else if (!/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(phone_number)) {
      return false;
    }
    return true;
  });

  $('#insertUserForm')
    .submit(function (e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        groupId: {
          required: true,
        },
        photo: {
          required: false,
        },
        userName: {
          required: true,
          maxlength: 20,
          nameCheck: true,
        },
        userId: {
          required: true,
          maxlength: 20,
          remote: {
            url: 'existingUser.do',
            type: 'GET',
            data: {
              userId: function () {
                return $('#userId').val();
              },
            },
          },
          idCheck: true,
        },
        userPw: {
          required: true,
          pwCheck: true,
        },
        userPwCheck: {
          equalTo: '#userPw',
        },
        belong: {
          maxlength: 20,
        },
        email: {
          email: true,
        },
        contactPlace: {
          minlength: 9,
          phone: true,
        },
      },
      messages: {
        userName: {
          required: '이름은 필수 입력입니다.',
          maxlength: '이름은 {0}자이내로 입력해주세요.',
          nameCheck: '이름은 특수문자를 포함할 수 없습니다.',
        },
        userId: {
          required: '아이디는 필수 입력입니다.',
          maxlength: '아이디는 {0}자이내로 입력해주세요.',
          remote: '중복된 아이디가 존재합니다.',
          idCheck: '아이디는 한글을 포함할 수 없습니다.',
        },
        userPw: {
          required: '비밀번호는 필수 입력입니다.',
        },
        userPwCheck: {
          equalTo: '비밀번호가 일치하지 않습니다.',
        },
        belong: {
          maxlength: '소속은 {0}자이내로 입력해주세요.',
        },
        email: {
          email: '이메일 형식을 확인하세요.',
        },
        contactPlace: {
          minlength: '전화번호는 {0}자이상 입력해주세요.',
          phone: '유효한 전화번호를 입력해주세요',
        },
      },
      errorPlacement: function (error, element) {
        $(element).closest('td').append(error).find('label').addClass('text-danger');
      },
      submitHandler: function (form) {
        $.ajax({
          url: 'insertUser.do',
          type: 'POST',
          data: $(form).serialize(),
          success: function (response) {
            console.log(response);
          },
        });
      },
    });
});
```

- 오늘 제일 힘들었던 부분이다. `userId -> 아이디` 아이디를 입력했을 때 DB상에 이미 존재하는 아이디일 경우에는 사용자가 추가 되지 않아야 한다.
- 그 부분에 대한 확인을 ajax로 컨트롤러를 호출해서 DB를 확인 한 뒤 응답에 따라서 검증을 할 수 있게 하는 부분이 remote이다.
- 이때 data로 현재 `userId input value`를 컨트롤러에 보내고 컨트롤러에서는 `response`를 `true or false`로 보내주면 `messages`에서 `false`를 전달 받으면 `errormessage`를 화면상에 보여주고 `true`라면 그냥 넘어간다.

```javascript
rules: {
  userId: {
    required: true,
    maxlength: 20,
    remote: {
      url: "existingUser.do",
      type: "GET",
      data: {
        userId: function() {
          return $("#userId").val();
        }
      },
    },
    idCheck: true,
  },
}

```

```javascript
messges: {
  userId: {
    required: "아이디는 필수 입력입니다.",
    maxlength: "아이디는 {0}자이내로 입력해주세요.",
    remote: "중복된 아이디가 존재합니다.",
    idCheck: "아이디는 한글을 포함할 수 없습니다.",
  },
}
```

`UserController.java`

```java
@ResponseBody
@RequestMapping(value = "/existingUser.do", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public boolean existingUser(final HttpServletRequest request, @RequestParam String userId) {

    if(userService.getExistingUser(userId) > 0) {
        return false;
    }

    return true;
}
```

- 학원에서 검증을 만들 때 바닐라JS로 하나하나 다 구현했을 때 엄청 힘들었는데 Jquery plugin을 활용하니 개발시간이 엄청 절약이 되었다.

- 프로젝트마다 차이는 있겠지만 나는 내부에서 사용하는 admin 시스템이어서 서버 단에서는 검증을 조금 간소화 하게 진행하기로 하여서 다음주에는 insert하는 부분의 Controller 로직을 작성하고 추가적으로 보완할 부분은 수정하도록 해야겠다.

- 정규식은 StackOverFlow에서 검색해서 추가하였다.

- 이번주도 너무 빨리 지나가 버렸다. 다음에는 jenkins 빌드 배포에 관해서 했던 부분을 정리하도록 해야겠다.

```toc

```
