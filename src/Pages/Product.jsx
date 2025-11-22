import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Components/Context/ShopContext"
import Breadcrumb from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DecriptionBox/DescriptionBox"
import RelatedProducts from "../Components/RelatedProduct/RelatedProduct"
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Update product every time productId changes
  useEffect(() => {
    const found = all_product.find((item) => item.id === Number(productId));
    setProduct(found);
    window.scrollTo(0, 0); // Optional: scroll to top on product change
  }, [productId, all_product]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Loading product details...
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <RelatedProducts
        category={product.category}
        currentProductId={product.id}
      />
    </div>
  );
};

export default Product;
