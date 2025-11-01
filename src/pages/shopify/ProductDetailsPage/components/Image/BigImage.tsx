type Props = {
  image: string;
  title: string;
};

const BigImage = ({ image, title }: Props) => (
  <img src={image} alt={title} className="h-full w-full object-cover" />
);

export default BigImage;
