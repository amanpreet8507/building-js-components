/*
Currently we are defining all our html as one big 
HTML string returned by the Main function.
We're going to refactor this into smaller components.
*/

import Header from "./Components/Header/header.js";
import Hero from "./Components/Hero/hero.js";
import MainContent from "./Components/MainContent/main-content.js";
import Footer from "./Components/Footer/footer.js";

const html = `
  ${Header}
  ${Hero}
  ${MainContent}
  ${Footer}
`

let root = document.getElementById('main');
root.innerHTML = html;