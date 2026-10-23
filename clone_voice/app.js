/**
 * Clean & Minimalist Voice Compare Engine
 */
document.addEventListener('DOMContentLoaded', () => {
  const audioOrig = document.getElementById('audio-orig');
  const audioClone = document.getElementById('audio-clone');

  const btnPlayAll = document.getElementById('btn-play-all');
  const playAllIcon = document.getElementById('play-all-icon');
  const playAllText = document.getElementById('play-all-text');

  const btnSwitchOrig = document.getElementById('btn-switch-orig');
  const btnSwitchClone = document.getElementById('btn-switch-clone');
  const cardOrig = document.getElementById('card-orig');
  const cardClone = document.getElementById('card-clone');

  const nameOrig = document.getElementById('name-orig');
  const nameClone = document.getElementById('name-clone');

  const progressBar = document.getElementById('progress-bar');
  const currentTimeLabel = document.getElementById('current-time');
  const totalTimeLabel = document.getElementById('total-time');

  const btnSample1 = document.getElementById('btn-sample-1');
  const btnSample2 = document.getElementById('btn-sample-2');

  let isPlaying = false;
  let currentChannel = 'original'; // 'original' | 'clone'
  let isDragging = false;

  const presets = {
    1: {
      orig: 'original.m4a',
      clone: 'clone.wav',
      origName: 'original.m4a',
      cloneName: 'clone.wav'
    },
    2: {
      orig: 'original_2.m4a',
      clone: 'clone_2.wav',
      origName: 'original_2.m4a',
      cloneName: 'clone_2.wav'
    }
  };

  function setChannel(channel) {
    currentChannel = channel;
    if (channel === 'original') {
      audioOrig.volume = 1;
      audioClone.volume = 0;
      cardOrig.classList.add('active');
      cardClone.classList.remove('active');
      btnSwitchOrig.classList.add('active');
      btnSwitchClone.classList.remove('active');
    } else {
      audioOrig.volume = 0;
      audioClone.volume = 1;
      cardClone.classList.add('active');
      cardOrig.classList.remove('active');
      btnSwitchClone.classList.add('active');
      btnSwitchOrig.classList.remove('active');
    }
  }

  function loadSample(id) {
    const p = presets[id];
    if (!p) return;

    const wasPlaying = isPlaying;
    pause();

    audioOrig.src = p.orig;
    audioClone.src = p.clone;
    nameOrig.textContent = p.origName;
    nameClone.textContent = p.cloneName;

    audioOrig.currentTime = 0;
    audioClone.currentTime = 0;
    progressBar.value = 0;
    currentTimeLabel.textContent = '00:00';

    if (id === 1) {
      btnSample1.classList.add('active');
      btnSample2.classList.remove('active');
    } else {
      btnSample2.classList.add('active');
      btnSample1.classList.remove('active');
    }

    if (wasPlaying) {
      play();
    }
  }

  async function play() {
    try {
      if (Math.abs(audioOrig.currentTime - audioClone.currentTime) > 0.08) {
        audioClone.currentTime = audioOrig.currentTime;
      }
      setChannel(currentChannel);
      await Promise.all([audioOrig.play(), audioClone.play()]);
      isPlaying = true;
      playAllIcon.textContent = '❚❚';
      playAllText.textContent = 'Tạm dừng';
    } catch (e) {
      console.warn('Playback error:', e);
    }
  }

  function pause() {
    audioOrig.pause();
    audioClone.pause();
    isPlaying = false;
    playAllIcon.textContent = '▶';
    playAllText.textContent = 'Phát cả hai (A/B Test)';
  }

  function togglePlay() {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }

  function formatTime(sec) {
    if (isNaN(sec) || sec < 0) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // Update Progress
  audioOrig.addEventListener('timeupdate', () => {
    if (isDragging) return;
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    const curr = audioOrig.currentTime || 0;

    if (dur > 0) {
      progressBar.value = (curr / dur) * 100;
      totalTimeLabel.textContent = formatTime(dur);
    }
    currentTimeLabel.textContent = formatTime(curr);

    // Keep synchronization tight
    if (Math.abs(audioOrig.currentTime - audioClone.currentTime) > 0.1) {
      audioClone.currentTime = audioOrig.currentTime;
    }
  });

  audioOrig.addEventListener('loadedmetadata', () => {
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    totalTimeLabel.textContent = formatTime(dur);
  });

  audioOrig.addEventListener('ended', () => {
    pause();
    audioOrig.currentTime = 0;
    audioClone.currentTime = 0;
    progressBar.value = 0;
    currentTimeLabel.textContent = '00:00';
  });

  // Slider Scrubbing
  progressBar.addEventListener('input', () => {
    isDragging = true;
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    if (dur > 0) {
      currentTimeLabel.textContent = formatTime((progressBar.value / 100) * dur);
    }
  });

  progressBar.addEventListener('change', () => {
    isDragging = false;
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    if (dur > 0) {
      const t = (progressBar.value / 100) * dur;
      audioOrig.currentTime = t;
      audioClone.currentTime = t;
    }
  });

  // Controls
  btnPlayAll.addEventListener('click', togglePlay);
  btnSwitchOrig.addEventListener('click', () => setChannel('original'));
  btnSwitchClone.addEventListener('click', () => setChannel('clone'));

  document.querySelectorAll('.btn-solo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const solo = e.currentTarget.getAttribute('data-solo');
      setChannel(solo);
      if (!isPlaying) play();
    });
  });

  btnSample1.addEventListener('click', () => loadSample(1));
  btnSample2.addEventListener('click', () => loadSample(2));

  // Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'Tab') {
      e.preventDefault();
      setChannel(currentChannel === 'original' ? 'clone' : 'original');
    }
  });

  // Initial Boot
  loadSample(1);
  setChannel('original');
});
