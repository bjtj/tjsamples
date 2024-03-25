import { PrismaClient } from '@prisma/client'

// npx ts-node script.ts

const prisma = new PrismaClient()

async function _0_clear() {
  // https://www.prisma.io/docs/orm/prisma-client/queries/crud#delete-all-records
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
}

async function main() {
  // ... you will write your Prisma Client queries here
  await _0_clear();
  await _1_create_new_user_record();
  await _2_retreive_all_user_records();
  await _3_explorer_relation_queries_with_prisma();
}

async function _1_create_new_user_record() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)

  // { id: 1, email: 'alice@prisma.io', name: 'Alice' }
}

async function _2_retreive_all_user_records() {
  const users = await prisma.user.findMany()
  console.log(users)

  // [ { id: 1, email: 'alice@prisma.io', name: 'Alice' } ]
}

async function _3_explorer_relation_queries_with_prisma() {
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {
        create: {
          title: 'Hello World',
        },
      },
    },
  })
  console.log(user)

  // { id: 2, email: 'bob@prisma.io', name: 'Bob' }

  // ----

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })

  // [ { id: 1, email: 'alice@prisma.io', name: 'Alice' } ]
  // { id: 2, email: 'bob@prisma.io', name: 'Bob' }
  // [
  //   { id: 1, email: 'alice@prisma.io', name: 'Alice', posts: [] },
  //   {
  //     id: 2,
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: [
  //       {
  //         id: 1,
  //         title: 'Hello World',
  //         content: null,
  //         published: false,
  //         authorId: 2
  //       }
  //     ]
  //   }
  // ]
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
