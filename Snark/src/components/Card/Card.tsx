type Props = {
  startImage?: string;
  title?: string;
  children?: React.ReactNode;
};

const Card = ({ startImage, title, children }: Props) => {
  return (
    <div className="card">
      <img src={startImage} alt="card" />
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
