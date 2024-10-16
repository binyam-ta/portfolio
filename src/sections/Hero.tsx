import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png'
export const HeroSection = () => {
  return (
  <div>
   <div className="container">
    <Image src={memojiImage} alt="person peeking from behind laptop"/>
    <div>
      <div></div>
      <div></div>
    </div>
   </div>
  </div>);
};
