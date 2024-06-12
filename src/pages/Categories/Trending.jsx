import { useEffect, useState } from "react";
import ProductCard from "../ProductDetails/ProductCard";
import axios from "axios";


// eslint-disable-next-line react/prop-types
const Trending = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/product?category=${category}`)
      .then((res) => {
        setProducts(res.data.data); // 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  return (
    <div className="mt-8">
      <h1 className="text-3xl text-center uppercase font-semibold mb-4">{category}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Trending