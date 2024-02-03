export default Main

const Hellow = (props) => <h3>hellow {props.name}</h3>;
const NotHellow = (props) => <h3>Get out</h3>;

function Msg (props) {
  return props.name === 'himu' ? <Hellow name={props.name}/> : <NotHellow/>;
}

function Main (props) {
  let name ='onno';
  return <main>
    <h2>Main</h2>
    <Msg name={name}/>
  </main>
}