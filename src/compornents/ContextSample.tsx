import React from "react";

//TitleContextに''をセット(初期化)
const TitleContext = React.createContext('')

const Title = () => {
    //関数３
    //Consumerを使ってContextの内容を受け取り
    return (
        <TitleContext.Consumer>
            {
                (title: string) => {
                    return <h1>{title}</h1>
                }
            }
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            { /* HeaderからはTitleへ何もデータを渡さない */}
            { /* 関数２ */}
            <Title />
            <h2>test</h2>
        </div>
    )
}

const Page = () => {
    //関数１
    const title = 'valueに値を入れることでcontextに値をセット'

    //Providerを用いてContextに値をセット
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

// propsを用いる場合、関数１→関数２→関数３とデータを受け渡さないといけない
// contextを用いた場合、関数１→関数３へ直接データを渡している

export default Page