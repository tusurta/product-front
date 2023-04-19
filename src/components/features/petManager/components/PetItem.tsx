import { FC } from "react";

type Props = {};

export const PetItem: FC<Props> = ({}) => {
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl" data-theme="luxury">
      <figure className="w-full">
        <img className="w-full" src={"https://picsum.photos/600/400"} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Dog
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};
