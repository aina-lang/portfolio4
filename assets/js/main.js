//typing effect
const textj=document.querySelector(".landing-page .landing-content h2 span");
const cursor=document.querySelector(".landing-page .landing-content h2 .exlamation");
cursor.innerHTML = "|";
cursor.style.animation = "blink 0.5s linear infinite";
cursor.style.display = "inline-block";

function typeWrite(element, text, delay = 50) {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    };
    type();
}

const erase = (element, delay = 70) => {
    let text = element.innerHTML;
    let i = text.length;
    const erase = () => {
      if (i >= 0) {
        element.innerHTML = text.substring(0, i);
        i--;
        setTimeout(erase, delay);
      } else {
        element.innerHTML = "";
      }
    };
    erase();
  };
  
  const typeWriteAndErase = (element, text, delay = 80) => {
    typeWrite(element, text, delay);
    setTimeout(() => erase(element, delay), (text.length + 1) * delay);
  };
  

  const typeWriteAndEraseRecursive = (element, text, delay = 200) => {
    typeWriteAndErase(element, text, delay);
    setTimeout(() => typeWriteAndEraseRecursive(element, text, delay), (text.length + 1) * delay * 2);
  };


  typeWriteAndEraseRecursive(textj, "  AINA MERCIA");


  /* On utilise la librairie gsap 
Animation au chargement */

// const gsap=require("./gsap.js");



