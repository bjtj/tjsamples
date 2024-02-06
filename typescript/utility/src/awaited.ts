namespace AwaitedNS {

    type A = Awaited<Promise<string>>;

    type B = Awaited<Promise<Promise<number>>>;

    type C = Awaited<boolean | Promise<number>>;


    // https://www.geeksforgeeks.org/typescript-awaitedtype-utility-type/

    async function getUser(): Promise<{
        id: number;
        name: string
    }> {
        return { id: 1, name: 'John Doe' };
    }

    type User = Awaited<ReturnType<typeof getUser>>;
    // type User = ReturnType<typeof getUser>;              <-- Causes TS2739 (https://typescript.tv/errors/#ts2739)

    async function printUser(): Promise<void> {
        const user: User = await getUser();
        console.log(user);
    }

    printUser();

}