document.addEventListener("DOMContentLoaded", function () {
  let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Check if the entry is a card title for counter animation
              if (entry.target.classList.contains('card-title1')) {
                  startCounter(entry.target, 8);  // Experience
              } else if (entry.target.classList.contains('card-title2')) {
                  startCounter(entry.target, 82); // Customer Satisfaction
              } else if (entry.target.classList.contains('card-title3')) {
                  startCounter(entry.target, 35); // Projects Complete
              } else if (entry.target.classList.contains('card-title4')) {
                  startCounter(entry.target, 100); // Service Guarantee
              }

              // Trigger box animation
              if (entry.target.classList.contains('box')) {
                  entry.target.classList.add('visible'); // Add visible class for animation
              }

              observer.unobserve(entry.target); // Stop observing after the animation starts
          }
      });
  }, options);

  // Observe card titles for counter animation
  document.querySelectorAll('.card-title1, .card-title2, .card-title3, .card-title4').forEach(title => {
      observer.observe(title);
  });

  // Observe boxes for sliding up animation
  document.querySelectorAll('.box').forEach(box => {
      box.classList.add('hidden'); // Initially hidden
      observer.observe(box); // Observe each box for slide-up animation
  });
});

// Function to start the counter animation
function startCounter(element, target) {
  let count = 0;
  let increment = target / 30; // Increment in small steps for smooth animation
  let interval = setInterval(() => {
      count += increment;
      if (count >= target) {
          element.textContent = Math.ceil(target);
          clearInterval(interval);
      } else {
          element.textContent = Math.ceil(count);
      }
  }, 50); // Update every 50ms for smooth animation
}

document.querySelectorAll('.questionsbox').forEach(box => {
  box.addEventListener('click', function() {
      // Toggle active class on click
      this.classList.toggle('active');
  });
});

const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });