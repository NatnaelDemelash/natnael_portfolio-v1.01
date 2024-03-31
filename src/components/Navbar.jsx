import logo from '../assets/logo.png';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img className="mx-2 w-8" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-6 text-xl">
        <a href="https://github.com/NatnaelDemelash" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/natnaeldemelash/" target="_blank">
          <FaLinkedinIn />
        </a>
        <FaXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
