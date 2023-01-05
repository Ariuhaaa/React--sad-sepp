import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Cards from ".//components/cards";

let navOb = [
  "PORTFOLIO",
  "BLOG",
  "CV",
  "STORE",
  "FREELANCE",
  "ABOUT ME",
  "CONTACT",
];
let navbarOb = [
  "ALL",
  "UI Design",
  "UX Design",
  "Product Design",
  "Articles",
  "Tutorials",
  "News",
];

let cardsOb = {
  image:
    "https://img.freepik.com/premium-vector/face-cute-girl-avatar-young-girl-portrait-vector-flat-illustration_192760-82.jpg?w=2000",
  date: "nov 23 2020",
  title: "This way is wrong about UI Design.",
  text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
  btn: "READ MORE",
};

function App() {
  let myArr = [];
  for (let i = 0; i < 6; i++) {
    myArr.push(cardsOb);
  }
  console.log(myArr);
  return (
    <div className="App">
      <div className="container">
        {/* <header>
          <div className="nav1">
            <img src={require("./images/Leap.png")} alt="a" />
            <img src={require("./images/Hire Me (1).png")} alt="a" />
          </div>
          <div className="nav2">
            {navOb.map((a) => {
              return <li>{a}</li>;
            })}
          </div>
        </header> */}
        <Header txt={navOb} />
        <div className="section1">
          <div>
            <h1>Blog Posts</h1>
            <h2>I think so, this is it.</h2>
            <p className="col-6">
              Design begins after I begin to think about how to present an
              experience most successfully, whether a button I put in can solve
              a problem. The only point in design is not ui design, if the user
              does not have a good experience at the end of the product, the
              design will be considered unsuccessful in my opinion.
            </p>
            <div className="photos col-8">
              <img src={require("./images/rec/light blue.png")} alt="a" />
              <img src={require("./images/rec/dark blue.png")} alt="a" />
              <img src={require("./images/rec/black.png")} alt="a" />
            </div>
          </div>
          <div>
            <img src={require("./images/section1/Saly-16.png")} alt="a" />
            <img src={require("./images/section1/Rectangle.png")} alt="a" />
          </div>
        </div>
        <div className="navbar ">
          {navbarOb.map((c) => {
            return <li>{c}</li>;
          })}
        </div>
        <div className="cardSection">
          <Cards {...myArr} />
        </div>

        <footer />
      </div>
    </div>
  );
}
export default App;
