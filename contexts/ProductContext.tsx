"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// WooCommerce Product Interface
interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  stock_status: string;
  average_rating: string;
  rating_count: number;
  shipping_required: boolean;
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

interface ProductContextType {
  products: WooCommerceProduct[];
  loading: boolean;
  error: string | null;
  usingSampleData: boolean;
  fetchProducts: () => Promise<void>;
  getProductById: (id: number) => WooCommerceProduct | undefined;
  getProductsByCategory: (categorySlug: string) => WooCommerceProduct[];
  getProductsByTag: (tagSlug: string) => WooCommerceProduct[];
  getCategories: () => Array<{ id: number; name: string; slug: string }>;
  getTags: () => Array<{ id: number; name: string; slug: string }>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<WooCommerceProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingSampleData, setUsingSampleData] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // For now, we'll use the local JSON file
      // In production, this would be an API call to your WooCommerce REST API
      const response = await fetch('/api/products');
      
      if (!response.ok) {
        console.log("Failed to fetch products: ", response.statusText);
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      
      // Fallback to local data if API fails
      try {
        const localData = await import('@/Woocommerce/sample-product-data.json');
        setProducts(localData.default);
        setUsingSampleData(true);
      } catch (fallbackErr) {
        console.error('Error loading fallback data:', fallbackErr);
        setError('Failed to load product data');
      }
    } finally {
      setLoading(false);
    }
  };

  const getProductById = (id: number): WooCommerceProduct | undefined => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (categorySlug: string): WooCommerceProduct[] => {
    return products.filter(product => 
      product.categories.some(cat => cat.slug === categorySlug)
    );
  };

  const getProductsByTag = (tagSlug: string): WooCommerceProduct[] => {
    return products.filter(product => 
      product.tags.some(tag => tag.slug === tagSlug)
    );
  };

  const getCategories = (): Array<{ id: number; name: string; slug: string }> => {
    const categories = products.reduce((acc, product) => {
      product.categories.forEach(category => {
        if (!acc.find(c => c.id === category.id)) {
          acc.push(category);
        }
      });
      return acc;
    }, [] as Array<{ id: number; name: string; slug: string }>);
    
    return categories;
  };

  const getTags = (): Array<{ id: number; name: string; slug: string }> => {
    const tags = products.reduce((acc, product) => {
      product.tags.forEach(tag => {
        if (!acc.find(t => t.id === tag.id)) {
          acc.push(tag);
        }
      });
      return acc;
    }, [] as Array<{ id: number; name: string; slug: string }>);
    
    return tags;
  };

  // Load products on mount
  useEffect(() => {
    //fetchProducts();
  }, []);

  const value: ProductContextType = {
    products,
    loading,
    error,
    usingSampleData,
    fetchProducts,
    getProductById,
    getProductsByCategory,
    getProductsByTag,
    getCategories,
    getTags,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}

// Export the WooCommerceProduct interface for use in other components
export type { WooCommerceProduct }; 