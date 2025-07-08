window.addEventListener("scroll", function () {
  const header = document.querySelector(".page-header");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // ① スクロール50px以上 → .scrolled を付ける
  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // ② 一番下までスクロールしたら → .hide を付ける
  if (scrollY + windowHeight >= docHeight - 1) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
});


const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  const currentX = parseFloat(cursor.style.left) || 0;
  const currentY = parseFloat(cursor.style.top) || 0;

  cursor.style.left = currentX + (mouseX - currentX) * 0.1 + "px";
  cursor.style.top = currentY + (mouseY - currentY) * 0.1 + "px";

  requestAnimationFrame(animate);
}

animate();
