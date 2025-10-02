# CoreTools

[English](README.md) | **한국어**

CoreTools는 [lodash](https://github.com/lodash/lodash)에서 영감을 받은 JavaScript 유틸리티 라이브러리입니다. 개발자들이 일상적인 작업에서 필요로 하는 일반적인 유틸리티 함수들의 모음을 제공하며, 더 나은 유지보수성과 tree-shaking 지원을 위해 논리적 카테고리로 구성되어 있습니다.

## CoreTools를 선택하는 이유
* 쉬운 데이터 타입 변환
* 개발 번거로움 감소
* 가볍고 빠름
* Tree-shaking 지원을 통한 모듈형 아키텍처
* Lodash 스타일 체이닝 API
* 더 나은 개발자 경험을 위한 카테고리 기반 구성

## CoreTools가 해야 할 것
* 재사용성 증가
* 깔끔하고 읽기 쉬워야 함
* 디버깅이 쉬워야 함
* 유지보수가 가능해야 함
* 모듈형이어야 함
* 모든 모듈에 대한 단위 테스트 보유
* 다양한 환경에서 작동 (IE11+ 및 모던 브라우저)
* 다른 프레임워크나 라이브러리와 호환 가능

## CoreTools가 하지 않아야 할 것
* UI 컴포넌트
* CSS 선택자 엔진 또는 유사한 코드
* 템플릿 엔진
* 별도의 라이브러리가 될 수 있는 것
* 모듈형 라이브러리가 아닌 것

## 설치

### 브라우저 (UMD)
```html
<script src="./dist/coretools.umd.js"></script>
<script>
  // coretools 함수 사용
  const result = coretools.isArray([1, 2, 3]); // true
  const unique = coretools.GetUnique([1, 2, 2, 3]); // [1, 2, 3]
</script>
```

### NPM/Yarn
```shell
$ npm install coretools 
# 또는
$ yarn add coretools
```

## 사용법

### 기본 Import (전체 라이브러리)
```js
import coretools from 'coretools'

// 체이닝 API 사용
const result = coretools(data).isArray().isEmpty().value()

// 또는 개별 함수 사용
const isArray = coretools.isArray
const isEmpty = coretools.isEmpty
```

### Named Import (Tree-shaking)
```js
// 특정 함수 import
import { isArray, isEmpty } from 'coretools'

// 또는 카테고리별 import
import { isArray, GetUnique } from 'coretools/src/array'
import { isNumber, FormatBytes } from 'coretools/src/number'
import { GetAge, GetTomorrow } from 'coretools/src/date'
```

### 카테고리 기반 Import
```js
// 전체 카테고리 import
import array from 'coretools/src/array'
import date from 'coretools/src/date'
import string from 'coretools/src/string'

// 카테고리 함수 사용
const unique = array.GetUnique([1, 2, 2, 3])
const tomorrow = date.GetTomorrow()
const padded = string.pad(5, 3)
```

## 사용 가능한 카테고리

- **array**: 배열 조작 및 검증 (7개 함수)
- **async**: 비동기 유틸리티 (2개 함수)
- **color**: 색상 관련 유틸리티 (1개 함수)
- **convert**: 데이터 타입 변환 (2개 함수)
- **date**: 날짜 계산 및 조작 (31개 함수)
- **file**: 파일 및 경로 유틸리티 (2개 함수)
- **number**: 숫자 검증 및 포맷팅 (7개 함수)
- **object**: 객체 조작 및 검증 (11개 함수)
- **random**: 랜덤 값 생성 (3개 함수)
- **string**: 문자열 조작 및 검증 (13개 함수)
- **time**: 시간 계산 및 변환 (6개 함수)
- **timestamp**: 타임스탬프 변환 및 검증 (4개 함수)
- **type**: 타입 검사 유틸리티 (1개 함수)

## 예제

### 배열 연산
```js
import { GetUnique, isArray, isValidIndex } from 'coretools'

const data = [1, 2, 2, 3, 4, 4, 5]
if (isArray(data)) {
    const unique = GetUnique(data) // [1, 2, 3, 4, 5]
    const hasIndex = isValidIndex(data, 2) // true
}
```

### 날짜 연산
```js
import { GetTomorrow, GetAge, isDate } from 'coretools'

const tomorrow = GetTomorrow()
const age = GetAge(new Date('1990-01-01'))
const isValid = isDate(new Date()) // true
```

### 문자열 연산
```js
import { pad, Len, EscapeHTML } from 'coretools'

const padded = pad(5, 3) // "005"
const length = Len("Hello") // 5
const escaped = EscapeHTML("<div>") // "&lt;div&gt;"
```

### 체이닝 API (Lodash 스타일)
CoreTools는 **83개의 유틸리티 함수**를 모든 카테고리에서 체이닝할 수 있는 완전한 체이닝 API를 제공합니다:

```js
import coretools from 'coretools'

// 기본 검증 체이닝
const result = coretools([1, 2, 2, 3])
    .isArray()
    .value() // true

// 배열 처리 체이닝
const unique = coretools([1, 2, 2, 3, 4, 4, 5])
    .GetUnique()
    .value() // [1, 2, 3, 4, 5]

// 문자열 처리 체이닝
const padded = coretools(5)
    .pad(3)
    .value() // "005"

// 날짜 처리 체이닝
const tomorrow = coretools(new Date())
    .GetTomorrow()
    .value() // 내일 날짜

// 복합 다중 카테고리 체이닝
const isValid = coretools("hello")
    .Len()
    .isNumber()
    .value() // true

// 객체 검증 체이닝
const hasValidData = coretools({ name: "test", age: 25 })
    .isObject()
    .hasKey("name")
    .value() // true

// 숫자 포맷팅 체이닝
const formatted = coretools(1024)
    .isNumber()
    .FormatBytes()
    .value() // "1.00 KB"
```

**사용 가능한 체이닝 카테고리:**
- **Array** (7개 함수): `isArray()`, `GetUnique()`, `isIn()`, `isInArray()`, `isNotIn()`, `isNotInArray()`, `isValidIndex()`
- **Object** (11개 함수): `isEmpty()`, `isObject()`, `hasKey()`, `hasKeyAll()`, `hasKeyIn()`, `hasKeyNonEmpty()`, `hasKeyButNotIn()`, `hasKeyNumberPositive()`, `MergeJson()`, `FilterJsonWithoutEmptyKey()`, `RenameObjectProperty()`
- **String** (13개 함수): `Len()`, `LenByte()`, `pad()`, `padZero()`, `Cut()`, `CutW()`, `EscapeHTML()`, `isAlphaNumeric()`, `isKoreanChar()`, `isCharInRange()`, `GetRepeatString()`, `MergeTagString()`, `SplitTagString()`
- **Number** (7개 함수): `isNumber()`, `isNumberPositive()`, `isNumberNegative()`, `isZero()`, `FormatBytes()`, `GetDecimalPoint()`, `isApproxEqual()`
- **Date** (31개 함수): `isDate()`, `GetTomorrow()`, `GetYesterday()`, `GetAge()`, `GetFormattedDate()`, `isSameDate()`, `SubtractMonths()`, `GetDateInt()`, `GetDateRangeToNow()`, `GetDateRangeToNowStartEnd()`, `GetDatesBetween()`, `GetDayAgo()`, `GetDayDiffBetween()`, `GetDayDiffNow()`, `GetDayEnd()`, `GetDayStart()`, `GetEndOfWeek()`, `GetLastSunday()`, `GetMonthDiff()`, `GetMonthRange()`, `GetNextMonth()`, `GetNextYearMonth()`, `GetPrevMonth()`, `GetStartOfWeek()`, `GetThisMonthRange()`, `isDateRangeSet()`, `isInDateRange()`, `isSameDateRange()`, `SubtractYears()`, `ymdhhmmToDate()`, `ymdSlotNoToDate()`, `ymdToDate()`
- **Time** (6개 함수): `hhmm2min()`, `hhmm2slotNo15min()`, `hhmm2slotNo30min()`, `hhmm2slotNoByDuration()`, `hhmmSplit()`, `slotNo2hhmm()`
- **Timestamp** (4개 함수): `isTimestamp()`, `GetUnix()`, `GetDateFromMs()`, `GetDateFromTs()`
- **Type** (1개 함수): `isFunction()`
- **Color** (1개 함수): `isSameColor()`
- **Convert** (2개 함수): `ConvertDecimalToHex()`, `ConvertHSLToHex()`
- **File** (2개 함수): `GetFileExtension()`, `MakePath()`

**참고**: 비동기 함수들(`Sleep`, `ExecuteCallbackWithParams`)과 생성 함수들(`GenerateGUID`, `GenerateRandomBytes`, `GenerateRandomNumberInRange`)은 입력값을 변환하지 않기 때문에 체이닝에 포함되지 않습니다.

### 브라우저 UMD 사용법
```html
<!DOCTYPE html>
<html>
<head>
    <title>CoreTools UMD 예제</title>
</head>
<body>
    <script src="./dist/coretools.umd.js"></script>
    <script>
        // 직접 함수 사용
        console.log(coretools.isArray([1, 2, 3])); // true
        console.log(coretools.GetUnique([1, 2, 2, 3])); // [1, 2, 3]
        console.log(coretools.GetTomorrow()); // 내일 날짜
        
        // 체이닝 API
        const result = coretools([1, 2, 3])
            .isArray()
            .value();
        console.log(result); // true
        
        // 배열 처리 체이닝
        const unique = coretools([1, 2, 2, 3, 4, 4, 5])
            .GetUnique()
            .value();
        console.log(unique); // [1, 2, 3, 4, 5]
    </script>
</body>
</html>
```

## 개발

### UMD 파일 빌드
브라우저 사용을 위한 UMD 파일 빌드:

```shell
# 의존성 설치
npm install
# 또는
yarn install

# UMD 및 ES 모듈 빌드
npm run build
# 또는
yarn build
```

이렇게 하면 다음이 생성됩니다:
- `dist/coretools.umd.js` - 브라우저 사용을 위한 UMD 형식
- `dist/coretools.es.js` - ES 모듈 형식

### 기능
이것은 CoreTools의 **develop 브랜치**로, 다음 기능을 제공합니다:
- 카테고리 기반 구성의 모듈형 아키텍처
- Lodash 스타일 체이닝 API
- 최적의 번들 크기를 위한 Tree-shaking 지원
- 포괄적인 함수 커버리지 (88개 이상의 유틸리티 함수)
- 브라우저 환경을 위한 UMD 지원

## 문서

온라인 문서는 [Github Wiki](https://github.com/team-chesters/coretools/wiki)[^1][^2]에 작성될 예정입니다.

~~문서는 작업 중입니다.~~

## 라이선스
MIT

[^1]: `src` 폴더의 각 함수 코드에서 설명과 사용법을 확인할 수 있습니다.

[^2]: 각 함수의 테스트 코드는 `test` 폴더에서 찾을 수 있습니다.
