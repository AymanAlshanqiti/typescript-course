# دورة أساسيات لغة TypeScript

## ماهو مفهوم الـ Function

نستطيع تعريف الـ Function بأنها عبارة عن block يحتوي على أسطر برمجية يتم كتابته مرة واحدة ليعاد استخدامه أكثر من مرة أثناء تنفيذ الملف البرمجي.

## طريقة تعريف الـ Function

نستطيع تعريف الـ Function بطريقتين القديمة والحديثة، أما الطريقة القديمة فهي بكتابة `function` ثم تعيين اسم لها ثم تمرير جميع الـ `parameters` في حال وجدت وأخيراً كتابة الأسطر البرمجية المراد كتابتها بداخل الأقواس كما هو ظاهر في المثال التالي

```ts
// [index.ts] => example 1
function sayHello() {
	console.log('Hello');
}

function sayHello(name) {
	console.log('Hello', name);
}
```

الطريقة الثانية وهي الأحدث وتسمى `arrow function` وتكون كالتالي

```ts
// [index.ts] => example 2
const sayHello = () => {
	console.log('Hello');
};

const sayHello = name => {
	console.log('Hello', name);
};
```

## طريقة استدعاء الـ Function

لكي نستدعي أي Function أو ما يسسمونه `function call` نقوم بكتابة اسم الـ `function` ثم نفتح قوس ونغلقه ونضع بداخله العناصر التي يجب تمريرها لتلك الـ function في حال وجدت، كما هو ظاهر في المثال التالي

```ts
// [index.ts] => example 3
sayHello();
sayHello('Ayman');
```

## طريقة تحديد نوع كل `parameter` في الـ Function

```ts
// [index.ts] => example 4
function sayHello(name: string) {
	console.log('Hello', name);
}

const sayHello = (name: string) => {
	console.log('Hello', name);
};
```

## طريقة إضافة `parameter` اختياري `optional`

```ts
// [index.ts] => example 5
const add = (a: number, b: number, user?: string) => {
	return `${a + b} by ${user}`;
};
```

## طريقة إضافة قيمة افتراضية لأحد الـ `parameters`

```ts
// [index.ts] => example 6
const add = (a: number, b: number, user: string = 'unknown') => {
	return `${a + b} by ${user}`;
};
```

## طريقة تحديد نوع البيانات الراجعة عند انتهاء تنفيذ الـ Function

```ts
// [index.ts] => example 7
const sayHello = (name: string): string => {
	console.log('Hello', name);
};

const add = (a: number, b: number): number => {
	return a + b;
};
```

## طريقة تعريف `function signature`

```ts
// [index.ts] => example 8
const calculator = (a: number, b: number) => number;

const sayHi = (username: string) => void;
```

## تطبيق عملي

- قم بكتابة `function` تستقبل عددين من نوع `number` وتقوم بإرجاع حاصل جمعهما.
- قم بكتابة `function` تستقبل `object` من نوع `user` والذي يحتوي على التالي `fullName` من نوع `string` و `email` من نوع `string` و `uid` من نوع `string | number` وتقوم بطباعة بطاقة شخصية لمستخدم باستخدام `console.log`.
- قم بكتابة `function` تقوم باستقبال قائمة بمشتريات العميل وبيانات العميل وبيانات المتجر ثم تقوم بطباعة فاتورة للعميل بالأشياء التي قام بطلبها، إذا علمت أن كل `object` يحتوي على البيانات التالية.

```ts
user = {
	uid: 1,
	username: 'ayman14',
	email: 'ayman.alshanqiti@gmail.com',
	hassDiscount: false,
};

item = {
	uid: '1',
	title: 'iPhone 14',
	price: 3999.99,
	quantity: 20,
};

store = {
	uid: '12ud-32l-313-3dpfss',
	name: 'Dokkan Afkar',
	address: 'Riyadh - Al-Malga',
};
```

- في المثال السابق استخدم `type` حسب الحاجة وقم بإضافة نوع البيانات الراجعة بعد تنفيذ الـ `function`.
- قم بتعريف `function signature` تستقبل `3 parameters` الأول والثاني يمثلان رقماً من نوع `number` والثالث يمثل اسم منفذ العملية من نوع `string` ويكون اختياري، ثم تقوم الـ `function` بإرجاع `object` يحتوي على `key` من نوع `number` يحمل نتيجة حاصل ضرب العددين و `key` يحمل اسم منفذ العملية في حال وجد أو `null` في حال عدم وجوده.
