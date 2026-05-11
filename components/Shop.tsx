"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ShoppingCart, Plus, Minus, Trash2, Package, Wrench, HardHat, Hammer, Drill, Check } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  badge?: string;
  inStock: boolean;
  description: string;
  features: string[];
}

const Shop = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/shop');
        const result = await response.json();
        if (result.success) {
          setProducts(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Equipment': return <Package size={16} />;
      case 'Tools': return <Wrench size={16} />;
      case 'Safety': return <HardHat size={16} />;
      default: return <Hammer size={16} />;
    }
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (loading) {
    return (
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Construction Shop</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Construction Shop
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-gray-500 mt-3 max-w-xl outfit">
              Quality tools, equipment, and safety gear for your construction needs
            </p>
          </div>
          
          {/* Cart Button */}
          <button 
            onClick={() => setShowCart(true)}
            className="flex items-center gap-2 bg-secondary text-white px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-primary transition-colors"
          >
            <ShoppingCart size={20} />
            Cart ({cartCount})
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-[#f4f7f9] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-xs font-bold uppercase">
                    {product.badge}
                  </div>
                )}
                
                {/* Category */}
                <div className="absolute top-3 right-3 bg-secondary/90 text-white px-2 py-1 text-xs font-semibold flex items-center gap-1">
                  {getCategoryIcon(product.category)}
                  {product.category}
                </div>

                {/* Out of Stock Overlay */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-gray-800 text-white px-4 py-2 font-bold uppercase">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 h-12">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-secondary">৳{product.price.toLocaleString('en-BD')}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">৳{product.originalPrice.toLocaleString('en-BD')}</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-secondary/10 text-secondary px-3 py-2 text-sm font-bold uppercase rounded-sm hover:bg-secondary hover:text-white transition-colors"
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="flex-1 bg-primary text-white px-3 py-2 text-sm font-bold uppercase rounded-sm hover:bg-secondary transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    <Plus size={16} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />
          
          <div className="relative bg-white rounded-sm shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-[300px] md:h-full min-h-[300px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase">
                  {selectedProduct.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {selectedProduct.name}
                </h2>
                
                <p className="text-gray-600 text-sm outfit mb-4">
                  {selectedProduct.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-secondary">৳{selectedProduct.price.toLocaleString('en-BD')}</span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-lg text-gray-400 line-through">৳{selectedProduct.originalPrice.toLocaleString('en-BD')}</span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Drill size={16} className="text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 outfit">
                        <Check size={12} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stock Status */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-sm text-sm font-semibold mb-4 ${
                  selectedProduct.inStock 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {selectedProduct.inStock ? (
                    <><Check size={14} /> In Stock</>
                  ) : (
                    <>Out of Stock</>
                  )}
                </div>

                {/* Add to Cart */}
                <button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  disabled={!selectedProduct.inStock}
                  className="w-full bg-primary text-white px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCart(false)}
          />
          
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Cart Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingCart size={24} className="text-primary" />
                Your Cart ({cartCount})
              </h2>
              <button 
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 outfit">Your cart is empty</p>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="mt-4 text-primary font-semibold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-[#f4f7f9] p-4 rounded-sm">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-sm"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-primary font-bold mt-1">৳{item.price.toLocaleString('en-BD')}</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 bg-white border border-gray-200 rounded-sm hover:bg-gray-100"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-semibold outfit">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 bg-white border border-gray-200 rounded-sm hover:bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded-sm ml-2"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-secondary outfit">
                            ৳{(item.price * item.quantity).toLocaleString('en-BD')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Total */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 outfit">Subtotal</span>
                      <span className="text-xl font-bold text-secondary outfit">৳{cartTotal.toLocaleString('en-BD')}</span>
                    </div>
                    <button className="w-full bg-primary text-white py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors">
                      Proceed to Checkout
                    </button>
                    <button 
                      onClick={() => setShowCart(false)}
                      className="w-full mt-2 border-2 border-secondary text-secondary py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary hover:text-white transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shop;
