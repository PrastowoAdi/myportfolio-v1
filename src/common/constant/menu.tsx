import {
  BiEnvelope as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon
} from "react-icons/bi";
import {
  BsDiscord as DiscordIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
  BsTwitter as TwitterIcon,
  BsYoutube as YoutubeIcon
} from "react-icons/bs";

import { MenuItemProps } from "../types/menu";

const iconSize = 20;
export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home"
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Projects"
  },
  {
    title: "About",
    href: "/about",
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About"
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Contact"
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Dashboard"
  }
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: "Github",
    href: "https://github.com/PrastowoAdi",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github"
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/prastowo-adi-nugroho-0657b31b0/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin"
  },
  {
    title: "Twitter",
    href: "https://twitter.com/",
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Twitter"
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_prastowoadi/?hl=id",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram"
  },
  {
    title: "Threads",
    href: "",
    icon: <ThreadsIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Threads"
  },
  {
    title: "Discord",
    href: "https://discord.gg",
    icon: <DiscordIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Discord"
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <YoutubeIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Youtube"
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com",
    icon: <TiktokIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Tiktok"
  }
];
