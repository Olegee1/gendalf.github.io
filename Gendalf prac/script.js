window.onload = function() {

	var video = document.getElementById("video");

	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");


	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			video.play();

			playButton.innerHTML = "Pause";
		} else {
			video.pause();

			playButton.innerHTML = "Play";
		}
	});


	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;

			muteButton.innerHTML = "Unmute";
		} else {
			video.muted = false;

			muteButton.innerHTML = "Mute";
		}
	});


	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); 
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); 
		}
	});


	seekBar.addEventListener("change", function() {
		var time = video.duration * (seekBar.value / 100);

		video.currentTime = time;
	});

	
	video.addEventListener("timeupdate", function() {
		var value = (100 / video.duration) * video.currentTime;

		seekBar.value = value;
	});

	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	volumeBar.addEventListener("change", function() {
		video.volume = volumeBar.value;
	});
}


function previewFile() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files || !fileInput.files[0]) return;
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
        const img = document.getElementById('filePreview');
        img.src = reader.result;
        img.style.display = 'block';
        document.querySelector('button').removeAttribute('disabled');
    };
    
    reader.readAsDataURL(file);
}

function submitForm() {
    console.log("Файл успешно прикреплен");
}






const postActionsControllers = document.querySelectorAll(
	".post-actions-controller"
  );
  
  postActionsControllers.forEach((btn) => {
	btn.addEventListener("click", () => {
	  const targetId = btn.getAttribute("data-target");
	  const postActionsContent = document.getElementById(targetId);
  
	  if (postActionsContent) {
		const isVisible = postActionsContent.getAttribute("data-visible");
  
		if (isVisible === "false") {
		  postActionsContent.setAttribute("data-visible", "true");
		  postActionsContent.setAttribute("aria-hidden", "false");
		  btn.setAttribute("aria-expanded", "true");
		} else {
		  postActionsContent.setAttribute("data-visible", "false");
		  postActionsContent.setAttribute("aria-hidden", "true");
		  btn.setAttribute("aria-expanded", "false");
		}
	  }
	});
  });
  
  function handleClickOutside(event) {
	postActionsControllers.forEach((btn) => {
	  const targetId = btn.getAttribute("data-target");
	  const postActionsContent = document.getElementById(targetId);
  
	  if (postActionsContent && postActionsContent.getAttribute("data-visible") === "true") {
		if (!postActionsContent.contains(event.target) && event.target !== btn) {
		  postActionsContent.setAttribute("data-visible", "false");
		  postActionsContent.setAttribute("aria-hidden", "true");
		  btn.setAttribute("aria-expanded", "false");
		}
	  }
	});
  }
  
  document.addEventListener("click", handleClickOutside);
  
  postActionsControllers.forEach((btn) => {
	btn.addEventListener("click", (event) => {
	  event.stopPropagation();
	});
  });
  
  const likeBtns = document.querySelectorAll(".post-like");
  
  likeBtns.forEach((likeBtn) => {
	likeBtn.addEventListener("click", () => {
	  if (likeBtn.classList.contains("active")) {
		likeBtn.classList.remove("active");
	  } else {
		likeBtn.classList.add("active");
	  }
	});
  });
  
  // Swiper
  
  var swiper = new Swiper(".swiper", {
	grabCursor: true,
	speed: 400,
	mousewheel: {
	  invert: false,
	},
	scrollbar: {
	  el: ".swiper-scrollbar",
	  draggable: true,
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	breakpoints: {
	  900: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  1200: {
		slidesPerView: 3,
		spaceBetween: 20,
	  },
	},
  });











