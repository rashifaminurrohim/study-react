import "./vcard-styles.css";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="card">
      <div className="top">
        <div className="social-buttons">
          <button>
            <Icon icon={"mdi:facebook"} />
          </button>
          <button>
            <Icon icon={"mdi:instagram"} />
          </button>
          <button>
            <Icon icon={"mdi:twitter"} />
          </button>
        </div>
        <div className="social-buttons right">
          <button>
            <Icon icon={"mdi:linkedin"} />
          </button>
          <button>
            <Icon icon={"mdi:github"} />
          </button>
        </div>
        <button className="like">
          <Icon icon={"mdi:heart"} />
        </button>
        <div className="text">
          <div className="name-wrapper">
            <div className="name">Black Cat</div>
          </div>
          <div className="title">Meow Engineer</div>
        </div>
      </div>
      <div className="bottom">
        <div className="desc">
          <p>My Name is <b>Black cat</b> and I am a Developer.</p>
          <p>To say that I love software is understatement, I spend every waking hour building something FUN & watching Tech Podcast or attending Meetups & Conferences.</p>
          <div className="buttons height">
            <button>
              <Icon icon={"twemoji:microscope"} />
              <p>Phd</p>
            </button>
            <button>
              <Icon icon={"fluent-emoji-flat:mountain"} />
              <p>mountaineer</p>
            </button>
            <button>
              <Icon
                icon={"game-icons:rolling-dices"}
                style={{ color: "white" }}
              />
              <p>3D Geek</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
