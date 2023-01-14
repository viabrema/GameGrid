import { game } from "./game";
import { collision } from "./collision";

let moveFrame = 0;
let moveDirection = null;
let cooldown = 100;

const moveUp = () => {
  if (moveFrame && moveDirection === "up") {
    game.player.rY -= game.qSize / 8;
    moveFrame += 1;
    if (moveFrame === 9) {
      game.player.y -= 1;
      moveFrame = 0;
    }
  }
};

const moveRight = () => {
  if (moveFrame && moveDirection === "right") {
    game.player.rX += game.qSize / 8;
    moveFrame += 1;
    if (moveFrame === 9) {
      game.player.x += 1;
      moveFrame = 0;
    }
  }
};

const moveDown = () => {
  if (moveFrame && moveDirection === "down") {
    game.player.rY += game.qSize / 8;
    moveFrame += 1;
    if (moveFrame === 9) {
      game.player.y += 1;
      moveFrame = 0;
    }
  }
};

const moveLeft = () => {
  if (moveFrame && moveDirection === "left") {
    game.player.rX -= game.qSize / 8;
    moveFrame += 1;
    if (moveFrame === 9) {
      game.player.x -= 1;
      moveFrame = 0;
    }
  }
};

const jumpRight = () => {
  if (moveFrame && moveDirection === "jump_right") {
    moveFrame += 1;

    if (moveFrame < 52) {
      game.player.rY -= 2;
    }

    if (moveFrame === 53) {
      game.player.rY += game.qSize / 2;
      game.player.rX += game.qSize / 2;
    }

    if (moveFrame === 54) {
      game.player.rY += game.qSize / 2;
      game.player.rX += game.qSize / 2;
    }

    if (moveFrame === 55) {
      game.player.rY += game.qSize / 2;
      game.player.rX += game.qSize / 2;
    }

    if (moveFrame === 56) {
      game.player.rY += game.qSize / 2;
      game.player.rX += game.qSize / 2;
      game.player.x += 2;
      cooldown = 100;
      moveFrame = 0;
    }
  }
};

export const moving = () => {
  if (game.pressKey_j && !moveFrame && !cooldown) {
    moveFrame = 1;
    moveDirection = "jump_right";
  } else {
    if (cooldown > 0) {
      cooldown -= 1;
    }
  }

  if (game.pressKey_w && !moveFrame && !collision("up")) {
    moveFrame = 1;
    moveDirection = "up";
  }

  if (game.pressKey_d && !moveFrame && !collision("right")) {
    moveFrame = 1;
    moveDirection = "right";
  }

  if (game.pressKey_s && !moveFrame && !collision("down")) {
    moveFrame = 1;
    moveDirection = "down";
  }

  if (game.pressKey_a && !moveFrame && !collision("left")) {
    moveFrame = 1;
    moveDirection = "left";
  }

  moveDown();
  moveUp();
  moveRight();
  moveLeft();
  jumpRight();
};
