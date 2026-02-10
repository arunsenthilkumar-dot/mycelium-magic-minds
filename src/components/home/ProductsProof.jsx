import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const productCategories = [
  {
    title: 'Fresh & Dried Mushrooms',
    description: 'Premium quality fungi, harvested from our AI-optimized micro-factories',
    image: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&auto=format&fit=crop',
    tag: 'HARVEST'
  },
  {
    title: 'Fungi-Based Foods',
    description: 'Next-generation nutrition powered by mycelium technology',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop',
    tag: 'NUTRITION'
  },
  {
    title: 'Bio-Cosmetics',
    description: 'Revolutionary skincare formulated with fungal bioactives',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop',
    tag: 'WELLNESS'
  }
];

export default function ProductsProof() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-cyan-400 font-mono text-sm tracking-widest">// PROOF OF CONCEPT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Technology You Can
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Taste</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl">
              Our products aren't just products — they're proof that our technology works. 
              Every item demonstrates the power of our AI-driven cultivation systems.
            </p>
          </div>
          <Link to={createPageUrl('Products')} className="mt-6 md:mt-0">
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 mb-3">
                  <Leaf className="w-3 h-3" />
                  {category.tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
                
                <div className="mt-4 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-emerald-500/50 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}