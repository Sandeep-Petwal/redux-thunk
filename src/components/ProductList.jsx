/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector, fetchProducts, clearProducts } from '../store/productsDuck';
import ProductCard from './ProductCard';


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (products.loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (products.error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">Error: {products.error}</div>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 m-16 py-8">

      <button onClick={() => { dispatch(clearProducts()) }}>Clear Producs</button>
      <button onClick={() => { dispatch(fetchProducts()) }}>Reload Producs</button>

      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;