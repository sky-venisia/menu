'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, CustomEase);

export { gsap, ScrollTrigger, useGSAP, SplitText, CustomEase };
