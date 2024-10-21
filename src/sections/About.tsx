import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg'
import Image from "next/image";
import BokorImage from '@/assets/images/book-cover.png'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import { Techicon } from "@/components/Techicon"; 
import smileMemoji from '@/assets/images/memoji-smile.png' 
import mapImage from '@/assets/images/map.png'
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
  {
    title: "javaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title:"Movies",
    emoji:"🎥",
  },
  {
    title:"Pjotography",
    emoji: "📷",
  },
  {
    title:"Gaming",
    emoji:"🎮",
  },
  {
    title:"walking",
    emoji:"🚶‍♂️",
  },
  {
    title:"Music",
    emoji:"🎵",
  },
  {
    title:"Reading",
    emoji:"📚",
  },
  {
    title:"Fitness",
    emoji:"🏋️‍♂️",
  },
]
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more About who I am, What I do, and What inspiers me." 
      />
      <div className="mt-20">
      <Card className="h-[320px]">
        <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
      
        <div className="w-40 mx-auto mt-8">
        <Image src={BokorImage} alt="BookImage" />
        </div>
      </Card>
      <Card>
      <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to create exceptional digital experiences."/>
        <div>
          {toolboxItems.map((item) => (
            <div key={item.title}  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">  {/* Unique key */}
              <Techicon component={item.iconType} />  {/* Ensure correct component */}
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
      <CardHeader title="Beyond the Code" description="Explore my interests and hobby beyond the digital realm."/>
       <div>
        {hobbies.map(hobby => (
          <div key={hobby.title}>
            <span>{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </div>
        ))}
       </div>
      </Card>
      <Card>
        <Image src={mapImage} alt="map"/>
        <Image src={smileMemoji} alt="smiling memoji"/>
      </Card>
      </div>
    </div>
    </div>
  );
};
