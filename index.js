
let vaqt = 0;
let sekundametr;

function formatTime(milliseconds) {
  const soat = Math.floor(milliseconds / 3600000); 
  const minut = Math.floor((milliseconds % 3600000) / 60000); 
  const sekund = Math.floor((milliseconds % 60000) / 1000); 
  const millis = milliseconds % 1000; 

  const soatStr = soat < 10 ? `0${soat}` : soat;
  const minutStr = minut < 10 ? `0${minut}` : minut;
  const sekundStr = sekund < 10 ? `0${sekund}` : sekund;
  const millisStr = millis < 100 ? (millis < 10 ? `00${millis}` : `0${millis}`) : millis;

  return `${soatStr}:${minutStr}:${sekundStr}:${millisStr}`; 
}

function start() {
  if (!sekundametr) { 
    const startTime = Date.now() - vaqt; 
    sekundametr = setInterval(() => {
      vaqt = Date.now() - startTime; 
      document.getElementById("display").textContent = formatTime(vaqt);
    }, 1); 
  }
}

function stop() {
  clearInterval(sekundametr); 
  sekundametr = null; 
}

function reset() {
  stop(); 
  vaqt = 0; 
  document.getElementById("display").textContent = "00:00:00:000"; 
}
