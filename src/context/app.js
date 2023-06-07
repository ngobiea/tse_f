import { createContext, useState, useCallback, React } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [userId, setUserId] = useState("");

  // Fetch products
  const fetchProducts = useCallback(() => {
    fetch("http://localhost:8080/user/products/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, userId]);

  // Fetch carts
  const fetchCarts = useCallback(() => {
    fetch("http://localhost:8080/user/carts/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCarts(data.cartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, userId]);

  // Signup
  const signup = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };
    fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Login
  const login = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data.token);
        setUserId(data.userId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const valueToShare = {
    email,
    setEmail,
    password,
    setPassword,
    signup,
    login,
    token,
    setToken,
    products,
    fetchProducts,
    name,
    setName,
    fetchCarts,
    carts,
  };
  return (
    <AppContext.Provider value={valueToShare}>{children}</AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
