'use client';
import { useEffect, useState } from 'react';

export default function WooShopClient() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log('Products fetched:', products);
  }, [products]);

  if (!products || products.length === 0) {
    return <div className="p-6">No products found</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {products?.length > 0 && products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
}
