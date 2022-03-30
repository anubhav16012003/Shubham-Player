let All_song = [
    {
      name: "BAS",
      path: "music/JAIMER/1.mp3",
      img: "images/1.jpg",
      singer: "Karan Aujla"
    },
    {
      name: "BLACKIA",
      path: "music/JAIMER/2.mp3",
      img: "images/2.jpg",
      singer: "AP Dhillion"
    },
    {
      name: "Gustakhiyan",
      path: "music/JAIMER/3.mp3",
      img: "images/3.jpg",
      singer: "LANDERS"
    },
    {
        name: "YKWIM",
        path: "music/JAIMER/4.mp3",
        img: "images/4.jpg",
        singer: "Karan Aujla"
    },
    {
      name: "Hummer",
      path: "music/JAIMER/5.mp3",
      img: "images/5.jpg",
      singer: "Nishawn Bhullar"
    },
    {
      name: "Jatt-Flex",
      path: "music/JAIMER/6.mp3",
      img: "images/6.jpg",
      singer: "Amrit Maan"
    },
    {
     name: "Lakk 28 Kudi Da",
     path: "music/JAIMER/7.mp3",
     img: "images/7.jpg",
     singer: "Yo Yo Honey Singh"
    },
    {
     name: "Most Wanted",
     path: "music/JAIMER/8.mp3",
     img: "images/8.jpg",
     singer: "AP Dhillion"
    },
    {
     name: "Na Na Na",
     path: "music/JAIMER/9.mp3",
     img: "images/9.jpg",
     singer: "Karan Aujla"
    },
    {
     name: "SPACESHIP",
     path: "music/JAIMER/10.mp3",
     img: "images/10.jpg",
     singer: "AP Dhillion"
    },
    {
     name: "Wait & Watch",
     path: "music/JAIMER/11.mp3",
     img: "images/11.jpg",
     singer: "Prem Dhillion"
    },
    {
     name: "Without Me",
     path: "music/JAIMER/12.mp3",
     img: "images/12.jpg",
     singer: "Eminem"
    }
 ];
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 