"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock, Send, Calendar, CheckCircle2 } from "lucide-react";

export default function Reservation() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const handleReserve = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    return (
        <section id="reservations" className="py-32 bg-onyx relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40%] aspect-square bg-velvet/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] aspect-square bg-gold/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-gold/10 bg-gold/5 mb-6"
                    >
                        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Secure Your Seat</span>
                    </motion.div>
                    <h2 className="font-display font-[900] text-5xl md:text-8xl text-silk mb-6 tracking-tighter uppercase leading-[0.8]">Request an <span className="text-gold italic">Audience</span></h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-premium p-8 md:p-12 min-h-[500px] relative overflow-hidden"
                >
                    {/* Progress Indicator */}
                    {!isSuccess && (
                        <div className="flex justify-between items-center mb-12 relative">
                            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
                            <div
                                className="absolute top-1/2 left-0 h-px bg-gold transition-all duration-700 -z-10"
                                style={{ width: `${((step - 1) / 2) * 100}%` }}
                            />
                            {[1, 2, 3].map((num) => (
                                <div
                                    key={num}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-sans text-sm transition-colors duration-500 ${step >= num ? 'bg-gold text-onyx' : 'bg-onyx border border-white/20 text-silk/50'}`}
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="relative h-[300px]">
                        <AnimatePresence mode="wait" custom={1}>
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center h-full"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                    >
                                        <CheckCircle2 className="w-20 h-20 text-gold mb-6" />
                                    </motion.div>
                                    <h3 className="font-serif text-3xl text-silk mb-4">Request Confirmed</h3>
                                    <p className="font-sans text-silk/60 italic max-w-sm mx-auto">
                                        Your request has been delivered to our Concierge. A formal invitation will be sent to your email shortly.
                                    </p>
                                </motion.div>
                            ) : step === 1 ? (
                                <motion.div
                                    key="step1"
                                    custom={1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0 flex flex-col justify-center gap-8"
                                >
                                    <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-silk/40 mb-2">Step 1: The Arrangement</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Party Size</label>
                                            <div className="flex items-center gap-3 border-b border-white/10 py-3 group-hover:border-gold/50 transition-colors">
                                                <Users size={18} className="text-gold" />
                                                <select className="bg-transparent font-serif text-2xl outline-none w-full appearance-none cursor-none text-silk">
                                                    <option className="bg-onyx text-sm">2 Guests (Intimate)</option>
                                                    <option className="bg-onyx text-sm">4 Guests (Standard)</option>
                                                    <option className="bg-onyx text-sm">6+ Guests (Private Event)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Seating Preference</label>
                                            <div className="flex items-center gap-3 border-b border-white/10 py-3 group-hover:border-gold/50 transition-colors">
                                                <select className="bg-transparent font-serif text-2xl outline-none w-full appearance-none cursor-none text-silk">
                                                    <option className="bg-onyx text-sm">Main Stage (Indoor)</option>
                                                    <option className="bg-onyx text-sm">The Terrace (Outdoor)</option>
                                                    <option className="bg-onyx text-sm">Chef's Table</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : step === 2 ? (
                                <motion.div
                                    key="step2"
                                    custom={1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0 flex flex-col justify-center gap-8"
                                >
                                    <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-silk/40 mb-2">Step 2: The Timing</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Date</label>
                                            <div className="flex items-center gap-3 border-b border-white/10 py-3 group-hover:border-gold/50 transition-colors">
                                                <Calendar size={18} className="text-gold" />
                                                <input type="date" className="bg-transparent font-serif text-2xl outline-none w-full cursor-none text-silk" />
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Time</label>
                                            <div className="flex items-center gap-3 border-b border-white/10 py-3 group-hover:border-gold/50 transition-colors">
                                                <Clock size={18} className="text-gold" />
                                                <input type="time" defaultValue="19:00" className="bg-transparent font-serif text-2xl outline-none w-full cursor-none text-silk" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step3"
                                    custom={1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0 flex flex-col justify-center gap-8"
                                >
                                    <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-silk/40 mb-2">Step 3: The Identification</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">First Name</label>
                                            <input type="text" placeholder="Molière" className="w-full bg-transparent border-b border-white/10 py-3 font-serif text-2xl focus:border-gold outline-none transition-all placeholder:text-silk/20 text-silk cursor-none" />
                                        </div>
                                        <div className="relative group">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Last Name</label>
                                            <input type="text" placeholder="Dubai" className="w-full bg-transparent border-b border-white/10 py-3 font-serif text-2xl focus:border-gold outline-none transition-all placeholder:text-silk/20 text-silk cursor-none" />
                                        </div>
                                        <div className="relative group col-span-2">
                                            <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Email for Invitation</label>
                                            <input type="email" placeholder="exclusive@example.com" className="w-full bg-transparent border-b border-white/10 py-3 font-serif text-2xl focus:border-gold outline-none transition-all placeholder:text-silk/20 text-silk cursor-none" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    {!isSuccess && (
                        <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/5">
                            <button
                                onClick={prevStep}
                                className={`font-sans text-[10px] uppercase tracking-[0.3em] transition-colors ${step === 1 ? 'text-transparent pointer-events-none' : 'text-silk/60 hover:text-gold cursor-none'}`}
                            >
                                Go Back
                            </button>

                            {step < 3 ? (
                                <button
                                    onClick={nextStep}
                                    aria-label="Next Step"
                                    className="px-8 py-3 bg-white/5 border border-gold/30 text-gold font-sans text-[10px] uppercase tracking-[0.4em] hover:bg-gold hover:text-onyx transition-colors duration-500 cursor-none"
                                >
                                    Continue
                                </button>
                            ) : (
                                <button
                                    onClick={handleReserve}
                                    disabled={isSubmitting}
                                    aria-label="Submit Reservation Request"
                                    className="px-10 py-3 bg-gold text-onyx font-sans text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold-light transition-colors duration-500 cursor-none flex items-center gap-2"
                                >
                                    {isSubmitting ? "Processing..." : "Submit Request"}
                                    {!isSubmitting && <Send size={12} />}
                                </button>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
