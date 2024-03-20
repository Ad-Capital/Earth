import Rounded from "@/constants/RoundedButtons"
import Link from 'next/link';
import styles from "@/styles";

const Navbar = () => (
  <nav
    className={`${styles.xPaddings} py-8 px-8 relative bg-[#F3F3F3] z-10`}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <div className="w-[180px] h-[50px]">
        <Link href={"/"}>
          <img
            src="/logo.svg"
            alt="logo"
            className="w-[60px] h-[60px] object-contain"
          /></Link>
      </div>
      <div className="lg:flex justify-between hidden gap-[30px] py-3 ">
        <span className="font-bold nav">
          <Link href="#about">
              <p>About</p>
          </Link>
        </span>
        <span className="font-bold nav">
          <Link href="/roadmap">
              <p>Roadmap</p>
          </Link>
        </span>
        <span className="font-bold nav">
          <Link href="#FAQ">
              <p>FAQs</p>
          </Link>
        </span>
        <span className="font-bold nav">
          <Link href="#market">
              <p>Marketplace</p>
          </Link>
        </span>
        <span className="font-bold nav">
          <Link href="/store">
              <p>Store</p>
          </Link>
        </span>
      </div>
      <Link href="" className="lg:flex hidden">
        <Rounded>
          <p className="font-bold text-white">Join Community</p>
        </Rounded>
      </Link>

    </div>
  </nav>
);

export default Navbar;