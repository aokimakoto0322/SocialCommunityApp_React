import React from "react"

//interfaceによって属性を必ず入れさせる
interface ContainerProps {
    title: string,
    children: React.ReactNode
}

const Container = (props: ContainerProps) : JSX.Element => {
    const { title, children } = props

    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="interfaceによって定義されているため、titleは必須項目となる">
            { /* <p></p>要素がchildrenに当たる */}
            <p>背景色で囲われる部分</p>
        </Container>
    )
}

export default Parent