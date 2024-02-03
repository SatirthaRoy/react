export default Navigation

function Navigation (props) {
  const {firstName, lastName} = props;
  return <nav>
    <div>
      <h3>hellow {`${firstName} ${lastName}`}</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Log in</li>
      </ul>
    </div>
  </nav>
}