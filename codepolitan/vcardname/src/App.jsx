import "./vcard-styles.css";
import { Icon } from "@iconify/react";

const socials = [
  {
    logo: "mdi:facebook",
    link: "https://www.instagram.com/rasifara_/",
  },
  {
    logo: "mdi:instagram",
    link: "https://www.instagram.com/rasifara_/",
  },
  {
    logo: "mdi:twitter",
    link: "https://www.instagram.com/rasifara_/",
  },
  {
    logo: "mdi:linkedin",
    link: "https://www.instagram.com/rasifara_/",
  },
  {
    logo: "mdi:github",
    link: "https://www.instagram.com/rasifara_/",
  },
];

const badges = [
  {
    badge: "twemoji:microscope",
    text: "Phd",
  },
  {
    badge: "fluent-emoji-flat:mountain",
    text: "mountaineer",
  },
  {
    badge: "game-icons:rolling-dices",
    text: "3D Geek",
  },
];

function SocialButton({ logo, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <Icon icon={logo} />
    </button>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Black Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}

function Header() {
  const middleIndex = Math.round(socials.length / 2);
  const socialsLeft = socials.slice(0, middleIndex);
  const socialsRight = socials.slice(middleIndex);
  return (
    <>
      <div className="social-buttons">
        {socialsLeft.map((s) => (
          <SocialButton logo={s.logo} link={s.link} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialsRight.map((s) => (
          <SocialButton logo={s.logo} link={s.link} />
        ))}
      </div>
    </>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        My Name is <b>Black cat</b> and I am a Developer.
      </p>
      <p>
        To say that I love software is understatement, I spend every waking hour
        building something FUN & watching Tech Podcast or attending Meetups &
        Conferences.
      </p>
    </div>
  );
}

function Badge({ badge, text }) {
  return (
    <button>
      <div className="height">
        <Icon icon={badge} height={12} style={{ marginRight: "2px" }} />
        {text}
      </div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      {badges.map((b) => (
        <Badge badge={b.badge} text={b.text} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

export default App;
