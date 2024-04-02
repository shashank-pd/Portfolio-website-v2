var typed = new Typed("#element", {
  strings: [
    "Programming",
    "Web Development",
    "Problem Solving",
    "Continuous Learning",
    "Tech Exploration",
    "Building Cool Projects",
],
  typeSpeed: 30,
  loop: true, 
  backDelay: 900,
  backSpeed: 30,
});

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    let tar = e.target;

    if (tar.hasAttribute("data-dl")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur", ":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;

        setTimeout(() => {
          lastSpan.textContent = "Completed!";
        }, timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
        }, timeout + 1000);
      }
    }
  });
});

function getMSFromProperty(prop, el) {
  return parseFloat(getComputedStyle(document.querySelector(el)).getPropertyValue(prop)) * 1000;
}
