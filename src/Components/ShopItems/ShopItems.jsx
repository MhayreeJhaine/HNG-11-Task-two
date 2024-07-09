import React from "react";
// import "./ShopItems.css";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const ShopItems = () => {
  return (
    <div className="ShopItems">
      <h1>SIMILAR ITEMS</h1>
      <div className="product_items">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopItems;
