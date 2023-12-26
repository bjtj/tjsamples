import { useReducer } from "react";

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer Sample</h2>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'add'})}>Add</button>
            <div>SUM: {state.sum}</div>
            {
                state.list.length === 0 ? (<div>No Item</div>) : (<ul>
                    {state.list.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>)
            }
        </div>
    )
}

const initialState = { list: [], sum: 0, seed: 0 };

type State = {
    sum: number;
    list: number[];
    seed: number;
}

type Action = {
    type: 'add';
} | {
    type: 'reset';
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            let genid = state.seed + 1;
            let list = [...state.list, genid];
            let sum = list.reduce((a, b) => a + b, 0);
            return { list, sum, seed: genid };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}