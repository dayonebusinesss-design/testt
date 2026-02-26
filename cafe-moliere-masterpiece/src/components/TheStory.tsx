"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TheStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

    return (
        <section ref={containerRef} className="relative py-32 bg-onyx overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-velvet/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content with Staggered Animations */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-px bg-gold" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold font-bold">The Foundation</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="font-display font-extrabold text-5xl md:text-7xl text-silk leading-tight mb-8 uppercase tracking-tighter"
                        >
                            Rooted in <br />
                            <span className="text-gold italic">Makeen Residence</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="space-y-6 font-sans text-sm md:text-base text-silk/60 leading-relaxed max-w-lg"
                        >
                            <p>
                                Established as <strong>Moliere Cafe LLC</strong>, our journey began with a singular vision: to bring the opulence of French theatrical culture to the exacting standards of Dubai.
                            </p>
                            <p>
                                Located in the prestigious <strong>Makeen Residence, 26/1, 4 Street</strong>, we chose Al Jaddaf and the surrounding Ras Al Khor area as our stage. Here, tradition meets modern luxury, creating the perfect backdrop for our culinary performances.
                            </p>
                            <p className="italic text-silk/40 mt-8">
                                "Our café is not just a place to drink coffee; it is a meticulously designed set where every guest is the lead actor in their own luxurious narrative."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-12 inline-block border border-gold/30 px-8 py-4 backdrop-blur-sm hover:bg-gold/5 transition-colors cursor-none"
                        >
                            <span className="font-sans text-[10px] uppercase tracking-widest text-gold">Official Registered Entity • Dubai</span>
                        </motion.div>
                    </div>

                    {/* Right: Parallax Image Composition */}
                    <div className="order-1 lg:order-2 relative h-[600px] w-full mt-12 lg:mt-0 lg:h-[800px]">

                        {/* Main Image */}
                        <motion.div
                            style={{ y: y1, scale }}
                            className="absolute top-0 right-0 w-[80%] h-[70%] z-20 overflow-hidden border border-gold/10"
                        >
                            <div className="absolute inset-0 bg-onyx/20 hover:bg-transparent transition-colors duration-1000 z-10" />
                            <Image
                                src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1500&auto=format&fit=crop"
                                alt="Moliere Interior Luxury"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Secondary Accent Window */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute bottom-10 left-0 w-[50%] h-[50%] z-30 overflow-hidden border border-gold/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent z-10" />
                            <Image
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
                                alt="Artisanal Detail"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="font-display text-sm italic text-gold font-black uppercase tracking-widest">Act I, Scene I</span>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/4 right-[85%] w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
                        <div className="absolute bottom-1/4 right-[20%] w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                    </div>

                </div>
            </div>
        </section>
    );
}
