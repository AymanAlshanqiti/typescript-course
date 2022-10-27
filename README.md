# دورة أساسيات لغة TypeScript

## مشاريع تطبيقية

## **التطبيق الأول**

يرغب أحمد في افتتاح `3` متاجر صغيرة في `3` قطاعات مختلفة `DIGITAL_CARD` و `FOOD` و `CLOTHING` بحيث يحتوي كل متجر على البيانات التالية :

- اسم المتجر `string`
- رابط المتجر `string`
- هل المتجر متاح أو مغلق `boolean`
- رقم للتواصل `number`
- تصنيف المتجر من بين الثلاث تصنيفات التي تم ذكرها سابقا `enum`
- مواقع التواصل والتي تحتوي على `3` مواق تواصل `twitter` و `instagram` و `whatsapp` بحيث يحتوي كل موقع منهم على شيئين `site` والذي يحمل اسم موقع التواصل `url` والذي يحمل رابط موقع التواصل الخاص بالمتجر `array`

قم بمساعدة أحمد في كتابة `function definition` تقوم باستقبال بيانات المتجر المراد إضافه ثم تقوم بإرسالها على شكل `object` إلى فريق الـ `back-end` ليقوموا بإنشائه في قاعدة البيانات.

## **التطبيق الثاني**

بعد أن أتممنا كتابة الـ `function definition` الخاصة بإضافة المتاجر، الآن نرغب في كتابة `function definition` تقوم بإضافة مستخدمي المتجر لقواعد البيانات الخاصة بنا، بحيث نتيح للعملاء التسجيل في متجرنا.

قم بكتابة `function definition` تقوم باستقبال بيانات العميل بحيث يحتوي جدول العميل على البيانات التالية :

- الاسم الأول `string`
- الاسم الأخير `string`
- تاريخ الميلاد `string`
- العمر `number` لايتم إدخاله عن طريق العميل، بل يتم حسابه لاحقا قبل إرسال البيانات لفريق الـ `back-end` عن طريق معرفة تاريخ الميلاد فقط
- هل المستخدم نشط ؟ `boolean`

ثم تقوم الـ `function` بإرجاع بيانات العميل لفريق الـ `back-end` على شكل `object` ليقوموا بتخزينه في قواعد البيانات.

## **التطبيق الثالث**

الآن وقد قمنا بتعريف الـ `functions` المختصة بإضافة متجر وإضافة عميل جديد، نريد الآن كتابة `function` تقوم باستقبال المنتج االذي يرغب المتجر بإضافته وإرساله لفريق الـ `back-end` ليقوموا بحفظه في قاعدة البيانات بحيث يحتوي المنتج على التفاصيل التالية :

- اسم المتجر `string`
- اسم المنتج `string`
- وصف المنتج ويكون اختياري `string`
- سعر المنتج `number`
- الكمية المتوفرة `number`
- تصنيف المنتج `enum`

ويتم إرساله لفريق الـ `back-end` على شكل `object`

## **التطبيق الرابع**

لكي تكتمل الدائرة ويستطيع العملاء الطلب من المتجر نحتاج إلى `function` تقوم بإرسال طلب العميل إلى فريق الـ `back-end` ليقوموا بمعاالجة الطلب وحفظه في قواعد البيانات.
قم بإنشاء `function` تقوم بتجميع المنتجات التي قام العميل بوضعها في السلة وأعدادها وإرسالها كطلب جديد للمستخدم بحيث تقوم الـ `function` بإرجاع `object` يحتوي على البيانات التالية :

- اسم المتجر `string`
- بيانات العميل كاملة `UserObject`
- رقم الطلب `number`
- حالة الطلب `enum`
- بيانات المنتجات المطلوبة array of `ItemObject` (qty, description)
- القيمة الاجمالية للطلب

## الحلول

**التطبيق الأول**

```ts
// TYPES
type StoreType = {
	storeName: string;
	storeLink: string;
	isOnline: boolean;
	contactNumber: number;
	storeCategory: StoreCategoryEnum;
	socialLinks: SocialType[];
};

type SocialType = {
	name: SocialEnum;
	url: string;
};

// ENUMS
enum SocialEnum {
	TWITTER = 'twitter',
	INSTAGRAM = 'instagram',
	WHATSAPP = 'whatsapp',
}

enum StoreCategoryEnum {
	DIGITAL_CARD = 'DIGITAL_CARD',
	FOOD = 'FOOD',
	CLOTHING = 'CLOTHING',
}

// FUNCTION DEFIENITION
const createStoreService = (store: StoreType): StoreType => {
	return store;
};
```

**التطبيق الثاني**

```ts
// TYPES
type UserInfoType = {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	age?: number;
	isActive: boolean;
};

// FUNCTION DEFIENITION
const CreateUserService = (userData: UserInfoType): UserInfoType => {
	userData.age = calculateUserAgeHelper(userData.dateOfBirth);
	return userData;
};

const calculateUserAgeHelper = (date: string): number => {
	const currentYear: number = new Date().getFullYear();
	const userDateOfBirthYear: number = new Date(date).getFullYear();
	return currentYear - userDateOfBirthYear;
};
```

**التطبيق الثالث**

```ts
type ItemType = {
	storeName: string;
	itemName: string;
	itemDescription?: string;
	itemPrice: number;
	avaliableQuantity: number;
	category: ItemCategoryEnum;
};

enum ItemCategoryEnum {
	'KIDS' = 'KIDS',
	'MALE' = 'MALE',
	'FEMALE' = 'FEMALE',
}

const createItemService = (item: ItemType): ItemType => {
	return item;
};
```

**التطبيق الرابع**

```ts
enum OrderStatusEnum {
	NEW = 'New',
	WATINIG = 'Waiting',
	COMPLETED = 'Completed',
}

type ItemType = {
	storeName: string;
	itemName: string;
	itemDescription?: string;
	itemPrice: number;
	avaliableQuantity: number;
	category: ItemCategoryEnum;
};

type ItemInfoType = ItemType & {
	userQuantity: number;
	userNotes?: string;
};

type OrderType = {
	storeName: string;
	userInfo: UserInfoType;
	orderNumber?: number;
	orderStatus?: OrderStatusEnum;
	itemsInfo: ItemInfoType[];
	totalPrice?: number;
};

const creatOrderService = (order: OrderType): OrderType => {
	let total = 0;
	for (let p of order.itemsInfo) {
		total += p.itemPrice * p.userQuantity;
	}
	order.totalPrice = total;
	order.orderNumber = Math.floor(Math.random() * 1000);
	return order;
};
```
