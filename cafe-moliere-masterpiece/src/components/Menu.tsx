"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const ALL_ITEMS = [
    // Act I
    { id: 1, act: "Act I", name: "Molière Gold Latte", price: "45", desc: "Saffron infused, 24k gold leaf, premium Arabica blend.", origin: "Ethiopia / Yirgacheffe" },
    { id: 2, act: "Act I", name: "The Playwright's Espresso", price: "25", desc: "Short, intense, dark chocolate notes.", origin: "Colombia / Huila" },
    { id: 3, act: "Act I", name: "Velvet Cappuccino", price: "35", desc: "Silky texture with Madagascar vanilla.", origin: "Brazil / Santos" },
    { id: 4, act: "Act I", name: "Jaddaf Cold Brew", price: "38", desc: "18-hour steep, single-origin ice spheres.", origin: "Kenya / Nyeri" },
    // Act II
    { id: 5, act: "Act II", name: "Pistachio Croissant", price: "28", desc: "Double baked with Bronte pistachio cream." },
    { id: 6, act: "Act II", name: "Pain au Chocolat", price: "22", desc: "Valrhona chocolate, 81 buttery layers." },
    { id: 7, act: "Act II", name: "The Director's Tart", price: "40", desc: "Seasonal berries, crème pâtissière, gold dust." },
    // Act III
    { id: 8, act: "Act III", name: "Theater Crème Brûlée", price: "55", desc: "Torched tableside with a dramatic flourish." },
    { id: 9, act: "Act III", name: "Macaron Selection", price: "65", desc: "Six artisanal pieces inspired by Molière." },
];

export default function Menu() {
    const [activeAct, setActiveAct] = useState<string>("All");

    const acts = ["All", "Act I", "Act II", "Act III"];

    const filteredItems = activeAct === "All"
        ? ALL_ITEMS
        : ALL_ITEMS.filter(item => item.act === activeAct);

    return (
        <section id="menu" className="py-40 bg-onyx relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Editorial Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-display font-[900] text-7xl md:text-9xl text-silk tracking-tighter uppercase leading-[0.8]"
                        >
                            The <span className="text-gold">Playbill</span>
                        </motion.h2>
                    </div>
                    <div className="pb-2">
                        <p className="font-sans text-gold/60 text-sm uppercase tracking-[0.4em] font-bold">Volume 01 / Issue 2026</p>
                    </div>
                </div>

                {/* Minimalist Filter Navigation */}
                <div className="flex flex-wrap gap-x-12 gap-y-6 mb-24 border-b border-white/5 pb-8">
                    {acts.map((act) => (
                        <button
                            key={act}
                            onClick={() => setActiveAct(act)}
                            className={twMerge(
                                "font-display text-sm font-black tracking-[0.3em] transition-all duration-300 relative uppercase",
                                activeAct === act ? "text-gold" : "text-silk/30 hover:text-silk/60"
                            )}
                        >
                            {act}
                            {activeAct === act && (
                                <motion.div
                                    layoutId="menu-dot"
                                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Boutique Boutique Catalog Grid (The Espresso Lab / % Arabica style) */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group border border-white/5 p-8 flex flex-col h-full hover:border-gold/30 transition-all duration-500 bg-white/[0.01]"
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <span className="font-display text-[10px] text-gold uppercase tracking-widest">{item.act}</span>
                                    <span className="font-display text-2xl font-black text-silk/20 group-hover:text-gold transition-colors">{item.price}</span>
                                </div>

                                <div className="mb-auto">
                                    <h3 className="font-display text-2xl font-black text-silk uppercase tracking-tight mb-4 group-hover:translate-x-1 transition-transform">{item.name}</h3>
                                    <p className="font-sans text-sm text-silk/40 leading-relaxed mb-8">{item.desc}</p>
                                </div>

                                {item.origin && (
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="font-sans text-[8px] uppercase tracking-widest text-silk/20 mb-1">Origin</span>
                                            <span className="font-sans text-[10px] text-silk/60 font-bold">{item.origin}</span>
                                        </div>
                                        <MoveRight size={16} className="text-gold/40 group-hover:text-gold group-hover:translate-x-2 transition-all" />
                                    </div>
                                )}
                                {!item.origin && (
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-end mt-auto">
                                        <MoveRight size={16} className="text-gold/40 group-hover:text-gold group-hover:translate-x-2 transition-all" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
