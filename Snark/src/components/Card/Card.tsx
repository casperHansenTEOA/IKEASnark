import "./Card.css";

type Props = {
  startImage?: string;
  title?: string;
  children?: React.ReactNode;
};

const Card = ({ startImage, title, children }: Props) => {
  return (
    <div className="card">
      {startImage && <img className="card-image" src={startImage} alt="card" />}
      <div className="content">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
