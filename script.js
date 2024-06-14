document.addEventListener("DOMContentLoaded", function () {
  // Função para mostrar modal
  function showModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "flex";
  }

  // Função para fechar modal
  function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "none";
  }
  function startImageCarousel(modalId) {
      const modal = document.getElementById(modalId);
      const images = modal.querySelectorAll('.carousel-item__img_modal');
      let currentIndex = 0;

      function showImage(index) {
          images.forEach((img, i) => {
              img.classList.toggle('active', i === index);
          });
      }

      modal.carouselInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
      }, 3000); // Change image every 3 seconds
  }

  // Function to stop image carousel
  function stopImageCarousel(modalId) {
      const modal = document.getElementById(modalId);
      clearInterval(modal.carouselInterval);
  }
  // Configurar eventos para os cards
  document.getElementById("card-projeto1").addEventListener("click", function () {
      showModal("modalDialog1");
  });
  document.getElementById("card-projeto2").addEventListener("click", function () {
      showModal("modalDialog2");
  });
  document.getElementById("card-projeto3").addEventListener("click", function () {
      showModal("modalDialog3");
  });
  document.getElementById("card-projeto4").addEventListener("click", function () {
      showModal("modalDialog4");
  });
  document.getElementById("card-projeto5").addEventListener("click", function () {
      showModal("modalDialog5");
  });
  document.getElementById("card-projeto6").addEventListener("click", function () {
      showModal("modalDialog6");
  });

  // Configurar eventos para os botões de fechar
  document.querySelectorAll(".close_button").forEach(button => {
      button.addEventListener("click", function () {
          const modal = button.closest("dialog");
          closeModal(modal.id);
      });
  });

  document.querySelectorAll(".next").forEach(button => {
      button.addEventListener("click", function () {
          const modal = button.closest("dialog");
          const images = modal.querySelectorAll(".carousel-item__img_modal");
          let currentImageIndex = Array.from(images).findIndex(img => img.classList.contains("active"));
          images[currentImageIndex].classList.remove("active");
          currentImageIndex = (currentImageIndex + 1) % images.length;
          images[currentImageIndex].classList.add("active");
      });
  });
});

              const secondBtn = document.querySelector(".second-button");
              const modal = document.querySelector("dialog");
              const buttonClose = document.querySelector(".close_button");
              secondBtn.onclick = function() {
              modal.style.display = "flex"; // Alterado para flex
              }
              buttonClose.addEventListener("click", function() {
                modal.style.display = "none";
              });

              window.addEventListener("DOMContentLoaded", () => {
              
                const btn = document.querySelector("button");
                var doneTimeout = null,
                  resetTimeout = null;
            
                if (btn) {
                  btn.addEventListener("click", function () {
                    const runClass = "btn--running";
                    const doneClass = "btn--done";
                    const submitDuration = 2000;
                    const resetDuration = 1500;
            
                    this.disabled = true;
                    this.classList.add(runClass);
            
                    clearTimeout(doneTimeout);
                    clearTimeout(resetTimeout);
            
                    doneTimeout = setTimeout(() => {
                      this.classList.remove(runClass);
                      this.classList.add(doneClass);
            
                      resetTimeout = setTimeout(() => {
                        this.disabled = false;
                        this.classList.remove(doneClass);
                      }, resetDuration);
                    }, 600 + submitDuration);
                  });
                }
      }
              );
            
      