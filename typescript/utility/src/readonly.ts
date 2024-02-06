namespace ReadonlyNS {

    interface Todo {
        title: string;
    }

    const todo: Readonly<Todo> = {
        title: "Delete inactive users",
    };

    // todo.title = "Hello";      // Error(TS2540) (https://typescript.tv/errors/#ts2540)

}