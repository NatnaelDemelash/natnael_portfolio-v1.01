import { HERO_CONTENT } from '../constants';
import profile from '../assets/NatnaelD.png';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visble: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:mx-14">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visble"
              className="pb-16 text-5xl font-thin tracking-tighter lg:mt-10 lg:text-8xl"
            >
              Natnael Demelash
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visble"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl 
            tracking-tighter text-transparent"
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visble"
              className="my-2 py-4 font-light tracking-tighter max-w-md leading-7"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 lg:mt-6">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-80 h-80 shadow-lg rounded-md"
              src={profile}
              alt="<NAME>"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
