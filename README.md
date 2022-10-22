# دورة أساسيات لغة TypeScript

## التعرف على `type` وطريقة التعامل معه

```ts
// [index.ts] => example 1
let user: {
	uid: string | number;
	username: string;
};

let item: {
	uid: string | number;
	title: string;
	price: number;
};

let store: {
	uid: string | number;
	name: string;
};

user = {
	uid: 1,
	username: 'ayman14',
};

item = {
	uid: '1',
	title: 'iPhone 14',
	price: 3999.99,
};

store = {
	uid: '12ud-32l-313-3dpfss',
	name: 'Dokkan Afkar',
};

function getUserInvoice(
	user: { uid: string | number; username: string },
	item: { uid: string | number; title: string; price: number },
	store: { uid: string | number; name: string }
) {
	return 'User Invoice';
}

function getUserOrders(user: { uid: string | number; username: string }) {
	return 'User Orders Detail';
}

function filterItemByUsers(
	user: { uid: string | number; username: string }[],
	items: { uid: string | number; title: string; price: number }
) {
	return 'Item 1 => [User 3, User 4, User 7]';
}

console.log(getUserInvoice(user, item, store));
console.log(getUserOrders(user));
console.log(filterItemByUsers([user, user, user], item));
```

لاحظ في المثال السابق أننا قمنا بتعريف `3` متغيرات من نوع `object` وهي `user` و `item` و `store` وكل متغير يحمل مجموعة من العناصر من أنواع بيانات مختلفة، وقمنا بكتابة عدد من الـ `functions` لتقوم بطباعة مجموعة من المعلومات، بحيث تقوم الـ `function` الأولى `getUserInvoice` بإرجاع فاتورة المستخدم التي قام بطلبها من المتجر، بينما تقوم الـ `function` الثانية `getUserOrders` بإرجاع الطلبات التي قام المستخدم بطلبها من المتجر، أما الـ `function` الأخيرة فتقوم بإرجاع بيانات المستخدمين الذين قاموا بطلب `item` معينة.

لاحظ عدد المرات التي تم تكرار نوع البيانات `string | number` في الكود!
لاحظ أيضا عدد المرات التي تم فيها تكرار نوع البيانات `{ uid: string | number; username: string }`
الآن لاحظ عدد المرات التي تم فيها تكرار نوع البيانات `{ uid: string | number; title: string; price: number }`

تخيل أن لدينا أكثر من 100 `functions` تستخدم أنواع البيانات السابقة، هل يعقل أن نقوم بتكرار الكود السابق لـ 100 مرة ؟
طبعا من غير المنطقي عمل ذلك، إذ لا يمثل الكود السابق كودا نظيفا بمعايير كتابة الكود النظيف لدى المبرمجين

انظر الآن لنفس الكود السابق لكن بعد عملية التحسين وإضافة `type` لكل نوع مكرر من أنواع البيانات.

```ts
// [index.ts] => example 2
type StringOrNumber = string | number;
type User = {
	uid: StringOrNumber;
	username: string;
};
type Item = {
	uid: StringOrNumber;
	title: string;
	price: number;
};
type Store = {
	uid: StringOrNumber;
	name: string;
};

let user: User = {
	uid: 1,
	username: 'ayman14',
};

let item: Item = {
	uid: '1',
	title: 'iPhone 14',
	price: 3999.99,
};

let store: Store = {
	uid: '12ud-32l-313-3dpfss',
	name: 'Dokkan Afkar',
};

function getUserInvoice(user: User, item: Item, store: Store) {
	return 'User Invoice';
}

function getUserOrders(user: User) {
	return 'User Orders Detail';
}

function filterItemByUsers(user: User[], items: Item) {
	return 'Item 1 => [User 3, User 4, User 7]';
}

console.log(getUserInvoice(user, item, store));
console.log(getUserOrders(user));
console.log(filterItemByUsers([user, user, user], item));
```

أصبح الكود أكثر ترتيبا من الكود في المثال 1

**الخلاصة :**

نُلخّص ونقول بأننا نستطيع في TypeScript تعريف أي نوع نريده من البيانات سواء كانت أنواع بسيطة أو معقدة، لاستخدامها لاحقا في أكثر من مكان وذلك عن طريق الكلمة المحجوزة في لغة TypeScript وهي `type` ثم اسناد الاسم الذي نرغب بتسميته - يفضل استخدام اسم يدل على نوع البيانات المستخدم - ثم علامة `=` ثم نقوم بوضع نوع البيانات الذي نرغب به.

## تطبيق عملي

قم بتصحيح الكود التالي ليصبح أنظف وأكثر قابلية للقراءة

```ts
let userInfo: { username: string; age: number } = {
	username: 'ayman14',
	age: 20,
};

let items: {
	name: string;
	price: number;
}[] = [
	{
		name: 'iPhone 14',
		price: 4000.23,
	},
	{
		name: 'iPad',
		price: 2999,
	},
	{
		name: 'MacBook Pro',
		price: 9999.99,
	},
];

function invoice(
	storeName: string,
	userInfo: { username: string; age: number },
	items: { name: string; price: number }[]
) {
	console.log(storeName);
	console.table(userInfo);
	console.table(items);
}

invoice('Dokkan Afkar', userInfo, items);
```
