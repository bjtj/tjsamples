namespace ConstructorParametersNS {
    type T0 = ConstructorParameters<ErrorConstructor>;

    // type T0 = [message?: string]

    type T1 = ConstructorParameters<FunctionConstructor>;

    // type T1 = string[]

    type T2 = ConstructorParameters<RegExpConstructor>;

    // type T2 = [pattern: string | RegExp, flags?: string]

    class C {
        constructor(a: number, b: string) { }
    }
    type T3 = ConstructorParameters<typeof C>;

    // type T3 = [a: number, b: string]

    type T4 = ConstructorParameters<any>;

    // type T4 = unknown[]


    // type T5 = ConstructorParameters<Function>;
    //                                 ^^^^^^^^

    // Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
    //   Type 'Function' provides no match for the signature 'new (...args: any): any'.

    // type T5 = never
}
