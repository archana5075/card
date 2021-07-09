async function fetchPodcasts() {
  const response = await fetch("cards.json");
  let cards = await response.json();

  cards["cards"].map((card) => {
    document.querySelector(".container").innerHTML += `
      <div class="card">
        <div class="card-header">
            <div class="div-photo">
                <img src="${card.profileImg}" />
            </div> 
        </div>  
        <div class="card-address">
           <div class="div-name">
              <h1><span class="name">${card.name}</span> <span class="age">${card.age}</span></h1> 
           </div>
           <div class="div-city"><h2 class="city" >${card.city}</h2></div>
        </div>
        <div class="card-footer">
            <div class="div-small-box">
                <div class="div-number">${card.followersCount}</div>
                <div class="div-text">Followers</div>
            </div>
            <div class="div-small-box">
                <div class="div-number">${card.likesCount}</div>
                <div class="div-text"> Likes</div>
            </div>
            <div class="div-small-box">
                <div class="div-number">${card.photosCount}</div>
                <div class="div-text">Photos</div>
            </div>
        </div>

      </div>  
        `;
  });
}

fetchPodcasts();
