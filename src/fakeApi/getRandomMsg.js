import { messages } from "./mock";

export const getRandomMsg = async () => {
  return new Promise(resolve => {
    const randomMsg = Math.floor(Math.random() * messages.length);

    setTimeout(() => {
      resolve(messages[randomMsg]);
    }, 2000);
  });
}