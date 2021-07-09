var index = 0;
async function fetchCards(index = 0) {
  const response = await fetch("cards.json");
  let cards = await response.json();

  document.querySelector(".container").innerHTML = `
      <div class="card">
        <div class="card-header">
            <div class="div-photo">
                <img src="${cards["cards"][index].profileImg}" />
            </div> 
        </div>  
        <div class="card-address">
           <div class="div-name">
              <h1><span class="name">${cards["cards"][index].name}</span> <span class="age">${cards["cards"][index].age}</span></h1> 
           </div>
           <div class="div-city"><h2 class="city" >${cards["cards"][index].city}</h2></div>
        </div>
        <div class="card-footer">
            <div class="div-small-box">
                <div class="div-number">${cards["cards"][index].followersCount}</div>
                <div class="div-text">Followers</div>
            </div>
            <div class="div-small-box">
                <div class="div-number">${cards["cards"][index].likesCount}</div>
                <div class="div-text"> Likes</div>
            </div>
            <div class="div-small-box">
                <div class="div-number">${cards["cards"][index].photosCount}</div>
                <div class="div-text">Photos</div>
            </div>
        </div>
       
      </div>
      
        `;

  return cards["cards"];
}
document.getElementById("loadmore").onclick = () => {
  let cardsCount = fetchCards(index);
  cardsCount.then(function (result) {
    fetchCards(index);
    index++;
    //console.log(result.length);
    console.log(index);
    if (index >= result.length) {
      index = 0;
      fetchCards(index);
    }
  });
};

fetchPodcasts(0);
