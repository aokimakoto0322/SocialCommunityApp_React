// Helloをクリックするとアラートを出すテキストを返却
const Hello = () => {
    const onClick = () => {
        alert('hello world')
    }

    const text = 'hello, React'

    //テキストを子に持つdiv要素を返す
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello