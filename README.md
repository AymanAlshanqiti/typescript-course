# دورة أساسيات لغة TypeScript

## ماهو مفهوم الـ Enum

هي طريقة تتيحها لنا لغة TypeScript تمكننا من خلالها تعريف مجموعة من التسميات الثابتة المرتبطة ببعضها بطريقة منظمة.

```ts
// [index.ts] => example 1
const EASY = 5;
const MEDIUM = 10;
const HARD = 20;

const TYPESCRIPT = 'ts';
const SWIFT = 'swift';
const PYTHON = 'py';
const JAVASCRIPT = 'js';
```

في المثال السابق تخيل معي لو أن لدينا منصة للتحديات البرمجية، وقمنا بتعريف ثوابت تمثل عدد النقاط التي سيحصل عليها المبرمج في حال حله لتحدي سهل أو متوسط أو صعب.

يليها امتداد الملفات التي يقوم المبرمج بحلها على منصة التحديات البرمجية ففي حال كان المبرمج يحل تحدي بلغة `typescript` سيكون امتداد الملف `ts` وهكذا.

نلاحظ هنا أن هنالك تشابه كبير بين مجموعة البيانات `EASY` و `MEDIUM` و `HARD` وكأنهما يمثلون مستوى التحدي `level`.

نستطيع باستخدام الـ `ENUM` جمعهم في مكان واحد بحيث يسهل استخدامهم والوصول لهم، كما هو موضح في المثال التالي.

```ts
// [index.ts] => example 2
enum LEVEL_POINT {
	EASY = 5,
	MEDIUM = 10,
	HARD = 20,
}

enum LEVEL_NAME {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

let lvl = 'hard';

switch (lvl) {
	case LEVEL_NAME.EASY:
		console.log(`The level is ${lvl} and the points is ${LEVEL_POINT.EASY}`);
		break;
	case LEVEL_NAME.MEDIUM:
		console.log(`The level is ${lvl} and the points is ${LEVEL_POINT.MEDIUM}`);
		break;
	case LEVEL_NAME.HARD:
		console.log(`The level is ${lvl} and the points is ${LEVEL_POINT.HARD}`);
		break;

	default:
		console.log(`The level is not assigned!`);
		break;
}
```

نلاحظ في المثال السابق أننا وبشكل مرتب استطعنا الوصول لعناصر `LEVEL_POINT` وعناصر `LEVEL_NAME` دون حاجتنا لكتابة قيمة عناصرهما بشكل عشوائي.

```ts
// [index.ts] => example 3
enum PROGRAMMING_LANGUAGE_EXTENSION {
	TYPESCRIPT = 'ts',
	SWIFT = 'swift',
	PYTHON = 'py',
	JAVASCRIPT = 'js',
}

enum PROGRAMMING_LANGUAGE_NAME {
	TYPESCRIPT = 'typescript',
	SWIFT = 'swift',
	PYTHON = 'python',
	JAVASCRIPT = 'javascript',
}

let progLang = 'swift';

switch (progLang) {
	case PROGRAMMING_LANGUAGE_NAME.TYPESCRIPT:
		console.log(
			`You selected ${progLang} language and the extension is ${PROGRAMMING_LANGUAGE_EXTENSION.TYPESCRIPT}`
		);
		break;

	case PROGRAMMING_LANGUAGE_NAME.SWIFT:
		console.log(
			`You selected ${progLang} language and the extension is ${PROGRAMMING_LANGUAGE_EXTENSION.SWIFT}`
		);
		break;

	case PROGRAMMING_LANGUAGE_NAME.PYTHON:
		console.log(
			`You selected ${progLang} language and the extension is ${PROGRAMMING_LANGUAGE_EXTENSION.PYTHON}`
		);
		break;

	case PROGRAMMING_LANGUAGE_NAME.JAVASCRIPT:
		console.log(
			`You selected ${progLang} language and the extension is ${PROGRAMMING_LANGUAGE_EXTENSION.JAVASCRIPT}`
		);
		break;

	default:
		console.log(`The programming language is not assigned!`);
		break;
}
```

نفس الشيء عند رغبتنا في الوصول لإمتداد ملف معين حسب لغة البرمجة، نستطيع فعل ذلك باستخدام الـ Enums بشكل سهل ومرتب.

```ts
// [index.ts] => example 4
enum LEVEL_POINT {
	EASY = 5,
	MEDIUM = 10,
	HARD = 20,
}

enum LEVEL_NAME {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

type ChallengeType = {
	title: string;
	level: LEVEL_NAME;
	points: LEVEL_POINT;
};

let ch: ChallengeType = {
	title: 'Say Hi',
	level: LEVEL_NAME.EASY,
	points: LEVEL_POINT.EASY,
};

console.log(ch);
```

لاحظ أننا نستطيع أيضا تعريف أنواع بيانات من نوع `enum`.

تكمن الميزة القوية في استخدام الـ Enums باستخدامها في أكثر من مكان وأكثر من ملف دون الحاجة لإعادة تعريف القيم التي بداخلها في كل مرة مما يقلل وبشكل كبير من حدوث الأخطاء البرمجية.

## تطبيق عملي

- قم بإنشاء `enum` يحتوي على جنس العميل ذكر او انثى
- قم بإنشاء `enum` يحتوي على نوع العميل `admin` او عميل عادي `normal`
- قم بإنشاء `enum` يحتوي على مستوى تحدث العميل للغة الانجليزية بحيث يحتوي على 4 خيارات الاول لا يتحدث الانجليزية، الثاني متوسط والثالث محترف والرابع الانجليزية هي لغته الأم
- قم بإنشاء `object` جديد يحتوي على بيانات العميل وقم بإضافة `keys` تحتوي على أنواع للـ `enums` التي قمنا بتعريفها

## الحلول

```ts
// 1
enum GenderEnum {
	MALE = 'male',
	FEMALE = 'female',
}

// type GenderType = "male" | "female"

// 2
enum CustomerRoleEnum {
	ADMIN = 'ADMIN',
	NORMAL = 'NORMAL',
}

// 3
enum EnglishLevelEnum {
	NO_ENGLISH = 'does not speek english',
	INTERMEDIATE = 'INTERMEDIATE',
	ADVANCE = 'ADVANCE',
	NATIVE = 'NATIVE',
}

// 4
type UserInfoType = {
	firstName: string;
	gender: GenderEnum;
	role: CustomerRoleEnum;
	englishLevel: EnglishLevelEnum;
};

let userInfo: UserInfoType = {
	firstName: 'Ali',
	gender: GenderEnum.MALE,
	role: CustomerRoleEnum.NORMAL,
	englishLevel: EnglishLevelEnum.NATIVE,
};

console.log(userInfo);
```
