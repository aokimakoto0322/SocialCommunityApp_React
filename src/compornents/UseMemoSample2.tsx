import React, { useState, useMemo} from "react";

const UseMemoSample = () => {
    const [text, setText] = useState('')
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevText) => {
            // ...はスプレッド構文という
            // スプレッド構文を使うことで要素を展開することができる
            // 例：https://typescriptbook.jp/reference/values-types-variables/array/spread-syntax-for-array
            return [...prevText, text]
        })
        setText('')
    }
    
    //numberOfCharacters1は再描画の度にitems.reduceを実行して結果を得る
    const numberOfCharacters1 = items.reduce((sub, items) => sub + items.length, 0)

    //第二引数の値(items)の値と比較し、更新されていたら再描画する
    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, items) => sub + items.length, 0)
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacters1}</p>
                <p>Total Number of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}

export default UseMemoSample