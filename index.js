const input = document.getElementById('inp')
const btn = document.querySelector('button')
const p = document.querySelector('p')
const select = document.getElementById('zorluk')

btn.disabled = true
input.disabled = true
btn.textContent = 'Bir zorluk seç!'

let kacKere = 0
let random;

select.addEventListener('change', (e)=>{
    let selectValue = e.target.value
    random = Math.round(Math.random() * selectValue)
    if(random != undefined){
        btn.disabled = false
        input.disabled = false
        btn.textContent = 'Tahmin Et!'
    }
    console.log(random);
})

input.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13){
        tahminEt()
    }
})

function tahminEt(){
    let value = Number(input.value)
    kacKere++
    let kazandim = false

    if(kacKere < 4){
        if(value == random){
            p.textContent = `Tebrikler bildiniz. ${kacKere} denediniz.`
            p.style.color = 'green'
            btn.disabled = true
            input.disabled = true
            kazandim = true
        }else if(value < random){
            p.textContent = `Daha büyük bir sayı girin. ${4 - kacKere - 1} hakkınız kaldı`
            p.style.color = 'red'
            input.value = ""
        }else if(value > random){
            p.textContent = `Daha küçük bir sayı girin. ${4 - kacKere - 1} hakkınız kaldı`
            p.style.color = 'red'
            input.value = ""
        }else{
            p.textContent = "Hatalı bir değer girdiniz"
            p.style.color = "red"
            input.value = ""
        }
    }
    if(kacKere == 3 && kazandim == false){
        p.textContent = `Hakkınız bitti. Bulmanız gereken sayı ${random}`
        p.style.color = "red"
        btn.disabled = true
        input.disabled = true
    }
}