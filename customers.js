let Customer = function Customer(name,personlId, travelId, passengers){
  this.Id = db.regList.length == 0 ? 1 :
    db.regList[ db.regList.length -1 ].Id + 1;

    this.Name= name;
    this.PersonlId= personlId;
    this.Travelid= travelId;
    this.passengers= passengers;


    let travel =db.travelList.find(t => t.Id == this.Travelid)

    let travelTotal = travel.getTotalPrice(this.passengers)

    this.buildRegListHtml = function buildRegListHtml(){
      return`<div class="reg-item item" >
              <div class= "c-Id">${this.Id}</div>
              <div class= "c-Name">${this.Name}</div>
              <div class= "c-PersonlId">${this.PersonlId}</div>
              <div class= "c-Travelid">${travel.Name}</div>
              <div class= "c-passengers">${this.passengers}</div>
              <div class= "c-total">${travelTotal}</div>
              </div>`;
    }

}

Customer.addNewCustomer = function(c){
  db.regList.push(c)
  let h = c.buildRegListHtml()
  regListElm.innerHTML += h;
}


db.regList.push(new Customer('gali', 123, 2, 5))
db.regList.push(new Customer('david',567, 4, 2))
db.regList.push(new Customer('tali', 765, 1, 6))
db.regList.push(new Customer('esty', 345, 2, 7))


let regListElm = document.getElementById('reg-list')
for (let i = 0; i < db.regList.length; i++) {
    let _c = db.regList[i];
    let h = _c.buildRegListHtml()
    regListElm.innerHTML += h;
}
