export default function myCards({ image, title, btn, text, date }) {
  return (
    <div className="col-5">
      <div className="header">
        <img src={image} alt="" className="w-100" />
      </div>
      <div className="body">
        <h1>{date}</h1>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{btn}</button>
      </div>
    </div>
  );
}
