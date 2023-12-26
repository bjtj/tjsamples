import { useRef } from "react";

export default function UseRef() {
    const value = useRef<boolean>(true);

    return (
        <div>
            <h2>useRef Sample</h2>
            <button onClick={() => value.current = !value.current}>Toggle</button>
            <div>{value.current ? 'TRUE' : 'FALSE'} <span style={{color: 'red'}}>Do not update automatically</span></div>
            <button onClick={() => alert(`${value.current ? 'True' : 'False'}`)}>Get Value</button>
        </div>
    );
}