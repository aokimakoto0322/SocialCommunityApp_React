import { useReducer } from "react";

//reducerが受け取るactionの型定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

interface CounterProps {
    initialValue: number
}

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'DECREMENT':
            return currentCount - 1
        case 'INCREMENT':
            return currentCount + 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}

const Counter = (props: CounterProps) => {
    const initialValue = props.initialValue
    // count: 現在の値
    // dispatch: 現在の値を操作するための関数
    // reducer: 操作する関数
    //initialValue: 初期値 
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            { /* dispatch関数にactionの値を渡して状態を更新する */}
            <p>Count: {count}</p>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>*2</button>
            <button onClick={() => dispatch('RESET')}>reset</button>
        </div>
    )
}

const Start = () => {
    return Counter({initialValue: 0})
}

export default Start