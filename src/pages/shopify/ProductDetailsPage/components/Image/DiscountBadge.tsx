type Props = {
  discount: number;
};

const DiscountBadge = ({ discount }: Props) =>
  discount <= 0 ? null : <div className="discount-badge">-{discount}%</div>;

export default DiscountBadge;
