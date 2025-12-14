const tg = window.Telegram.WebApp;
tg.expand();

async function loadIP() {
  document.getElementById("ip").innerText = "Loading...";
  document.getElementById("country").innerText = "Loading...";
  document.getElementById("isp").innerText = "Loading...";

  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    document.getElementById("ip").innerText = data.ip;
    document.getElementById("country").innerText =
      `${data.country_name} (${data.country_code})`;
    document.getElementById("isp").innerText = data.org;

  } catch (err) {
    document.getElementById("ip").innerText = "Error";
    document.getElementById("country").innerText = "Error";
    document.getElementById("isp").innerText = "Error";
  }
}

document.getElementById("refresh").onclick = loadIP;

// Load on start
loadIP();
