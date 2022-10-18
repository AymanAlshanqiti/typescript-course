# دورة أساسيات لغة TypeScript

## التعرف على ملف tsconfig.json

يحتوي الـ compiler الخاص بـ TypeScript على ملف نستطيع من خلاله تغيير إعداداته ليتناسب مع متطلبات المشروع الذي نعمل عليه.

ولإنشاء ملف إعدادات الـ compiler الخاص بـ TypeScript نقوم بكتابة الأمر التالي بداخل الـ Terminal

```
tsc --init
```

نلاحظ أنه تم إنشاء ملف `tsconfig.json` من قبل الـ compiler الخاص بـ TypeScript ومحتوى الملف مكتوب بصيغة `json`.

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```

سنتعرف على بعض أهم الخيارات في هذا الملف :

الخاصية `target` : تتيح لنا هذه الخاصية إمكانية تحديد إصدار JavaScript الذي نرغب في أن يقوم الـ compiler الخاص بـ TypeScript بتحويل كود TypeScript إليه.

فمثلا : بإمكاننا جعل الـ compiler يقوم بتحويل الكود الخاص بنا من لغة TypeScript إلى كود بلغة JavaScript باستخدام إصدار قديم من JavaScript مثل `ES5` أو إصدار أحدث مثل `es2016` فكما هو معلوم بأن المتصفحات لا تفهم لغة TypeScript لذلك نقوم بجعل الـ compiler الخاص بـ TypeScript يقوم بتحويل الكود إلى JavaScript بالإصدار الذي نرغب فيه لتتمكن المتصفحات من فهم الكود البرمجي الذي كتبناه.

كما هو معلوم أن ترتيب الملفات بداخل المشاريع البرمجية أمر غاية في الأهمية، ولو افترضنا أن لدينا أكثر من 100 ملف مكتوب بلغة TypeScript سيكون من غير المعقول تحويل جميع هذه الملفات إلى ملفات JavaScript ووضعها في نفس المكان - الأمر الذي سيسبب صعوبة في الوصول للملفات المطلوبة - لذلك من المهم جدا ترتيب ملفاتنا أثناء بناءنا للمشاريع وذلك بتخصيم مجلدات لوضع ملفات TypeScript فيها وأخرى لوضع ملفات JavaScript فيها وذلك عن طريق استخدام خاصيتين من خصائص الـ compiler الخاص بـ TypeScript وهما `rootDir` و `outDir`

الخاصية `rootDir` : تتيح لنا هذه الخاصية تحديد المكان الذي نرغب بكتابة أكواد TypeScript فيه ليقوم الـ compiler مباشرة بالذهاب إلى ذلك المكان عند قيامه بتحويل الكود إلى JavaScript.

```js
"rootDir": "./src"
```

في السطر السابق قمنا بتعديل قيمة `rootDir` وأضفنا لها مسار `src` ليقوم الـ compiler بالذهاب إليه عند البدء بتحويل أكواد TypeScript.

الخاصية `outDir` : تتيح لنا هذه الخاصية تحديد المكان الذي نرغب بكتابة أكواد JavaScript المحولة فيه ليقوم الـ compiler مباشرة بالذهاب إلى ذلك المكان ووضع أكواد JavaScript التي قام بتحويلها فيه.

```js
"outDir": "./public"
```

في السطر السابق قمنا بتعديل قيمة `outDir` وأضفنا لها مسار `public` ليقوم الـ compiler بإضافة جميع ملفات JavaScript التي قام بإنشائها إلى ذلك المسار.

## تطبيق عملي

- قم بإنشاء مساحة عمل جديدة في VSCode
- قم باستخدام الأمر `tsc --init` لإنشاء ملف `tsconfig.josn`
- قم بإضافة مجلد جديد بإسم `src`
- قم بإنشاء ملف جديد باسم `index.ts` بداخل المجلد `src`
- قم بكتابة جملة طباعة ترحيبية بداخل ملف `index.ts` باستخدام `console.log`
- قم بتعديل خيارات ملف `tsconfig.json` التالية `rootDir` & `outDir`
- قم بتشغيل الـ compiler الخاص بـ TypeScript باستخدام الأمر `tsc -w` ليقوم بإنشاء ملفات JavaScript بداخل فولدر `public`
- قم بطباعة المخرجات الموجودة في ملف JavaScript عن طريق الأمر `node index.js`

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

## تطبيق عملي

- قم بإنشاء مساحة عمل جديدة في VSCode
- قم باستخدام الأمر `tsc --init` لإنشاء ملف `tsconfig.josn`
- قم بإضافة مجلد جديد بإسم `src`
- قم بإنشاء ملف جديد باسم `index.ts` بداخل المجلد `src`
- قم بتعريف 10 متغيرات أو 5 بحد أدنى لبناء بطاقة تعريفية شخصية خاصة بك تحتوي على أهم 3 أنواع بيانات `string` & `number` & `boolean` بداخل ملف `index.ts` ثم قم بطباعة هذه البطاقة باستخدام `console.log` ولا تنسى أن تبتكر في طريقة عرض البيانات لتجعل البطاقة تبدوا بشكل جميل ومرتب
- قم بتعديل خيارات ملف `tsconfig.json` التالية `rootDir` & `outDir`
- قم بتشغيل الـ compiler الخاص بـ TypeScript باستخدام الأمر `tsc -w` ليقوم بإنشاء ملفات JavaScript بداخل مجلد `public`
- قم بطباعة المخرجات الموجودة في ملف `index.js` وذلك بكتابة الأمر التالي `node index.js`
