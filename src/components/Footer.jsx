export default Footer

function Footer (props) {
  let {list} = props;
  return <footer>
    <p>
      <h2>List:-</h2>
      <ol>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    </p>
  </footer>
}