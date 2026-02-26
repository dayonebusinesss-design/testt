"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [cursorType, setCursorType] = useState("default");
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics without erratic snapping/flinging
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            // Directly track the mouse without manual overrides
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            const interactiveElement = target.closest("button, a, [role='button']");

            if (interactiveElement) {
                setCursorType("pointer");
            } else {
                setCursorType("default");
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Outer Ring - Follows the mouse precisely */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: cursorType === "pointer" ? 80 : 40,
                    height: cursorType === "pointer" ? 80 : 40,
                    backgroundColor: cursorType === "pointer" ? "rgba(226, 194, 117, 0.1)" : "rgba(226, 194, 117, 0.05)",
                    borderWidth: cursorType === "pointer" ? 2 : 1,
                    borderColor: cursorType === "pointer" ? "rgba(226, 194, 117, 0.6)" : "rgba(226, 194, 117, 0.3)",
                    opacity: isVisible ? 1 : 0,
                }}
                className="absolute rounded-full transition-colors duration-500 flex items-center justify-center backdrop-blur-[1px]"
            />

            {/* Core Particle - Pinpoint accuracy */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: cursorType === "pointer" ? 2 : 1,
                    opacity: isVisible ? 1 : 0,
                    backgroundColor: "#e2c275"
                }}
                className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_15px_#e2c275]"
            />

            {/* Interaction Label - Follows at a fixed offset */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: 40,
                    translateY: -20
                }}
                animate={{
                    opacity: cursorType === "pointer" ? 1 : 0,
                    scale: cursorType === "pointer" ? 1 : 0
                }}
                className="absolute pointer-events-none flex flex-col gap-1"
            >
                <span className="font-display text-[8px] font-black tracking-[0.4em] text-gold uppercase">Discover</span>
                <div className="w-8 h-px bg-gold/30" />
            </motion.div>
        </div>
    );
}
