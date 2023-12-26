import React, { useState } from 'react';

export default function UseState() {
    const [value, setValue] = useState<boolean>(true);

    return (
        <div>
            <h2>useState Sample</h2>
            <button onClick={() => setValue(!value)}>Toggle</button>
            <div>{value ? 'TRUE' : 'FALSE'}</div>
        </div>);
}