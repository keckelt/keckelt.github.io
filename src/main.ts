import './style.css'
import { addIcons } from 'ionicons';
import * as feather from 'feather-icons';
feather.replace();

addIcons({});

console.log('Hello Visitor 👋');

// partially based on https://css-tricks.com/emojis-as-favicons/
const linkForFavicon = document.querySelector(
  `head > link[rel='icon']`
)!;

function setFavicon(emoji: string) {
  const newFavicon = `
  <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
    <text y=%22.9em%22 font-size=%2290%22>
      ${emoji}
    </text>
  </svg>
`.trim();
  linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);
}


// startSimulation and pauseSimulation defined elsewhere
function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {
    setFavicon('🙋‍♂️');
  } else {
    setFavicon('👋');
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
