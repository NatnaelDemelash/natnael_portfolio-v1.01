import { RiReactjsLine, RiFlutterFill } from 'react-icons/ri';
import { FaVuejs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import { BiLogoSass } from 'react-icons/bi';

import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -15 },
  animate: {
    y: [15, -15],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-4xl text-[#f0db4f]" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-4xl text-[#0FA4E9]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaVuejs className="text-4xl text-[#42bb83]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiFlutterFill className="text-4xl text-[#33B9F7]" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSass className="text-4xl text-[#cc6699]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
