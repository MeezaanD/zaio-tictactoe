import { Howl } from 'howler';

export const playSound = (type) => {
  const sound = new Howl({
    src: [`/sounds/${type}.mp3`]
  });
  sound.play();
};
