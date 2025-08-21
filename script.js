// 
// 𒐏𒆸𐏓1𒁇𒌨
// 𒐏𒋻𒌨𒈦 𒇲𒋻𒑣𒇲𒋻𒁀𒆸𒈦𒋻𒐖 𒐕 𒆸𒁀𐎣𒑚𒐏𒐕𐎣𒐕𐏓𒐕𒇲𒆸𐎏𒋻𒐖 𒋝𒆸𒐏𒇬𒆸𒁓𒐕𒐖𒆸𐎠 𒐏𒆸𐏓1𒁇𒌨
// 
// сайт разработан и обфусифицирован господином soc1ly
// 2 0 2 5
// 
let hasUserInteracted = false;
document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');
  const startText = document.getElementById('start-text');
  const profileName = document.getElementById('profile-name');
  const profileBio = document.getElementById('profile-bio');
  const visitorCount = document.getElementById('visitor-count');
  const backgroundMusic = document.getElementById('background-music');
  const profileBlock = document.getElementById('profile-block');
  const skillsBlock = document.getElementById('skills-block');
  const pythonBar = document.getElementById('python-bar');
  const cppBar = document.getElementById('cpp-bar');
  const csharpBar = document.getElementById('csharp-bar');
  const resultsHint = document.getElementById('results-hint');
  const profilePicture = document.querySelector('.profile-picture');
  const profileContainer = document.querySelector('.profile-container');
  const socialIcons = document.querySelectorAll('.social-icon');
  const badges = document.querySelectorAll('.badge');

  backgroundMusic.volume = 0.08;
  backgroundMusic.loop = true;

  const startMessage = "кликни пж :)))";
  let startTextContent = '';
  let startIndex = 0;
  let startCursorVisible = true;

  function typeWriterStart() {
    if (startIndex < startMessage.length) {
      startTextContent = startMessage.slice(0, startIndex + 1);
      startIndex++;
    }
    startText.textContent = startTextContent + (startCursorVisible ? '|' : ' ');
    setTimeout(typeWriterStart, 100);
  }

  setInterval(() => {
    startCursorVisible = !startCursorVisible;
    startText.textContent = startTextContent + (startCursorVisible ? '|' : ' ');
  }, 500);

function initializeVisitorCounter() {
  let totalVisitors = localStorage.getItem('totalVisitorCount');

  if (!totalVisitors) {
    totalVisitors = 999;
  } else {
    totalVisitors = parseInt(totalVisitors);
  }

  totalVisitors++;
  localStorage.setItem('totalVisitorCount', totalVisitors);

  visitorCount.textContent = totalVisitors.toLocaleString();
}

  initializeVisitorCounter();

  function startExperience() {
    if (!hasUserInteracted) {
      hasUserInteracted = true;
      if (backgroundMusic.paused) {
        backgroundMusic.play().catch(err => console.warn("Audio play error:", err));
      }
    }
    startScreen.classList.add('hidden');
    profileBlock.classList.remove('hidden');
    gsap.fromTo(profileBlock,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', onComplete: () => {
        profileBlock.classList.add('profile-appear');
        profileContainer.classList.add('orbit');
      }}
    );
    typeWriterName();
    typeWriterBio();
  }

  startScreen.addEventListener('click', () => {
    startExperience();
  });

  startScreen.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startExperience();
  });

  const name = "soc1ly";
  let nameText = '';
  let nameIndex = 0;
  let isNameDeleting = false;
  let nameCursorVisible = true;

  function typeWriterName() {
    if (!isNameDeleting && nameIndex < name.length) {
      nameText = name.slice(0, nameIndex + 1);
      nameIndex++;
    } else if (isNameDeleting && nameIndex > 0) {
      nameText = name.slice(0, nameIndex - 1);
      nameIndex--;
    } else if (nameIndex === name.length) {
      isNameDeleting = true;
      setTimeout(typeWriterName, 10000);
      return;
    } else if (nameIndex === 0) {
      isNameDeleting = false;
    }
    profileName.textContent = nameText + (nameCursorVisible ? '|' : ' ');
    if (Math.random() < 0.1) {
      profileName.classList.add('glitch');
      setTimeout(() => profileName.classList.remove('glitch'), 200);
    }
    setTimeout(typeWriterName, isNameDeleting ? 150 : 300);
  }

  setInterval(() => {
    nameCursorVisible = !nameCursorVisible;
    profileName.textContent = nameText + (nameCursorVisible ? '|' : ' ');
  }, 500);

  const bioMessages = [
    "java developer",
    "python developer",
    "ahk developer",
    "js developer"
  ];
  let bioText = '';
  let bioIndex = 0;
  let bioMessageIndex = 0;
  let isBioDeleting = false;
  let bioCursorVisible = true;

  function typeWriterBio() {
    if (!isBioDeleting && bioIndex < bioMessages[bioMessageIndex].length) {
      bioText = bioMessages[bioMessageIndex].slice(0, bioIndex + 1);
      bioIndex++;
    } else if (isBioDeleting && bioIndex > 0) {
      bioText = bioMessages[bioMessageIndex].slice(0, bioIndex - 1);
      bioIndex--;
    } else if (bioIndex === bioMessages[bioMessageIndex].length) {
      isBioDeleting = true;
      setTimeout(typeWriterBio, 2000);
      return;
    } else if (bioIndex === 0 && isBioDeleting) {
      isBioDeleting = false;
      bioMessageIndex = (bioMessageIndex + 1) % bioMessages.length;
    }
    profileBio.textContent = bioText + (bioCursorVisible ? '|' : ' ');
    if (Math.random() < 0.1) {
      profileBio.classList.add('glitch');
      setTimeout(() => profileBio.classList.remove('glitch'), 200);
    }
    setTimeout(typeWriterBio, isBioDeleting ? 75 : 150);
  }

  setInterval(() => {
    bioCursorVisible = !bioCursorVisible;
    profileBio.textContent = bioText + (bioCursorVisible ? '|' : ' ');
  }, 500);

  profilePicture.addEventListener('click', () => {
    gsap.to(profilePicture, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut'
    });
  });

  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        scale: 1.2,
        duration: 0.2
      });
    });
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        duration: 0.2
      });
    });
  });

  badges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      gsap.to(badge, {
        rotation: 15,
        duration: 0.3
      });
    });
    badge.addEventListener('mouseleave', () => {
      gsap.to(badge, {
        rotation: 0,
        duration: 0.3
      });
    });
  });

  const maxRotation = 15;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  function onMouseMove(e) {
    const rect = profileBlock.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetRotationY = ((mouseX - centerX) / centerX) * maxRotation;
    targetRotationX = -((mouseY - centerY) / centerY) * maxRotation;
  }

  function onMouseLeave() {
    targetRotationX = 0;
    targetRotationY = 0;
  }

  function animateRotation() {
    currentRotationX = lerp(currentRotationX, targetRotationX, 0.1);
    currentRotationY = lerp(currentRotationY, targetRotationY, 0.1);

    gsap.set(profileBlock, {
      rotationX: currentRotationX,
      rotationY: currentRotationY,
      transformPerspective: 600,
      transformOrigin: 'center',
      transformStyle: 'preserve-3d',
    });

    requestAnimationFrame(animateRotation);
  }

  profileBlock.addEventListener('mousemove', onMouseMove);
  profileBlock.addEventListener('mouseleave', onMouseLeave);

  animateRotation();

  typeWriterStart();
});


