/**
 * Login
 * state: formData
 *
 * props: none
 *
 * App -> RoutesList
 *
 */

const LOGIN_DEFAULT_DATA = {"username": "", "password": ""}

function Login() {

    const [formData, setformData] = useState(LOGIN_DEFAULT_DATA);

  /** updates term based on user input */
  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  /** Calls parent function to update parent's state with search term */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
}

  export default Login;
