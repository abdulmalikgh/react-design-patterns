import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    border:1px solid red;
`
const Pane = styled.div`
    flex:${ ( { weight }) => weight}
`

export default function SplitScreen({children, leftWeight  = 1 , rightWeight = 1  }) {
    const [left, right] = children
    console.log(left, right)
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}