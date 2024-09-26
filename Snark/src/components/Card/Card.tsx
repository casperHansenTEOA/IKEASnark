type Props = {
  startImage?: string;
  title?: string;
  children?: React.ReactNode;
};

function Card({ startImage, title, children }: Props) {
  return () => (
    <>
      {startImage && <img src={startImage} alt={title} />}
      {title && <h2>{title}</h2>}
      {children}
    </>
  );
}

export default Card;
