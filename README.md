# دورة أساسيات لغة TypeScript

## التمرين الأول

نريد بناء نموذج لفاتورة عميل في أحد المتاجر الالكترونية، لنقوم بذلك نحتاج إلى مساعدتك، لذلك قم بإنشاء ملف بإمتداد `ts` وتعريف `7` متغيرات فيه وهي كالتالي `storyName`, `username`, `userEmail`, `itemName`, `itemQuantity`, `itemPrice` و `hasEmail` من أنواع البيانات التالية `string`, `number` و `boolean` ثم قم بتعيين قيم لها وطباعتها بالشكل التالي كما هو موضح في الصورة التالية

![output](./images/01.png)

## التمرين الثاني

بعد شهر من ارتفاع المبيعات لدى صاحب المتجر بفضل جهودك في تطوير فواتيره الالكترونية قرر صاحب المتجر إجراء تعديل بسيط على شكل الفاتورة وذلك بتغيير بعض المتغيرات وأنواعها، قم بتعديل أنواع البيانات للمتغيرات السابقة لتصبح كالتالي:

- اسم المتجر `storeName` والذي يحتوي على قيمة نصية.
- أسماء العناصر المضافة من قبل العميل وهي عبارة عن `array` تحتوي على نصوص فقط يمثل كل عنصر فيها اسم من أسماء العناصر التي اختارها العميل
- بيانات العميل وهي عبارة عن `object` يحتوي على ثلاث عناصر الأول اسم العميل والثاني يحتوي على ايميل العميل والثالث يحتوي على عمر العميل

الآن قم بتعريف `function` باسم `invoice` ومرر لها هذه الثلاث قيم `storeName`, `items` و `userInfo` لتقوم بدورها بطباعة فاتورة العميل كما هو ظاهر في الصورة التالية

![output](./images/02.png)

## التمرين الثالث

قم بتصحيح الكود التالي ليصبح أنظف وأكثر قابلية للقراءة

```ts
type UserInfoType = {
	username: string;
	age: number;
};

type ItemType = {
	name: string;
	price: number;
};

let userInfo: UserInfoType = {
	username: 'ayman14',
	age: 20,
};

let items: ItemType[] = [
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

**ويكند سعيد**
