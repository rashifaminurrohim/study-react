export function Footer() {
  return (
    <footer className='footer'>
      <ul className="footer-menu">
        <li>
          <ul>
            <li><a href="#">Fitness Dashboard</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="#">Watch Videos</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </li>
      </ul>
      <ul className="footer-copyright">
        <li><p>&copy;2024 Fitness Dashboard.</p></li>
        <li><p>All Rights Reserved.</p></li>
      </ul>
      <ul className="footer-sticker">
        <li><a href="#">🎮</a></li>
        <li><a href="#">🗿</a></li>
        <li><a href="#">🖥️</a></li>
        <li><a href="#">🏀</a></li>
      </ul>
    </footer>
  )
}

// index.html
/**
 * <!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Reusable Footer Component</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { Footer } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<Footer />);
    </script>
  </body>
</html>
 */

// style.css
/**
 * *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 10;
  padding: 0;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

.footer {
  background-color: #fefef0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}

.footer-menu {
  display: flex;
  justify-content: space-around;
}

.footer-menu li{
  display: flex;
  justify-content: center;
}

.footer-menu li a:hover {
  color: purple;
}

.footer-copyright {
  display: flex;
  justify-content: center;
}

.footer-sticker {
  display: flex;
  justify-content: center;
}

.footer-sticker li{
  padding: 0 15px;
}

 */