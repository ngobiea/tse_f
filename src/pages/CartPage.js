import CartItem from "../components/CartItem";
import { useContext, useEffect } from "react";
import AppContext from "../context/app";
const CartPage = () => {
  const { fetchCart, carts } = useContext(AppContext);
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);
  const Items = carts.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen bg-gray-800">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{Items}</tbody>
      </table>
    </div>
  );
};
export default CartPage;
