import gravitationalBeep from '../assets/audios/gravitational_beep_fixed.mp3';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  //isso é um workaround necessário para funcionar no safari
  //acontece pq se tu deixa um tempo antes de tocar o áudio
  //ele entende que o desenvolver que tá fazendo isso sem requisição
  //do usuário
  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
