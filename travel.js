

let db = {
  travelList:[],
  regList:[]
}

let Travel = function Travel(name, price){
this.Id = db.travelList.length == 0 ? 1 :
  db.travelList[ db.travelList.length -1 ].Id + 1;

  this.Price = price;
  this.Name = name;

  this.getTotalPrice = function getTotalPrice(nomOfReg){
    return nomOfReg * this.Price
  }
}

Travel.getTravelsCount = function getTravelsCount(){
  return db.travelList.length;
}

Travel.buildTravelHtml = function buildTravelHtml(travelObject){
  return `<div class="travel-item item" travel-Id="${travelObject.Id}">
          <div class= "travel-Id">${travelObject.Id}</div>
          <div class= "travel-name">${travelObject.Name}</div>
          <div class= "travel-price">${travelObject.Price}</div>
          </div>`;
  }


  db.travelList.push(new Travel('holand', 200))
  db.travelList.push(new Travel('brazil', 100))
  db.travelList.push(new Travel('prag', 300))
  db.travelList.push(new Travel('kanada', 500))
  db.travelList.push(new Travel('usa', 1000))
  db.travelList.push(new Travel('london', 150))
  db.travelList.push(new Travel('zirich', 400))

//  travelList.forEach()

let travelListElm = document.getElementById('travel-list')
for (let i = 0; i < db.travelList.length; i++) {
    let _t = db.travelList[i];
    let h = Travel.buildTravelHtml(_t)
    travelListElm.innerHTML += h;
}
