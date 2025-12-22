
      lucide.createIcons();

      // --- Scroll Reveal Animation ---
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('revealed');

                  // Trigger counters if present
                  const counters = entry.target.querySelectorAll('.counter');
                  if(counters.length > 0) {
                      counters.forEach(counter => startCounter(counter));
                  }

                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-text').forEach(el => {
          observer.observe(el);
      });

      // --- Counter Animation ---
      function startCounter(counter) {
          const target = +counter.getAttribute('data-target');
          const duration = 2000;
          const start = 0;
          const startTime = performance.now();

          function update(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart

              const currentVal = Math.floor(ease * (target - start) + start);
              counter.innerText = currentVal;

              if (progress < 1) {
                  requestAnimationFrame(update);
              } else {
                  counter.innerText = target;
              }
          }
          requestAnimationFrame(update);
      }

      // --- Custom Cursor Logic ---
      const cursorDot = document.getElementById('cursor-dot');
      const cursorRing = document.getElementById('cursor-ring');
      const body = document.body;

      document.addEventListener('mousemove', (e) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          cursorDot.style.left = `${mouseX}px`;
          cursorDot.style.top = `${mouseY}px`;

          cursorRing.style.left = `${mouseX}px`;
          cursorRing.style.top = `${mouseY}px`;

          const target = e.target;
          if (target.closest('.interactable') || target.closest('a') || target.closest('button')) {
              body.classList.add('hovering');
          } else {
              body.classList.remove('hovering');
          }
      });

      document.addEventListener('mousedown', () => {
          body.classList.add('grabbing');
          cursorRing.style.transform = 'translate(-50%, -50%) scale(0.5)';
      });

      document.addEventListener('mouseup', () => {
          body.classList.remove('grabbing');
          cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
      });
