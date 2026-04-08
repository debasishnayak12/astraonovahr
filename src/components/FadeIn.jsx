import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up', fullWidth = false }) {
  const getInitialY = () => {
    switch (direction) {
      case 'up': return 40;
      case 'down': return -40;
      default: return 0;
    }
  };

  const getInitialX = () => {
    switch (direction) {
      case 'left': return 40;
      case 'right': return -40;
      default: return 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={fullWidth ? 'w-full' : ''}
    >
      {children}
    </motion.div>
  );
}
