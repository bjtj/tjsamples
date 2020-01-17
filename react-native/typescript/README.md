# Using TypeScript with React Native #

https://facebook.github.io/react-native/docs/typescript

```
$ npx react-native init MyTSProject --template react-native-template-typescript@6.2.0
```


## Adding TypeScript to an Existing Project ##

```
yarn add typescript @types/jest @types/react @types/react-native @types/react-test-renderer
# or for npm
npm install --save-dev @types/jest @types/react @types/react-native @types/react-test-renderer
```


# `An unexpected error occurred: "https://registry.yarnpkg.com/react-native-template-react-native-template-typescript: Not found".` #

https://github.com/react-native-community/react-native-template-typescript/issues/72#issuecomment-541288488

> remove legacy react-native-cli
>
> ```
> npm uninstall -g react-native-cli
> ```
>
> install new thing
>
> ```
> npm i -g @react-native-community/cli
> ```
>
> and you can new project with react-native-template-typescript
>
> ```
> npx react-native init MyApp --template react-native-template-typescript
> ```
