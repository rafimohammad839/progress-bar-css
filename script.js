const progresBar = document.querySelector('.progress-bar');
const loadingBtn = document.querySelector('.loading-btn.active');
const stopBtn = document.querySelector('.stop-btn');

progresBar.addEventListener('animationend', () => {
  loadingBtn.innerHTML = "Loaded";
  loadingBtn.classList.remove('active');
  setTimeout(() => {
    loadingBtn.classList.add('active');
    loadingBtn.innerHTML = "Reset";
  }, 3000)
}, false)

function startOrStopLoading() {
  if (event.target.classList.contains('active')) {
    if (loadingBtn.innerHTML == "Reset") {
      progresBar.classList.remove('start')
      loadingBtn.innerHTML = "Start Loading";
    } else if (loadingBtn.innerHTML == "Stop Loading") {
      console.log('Stopped');
      progresBar.classList.remove('running');
      progresBar.classList.add('paused');
      loadingBtn.innerHTML = "Resume Loading";
    } else if (loadingBtn.innerHTML == "Resume Loading") {
      console.log('Resumed');
      progresBar.classList.remove('paused');
      progresBar.classList.add('running');
      loadingBtn.innerHTML = "Stop Loading";
    } else {
      progresBar.classList.add('start');
      loadingBtn.innerHTML = "Stop Loading";
    }
  }
}
