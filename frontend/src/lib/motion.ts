import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

// Motion elementos tipados para evitar error de 'className' y MotionProps
export const MotionDiv: React.FC<HTMLMotionProps<'div'>> = motion.div;
export const MotionH1: React.FC<HTMLMotionProps<'h1'>> = motion.h1;
export const MotionH2: React.FC<HTMLMotionProps<'h2'>> = motion.h2;
export const MotionP: React.FC<HTMLMotionProps<'p'>> = motion.p;
