import { game } from "./game";
import { moving } from "./moves";

const canvas = window.document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const init = () => {
  //configuração inicial
  game.player.x = 5;
  game.player.y = 5;
  game.player.rX = game.player.x * game.qSize;
  game.player.rY = game.player.y * game.qSize;
  //inicio da renderização
  render();
};

const drawLayer1 = () => {
  game.map.layer1.forEach((item) => {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(
      item.x * game.qSize - game.cam.x,
      item.y * game.qSize - game.cam.y,
      game.qSize,
      game.qSize
    );
  });
};

const draw = () => {
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLayer1();
  ctx.fillStyle = "#000";
  ctx.fillRect(
    game.player.rX - game.cam.x,
    game.player.rY - game.cam.y,
    game.qSize,
    game.qSize
  );
  ctx.fill();
};

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  game[`pressKey_${event.key}`] = true;
});

document.addEventListener("keyup", (event) => {
  event.preventDefault();
  game[`pressKey_${event.key}`] = false;
});

const render = () => {
  moving();
  game.cam.x = game.player.rX - 360;
  game.cam.y = game.player.rY - 360;
  draw();

  requestAnimationFrame(() => {
    render();
  });
};

init();
