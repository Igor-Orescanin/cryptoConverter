let cryptoDrop = document.querySelector('.crypto');
let currencyAmount = document.querySelector('#currency-input');
let currencyDrop = document.querySelector('.currency');
let sum = document.querySelector('#sum');
let convertBtn = document.querySelector('#convert');

convertBtn.addEventListener('click', async function(e){
    let selectCrypto = cryptoDrop.value;
    let selectCurrency = currencyDrop.value;
    let rate = await fetch(`https://api.cryptonator.com/api/ticker/${selectCrypto}-${selectCurrency}`);
    let x = await rate.json();
    sum.value = x.ticker.price * currencyAmount.value;
})





























// function cryptoEvent(){
//     return new Promise(resolve => {
//         cryptoDrop.addEventListener('change', e => {
//             resolve(e.target.selectedOptions[0].text.toLowerCase());
//         })
//     })
// }

// function currencyEvent(){
//     return new Promise(resolve => {
//         currencyDrop.addEventListener('change', e => {
//             resolve(e.target.selectedOptions[0].text.toLowerCase());
//         })
//     })
// }

// async function getData() {
//     selectCrypto = await cryptoEvent()
//     console.log(selectCrypto);
//     selectCurrency = await currencyEvent()
//     console.log(selectCurrency);
    
// }
// getData()

// convertBtn.addEventListener('click', (e) => {


// })

























// function selectMe (){

//     return new Promise(resolve => {
//         cryptoDrop.addEventListener('change', e => {
//             resolve(e.target.selectedOptions[0].text.toLowerCase());
//         })
//     })

// }

// (async() =>{    
//     selectCrypto = await selectMe()
//     console.log(selectCrypto)
// })()
// console.log(selectCrypto);


























// cryptoDropDown.addEventListener('change',e=>{
//     (async() => {
//         let selectCrypto = await e.target.selectedOptions[0].text
//         console.log(selectCrypto)
//     })()
//     console.log(e.target.selectedOptions[0].text)
//     console.log(selectCrypto)
// })
// console.log(selectCrypto)










// Array.from(cryptoDropDown).forEach(element => {
//     console.log(element.innerHTML);
//     element.addEventListener('click',function(e){
//         console.log(sel.options[sel.selectedIndex].text);
//     })
// })


// let selectCrypto;
// let selectCurrency = 'usd'



// fetch(`https://api.cryptonator.com/api/ticker/${selectCrypto}-${selectCurrency}`)
//     .then(response => response.json())
//     .then(data => console.log(data.ticker.price));





