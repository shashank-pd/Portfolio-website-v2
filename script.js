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
        tar.style.borderColor = "#ffffff";
        tar.style.color = "#ffffff"; 

        setTimeout(() => {
          lastSpan.textContent = "Completed!";
        }, timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
          tar.style.borderColor = "";
          tar.style.color = ""; 
        }, timeout + 1000);
      }
    }
  });
});

function getMSFromProperty(prop, el) {
  return parseFloat(getComputedStyle(document.querySelector(el)).getPropertyValue(prop)) * 1000;
}

//for scrolling

document.addEventListener("DOMContentLoaded", function () {
  // Get all navbar links
  const navbarLinks = document.querySelectorAll(".navbar-link");

  // Function to highlight the active link
  function highlightNavbarLink() {
      const sections = document.querySelectorAll("article");
      const scrollPosition = window.scrollY + 100; 

      sections.forEach((section, index) => {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
              navbarLinks.forEach(link => {
                  link.classList.remove("active");
              });
              navbarLinks[index].classList.add("active");
          }
      });

  }

  window.addEventListener("scroll", highlightNavbarLink);
  highlightNavbarLink();
});

// for sid navigation

function openNav() {
    document.querySelector(".sidenav").style.left = "0";
}

function closeNav() {
    document.querySelector(".sidenav").style.left = "-100%";
}

document.addEventListener("DOMContentLoaded", function() {
  // Show the opening overlay for a moment
  setTimeout(function() {
      var openingOverlay = document.getElementById("openingOverlay");
      openingOverlay.classList.add("hide-overlay");
  }, 4000); // Adjust the duration (in milliseconds) as needed
});

