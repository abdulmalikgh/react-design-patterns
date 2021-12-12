import SplitScreen from "./SplitScreen"; 
import styled from 'styled-components'

const LeftPane = styled.h1`
with:100%;
height: 500px;
background-color:red;
`
function Left({ name }) {
  return <LeftPane>{ name }</LeftPane>
}
function Right({ message }) {
  return <h1>{message}</h1>
}

function App() {
  return (
    <div className="App">
        <SplitScreen leftWeight={1} rightWeight={3}>
            <Left name="Malik"/>
            <Right message={'Hello'} />
        </SplitScreen>
    </div>
  );
}

export default App;
