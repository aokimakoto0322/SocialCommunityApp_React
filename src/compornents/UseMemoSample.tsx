// Reactフック　useMemoとuseCallback
// 目的：値や関数を保持し、必要のない子要素のレンダリングを抑制するために使用する

import React, { memo, useState } from "react";

interface FizzProps {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const isFizz = props.isFizz
    console.log(`Fizzが描画されました。isFizz=${isFizz}`)

    return (
        <span>
            { /* isFizzがTrueの場合は'Buzz'と表示し、Falseの場合は空文字を表示する */}
            {isFizz ? 'Fizz' : ''}
        </span>
    )
}

interface BuzzProps {
    isBuzz: boolean
}

//ジェネリックス
//memo関数を呼ぶ際に、BuzzPropsオブジェクトだけを引数に入れることを許容する
const Buzz = memo<BuzzProps>(
    function Compornent(props) {
        const isBuzz = props.isBuzz
        console.log(`Buzzが再描画されました。isBuzz=${isBuzz}`)

        return (
            <span>
                {isBuzz ? 'Buzz' : ''}
            </span>
        )
    }
)

const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`Parentが再描画されました。count=${count}`)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>{`現在のカウント:${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}

export default Parent