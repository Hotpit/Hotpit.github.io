alert("Game loaded!");
// Your game code goes here
const myImage = document.querySelector("test.png");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "test.png") {
    myImage.setAttribute("src", "test.png");
  } else {
    myImage.setAttribute("src", "test.png");
  }
});
