// import Home from "@/app/page";
// import Link from "next/link";

// export const Header = () => {
//   return <div className="flex justify-center items-center fixed top-3 w-full z-10">
//     <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//       <Link href={"/"}>
//       <a href="#" 
//       className="nav-item"
//       >Home</a></Link>
//       <Link href={"/p"}><a herf="#" className="nav-item">Projects</a></Link>
//       <Link><a href="#" className="nav-item">About</a></Link>
//       <Link><a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:texxt-gray-900 ">Contact</a></Link>
//     </nav>
//   </div>;
// };

import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#hero" passHref className="nav-item">
          Home
        </Link>
        <Link href="#projects" passHref className="nav-item">
          Projects
        </Link>
        <Link href="#about" passHref className="nav-item">
          About
        </Link>
        <Link href="#contact" passHref className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
         
            Contact
          
        </Link>
      </nav>
    </div>
  );
};

