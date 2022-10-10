# دورة أساسيات لغة TypeScript

## ماهي لغة TypeScript ؟

تعتبر لغة JavaScript لغة مرنة وسهلة في التعلم والاستخدام، وتُستخدم من قِبل أغلب المبرمجين لسرعتها في بناء المشاريع، ومع ذلك إلا إن مرونتها العالية تتسبب غالبا في حدوث الكثير من الأخطاء البرمجية الغير متوقعة خصوصا في المشاريع الكبيرة أو تلك التي يعمل عليها مجموعة من المبرمجين.

وأحد أكثر تلك الأخطاء شيوعا هي تغير أنواع البيانات Data Types والتي عادة ما تظهر في المشاريع الكبيرة أو التي يعمل فيها مجموعة من المبرمجين. ولهذا تم تطوير TypeScript من قبل Microsoft لتقوم بحل هذه المشكلات التي تواجه المطورين أثناء تطويرهم بلغة JavaScript.

وبالتالي نستطيع الان تعريف TypeScript ببساطة على أنها لغة برمجة مبنية فوق JavaScript وتحتوي على جميع ما تحتويه JavaScript بالإضافة إلى مجموعة من المميزات التي تجعل JavaScript تعمل بشكل أفضل في المشاريع كبيرة الحجم، وذلك بإضافة Data Types لها، مما يقلل من إمكانية حدوث الأخطاء البرمجية وجعلها قابلة للتطوير scalable بشكل سلس.

**خلاصة الكلام :**
لغة TypeScript هي نفسها لغة JavaScript مع إضافة أنواع البيانات Data Types لها.

## لماذا نستخدم TypeScript ؟

تمكننا لغة TypeScript من استكشاف الأخطاء البرمجية أثناء كتابتنا للكود البرمجي ( Static Type Checking )، وقبل تنفيذ الكود وعمل run له، بالإضافة إلى طباعته لأخطاء واضحة يستطيع المبرمج تتبعها ومعرفة ماهيتها بسهولة بخلاف JavaScript التي تطبع في بعض الأحيان أخطاء غير مفهومة.

## أمثلة على بعض الأخطاء التي لا تظهر أثناء كتابة الكود في لغة JavaScript

**مثال البرجر**
![burger](./burger.png)

```js
// [index.js] => example 1
const car = {
	model: 'Camry',
	color: 'white',
	year: 2022,
};

console.log(car.maxSpeed); // undefined ❌
```

```js
// [index.js] => example 2
function sum(a, b) {
	console.log(`${a} + ${b} = ${a + b}`);
}

sum('2', 3); // 23 ❌
sum('Hi', 5); // Hi5 ❌
```

```js
// [index.js] => example 3
function getTotalPrice(price) {
	console.log(Math.round(price));
}
getTotalPrice(); // NaN ❌
```

```js
// [index.js] => example 4
function getUsers(users) {
	if (ysers.length > 0) {
		console.log('Users count =', users.length);
	} else {
		console.log('There is no users!');
	}
}
getUsers(['Ahmad', 'Ali', 'Alaa']); // ReferenceError: ysers is not defined ❌
```

## متى نستخدم TypeScript ؟

- في مشاريع الويب المتوسطة والكبيرة والمشاريع القابلة للتوسع.
- حينما نعمل مع فريق برمجي.

## ماهي الفروقات بين JavaScript و TypeScript ؟

ببساطة فكر في TypeScript على أنها هي نفسها JavaScript مع إضافة أنواع للبيانات Data Types لها.

## كيف تعمل TypeScript

المتصفحات لا تفهم لغة TypeScript، لذلك يقوم الـ Compiler الخاص بـ TypeScript بتحويل الكود الخاص بـ TypeScript إلى كود بلغة JavaScript وبالتالي تستطيع المتصفحات قراءة ذلك الكود.

## تجهيز بيئة العمل

- تحميل [Node.js](https://nodejs.org/en)
- التحقق من إصدار Node.js والتحقق من تواجده في النظام `node -v`
- تحميل محرر الأكواد [VSCode](https://code.visualstudio.com/)
- تحميل TypeScript والتحقق من تواجده في النظام `npm i -g typescript`
- التحقق من تواجد TypeScript في النظام `tsc -v`
- إنشاء أول ملف TypeScript مثلا `index.ts`
- ترجمة ملف TypeScript إلى JavaScript عن طريق الأمر `tsc fileName.ts`
- التعرف على `tsc -w`
- التعرف على `tsc --init` و `tsconfig.json`

## التعرف على أنواع البيانات DataTypes

تحتوي لغة TypeScript على مجموعة من أنواع البيانات من بينها ثلاثة أنواع رئيسية هي أهمها وأكثرها استخداما وهي `string` و `number` و `boolean`.

- نستخدم نوع البيانات `string` للتعامل مع النصوص مثل `"Hello, world"`.
- نستخدم نوع البيانات `number` لكل ما له علاقة بالأرقام سواء كانت `integer` مثل `10` أو `float` مثل `15.3`.
- نستخدم نوع البيانات `boolean` للتعامل مع `true` و `false`.

```ts
// [index.ts] => example 1
let email = 'fulan@gmail.com'; // string ✅
email = 10; // Type 'number' is not assignable to type 'string' ❌
email = 'ellan@gmail.com'; // ✅
```

```ts
// [index.ts] => example 2
let year = 2022; // number ✅
year = '2030'; //Type 'string' is not assignable to type 'number' ❌
year = 2030; // ✅
```

```ts
// [index.ts] => example 3
let isAdmin = true; // boolean ✅
isAdmin = 'false'; // Type 'string' is not assignable to type 'boolean' ❌
isAdmin = false; // ✅
```

```ts
// [index.ts] => example 4
const car = {
	model: 'Camry',
	color: 'white',
	year: 2022,
};
console.log(car.maxSpeed); // undefined ❌
```

```ts
// [index.ts] => example 5
function getUsers(users) {
	if (ysers.length > 0) {
		console.log('Users count =', users.length);
	} else {
		console.log('There is no users!');
	}
}
getUsers(['Ahmad', 'Ali', 'Alaa']); // ReferenceError: ysers is not defined ❌
```

كما تحتوي TypeScript على أنواع بيانات أخرى، سنتعرف عليها لاحقا في دروس قادمة بإذن الله، بالإضافة إلى أننا نستطيع تعريف أنواع بيانات أخرى بسيطة ومعقدة في TypeScript حسب احتياجنا لها، وسنتطرق بإذن الله تعالى لهذه المواضيع المتقدمة لاحقا.
