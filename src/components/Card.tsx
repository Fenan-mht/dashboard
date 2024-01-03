import { FC } from "react";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="bg-white w-1/3 h-1/4 rounded-xl">
      <div></div>
    </div>
  );
};

export default Card;
