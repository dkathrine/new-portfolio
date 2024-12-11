import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MotionSection = ({ children, direction, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -80 : direction === 'right' ? 100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -80 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.35, delay: delay }
        }
    }
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default MotionSection