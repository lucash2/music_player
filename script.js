let songimg = document.getElementById("songimg");
let music = document.getElementById("song");
let songname = document.getElementById("songname");
let songsubname = document.getElementById("songsubname");

var nowplaying = 0;

let playlist = [
  {
    name: "General Chat",
    subname: "Lofi Fruits Music, Chill Fruits Music",
    img: "assets/General Chat.png",
    song: "assets/General Chat.mp3",
  },
  {
    name: "Sudoku",
    subname: "Lofi Fruits Music, Chill Fruits Music",
    img: "assets/Sudoku.png",
    song: "assets/Sudoku.mp3",
  },
  {
    name: "Stereo Hearts",
    subname: "Lofi Fruits Music, Chill Fruits Music",
    img: "assets/Stereo Hearts.png",
    song: "assets/Stereo Hearts.mp3",
  },
];

// let namesrc = playlist.map((playlist) => playlist.name);
// let subnamesrc = playlist.map((playlist) => playlist.subname);
// let imgsrc = playlist.map((playlist) => playlist.img);
// let songsrc = playlist.map((playlist) => playlist.song);

//Controles do player
var start = document.getElementById("playid");
var paused = document.getElementById("pauseid");

function backsong() {
  nowplaying--;
  music.setAttribute("src", playlist[nowplaying].song);
  music.addEventListener("loadeddata", () => {
    songname.textContent = playlist[nowplaying].name;
    songsubname.textContent = playlist[nowplaying].subname;
    songimg.src = playlist[nowplaying].img;
  });
}

function backwardaudio() {
  music.currentTime -= 15;
}

function playaudio() {
  music.play();
  start.style.display = "none";
  paused.style.display = "initial";
}

function pauseaudio() {
  music.pause();
  start.style.display = "initial";
  paused.style.display = "none";
}

function forwardaudio() {
   music.currentTime += 15;
}

function nextsong() {
  if (nowplaying >= 2) {
    nowplaying = 0;
  } else {
    nowplaying = 1 + nowplaying;
  }
}

console.log(nowplaying);

// Barra de progresso da musica atual
var progressed = document.getElementById("progressed");

song.ontimeupdate = function (e) {
  progressed.style.width =
    Math.floor((song.currentTime * 100) / song.duration) + "%";
};

// songimg.src = imgsrc[nowplaying];
// song.src = songsrc[nowplaying];
// songname.innerHTML = namesrc[nowplaying];
// songsubname.innerHTML = subnamesrc[nowplaying];
