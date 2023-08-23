import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <div>
        <Link to="about">Click to view our about page</Link>
      </div>
      <div>
        <Link to="contact">Click to view our contact page</Link>
      </div>
    </div>
  );
}

export default Home;