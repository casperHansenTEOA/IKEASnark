import "./Card.css";

type Props = {
  startImage?: string;
  children?: React.ReactNode;
  horizontal?: boolean;
};

const Card = ({ startImage, children, horizontal }: Props) => {
  return (
    <div className="card">
      {startImage && <img className="card-image" src={startImage} alt="card" />}
      {children && (
        <div className={`content ${horizontal ? "horizontal" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
