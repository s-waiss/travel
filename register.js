let rgForm = document.querySelector('#travel-reg')
let rgInputs = rgForm.querySelectorAll('input')
let rgbth = rgForm.querySelector('button')

//length
rgbth.onclick = ev => {
  for (let i =0; i<rgInputs.length; i++) {
    const v = rgInputs[i].value;
    if (!v){
      console.error('some inputs r missing');
      return;
    }
  }


let name = rgInputs[0].value
let pid = rgInputs[1].value
let tid = rgInputs[2].value
let count = rgInputs[3].value

Customer.addNewCustomer(new Customer(name,pid,tid,count))

rgInputs.forEach(i => i.value = '')

}
