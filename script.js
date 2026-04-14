document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, once: true });

  const updateDateTime = () => {
    const datetimeElement = document.getElementById("datetime");
    if(!datetimeElement) return;
    const now = new Date();
    datetimeElement.textContent = now.toLocaleTimeString('nl-NL', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };
  setInterval(updateDateTime, 1000);
  updateDateTime();

  const navLinks = document.querySelectorAll('.navmenu a:not(.login-nav-btn)');
  const navCollapse = document.getElementById('navContent');
  const bsCollapse = new bootstrap.Collapse(navCollapse, {toggle:false});
  
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        bsCollapse.hide();
      }
    });
  });

  const createSnowFlake = () => {
    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snowflake");
    snowFlake.style.left = Math.random() * 100 + "vw";
    snowFlake.style.opacity = Math.random();
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowFlake.innerHTML = "❄";
    document.body.appendChild(snowFlake);
    setTimeout(() => snowFlake.remove(), 5000);
  };
  setInterval(createSnowFlake, 200);
});