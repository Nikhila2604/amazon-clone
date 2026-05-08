document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SLIDER (ONLY IF EXISTS)
  ================================ */
  const slides = document.querySelectorAll('.slider-container a');
  let current = 0;

  if (slides.length > 0) {
    function showSlide(i) {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === i);
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    setInterval(nextSlide, 3000);
    showSlide(current);
  }

  /* ===============================
     SEARCH
  ================================ */
  const searchInput = document.getElementById("search-input");
  const searchIcon = document.getElementById("search-icon");

  function searchAmazon() {
    const input = searchInput.value.trim();
    if (input) {
      const query = encodeURIComponent(input);
      window.location.href = `https://www.amazon.com/s?k=${query}`;
    }
  }

  if (searchInput && searchIcon) {
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") searchAmazon();
    });

    searchIcon.addEventListener("click", searchAmazon);
  }

  /* ===============================
     SIDEBAR
  ================================ */
  window.openSidebar = function () {
    document.getElementById('sidebar')?.classList.add('show');
    document.getElementById('overlay')?.classList.add('show');
    document.getElementById('closeBtn')?.style.setProperty("display", "flex");
  };

  window.closeSidebar = function () {
    document.getElementById('sidebar')?.classList.remove('show');
    document.getElementById('overlay')?.classList.remove('show');
    document.getElementById('closeBtn')?.style.setProperty("display", "none");
  };

  document.addEventListener('keydown', e => {
    if (e.key === "Escape") window.closeSidebar();
  });

  /* ===============================
     PRODUCT THUMBNAILS
  ================================ */
  const thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const card = thumb.closest(".product-card");
      if (!card) return;

      const mainImage = card.querySelector(".big-image");
      if (mainImage) mainImage.src = thumb.src;
    });
  });

  /* ===============================
     ICON SCROLL
  ================================ */
  window.scrollIcons = function (direction) {
    const row = document.getElementById("infoRow");
    if (!row) {
        console.error("infoRow not found");
        return;
    }

    row.scrollBy({
        left: direction * 150,
        behavior: "smooth"
    });
};

});

function toggleAbout() {
    const list = document.getElementById("aboutList");
    const btn = document.querySelector(".show-more");

    list.classList.toggle("collapsed");
    btn.textContent = list.classList.contains("collapsed")
        ? "Show more"
        : "Show less";
}


function scrollCarousel(button, direction) {
    const track = button.parentElement.querySelector(".carousel-track");
    const scrollAmount = 600;

    track.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

