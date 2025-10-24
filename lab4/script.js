document.getElementById("favorites").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("style1");
});

document.querySelector(".book").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("style2");
});

const container = document.querySelector(".container");

document.getElementById("add").addEventListener("click", () => {
  container.innerHTML = `<img src="https://www.5.ua/media/pictures/original/195162.jpg?t=1600856465" alt="Фото Києва" class="new-pic">`;
});

document.getElementById("zoom-in").addEventListener("click", () => {
  const image = document.querySelector(".new-pic");
  if (image) {
    image.style.transform = "scale(2)";
  } else {
    return;
  }
});

document.getElementById("zoom-out").addEventListener("click", () => {
  const image = document.querySelector(".new-pic");
  if (image) {
    image.style.transform = "scale(1)";
  } else {
    return;
  }
});

document.getElementById("delete").addEventListener("click", () => {
  container.innerHTML = "";
});
