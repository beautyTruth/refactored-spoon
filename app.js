// const progress = document.querySelector(".progress-done");

// setTimeout(function () {
//   progress.style.width = progress.getAttribute("data-done") + "%";
//   progress.style.opacity = 1;
// }, 500);

const progress = document.querySelector(".progress-done");

setTimeout(() => {
  progress.style.width = progress.getAttribute("data-done") + "%";
  progress.style.opacity = 1;
}, 500);

// this is just for show -- the dynamic movement isn't tied to data loaded
