import './index.css';
import { LoremIpsum } from './components/LoremIpsum';
import { motion, useScroll } from 'framer-motion';

export default function App() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
            <LoremIpsum />
        </>
    );
}
