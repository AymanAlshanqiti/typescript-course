# دورة أساسيات لغة TypeScript

## استخدام أنواع البيانات أثناء تعريف المتغيرات

نستطيع في TypeScript وبشكل اختياري تحديد نوع البيانات للعنصر الذي نود تعريفه عند تعريفه مباشرة وقبل استخدامه، لكي نجبره على احتواء نوع معين من البيانات فقط كما في المثال التالي

```ts
// [index.ts] => example 1
const username = 'omar90';
let username: string;
const username: string = 'omar90';
console.log(typeof username); // string
```

```ts
// [index.ts] => example 2
let age = 20;
let age: number;
let age: number = 20;
console.log(typeof age); // number

const balance = 898.39;
let balance: number;
const balance: number = 898.39;
console.log(typeof balance); // number
```

```ts
// [index.ts] => example 3
const isLoading = true;
let isLoading: number;
const isLoading: number = false;
console.log(typeof isLoading); // boolean
```

## تدريب عملي

قم بتصميم بطاقة تعريفية خاصة بك باستخدم متغيرات من أنواع بيانات مختلفة ومن ثم قم بطباعة هذه البطاقة باستخدام `console.log`

## طريقة التعامل مع Objects و Arrays

نستطيع في TypeScript وبشكل اختياري تحديد نوع البيانات للعنصر الذي نود تعريفه عند تعريفه مباشرة وقبل استخدامه، لكي نجبره على احتواء نوع معين من البيانات فقط كما في المثال التالي

```ts
// [index.ts] => example 4
const username = 'omar90';
let username: string;
const username: string = 'omar90';
```

```ts
// [index.ts] => example 5
let age = 20;
let age: number;
let age: number = 20;

const balance = 898.39;
let balance: number;
const balance: number = 898.39;
```

```ts
// [index.ts] => example 6
const isLoading = true;
let isLoading: number;
const isLoading: number = false;
```

## تدريب عملي

قم بتصميم بطاقة تعريفية خاصة بك باستخدم متغيرات من أنواع بيانات مختلفة ومن ثم قم بطباعة هذه البطاقة باستخدام console.log

## طريقة التعامل مع Objects و Arrays

```ts
// [index.ts] => example 7
const cities = ['Makkah', 'Riyadh', 'Jeddah'];
cities.push(40); // ❌
cities[1] = true; // ❌
cities.push('Jeddah'); // ✅
```

في المثال السابق قمنا بتعريف ثابت باسم `cities` كـ Array من نوع `string` ونلاحظ أنه ليس بإمكاننا إضافة عنصر لهذا الـ Array من نوع بيانات غير الـ `string` وذلك لأننا عند تعريفها قمنا بإسناد قيم نصية لجميع عناصرها، كما لا يمكننا أيضا تعديل قيم أحد عناصرها بشكل مباشر بإضافة عنصر جديد من نوع بيانات مختلف.

```ts
// [index.ts] => example 8
let years = [1990, 2014, 2019, 2025];
years = '2023'; // ❌
years = ['2023']; // ❌
years.push('2023'); // ❌
years[1] = true; // ❌
years.push(2030); // ✅
```

نلاحظ في المثال السابق خطأ جديد وهو محاولتنا لإسناد قيمة جديدة للـ Array المسماة بـ years وذلك لأنه قد سبق وأن تم تعريفها وإضافة عناصر لها، فبالتالي لا يمكننا إعادة إسناد قيمة لـ years من نوع بيانات مختلف.

```ts
// [index.ts] => example 9
const mixArray = ['Ayman', 'Alshanqiti', 1990, 32];
mixArray.push('2023'); // ✅
mixArray[1] = true; // ❌
mixArray.push(2030); // ✅
```

بإمكاننا تعريف Array يحتوي على أنواع مختلفة من البيانات وذلك بتحديد عناصره أثناء تعريفه، ومباشرة ستفهم TypeScript أننا نرغب في جعل هذا المتغير يحتوي على أكثر من نوع من أنواع البيانات.

```ts
// [index.ts] => example 10
const user = {
  firstName: 'Hassan',
  age: 18,
  canSwim: false,
  programmingLanguages: ['JavaScript', 'Swift', 'Python']
}

user.firstName = 'Mohammad'; // ✅
user.languages = ['Arabic', 'English']; // ❌

user = 'Ayman'; // ❌
user = {
  skills: ['programming', 'swimming'] // ❌
}
user = {
  firstName: 'Mostafa', // ✅
  age: 32, // ✅
  canSwim: true // done,
  programmingLanguages: ['PHP', 'Java'] // ✅
  languages: ['English'] // ❌
}
```

## تدريب عملي

- قم بتصميم object يحتوي على بطاقة تعريفية خاصة بك تحتوي على اسمك الأول واسم العائلة ونبذة شخصية عنك في مالا يزيد عن 200 حرف وسنة الميلاد تفاصيل آخر مؤهل دراسي (المؤهل، اسم الجهة، سنة البداية، سنة التخرج) المهارات، لغات البرمجة التي تعرفها، هل تملك حساب في منصة سطر، هل قمت بحل أحد تحديات منصة كودرهب ومن ثم قم بطباعة هذه البطاقة باستخدام `console.log` في جدول بيانات.
- قم بإضافة أنواع البيانات عند تعريف الـ object.
