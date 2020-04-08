console.log('clint side js');

let submit = document.querySelector('.search')
let msgOne = document.querySelector('.casses')
let msgTwo = document.querySelector('.recovered')
let msgThree = document.querySelector('.death')
let input = document.querySelector('.input')
let county = document.querySelector('.nm')



fetch(`https://covid19.mathdro.id/api/countries/china/`).then((respond)=>{
    respond.json().then((data)=>{
        if(data.error){
            msgOne.textContent = data.error.message
        }else {
          county.textContent = `Country: china`
            msgOne.textContent = `Confirmed: ${new Intl.NumberFormat().format(data.confirmed.value)}`;
            msgTwo.textContent = `Recovered: ${new Intl.NumberFormat().format(data.recovered.value)}`;
            msgThree.textContent = `Deaths: ${new Intl.NumberFormat().format(data.deaths.value)}`;
       
        }
    })
})

document.addEventListener('keypress' , (e) => {

if(e.key === 'Enter')
{
    e.preventDefault()
    msgOne.textContent = 'loading...'
    msgTwo.textContent = '';
    msgThree.textContent = '';
    county.textContent = '';
    
    fetch(`https://covid19.mathdro.id/api/countries/${input.value}`).then((respond)=>{
        respond.json().then((data)=>{
            if(data.error){
                msgOne.textContent = data.error.message
            }else {
              county.textContent = `Country: ${input.value}`
                msgOne.textContent = `Confirmed: ${new Intl.NumberFormat().format(data.confirmed.value)}`;
                msgTwo.textContent = `Recovered: ${new Intl.NumberFormat().format(data.recovered.value)}`;
                msgThree.textContent = `Deaths: ${new Intl.NumberFormat().format(data.deaths.value)}`;
                    setTimeout(() => {
                        input.value = ''

                    }, 1);

               
            }
        })
    })
  
}

})
