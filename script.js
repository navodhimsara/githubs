const videos = [
    {
      id: "NuHnfVohZ5M",
      title: "Java Introduction & Setup"
    },
    {
      id: "OZcRD9fV7jo",
      title: "Java Variables & Data Types"
    },
    {
      id: "GoXwIVyNvX0",
      title: "Object-Oriented Programming in Java"
    },
    {
      id: "grEKMHGYyns",
      title: "Java for Beginners Full Course"
    },
    {
      id: "grEKMHGYyns",
      title: "Java for Beginners Full Course"
    },
    {
      id: "grEKMHGYyns",
      title: "Java for Beginners Full Course"
    },
    {
      id: "grEKMHGYyns",
      title: "Java for Beginners Full Course"
    }
  ];
  
  const videoList = document.getElementById("videoList");
  const mainPlayer = document.getElementById("mainPlayer");
  
  videos.forEach(video => {
    const item = document.createElement("div");
    item.className = "video-item";
    item.innerHTML = `
      <img src="https://img.youtube.com/vi/${video.id}/0.jpg" alt="${video.title}">
      <div class="video-title">${video.title}</div>
    `;
    item.addEventListener("click", () => {
      mainPlayer.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&rel=0`;
    });
    videoList.appendChild(item);
  });
  
