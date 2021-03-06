// ----------------------------------- ENGINEJS -----------------------------------
//Collect user input data
let receiveData
let increment
// ----------------------------------- DOM VARIABLE DECLARATIONS -----------------------------------
let input = document.querySelector('#input')
let output = document.querySelector('#output')
let selected = document.querySelector('#opt')
let btncode = document.querySelector('#code')
let btndecode = document.querySelector('#decode')
let radioCode = document.querySelector('#radioCodificar')
let radioDecode = document.querySelector('#radioDecodificar')

function encode(){
    //Transforming letters in numbers
    let mensagemArr = receiveData.split('')
    let mensagemArr2 = []
    let mensagemArr3 = []

    for (let i = 0; mensagemArr.length > i; i++){ //Increment || Encode

        if(mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90){
            let cipher = ((mensagemArr[i].charCodeAt()) - 65 + increment) % 26
            mensagemArr2.push(cipher + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122){
            let cipher = ((mensagemArr[i].charCodeAt()) - 97 + increment) % 26
            mensagemArr2.push(cipher + 97)
        } else {
            mensagemArr2.push(mensagemArr[i].charCodeAt())
        }
    }
    //Transforming numbers in letters
    for (let j = 0; mensagemArr2.length > j; j++){
        mensagemArr3.push(String.fromCharCode(mensagemArr2[j])) //String.fromCharCode()
    }

    return mensagemArr3.join('')

}


function decode(){
    //Transforming numbers in letters
    let mensagemArr = receiveData.split('')
    let mensagemArr2 = []
    let mensagemArr3 = []

    
    for (let i = 0; mensagemArr.length > i; i++){ //Increment || Decode

        if(mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90){
            let cipher = ((mensagemArr[i].charCodeAt()) - 65 - increment) % 26
            mensagemArr2.push((cipher < 0 ? cipher + 26:cipher) + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122){
            let cipher = ((mensagemArr[i].charCodeAt()) - 97 - increment) % 26
            mensagemArr2.push((cipher < 0 ? cipher + 26:cipher) + 97)
        } else {
            mensagemArr2.push(mensagemArr[i].charCodeAt())
        }
    }
    
    for (let j = 0; mensagemArr2.length > j; j++){
        mensagemArr3.push(String.fromCharCode(mensagemArr2[j])) //String.fromCharCode()
    }

    return mensagemArr3.join('')
}

//ENCODE BASE64
function encode64(){
    let base64 = btoa(receiveData)

    return base64
}
//DECODE BASE64
function decode64(){
    let base64 = atob(receiveData)

    return base64
}


// ----------------------------------- EVENTS -----------------------------------

opt.addEventListener('click', () => {
    
    if(opt.value == 'cifra'){
        document.querySelector('#incrementBox').style.display = 'block'
        document.querySelector('.selectDiv').style.background = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nova_Roma_Flag.svg/1200px-Nova_Roma_Flag.svg.png) 50%'
    }
    
    else if(opt.value == 'base64'){
    document.querySelector('#incrementBox').style.display = 'none'
    document.querySelector('.selectDiv').style.background = 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFja2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80) 50%'
    }
})


radioCode.addEventListener('click', () => {

    if(radioCode.value == 1){
        btncode.style.display = 'flex'
        btndecode.style.display = 'none'
    }
})

radioDecode.addEventListener('click', () => {

    if(radioDecode.value == 2){
        btndecode.style.display = 'flex'
        btncode.style.display = 'none'
    }
})

btncode.addEventListener('click', () => {
    receiveData = input.value
    let cript = document.querySelector('#radioCodificar')

    if(cript.checked){
        if(selected.value == 'cifra'){
            increment = parseInt(document.querySelector('#incremento').value)
            output.innerText = encode()
    } else if (selected.value == 'base64'){
            output.innerText = encode64()
        }
            
    }
})

btndecode.addEventListener('click', () => {
    receiveData = input.value
    let decript = document.querySelector('#radioDecodificar')

    if(decript.checked){
        if(selected.value == 'cifra'){
            increment = parseInt(document.querySelector('#incremento').value)
            output.innerText = decode()
        } else if (selected.value == 'base64'){
            output.innerText = decode64()
        }
    }
})