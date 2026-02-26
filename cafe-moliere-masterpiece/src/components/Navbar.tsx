"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Reveal UI only on hover or when scrolled significantly
    const [isMouseNearTop, setIsMouseNearTop] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setIsMouseNearTop(e.clientY < 100);
        };

        window.addEventListener("scroll", updateScroll);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("scroll", updateScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    const isVisible = isScrolled || isMouseNearTop || isOpen;

    const links = [
        { name: "THE PLAY", href: "#menu" },
        { name: "THE STAGE", href: "#gallery" },
        { name: "THE AUDIENCE", href: "#reservations" },
        { name: "LOCATION", href: "#footer" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -80 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={clsx(
                    "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
                    isScrolled ? "bg-onyx/80 backdrop-blur-md border-b border-gold/10 py-4" : "py-8"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Brand - Always visible but minimal */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                            <Coffee className="w-5 h-5 text-gold" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-extrabold text-xl text-silk tracking-tighter leading-none">MOLIÈRE</span>
                            <span className="font-sans text-[8px] tracking-[0.4em] text-gold/60 uppercase">DUBAI</span>
                        </div>
                    </Link>

                    {/* Desktop Links - Invisible until hover/scroll */}
                    <div className="hidden md:flex items-center gap-12">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-display text-[10px] font-bold tracking-[0.3em] text-silk/50 hover:text-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#reservations"
                            className="bg-gold px-6 py-2 text-onyx font-display font-black text-[10px] tracking-widest hover:bg-gold-light transition-all"
                        >
                            RESERVE
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-silk hover:text-gold transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Fullscreen Mobile Overlay */}
            <motion.div
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
                className="fixed inset-0 z-[90] bg-onyx flex flex-col items-center justify-center gap-8 md:hidden"
            >
                {links.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={isOpen ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-display text-4xl font-extrabold text-silk hover:text-gold transition-colors uppercase tracking-tighter"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isOpen ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="#reservations"
                        onClick={() => setIsOpen(false)}
                        className="mt-8 px-12 py-4 bg-gold text-onyx font-display font-black tracking-widest text-lg"
                    >
                        RESERVE NOW
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
}
