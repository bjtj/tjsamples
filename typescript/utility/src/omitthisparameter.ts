namespace OmitThisParameterNS {
    function toHex(this: Number) {
        return this.toString(16);
    }

    const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

    console.log(fiveToHex());
}
