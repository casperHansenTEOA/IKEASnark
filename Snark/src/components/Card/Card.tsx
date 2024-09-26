import "./Card.css";

type Props = {
  startImage?: string;
  children?: React.ReactNode;
};

const Card = ({ startImage, children }: Props) => {
  return (
    <div className="card">
      {startImage && <img className="card-image" src={startImage} alt="card" />}
      <div className="content">{children}</div>
    </div>
  );
};

export default Card;
