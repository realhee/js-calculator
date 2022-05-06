const sum = require("../js/sum.js");

describe("calculator-test", () => {
  //beforeEach(() => {});

  test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("2개의 숫자에 대해 뺄셈이 가능하다.", () => {});
  test("2개의 숫자에 대해 곱셈이 가능하다.", () => {});
  test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {});
  test("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {});
  test("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {});
  test("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {});
});

describe("calculator-test-2", () => {
  //beforeEach(() => {});

  test("숫자버튼을 클릭했을 때 해당 숫자를 디스플레이에 표시한다.", () => {});
  test("숫자버튼 입력 후 연산자를 클릭했을 때 해당 연산자를 디스플레이에 표시한다.", () => {});
  test("네자리 이상의 숫자 입력을 시도했을 경우 경고메세지를 띄운다.", () => {});
  test("숫자를 입력받지 않았을 때 연산자를 클릭하면 경고메세지를 띄운다.", () => {});
});

// 구현 기능 목록
//  - [x] 숫자버튼을 클릭했을 때 해당 숫자를 디스플레이에 표시한다.
//  > - [x] 2을 클릭하면 2이 디스플레이에 표시되는지 테스트 한다.

//  - [x] 숫자버튼 입력 후 연산자를 클릭했을 때 해당 연산자를 디스플레이에 표시한다.
//  > - [x] 1을 클릭하고 '/'을 클릭했을 때 디스플레이에 '1/'이 표시되는지 테스트 한다.

//  - [x] 네자리 이상의 숫자 입력을 시도했을 경우 경고메세지를 띄운다.
// > - [x] '1111'을 순서대로 클릭했을 때 alert('숫자는 세 자리까지만 입력 가능합니다!')가 뜨는지 테스트 한다.
// > - [x] (이어서)'/1111'을 순서대로 클릭했을 때 alert('숫자는 세 자리까지만 입력 가능합니다!')가 뜨는지 테스트 한다.

// - [x] 숫자를 입력받지 않았을 때 연산자를 클릭하면 경고메세지를 띄운다.
// > - [x] 초기화면에서 '/'을 클릭했을 때 alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')가 뜨는지 테스트한다.
// > - [x] '1//'를 순서대로 클릭했을 때 alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')가 뜨는지 테스트한다.
