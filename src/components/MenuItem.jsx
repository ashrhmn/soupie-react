import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [itemCount, setItemCount] = useState(item.count);
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1/3">
          <img src={item.image} alt="" />
        </div>
        <div className="w-2/3">
          <h1 className="text-lg md:text-xl">{item.name}</h1>
          <h1 className="text-md md:text-lg text-gray-400">{item.subname}</h1>
          <div className="flex justify-between">
            <div className="flex text-2xl md:text-3xl space-x-4 items-center ml-4">
              <button
                onClick={() =>
                  itemCount > 1 ? setItemCount(itemCount - 1) : {}
                }
                className="text-gray-400"
              >
                -
              </button>
              <p>{itemCount}</p>
              <button
                onClick={() => setItemCount(itemCount + 1)}
                className="text-gray-400"
              >
                +
              </button>
            </div>
            <div className="text-md md:text-lg mr-4">
              <button className="bg-primary text-white p-1 w-28 rounded-md hover:bg-primary-dark">
                  Add to cart
                  Price : ${itemCount * item.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
