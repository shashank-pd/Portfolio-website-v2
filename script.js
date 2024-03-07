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

document.addEventListener("DOMContentLoaded",function(){
  this.addEventListener("click",e => {
    let tar = e.target;
    if (tar.hasAttribute("data-dl")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur",":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;

        setTimeout(() => {
          lastSpan.textContent = "Completed!";
        },timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
        },timeout + 1e3);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      // Smooth scroll on click
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
