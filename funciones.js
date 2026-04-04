const targetDate = new Date("2026-04-15T09:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const cdText = document.getElementById("cdText");

  if (!cdText) return;

  if (diff <= 0) {
    cdText.textContent = "¡Ya abrimos!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  cdText.textContent = `${days} D ${hours} H ${minutes} M ${seconds} S`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Control del audio de fondo
const audio = document.getElementById('backgroundAudio');
const audioToggle = document.getElementById('audioToggle');

if (audio && audioToggle) {
  audioToggle.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      audioToggle.textContent = 'SILENCIAR';
      audioToggle.setAttribute('aria-label', 'Silenciar sonido');
    } else {
      audio.muted = true;
      audioToggle.textContent = 'ESCUCHAR A PACO DE LUCÍA';
      audioToggle.setAttribute('aria-label', 'Activar sonido');
    }
  });
}
