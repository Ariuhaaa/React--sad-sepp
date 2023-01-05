export default function Header({ txt }) {
  return (
    <header>
      <div className="nav1">
        <img src={require("../images/Leap.png")} alt="a" />
        <img src={require("../images/HireMe.png")} alt="a" />
      </div>
      <div className="nav2">
        {txt.map((a) => {
          return <li>{a}</li>;
        })}
      </div>
    </header>
  );
}
