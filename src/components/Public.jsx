import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Whatever!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          “The body is not one member, but many. Now are they many, but of one
          body.”
        </p>
        <p>"What's that mean though?"</p>
        <p>"I just trying to stay a part of the body now."</p>
        <br />
        <p>Public account: username: Lip password: test</p>
        <address className="public__addr">
          Who am I?
          <br />
          I don't konw
          <br />
          Located: Nowhere
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Kim</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
