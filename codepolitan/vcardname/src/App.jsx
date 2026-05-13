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
        <p>My Name is blablabla. To say that</p>
        <div>
          <button className="buttons">
            <img src="" alt="" />
            <p>Phd</p>
          </button>
          <button className="buttons">
            <img src="" alt="" />
            <p>mountaineer</p>
          </button>
          <button className="buttons">
            <img src="" alt="" />
            <p>3D Geek</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
