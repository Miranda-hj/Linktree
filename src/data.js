import { AppleMusic } from "./Components/Panel/MusicPanel/Icon/AppleMusic";
import { BandCamp } from "./Components/Panel/MusicPanel/Icon/BandCamp";
import { Deezer } from "./Components/Panel/MusicPanel/Icon/Deezer";
import { Soundcloud } from "./Components/Panel/MusicPanel/Icon/Soundcloud";
import { Spotify } from "./Components/Panel/MusicPanel/Icon/Spotify";
import { Tidal } from "./Components/Panel/MusicPanel/Icon/Tidal";
import { YouTubeMusic } from "./Components/Panel/MusicPanel/Icon/YouTubeMusic";

export const News = {
  items: [
    {
      title: "Inside Ukraine: life in a bunker as missiles fall on Kharkiv - video",
      img: "https://cdn.filestackcontent.com/mCA3MP2RFK3LiMoJ9B1r",
      link: "https://www.theguardian.com/world/video/2022/feb/28/inside-ukraine-life-in-a-bunker-as-missiles-fall-on-kharkiv-video?utm_source=instagram&amp;utm_campaign=insideukraine",
    },
    {
      title: "Russia-Ukraine war latest - follow live",
      img:"https://cdn.filestackcontent.com/METGLhpRsyj20t1RWRrR",
      link: "https://www.theguardian.com/world/live/2022/mar/01/ukraine-russia-latest-news-live-updates-war-vladimir-putin-kyiv-kharkiv-russian-invasion-update?utm_source=instagram&utm_campaign=ukraineliveblogdaysixpost",
    },
  ],
  errorMessage: "",
};

export const Shows = {
  items: [
    {
      time: "Apr 01 2019",
      location: "The Forum, Melbourne",
      available: true,
      link: "https://www.songkick.com/1",
    },
    {
      time: "Apr 02 2019",
      location: "Venue Name, Canberra",
      available: true,
      link: "https://www.songkick.com/2",
    },
    {
      time: "Apr 03 2019",
      location: "Venue Name, Sydney",
      available: false,
      link: "https://www.songkick.com/3",
    },
    {
      time: "Apr 04 2019",
      location: "Venue Name,Brisbane",
      available: true,
      link: "https://www.songkick.com/4",
    },
  ],
  errorMessage: "",
};

export const Music = {
  items: [
    {
      icon: <Spotify/>,
      name:"Spotify",
      link: "https://www.spotify.com"
    },
    {
      icon: <AppleMusic/>,
      name:"Apple Music",
      link: "https://www.applemusic.com"
    },
    {
      icon: <Soundcloud />,
      name:"Soundcloud",
      link: "https://www.soundcloud.com"
    },
    {
      icon: <YouTubeMusic/>,
      name:"YouTube Music",
      link: "https://www.youtubemusic.com"
    },
    {
      icon: <Deezer/>,
      name:"Deezer",
      link: "https://www.deezer.com"
    },
    {
      icon: <Tidal/>,
      name:"Tidal",
      link: "https://www.tidal.com"
    },
    {
      icon: <BandCamp/>,
      name:"BandCamp",
      link: "https://www.bandcamp.com"
    },
  ],
  errorMessage: "",
};
