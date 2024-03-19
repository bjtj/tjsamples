# Remix Docs #

<https://remix.run/docs/en/v1>

## Getting Started ##

```bash
npx create-remix@latest
```

We strongly encourage you to do one of the tutorials before anything else. Remix is different. The tutorials will show you how to start with web fundamentals and then progressively enhance your app to the modern UX you're after.


# Quickstart #

<https://remix.run/docs/en/v1/tutorials/blog>

```bash
npx create-remix@latest --template remix-run/indie-stack blog-tutorial
```

```bash
cd blog-tutorial
npm run dev
```

Now let's tell Prisma to update our local database and TypeScript definitions to match this schema change:

```bash
npx prisma db push
```

Great, let's get those posts into the database with the seed script:

```bash
npx prisma db seed
```

Let's generate a migration file for our schema changes - which will be required if you deploy your application rather than just running in dev mode locally.

```bash
npx prisma migrate dev
```


## Homework ##

### Form field content isn't updating #1797 ###

<https://github.com/remix-run/remix/discussions/1797>

```js
let { initialValue } = useLoaderData()
let location = useLocation()
return <input key={location.key} name="something" defaultValue={initialValue} />
```




# Templates and Stacks #

<https://remix.run/docs/en/main/guides/templates>

Official Templates

``` shell
npx create-remix@latest --template remix-run/remix/templates/arc
npx create-remix@latest --template remix-run/remix/templates/cloudflare-pages
npx create-remix@latest --template remix-run/remix/templates/cloudflare-workers
npx create-remix@latest --template remix-run/remix/templates/deno
npx create-remix@latest --template remix-run/remix/templates/express
npx create-remix@latest --template remix-run/remix/templates/fly
npx create-remix@latest --template remix-run/remix/templates/vite-cloudflare
npx create-remix@latest --template remix-run/remix/templates/vite-express
npx create-remix@latest --template remix-run/remix/templates/vite

## SPA Mode
npx create-remix@latest --template remix-run/remix/templates/spa
```

Official Stacks

``` shell
npx create-remix@latest --template remix-run/blues-stack
```

- Blues: node.js server, postgresql
- Indie: node.js server, sqlite, bootstrap
- Grunge: serverless, dynamodb, aws

