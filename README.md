- 2:05 mins Tailwind config

- https://www.youtube.com/watch?v=mDgEqoQUBgk
- https://github.com/karlhadwen/instagram

/_rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read;
allow write: if request.auth.uid != null;
}
}
}_/

ESLint extention
tailwind extension

yarn add date-fns, firebase, react-loading-skeleton
yarn add tailwindcss, prop-types, postcss, postcss-cli

# Links

## learning the web

https://developer.mozilla.org/en-US/docs/Web#documentation_for_web_developers

## Create React App: ESLint

- https://create-react-app.dev/docs/setting-up-your-editor/

# clone deep

npm i --save lodash.clonedeep
var cloneDeep = require('lodash.clonedeep');
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = \_.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

# optimizing performance

https://reactjs.org/docs/optimizing-performance.html#examples

## Prettier Eslint

Traversy Media
https://www.youtube.com/watch?v=SydnKbGc7W8
