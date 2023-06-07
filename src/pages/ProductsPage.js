import { useContext, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import AppContext from "../context/app";

const ProductsPage = () => {
  const { products, fetchProducts } = useContext(AppContext);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  const Items = products.map((item) => {
    return <ProductItem key={item.id} item={item} />;
  });
  return (
    <>
      <h2 class="text-4xl font-extrabold  text-black mx-20">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-20">{Items}</div>
    </>
  );
};

export default ProductsPage;
