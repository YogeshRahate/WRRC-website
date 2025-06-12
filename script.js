
  const container = document.getElementById("image-container");
  document.getElementById("scroll-left").onclick = () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };
  document.getElementById("scroll-right").onclick = () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

