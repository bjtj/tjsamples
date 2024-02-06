namespace RequiredNS {

    interface Props {
        a?: number;
        b?: string;
    }

    const obj: Props = { a: 5 };

    // const obj2: Required<Props> = { a: 5 };        // Error(TS2741) (https://typescript.tv/errors/#ts2741)
}