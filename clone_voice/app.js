/**
 * Voice Clone Comparison Showcase - Client-side Engine
 * Features:
 * - Synchronized Dual Audio Playback (Seamless A/B switching)
 * - Canvas Audio Waveform Visualizers (Original vs AI Clone)
 * - Preset switcher (Sample 1 & Sample 2)
 * - Local File Uploads for custom A/B testing
 * - Keyboard Shortcuts (Space: Play/Pause, Tab: Switch A/B)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM ELEMENTS ---
  const audioOrig = document.getElementById('audio-original');
  const audioClone = document.getElementById('audio-clone');

  const btnMasterPlay = document.getElementById('btn-master-play');
  const playIcon = document.getElementById('play-icon');
  const currentTimeLabel = document.getElementById('current-time');
  const totalDurationLabel = document.getElementById('total-duration');
  const timelineSlider = document.getElementById('timeline-slider');

  const tabOriginal = document.getElementById('tab-original');
  const tabClone = document.getElementById('tab-clone');
  const cardOriginal = document.getElementById('card-original');
  const cardClone = document.getElementById('card-clone');

  const nameOriginal = document.getElementById('name-original');
  const nameClone = document.getElementById('name-clone');
  const formatOriginal = document.getElementById('format-original');
  const formatClone = document.getElementById('format-clone');

  const canvasOrig = document.getElementById('canvas-original');
  const canvasClone = document.getElementById('canvas-clone');

  const btnSample1 = document.getElementById('btn-sample-1');
  const btnSample2 = document.getElementById('btn-sample-2');

  const inputCustomOrig = document.getElementById('input-custom-orig');
  const inputCustomClone = document.getElementById('input-custom-clone');
  const fileNameOrig = document.getElementById('file-name-orig');
  const fileNameClone = document.getElementById('file-name-clone');

  const playbackSpeed = document.getElementById('playback-speed');
  const masterVolume = document.getElementById('master-volume');
  const volIcon = document.getElementById('vol-icon');

  // --- STATE ---
  let isPlaying = false;
  let currentTarget = 'original'; // 'original' | 'clone'
  let userVolume = 0.9;
  let isMuted = false;
  let isDraggingSlider = false;

  // Preset Configurations
  const presets = {
    1: {
      origSrc: 'original.m4a',
      cloneSrc: 'clone.wav',
      origName: 'original.m4a',
      cloneName: 'clone.wav',
      origFmt: 'M4A (AAC)',
      cloneFmt: 'WAV (PCM 16-bit)'
    },
    2: {
      origSrc: 'original_2.m4a',
      cloneSrc: 'clone_2.wav',
      origName: 'original_2.m4a',
      cloneName: 'clone_2.wav',
      origFmt: 'M4A (AAC)',
      cloneFmt: 'WAV (PCM 16-bit)'
    }
  };

  // --- INITIALIZE AUDIO ENGINE ---
  function loadPreset(sampleId) {
    const p = presets[sampleId];
    if (!p) return;

    const wasPlaying = isPlaying;
    pauseAudio();

    audioOrig.src = p.origSrc;
    audioClone.src = p.cloneSrc;

    nameOriginal.textContent = p.origName;
    nameClone.textContent = p.cloneName;
    formatOriginal.textContent = p.origFmt;
    formatClone.textContent = p.cloneFmt;

    audioOrig.load();
    audioClone.load();

    audioOrig.currentTime = 0;
    audioClone.currentTime = 0;
    timelineSlider.value = 0;
    currentTimeLabel.textContent = '00:00';

    if (sampleId === 1) {
      btnSample1.classList.add('active');
      btnSample2.classList.remove('active');
    } else {
      btnSample2.classList.add('active');
      btnSample1.classList.remove('active');
    }

    if (wasPlaying) {
      playAudio();
    }
  }

  // --- AUDIO SYNCHRONIZATION & VOLUME ROUTING ---
  function updateVolumeRouting() {
    const effectiveVol = isMuted ? 0 : userVolume;
    if (currentTarget === 'original') {
      audioOrig.volume = effectiveVol;
      audioClone.volume = 0;
      cardOriginal.classList.add('active');
      cardClone.classList.remove('active');
      tabOriginal.classList.add('active');
      tabClone.classList.remove('active');
    } else {
      audioOrig.volume = 0;
      audioClone.volume = effectiveVol;
      cardClone.classList.add('active');
      cardOriginal.classList.remove('active');
      tabClone.classList.add('active');
      tabOriginal.classList.remove('active');
    }
  }

  function setAorB(target) {
    currentTarget = target;
    updateVolumeRouting();
  }

  async function playAudio() {
    try {
      // Sync clock positions
      if (Math.abs(audioOrig.currentTime - audioClone.currentTime) > 0.08) {
        audioClone.currentTime = audioOrig.currentTime;
      }
      updateVolumeRouting();

      await Promise.all([audioOrig.play(), audioClone.play()]);
      isPlaying = true;
      playIcon.textContent = '❚❚';
    } catch (err) {
      console.warn('Playback error (interaction needed):', err);
    }
  }

  function pauseAudio() {
    audioOrig.pause();
    audioClone.pause();
    isPlaying = false;
    playIcon.textContent = '▶';
  }

  function togglePlay() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  // --- TIME FORMATTING ---
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Update Progress Timeline
  function onTimeUpdate() {
    if (isDraggingSlider) return;

    // Use max duration available
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    const curr = audioOrig.currentTime || 0;

    if (dur > 0) {
      const progressPercent = (curr / dur) * 100;
      timelineSlider.value = progressPercent;
      totalDurationLabel.textContent = formatTime(dur);
    }
    currentTimeLabel.textContent = formatTime(curr);

    // Keep clone strictly in-sync if it drifts
    if (Math.abs(audioOrig.currentTime - audioClone.currentTime) > 0.1) {
      audioClone.currentTime = audioOrig.currentTime;
    }
  }

  audioOrig.addEventListener('timeupdate', onTimeUpdate);

  audioOrig.addEventListener('loadedmetadata', () => {
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    totalDurationLabel.textContent = formatTime(dur);
  });

  audioClone.addEventListener('loadedmetadata', () => {
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    totalDurationLabel.textContent = formatTime(dur);
  });

  // End of audio loop or reset
  audioOrig.addEventListener('ended', () => {
    pauseAudio();
    audioOrig.currentTime = 0;
    audioClone.currentTime = 0;
    timelineSlider.value = 0;
    currentTimeLabel.textContent = '00:00';
  });

  // Timeline Scrubbing
  timelineSlider.addEventListener('input', () => {
    isDraggingSlider = true;
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    if (dur > 0) {
      const targetTime = (timelineSlider.value / 100) * dur;
      currentTimeLabel.textContent = formatTime(targetTime);
    }
  });

  timelineSlider.addEventListener('change', () => {
    isDraggingSlider = false;
    const dur = Math.max(audioOrig.duration || 0, audioClone.duration || 0);
    if (dur > 0) {
      const targetTime = (timelineSlider.value / 100) * dur;
      audioOrig.currentTime = targetTime;
      audioClone.currentTime = targetTime;
    }
  });

  // Master Play Button
  btnMasterPlay.addEventListener('click', togglePlay);

  // A/B Toggle Tabs
  tabOriginal.addEventListener('click', () => setAorB('original'));
  tabClone.addEventListener('click', () => setAorB('clone'));

  // Solo Listen Buttons
  document.querySelectorAll('.btn-listen-solo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const soloTarget = e.currentTarget.getAttribute('data-solo');
      setAorB(soloTarget);
      if (!isPlaying) {
        playAudio();
      }
    });
  });

  // Preset Buttons
  btnSample1.addEventListener('click', () => loadPreset(1));
  btnSample2.addEventListener('click', () => loadPreset(2));

  // Speed Control
  playbackSpeed.addEventListener('change', (e) => {
    const speed = parseFloat(e.target.value);
    audioOrig.playbackRate = speed;
    audioClone.playbackRate = speed;
  });

  // Volume Control
  masterVolume.addEventListener('input', (e) => {
    userVolume = parseFloat(e.target.value);
    isMuted = userVolume === 0;
    volIcon.textContent = isMuted ? '🔇' : (userVolume < 0.5 ? '🔉' : '🔊');
    updateVolumeRouting();
  });

  volIcon.addEventListener('click', () => {
    isMuted = !isMuted;
    volIcon.textContent = isMuted ? '🔇' : (userVolume < 0.5 ? '🔉' : '🔊');
    updateVolumeRouting();
  });

  // Custom File Upload Handlers
  inputCustomOrig.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      audioOrig.src = url;
      nameOriginal.textContent = file.name;
      formatOriginal.textContent = file.type || 'Custom Audio';
      fileNameOrig.textContent = `Đã chọn: ${file.name}`;
      btnSample1.classList.remove('active');
      btnSample2.classList.remove('active');
      pauseAudio();
    }
  });

  inputCustomClone.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      audioClone.src = url;
      nameClone.textContent = file.name;
      formatClone.textContent = file.type || 'Custom Audio';
      fileNameClone.textContent = `Đã chọn: ${file.name}`;
      btnSample1.classList.remove('active');
      btnSample2.classList.remove('active');
      pauseAudio();
    }
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Avoid triggering when user focuses on an input or select
    if (['INPUT', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'Tab') {
      e.preventDefault();
      setAorB(currentTarget === 'original' ? 'clone' : 'original');
    }
  });

  // --- PROCEDURAL AUDIO WAVEFORM VISUALIZER ---
  // High performance Canvas 60fps generator with dynamic wave amplitudes
  function initVisualizers() {
    const ctxOrig = canvasOrig.getContext('2d');
    const ctxClone = canvasClone.getContext('2d');

    const barCount = 42;
    let waveOffsets = new Array(barCount).fill(0);

    function renderVisualizer() {
      const w1 = canvasOrig.width;
      const h1 = canvasOrig.height;
      const w2 = canvasClone.width;
      const h2 = canvasClone.height;

      ctxOrig.clearRect(0, 0, w1, h1);
      ctxClone.clearRect(0, 0, w2, h2);

      const barWidth = (w1 / barCount) * 0.65;
      const gap = (w1 / barCount) * 0.35;
      const now = performance.now() * 0.003;

      for (let i = 0; i < barCount; i++) {
        // Base height curve (symmetric bell shaped)
        const centerDist = Math.abs(i - barCount / 2) / (barCount / 2);
        const baseMultiplier = 1 - centerDist * 0.65;

        // Dynamic motion if active & playing
        let hOrigRatio = 0.25;
        let hCloneRatio = 0.25;

        if (isPlaying) {
          if (currentTarget === 'original') {
            hOrigRatio = 0.25 + 0.65 * baseMultiplier * Math.abs(Math.sin(now * 3 + i * 0.45));
            hCloneRatio = 0.15 + 0.25 * baseMultiplier * Math.abs(Math.sin(now * 1.5 + i * 0.2));
          } else {
            hCloneRatio = 0.25 + 0.7 * baseMultiplier * Math.abs(Math.sin(now * 3.2 + i * 0.5));
            hOrigRatio = 0.15 + 0.25 * baseMultiplier * Math.abs(Math.sin(now * 1.5 + i * 0.2));
          }
        } else {
          // Static artistic wave
          hOrigRatio = 0.2 + 0.4 * baseMultiplier * Math.abs(Math.sin(i * 0.35));
          hCloneRatio = 0.2 + 0.4 * baseMultiplier * Math.abs(Math.cos(i * 0.35));
        }

        const barHeightOrig = Math.max(6, hOrigRatio * (h1 - 16));
        const barHeightClone = Math.max(6, hCloneRatio * (h2 - 16));

        const x = i * (barWidth + gap) + gap / 2;
        const yOrig = (h1 - barHeightOrig) / 2;
        const yClone = (h2 - barHeightClone) / 2;

        // Draw Original Bar (Cyan Glow)
        const gradOrig = ctxOrig.createLinearGradient(0, yOrig, 0, yOrig + barHeightOrig);
        if (currentTarget === 'original' && isPlaying) {
          gradOrig.addColorStop(0, '#38bdf8');
          gradOrig.addColorStop(1, '#06b6d4');
        } else {
          gradOrig.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
          gradOrig.addColorStop(1, 'rgba(6, 182, 212, 0.2)');
        }
        ctxOrig.fillStyle = gradOrig;
        roundRect(ctxOrig, x, yOrig, barWidth, barHeightOrig, 4);

        // Draw Clone Bar (Neon Violet Glow)
        const gradClone = ctxClone.createLinearGradient(0, yClone, 0, yClone + barHeightClone);
        if (currentTarget === 'clone' && isPlaying) {
          gradClone.addColorStop(0, '#e879f9');
          gradClone.addColorStop(1, '#a855f7');
        } else {
          gradClone.addColorStop(0, 'rgba(232, 121, 249, 0.4)');
          gradClone.addColorStop(1, 'rgba(168, 85, 247, 0.2)');
        }
        ctxClone.fillStyle = gradClone;
        roundRect(ctxClone, x, yClone, barWidth, barHeightClone, 4);
      }

      requestAnimationFrame(renderVisualizer);
    }

    renderVisualizer();
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }

  // Handle High-DPI canvas crispness
  function setupHiDPI(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 100 * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', () => {
    // Canvas adapts smoothly
  });

  // Boot up
  loadPreset(1);
  initVisualizers();
});
