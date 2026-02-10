import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="page-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
                >
                    {/* Spinning ring */}
                    <div className="relative w-16 h-16 mb-8">
                        <div
                            className="absolute inset-0 rounded-full animate-loader-spin"
                            style={{
                                border: '3px solid transparent',
                                borderTopColor: '#10b981',
                                borderRightColor: '#06b6d4',
                            }}
                        />
                        <div
                            className="absolute inset-2 rounded-full animate-loader-spin"
                            style={{
                                border: '2px solid transparent',
                                borderBottomColor: '#a855f6',
                                borderLeftColor: '#ec4899',
                                animationDirection: 'reverse',
                                animationDuration: '1.5s',
                            }}
                        />
                    </div>

                    {/* Brand text */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                            <span className="text-black font-bold text-sm">P</span>
                        </div>
                        <span className="text-white font-bold text-xl tracking-wide">Parambhariya</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-gray-500 text-sm mt-4 font-mono tracking-widest"
                    >
                        LOADING
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
