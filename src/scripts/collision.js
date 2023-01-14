import { game } from "./game";
export const collision = (direction) => {
  let result = false;

  if (direction === "up") {
    result = game.map.layer1.find((item) => {
      return (
        item.x === game.player.x && item.y === game.player.y - 1 && item.solid
      );
    });
  }

  if (direction === "right") {
    result = game.map.layer1.find((item) => {
      return (
        item.x === game.player.x + 1 && item.y === game.player.y && item.solid
      );
    });
  }

  if (direction === "down") {
    result = game.map.layer1.find((item) => {
      return (
        item.x === game.player.x && item.y === game.player.y + 1 && item.solid
      );
    });
  }

  if (direction === "left") {
    result = game.map.layer1.find((item) => {
      return (
        item.x === game.player.x - 1 && item.y === game.player.y && item.solid
      );
    });
  }

  return result;
};
