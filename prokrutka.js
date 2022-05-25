let save = 0;

function scrollChecker() {
  if (scrollY > save) {
    save = scrollY;
    document.querySelector(".navbar").style.marginTop = "-99px";
  } else if (scrollY < save) {
    save = scrollY;
    document.querySelector(".navbar").style.marginTop = "0";
  }
}
setInterval(scrollChecker);
