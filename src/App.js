import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import Commerce from "@chec/commerce.js";

const commerce = new Commerce(
    "pk_test_28174f1a36d4e0f7b669fad738df8359756a39dd6ac43"
);

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
      <div>
        {products.map((product) => (
            <Item key={product.id} {...product} />
        ))}
      </div>
  );
}

export default App;