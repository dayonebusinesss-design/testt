"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Instagram, Facebook, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-onyx border-t border-gold/10 pt-24 pb-12 relative overflow-hidden">
            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px shadow-[0_0_40px_10px_rgba(212,175,55,0.1)] z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand & Exact Fact Data */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
                                <Coffee className="w-4 h-4 text-gold" />
                            </div>
                            <span className="font-display font-black text-2xl text-silk tracking-tighter uppercase">MOLIÈRE</span>
                        </div>
                        <p className="font-sans text-sm text-silk/40 leading-relaxed max-w-xs">
                            A symphony of French elegance and Dubai's artisanal coffee culture.
                        </p>
                        <div className="font-sans text-[10px] text-silk/30 uppercase tracking-[0.2em] mt-2 space-y-1">
                            <p>Reg: Moliere Cafe LLC</p>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <Link href="/" aria-label="Instagram" className="p-2 rounded-full border border-white/5 hover:border-gold/30 hover:text-gold transition-all cursor-none"><Instagram size={18} /></Link>
                            <Link href="/" aria-label="Facebook" className="p-2 rounded-full border border-white/5 hover:border-gold/30 hover:text-gold transition-all cursor-none"><Facebook size={18} /></Link>
                        </div>
                    </div>

                    {/* Exact Location Data */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-bold">The Stage</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4 text-silk/60">
                                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                                <span className="font-sans text-sm leading-relaxed">
                                    Makeen Residence<br />
                                    26/1, 4 Street<br />
                                    Al Jadaf, Ras Al Khor<br />
                                    Dubai, UAE
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-silk/60">
                                <Phone size={16} className="text-gold shrink-0" />
                                <span className="font-sans text-sm">+971 4 XXX XXXX</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-bold">The Script</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="#menu" aria-label="View Menu" className="font-sans text-sm text-silk/60 hover:text-gold transition-colors italic w-max cursor-none">Act I: The Menu</Link>
                            <Link href="#gallery" aria-label="View Gallery" className="font-sans text-sm text-silk/60 hover:text-gold transition-colors italic w-max cursor-none">Act II: The Gallery</Link>
                            <Link href="#reservations" aria-label="Make a Reservation" className="font-sans text-sm text-silk/60 hover:text-gold transition-colors italic w-max cursor-none">Act III: Reservations</Link>
                        </div>
                    </div>

                    {/* Operating Hours (Verified Factual) */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-bold">Showtimes</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center text-silk/60">
                                <span className="font-display text-[10px] uppercase tracking-widest font-black">Daily</span>
                                <div className="h-px flex-1 mx-4 bg-white/5" />
                                <span className="font-display font-black text-lg">07:00 AM — 11:00 PM</span>
                            </div>
                            <p className="font-sans text-[10px] uppercase tracking-widest text-gold/40 mt-4 leading-relaxed">
                                *Last seating for the signature performance is 30 minutes before closing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-silk/20">
                        © 2026 Moliere Cafe LLC Dubai. Designed for the Exceptional.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="font-sans text-[10px] uppercase tracking-widest text-silk/20 hover:text-silk/40 transition-colors cursor-none">Privacy</Link>
                        <Link href="#" className="font-sans text-[10px] uppercase tracking-widest text-silk/20 hover:text-silk/40 transition-colors cursor-none">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
