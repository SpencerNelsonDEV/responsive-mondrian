const toggleGreen = () => {
  const callback = document.getElementById("checkbox");
  const makeGreen = document.querySelectorAll(".green");
  callback.checked === true
    ? makeGreen.forEach((item) => (item.style.background = "green"))
    : makeGreen.forEach((item) => (item.style.background = "white"));
};
