# دورة أساسيات لغة TypeScript

## طريقة التعامل مع الـ Arrays والـ Objects في TypeSceript

تمكننا لغة TypeScript من تعريف متغيرات من نوع `Array` ومن نوع `Object` بحيث تحتوي على مجموعة من القيم من نفس النوع الذي قمنا بتعيينه أثناء تعريفنا لتلك المتغيرات

وسنتطرق بالتفصيل لكل نوع على حدة :

## أولا المصفوفات Arrays

المصفوفات Arrays هي نوع من أنواع هياكل البيانات في لغات البرمجة وتحتوي لغة TypeScript على طريقة يمكننا من خلالها تعريف Array يحتوي على نوع بيانات معين أو عدة أنواع بيانات.

```ts
// [index.ts] => example 1
let cities = ['Makkah', 'Riyadh', 'Jeddah'];
```

في المثال السابق قمنا بتعريف متغير باسم `cities` من نوع Array يحتوي هذا المتغير على عناصر من نوع `string` تمثل أسماء مجموعة من المدن السعودية.

بمجرد تعريفنا لهذا المتغير واسناد قيم نصية له `string` ستعتبر لغة TypeScript أن المتغير `cities` يحتوي قيم من نوع `string` ولن تسمح بإضافة أي قيمة أخرى لتلك المصفوفة إلا إذا كانت القيمة المضافة من نوع `string` كما هو موضح في المثال التالي.

```ts
// [index.ts] => example 2
let cities = ['Makkah', 'Riyadh', 'Jeddah'];
cities.push(40); // ❌ Argument of type 'number' is not assignable to parameter of type 'string'.ts
cities[1] = true; // ❌ Type 'boolean' is not assignable to type 'string'.ts
cities.push('Jeddah'); // ✅
```

نلاحظ في المثال السابق أنه ليس بإمكاننا إضافة عنصر لهذا الـ Array من نوع بيانات غير الـ `string` وذلك لأننا عند تعريف المتغير `cities` قمنا بإسناد قيم نصية `string` لجميع عناصرها، كما لا يمكننا أيضا تعديل قيم أحد عناصرها بشكل مباشر بإضافة عنصر جديد من نوع بيانات مختلف.

```ts
// [index.ts] => example 3
let years = [1990, 2014, 2019, 2025];
years = '2023'; // ❌ Type 'string' is not assignable to type 'number[]'.
years = ['2023']; // ❌ Type 'string' is not assignable to type 'number'.
years.push('2023'); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
years[1] = true; // ❌ Type 'boolean' is not assignable to type 'number'.
years.push(2030); // ✅
```

في المثال السابق قمنا بتعريف متغير باسم `years` من نوع Array ويحتوي على عناصر من نوع `number` ونلاحظ أنه لا يمكننا إعادة تعيين قيم هذا المتغير بقيمة من نوع `string` إذ أن نوع بيانات المتغير `years` هو `[]number` كما لا يمكننا إضافة أي قيمة أخرى لهذه المصفوفة إلا من نفس نوع البيانات `number`.

**المثال التالي يوضح كيفية تعريف `array` في TypeScript مع إضافة وصف لأنواع البيانات التي بداخل ذلك الـ `array`**

```ts
// [index.ts] => example 4
let cities: string[] = ['Makkah', 'Riyadh', 'Jeddah'];
let years: number[] = [1990, 2014, 2019, 2025];
let isAdmin: boolean[] = [true, true, false, true];
```

وتعني `[]string` مصفوفة تحتوي على عناصر من نوع `string` فقط، كما تعني `[]number` مصفوفة تحتوي على عناصر من نوع `number` فقط، نفس الشيء للنوع `[]boolean` والذي يعني مصفوفة تحتوي على عناصر من نوع `boolean` فقط.

## ثانيا طريقة التعامل مع الـ Objects

تمكننا لغة TypeScript من تعريف متغيرات من نوع `object` بحيث يحتوي على قيم من أنواع بيانات مختلفة أو بيانات من نفس النوع، كما في المثال التالي

```ts
// [index.ts] => example 5
let user = {
	firstName: 'Hassan', // string
	age: 18, // number
	canSwim: false, // boolean
	programmingLanguages: ['JavaScript', 'Swift', 'Python'], // string[]
};
```

لاحظ أننا قمنا بتعريف متغير أسميناه `user` يحتوي هذ المتغير على مجموعة من القيم على شكل `key` و `value` ففي المثال السابق تستطيع اعتبار كل من `firstName` و `age` و `canSwim` و `programminLanguages` أنها الـ `keys` الخاصة بالـ object المسمى `user` وأن القيم `'Hassan'` و `18` و `false` و `['JavaScript', 'Swift', 'Pyhon']` هي قيم values لتلك الـ `keys` التي تم تعريفها في الـ object `user`.

```ts
// [index.ts] => example 6
let user = {
	firstName: 'Hassan', // string
	age: 18, // number
	canSwim: false, // boolean
	programmingLanguages: ['JavaScript', 'Swift', 'Python'], // string[]
};

user.firstName = 'Mohammad'; // ✅
user.languages = ['Arabic', 'English']; // ❌

user = 'Ayman'; // ❌
user = {
	skills: ['programming', 'swimming'], // ❌
};
user = {
	firstName: 'Mostafa', // ✅
	age: 32, // ✅
	canSwim: true, // ✅
	programmingLanguages: ['PHP', 'Java'], // ✅
	languages: ['English'], // ❌
};
```

في المثال السابق لاحظ أننا وبعد اسناد قيمة من نوع `string` للـ `key` المسمى بـ `firstName` فإننا استطعنا إسناد قيمة جديدة لنفس الـ `key` لكن بالطبع من نوع `string` وهذا الشيء لا يمثل أي خطأ في لغة TypeScript لأننا قمنا بتعيين قيمة جديدة لنفس الـ `key` من نفس نوع البيانات المطلوب.

بينما لم نستطع إضافة `key` جديد باسم `languages` واسناد قيم له وذلك لأننا أثناء تعريفنا للـ `object user` لم نقم بإضافة ذلك الـ `key` له.

نفس الشيء عند محاولة إسنادنا لقيمة جديدة تمثل المتغير `user` أو تعريفنا لـ `keys` جديدة في الـ `object` بعد أن قمنا بتعيين الـ `keys` مسبقا، فهذا الشي غير ممكن لمنع حدوث أخطاء مستقبلية.

**المثال التالي يوضح كيفية تعريف `object` في TypeScript مع إضافة أنواع بيانات تصف الـ `keys` الخاصة بذلك الـ `object` وأنواع بياناتها**

```ts
// [index.ts] => example 7
let user: {
	firstName: string;
	age: number;
	canSwim: boolean;
	programmingLanguages: string[];
};

user = {
	firstName: 'Hassan', // string
	age: 18, // number
	canSwim: false, // boolean
	programmingLanguages: ['JavaScript', 'Swift', 'Python'], // string[]
};
```

## تطبيق عملي

- قم بإنشاء ملف `index.ts` جديد.
- قم بتعريف متغير من نوع `array` باسم `cities` يحتوي على عناصر من نوع `string` بحيث يمثل كل عنصر اسم من أسماء مدن أي دولة من اختيارك، بحيث لا تقل عدد المدن عن `7` مدن.
- قم بعمل `compile` لملف `ts` إلى ملف `js`.
- قم بطباعة محتويات `cities` في ملف `js` باستخدام `console.table`.
