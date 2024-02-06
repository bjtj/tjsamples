export namespace ThisParameterTypeNS {
    function toHex(this: Number) {
        return this.toString(16);
    }

    function numberToString(n: ThisParameterType<typeof toHex>) {
        console.log(`${n} ${typeof n}`); // 42 number
        return toHex.apply(n);
    }

    console.log(`${typeof toHex}`); // function
    numberToString(42);

    // https://www.geeksforgeeks.org/typescript-thisparametertypetype-utility-type/

    type Greeting = {
        message: string;
        sayHello(this: Greeting): void;
        // sayHello(): void; // same as above
    };

    const myGreeting: Greeting = {
        message: "Hello, GeeksforGeeks!",
        sayHello() {
            console.log(this.message);
        },
    };

    // Outputs: "Hello, GeeksforGeeks!"
    myGreeting.sayHello();
}
