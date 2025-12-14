const tg = window.Telegram.WebApp;

tg.expand(); // full screen

document.getElementById("btn").onclick = () => {
  tg.sendData("Hello from Mini App!");
};
