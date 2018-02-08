function ItunesController() {
  var itunesService = new ItunesService();
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  var songContainerElem = document.getElementById('songs')

  function draw(songs) {
    // SONGS IS AN ARRAY OF OBJECTS
    var template = '';
    for (var i = 0; i < songs.length; i++) {
      var aSong = songs[i];
      template += `
      <div class="col-sm-3 col-md-3">
        <div class="card card-outline-info" id="'+${i}+'Panel">
          <div class="card-block">
            <div class="card-title">
              <h5 class="card-text"><strong>Title: ${aSong.title}</strong></h5>
            </div>
            <img src="${aSong.albumArt}" class="album-art">
            <audio src="${aSong.preview}" controls></audio>
            <p class="card-text">Artist: ${aSong.artist}</p>
            <p class="card-text">Album: ${aSong.collection}</p>
            <p class="card-text">Price: $${aSong.price}</p>
          </div>
        </div>
      </div>
      `
    }
    songContainerElem.innerHTML = template;
  }
}


            // 

/* <div class="card-deck">
<div class="card">
    <img class="card-img-top" src="${aSong.albumArt}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Title: ${aSong.name}</h5>
        <p class="card-text">Album: ${aSong.collection}</p>
        <p>Artist: ${aSong.artist}</p>
        <p>Price: $${aSong.price}<p>
        <p class="card-text">
            <small class="text-muted"><audio src="${aSong.preview}" controls></audio></small>
        </p>
    </div>
</div>
</div> */

/* 
<div class="row justify-content-center">
  <div class="card" style="width: 50rem;">        
    <div class="card-body">
      <div class="div-col div-col-left">
        <h5>Title: ${aSong.title}</h5>
        <p>Album: ${aSong.collection}</p>
        <p>Artist: ${aSong.artist}</p>
        <p>Price: $${aSong.price}<p>
      </div>
      <div class="div-col div-col-right">
        <img class="album-art" src="${aSong.albumArt}" alt="album art">
        <audio src="${aSong.preview}" controls></audio>
      </div>
    </div>
  </div>
</div> */

// This code produces basic rows
// <div class="row justify-content-center">
// <div class="card" style="width: 50rem;">        
//   <div class="card-body">
//     <h5>Title: ${aSong.title}</h5>
//     <p>Album: ${aSong.collection}</p>
//     <p>Artist: ${aSong.artist}</p>
//     <p>Price: $${aSong.price}<p>
//     <audio src="${aSong.preview}" controls></audio>
//     <img class="album-art" src="${aSong.albumArt}" alt="album art">
//   </div>
// </div>
// </div>