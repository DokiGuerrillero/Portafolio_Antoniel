// ---------------- DOCUMENT ELEMENTS ------------------------

const Page = {
  homeBut : document.querySelector(".homeBut"),
  contBut : document.querySelector(".contactBut"),
  home : document.querySelector(".home"),
  animText :  document.querySelector(".textAnimation"),
  typeBar :  document.querySelector("#typeBar"),
  contact : document.querySelector(".contact"),
}

// ----------------- PAGE CONTROLLER -------------------------

// Buttons

Page.contBut.addEventListener("click", () => {
  Page.home.style.display = 'none'
  Page.contact.style.display = 'flex'
}, true)

Page.homeBut.addEventListener("click", () => {
  Page.home.style.display = 'flex'
  Page.contact.style.display = 'none'
}, true)

// Effects
array = [
  ' Designer ... '.split(''),
  ' Photographer ... '.split(''),
  ' Master ... '.split('')
]

function bounce () {
  setTimeout(() => {Page.typeBar.style.color = 'white'}, 60);
  setTimeout(() => {Page.typeBar.style.color = 'black'}, 200);
}

function sas() { 
  setTimeout(()=>{
    if (letterIte <= array[wordIte].length && letterIte > 0) {
      console.log(Page.animText.textContent)
      Page.animText.textContent = array[wordIte].slice(0,letterIte).join('')
      if (control == 0) {
        letterIte += 1 
      } else {
        letterIte -= 1 
      }
      console.log(control == 0 + 'concat')
    } else {
      if (control == 0){
        control = 1
        letterIte -= 1
      }else{
        control = 0 
        letterIte += 1
        wordIte == array.length - 1? wordIte = 0 : wordIte += 1
      }
    }
    if (letterIte == array[wordIte].length - 1 && control == 1) {
      console.log("yeah")
      bounce()
      setTimeout(() => { bounce()}, 1100);
      setTimeout(() => {sas()}, 1800);
    } else sas ()
  },320)
}

window.onload = ()=>{
  control = 0
  wordIte = 0
  letterIte = 1
  setTimeout(() => {
    sas(control)
  }, 1500);
}