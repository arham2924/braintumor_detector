

let isModelOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20
function moveBackground(event) {
    const shapes =  document.querySelectorAll(".shape")
    const x = event.clientX / scaleFactor
    const y = event.clientY / scaleFactor

    for(let i = 0; i < shapes.length; ++i ) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")

    }
}
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".model__overlay--loading");
  const success = document.querySelector(".model__overlay--success");
  loading.classList += " model__overlay--visible";
  emailjs
    .sendForm(
      "service_ygpyf1d",
      "template_qzq0c82",
      event.target,
      "Opdc1j08s1phE0Rzq"
    )
    .then(() => {
      loading.classList.remove("model__overlay--visible");
      success.classList += " model__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("model__overlay--visible");
      alert(
        "The email service is temporarilt unvailable. Please contact me directly at arham2924@gmail.com"
      );
    });

  setTimeout(() => {
    console.log("it worked 1");
  }, 1000);
}

function toggleModel() {
    if (isModelOpen) {
        isModelOpen = false
        return document.body.classList.remove("model--open")
   
    }
    isModelOpen = true
    document.body.classList += " model--open"
}
