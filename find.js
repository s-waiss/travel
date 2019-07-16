

let ctx = document.querySelector('#travel-lookup')
ctx.querySelector('button').onclick = ev =>{
  let username = ctx.querySelector('input').value

  let results = db.regList.filter(r => r.Name == username);

  let resultsElm = ctx.querySelector('.results')
  resultsElm.innerHTML = ''

  for (let i = 0; i<results.length; i++ ) {
    let _c =results[i];
    let h = _c.buildRegListHtml()
    resultsElm.innerHTML += h;
  }
}
