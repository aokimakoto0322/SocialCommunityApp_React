// propsについてのサンプル
import React from "react";

//処理２
const Text = (props: {content: string}) => {
    // const { content } = props と同じ
    const content = props.content

    return <p className="text">{content}</p>
}

//処理１
const Message = () => {
    const content1 = 'this is a parent component'
    const content2 = 'Message uses Text component'

    return (
        <div>
            {/* ここでTextメソッドに引数を渡している */}
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message