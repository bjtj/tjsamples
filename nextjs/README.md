# Getting Started #

<https://nextjs.org/docs/getting-started>

```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

typescript

```bash
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app --typescript
```


`npm run dev` or `yarn dev` or `pnpm dev`

Edit `pages/index.js`


**Actual result:**

```
TypeError: Cannot read properties of null (reading 'useContext')
```

**Solution:**

On Windows, use WSL.


## Manual Setup ##

Install next, react and react-dom in your project:

```bash
npm install next react react-dom
# or
yarn add next react react-dom
# or
pnpm add next react react-dom
```

Open package.json and add the following scripts:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```
