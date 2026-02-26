"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollY, [0, 500], [0, 250]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    // SVG Masking Strategy: 
    // We use a high-contrast heavy font (Syne ExtraBold) for the letterforms.
    // The video/background is visible only through these letters.

    return (
        <section ref={containerRef} className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-onyx">

            {/* The Masterpiece: SVG Video Mask */}
            <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-onyx/40 z-10" />

                {/* The Lens: SVG Group with Clipping Path */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="w-full h-full p-4 lg:p-24" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <clipPath id="moliere-mask">
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="font-display font-[900] text-[180px]"
                                >
                                    MOLIERE
                                </text>
                            </clipPath>
                        </defs>

                        {/* Foreignobject allows us to use HTML content (like our background div/video) inside SVG as a clipped child */}
                        <foreignObject width="100%" height="100%" clipPath="url(#moliere-mask)">
                            <div className="w-full h-full bg-[#050505] relative transform-gpu">
                                <Image
                                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
                                    alt="Cinematic Coffee Background"
                                    fill
                                    priority
                                    className="object-cover brightness-[1.5] contrast-[1.2] animate-pulse"
                                />
                            </div>
                        </foreignObject>
                    </svg>
                </div>

                {/* Floating Accent Layers */}
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"
                />
            </motion.div>

            {/* Floating Content Over Mask */}
            <div className="relative z-20 text-center container px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, letterSpacing: "1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.5em" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="font-display text-[10px] font-bold text-gold uppercase">Act IV: The Masterpiece</span>
                </motion.div>

                {/* Ghost title that appears slightly offset for depth */}
                <motion.h1
                    style={{ y: y1 }}
                    className="font-display font-[900] text-[6rem] md:text-[10rem] text-silk/5 tracking-tighter uppercase mb-6 pointer-events-none absolute -top-10"
                >
                    MOLIERE
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-24 max-w-2xl"
                >
                    <p className="font-display text-2xl md:text-3xl font-[800] text-gold-light tracking-tight leading-none mb-4 uppercase">
                        A Digital Overture <br />
                        <span className="text-silk/40 font-serif lowercase italic text-lg font-normal tracking-normal">— for the exceptional.</span>
                    </p>
                </motion.div>
            </div>

            {/* Animated Scroll Line */}
            <motion.div
                className="absolute bottom-12 left-12 flex flex-col gap-4 items-start"
            >
                <span className="font-display text-[8px] uppercase tracking-[0.5em] text-gold/40 rotate-90 origin-left ml-2">Scrolling</span>
                <div className="w-px h-24 bg-gold/10 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gold/80"
                    />
                </div>
            </motion.div>
        </section>
    );
}
