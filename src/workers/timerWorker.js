let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    const now = Date.now();
    const countDownSeconds = Math.floor((endDate - now) / 1000);

    self.postMessage(countDownSeconds);

    setTimeout(tick, 1000);
  }

  tick();
};
