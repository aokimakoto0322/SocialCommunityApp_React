const Container = (props: {title: string, children: React.ReactElement  }) => {
    const { title, children } = props

    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello">
            { /* <p></p>要素がchildrenに当たる */}
            <p>背景色で囲われる部分</p>
        </Container>
    )
}

export default Parent