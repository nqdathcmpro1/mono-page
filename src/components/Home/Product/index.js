import React from "react";

import classes from "./Product.module.scss";
import monoProduct from "../../../public/mono-second-page.png";
import ProductTabs from "./ProductTabs";

const Product = () => {
  return (
    <div id="productPage" className={classes.container}>
      <div className={classes.title}>Albums & Music Videos</div>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={monoProduct} alt="MONO" />
        </div>
        <div className={classes.product}>
          <ProductTabs/>
        </div>
      </div>
    </div>
  );
};

export default Product;
