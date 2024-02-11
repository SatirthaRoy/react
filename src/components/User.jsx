import { useContext, useState } from "react";
import { data } from "./Account";

function User () {
  // use context hook
  let detail = useContext(data);
  // use state hooks
  const [form,setForm] = useState({name: '', email: '', feedback: ''});
  let disable = ((form.name !== '') && (form.email !== '') && (form.feedback !== '')) ? false : true;

  const [info, setInfo] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({...form});
    setForm({...form, name: '', email: '', feedback: ''});
  }
  console.log(detail);
  return <form action="" onSubmit={handleSubmit}>
    <fieldset>
      <p>User: {detail.name}</p>
      <h2>Feedback form</h2>
      <label htmlFor="name">
        Name: <input type="text" placeholder="Enter name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
      </label>
      <br />
      <label htmlFor="email">
        Email: <input type="email" placeholder="Enter email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
      </label>
      <br />
      <label htmlFor="feedback">Feedback:</label>
      <br />
      <textarea name="feedback" id="feedback" placeholder="Enter feedback" cols="30" rows="10" value={form.feedback} onChange={e => setForm({...form, feedback: e.target.value})}></textarea>
      <br />
      <input type="submit" value="Submit" disabled={disable}/>
      <h4>Name: {info.name}</h4>
      <h4>Email: {info.email}</h4>
      <h4>Feedback: {info.feedback}</h4>
    </fieldset>
  </form>
}

export default User;