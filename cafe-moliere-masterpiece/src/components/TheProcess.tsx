"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
    {
        id: "01",
        title: "The Selection",
        desc: "We source exclusively from the ultra-rare 90+ SCA scoring microlots, ensuring every bean is a protagonist.",
        img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "The Roasting",
        desc: "A bespoke thermal performance. Our beans are roasted in small batches to reach their emotional peak.",
        img: "https://images.unsplash.com/photo-1525088553748-01d6e210e00b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "The Extraction",
        desc: "Where science meets theater. 0.1g precision combined with artistic intuition.",
        img: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function TheProcess() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-onyx">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-24 px-24">

                    {/* Introductory Block */}
                    <div className="w-screen md:w-[60vw] shrink-0 flex flex-col justify-center">
                        <span className="font-display text-[10px] font-bold text-gold uppercase tracking-[0.5em] mb-8">The Performance</span>
                        <h2 className="font-display font-[900] text-7xl md:text-9xl text-silk tracking-tighter uppercase leading-[0.8]">
                            THE <span className="text-onyx bg-gold px-4">CRAFT</span>
                        </h2>
                        <p className="mt-12 font-sans text-silk/40 max-w-md text-lg italic">
                            A three-act journey from the soil of the tropics to the stage of Dubai.
                        </p>
                    </div>

                    {/* Steps */}
                    {STEPS.map((step) => (
                        <div key={step.id} className="w-[80vw] md:w-[45vw] lg:w-[35vw] shrink-0 flex flex-col items-start gap-8">
                            <div className="relative w-full aspect-[4/5] overflow-hidden group">
                                <div className="absolute inset-0 bg-onyx/20 z-10 group-hover:bg-transparent transition-colors duration-1000" />
                                <Image
                                    src={step.img}
                                    alt={step.title}
                                    fill
                                    sizes="(max-width: 768px) 80vw, 35vw"
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute top-8 left-8 z-20">
                                    <span className="font-display text-6xl font-black text-silk opacity-20 group-hover:text-gold group-hover:opacity-100 transition-all">{step.id}</span>
                                </div>
                            </div>
                            <div className="max-w-sm">
                                <h3 className="font-display text-4xl font-[900] text-silk uppercase tracking-tight mb-4">{step.title}</h3>
                                <p className="font-sans text-silk/40 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* Outro Block */}
                    <div className="w-screen md:w-[60vw] shrink-0 flex flex-col justify-center items-center text-center">
                        <div className="w-24 h-px bg-gold/30 mb-12" />
                        <h3 className="font-serif text-3xl md:text-5xl text-silk italic mb-8">Ready for the Premiere?</h3>
                        <Link href="#reservations" className="bg-gold px-12 py-4 text-onyx font-display font-black tracking-widest uppercase hover:bg-silk transition-all">
                            Request Audience
                        </Link>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
