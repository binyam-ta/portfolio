import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
const footerLinks = [
  {
    title:'Github',
    href:'https://github.com/binyam-ta',
  },
  {
    title:'LinkedIn',
    href:'https://www.linkedin.com/in/binyam-seleshe',
  },
  {
    title:'Telegram',
    href:'https://t.me/binyamjo',
  },
  {
    title:'Instagram',
    href:'#',
  },
]
export const Footer = () => {
  return (
<footer id='footer' className='relative overflow-x-clip z-10'>
  <div className="absolute h-[400px] w-[1600px] 
  bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>
  <div className="container z-20 relative">
    <div className='border-t border-white/15 py-6 text-sm 
    flex flex-col md:flex-row md:justify-between items-center gap-8'>
      <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
      <nav className='flex flex-col md:flex-row items-center gap-8'>
        {footerLinks.map(link => (
          <a 
            href={link.href}
            key={link.title}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Improves security for external links
            className='inline-flex items-center gap-1.5 text-white hover:underline z-20 relative'
          >
            <span className='font-semibold'>{link.title}</span>
            <ArrowUpRightIcon className='w-4 h-4' />
          </a>
        ))}
      </nav>
    </div>
  </div>
</footer>


/* <footer className='relative -z-10 overflow-x-clip'>
  <div className="absolute h-[400px] w-[1600px] 
  bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
  <div className="container">
    <div className='border-t border-white/15 py-6 text-sm 
    flex flex-col md:flex-row md:justify-between items-center gap-8'>
      <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
      <nav className='flex flex-col md:flex-row items-center gap-8'>
        {footerLinks.map(link =>(
          <a 
          href={link.href}
           key={link.title}
           target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Improves security for external links
            className='inline-flex items-center gap-1.5 text-white hover:underline'>
            <span className='font-semibold'>{link.title}</span>
            <ArrowUpRightIcon className='size-4' />
          </a>
        ))}
      
      </nav>
    </div>
  </div>
</footer> */
  );
};
