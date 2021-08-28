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

/_
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
}, _/

# Links

## learning the web

https://developer.mozilla.org/en-US/docs/Web#documentation_for_web_developers

## frontend interview question practice

- https://en.wikiversity.org/wiki/Web_Design/JavaScript_Challenges
