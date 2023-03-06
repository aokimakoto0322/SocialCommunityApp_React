import { useState } from "react";

interface CounterProps {
    initialValue: number
}

const Test = () => {
    return Counter({initialValue: 1})
}

const Counter = (props: CounterProps) => {
    const initialValue = props.initialValue

    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
    )
}

export default Test