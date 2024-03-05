import React from "react";
import "./index.css"; // Assuming main.css is in the same directory as this component

function App() {
  return (
    <div>
      <div id="navbar">
        <h3>Squads</h3>
        <p>login</p>
      </div>
      <div className="container">
        <div className="slides slide1">
          <h1>SQUADS</h1>
        </div>
        <div className="slides slide2">
          <p>
            The loneliness epidemic is a pressing societal issue characterized
            by feelings of isolation, disconnection, and a lack of meaningful
            social interactions. <br /> <br />
            This phenomenon disproportionately affects young men, who often
            struggle to navigate societal expectations of masculinity and face
            unique challenges in seeking and maintaining social connections.
            Factors such as changing work patterns, increased reliance on
            digital communication, and the breakdown of traditional community
            structures contribute to the exacerbation of loneliness among young
            men. Left unaddressed, loneliness can have severe consequences for
            mental health, leading to depression, anxiety, substance abuse, and
            even suicidal thoughts. <br />
            <br /> Squads recognizes the importance of combatting loneliness and
            fostering genuine connections among young men. By joining Squads,
            individuals have the opportunity to connect with like-minded peers,
            form meaningful friendships, and support each other through life's
            challenges. Through shared interests, activities, and experiences,
            Squads provides a supportive community where young men can feel
            understood, valued, and empowered.
            <br />
            <br />
            Join Squads today to combat loneliness, build lasting relationships,
            and prioritize your mental health and well-being. Together, we can
            overcome the loneliness epidemic and create a more connected,
            supportive world for all.
          </p>
        </div>
        <div className="slides slide3">
          <h2>Sign-up</h2>
          <input type="username" />
          <input type="password" />
        </div>
        <footer>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            fugiat facilis beatae esse. Tenetur quas, voluptate minima amet
            labore, impedit nulla ab ea, voluptatum similique omnis consectetur
            excepturi commodi? Porro qui magni, incidunt deserunt minus vel
            repellat accusamus tempora neque voluptatum, cupiditate placeat
            laudantium odio ut! Error optio placeat tempore!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
