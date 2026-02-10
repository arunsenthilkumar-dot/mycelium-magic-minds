import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Filter, Leaf, Sparkles, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';

const categoryInfo = {
  all: { label: 'All Products', icon: Package },
  fresh_mushrooms: { label: 'Fresh Mushrooms', icon: Leaf },
  dried_mushrooms: { label: 'Dried Mushrooms', icon: Leaf },
  food_products: { label: 'Food Products', icon: Sparkles },
  cosmetics: { label: 'Cosmetics', icon: Sparkles }
};

const placeholderProducts = [
  { id: 1, name: 'Lion\'s Mane - Fresh', category: 'fresh_mushrooms', price: 450, image_url: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400', description: 'Premium quality, freshly harvested', featured: true },
  { id: 2, name: 'Shiitake - Dried', category: 'dried_mushrooms', price: 380, image_url: 'https://images.unsplash.com/photo-1552825897-bb2e183b4e5d?w=400', description: 'Sun-dried for intense flavor', featured: true },
  { id: 3, name: 'Reishi Extract Powder', category: 'food_products', price: 890, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', description: 'Concentrated health benefits', featured: true },
  { id: 4, name: 'Mycelium Face Serum', category: 'cosmetics', price: 1250, image_url: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400', description: 'Revolutionary skincare', featured: false },
  { id: 5, name: 'Oyster Mushroom - Fresh', category: 'fresh_mushrooms', price: 320, image_url: 'https://images.unsplash.com/photo-1518977676601-b28f61c24380?w=400', description: 'Delicate texture and taste', featured: false },
  { id: 6, name: 'Mushroom Protein Blend', category: 'food_products', price: 750, image_url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400', description: 'Complete amino acid profile', featured: false },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => base44.entities.Product.list(),
    initialData: []
  });

  const displayProducts = products.length > 0 ? products : placeholderProducts;
  
  const filteredProducts = selectedCategory === 'all' 
    ? displayProducts 
    : displayProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-cyan-400 font-mono text-sm tracking-widest">// SHOP</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Technology You Can
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Taste</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6">
              Every product is a proof of concept — grown in our AI-optimized micro-factories 
              using the most advanced cultivation technology on the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="bg-gray-900/50 border border-gray-800 p-1 rounded-full inline-flex">
              {Object.entries(categoryInfo).map(([key, { label }]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-2xl border border-gray-800 p-4">
                  <Skeleton className="aspect-square rounded-xl mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden hover:border-gray-700 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={product.image_url || 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400'}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {product.featured && (
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-500 border-0">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                            {categoryInfo[product.category]?.label || product.category}
                          </p>
                          <h3 className="text-xl font-bold text-white mt-1">{product.name}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                          ₹{product.price}
                        </div>
                        <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white rounded-full">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {filteredProducts.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tech Banner */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-900/50 p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Curious About Our Process?
                </h3>
                <p className="text-gray-400 max-w-md">
                  Every product is grown using our proprietary AI-powered micro-factory technology. 
                  Learn how we're revolutionizing cultivation.
                </p>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-full px-8 shrink-0">
                Explore Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}