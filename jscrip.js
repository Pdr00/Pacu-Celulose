function alf(){
    var list = document.querySelector('.troca')

    if (list.style.display === 'none'){

        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }
}

function pacu(){
    location.href = 'index.html'
}

function palito(){
    location.href = 'senac-canva2.html'
}

function pahand(){
    location.href = 'senac-canva3.html'
}


function btnr(){
    location.reload()
}

function gasta(){
    var compre = document.querySelector('.paper')

    compre.style.display = 'block'
}

function suma(){
    var compre = document.querySelector('.paper')

    compre.style.display = 'none'
}

function comprou(){
    alert('Compra efetuada com sucesso!')
}

function carrinho(){
    var numero = document.querySelector('.car-num')
    numero.style.display = 'block'
    
    alert('Compra adicionada ao seu carrinho de compras!')    
}

function opa(){
    var carr = document.querySelector('.sai')

    carr.style.display = 'block'
}

function sumaC(){
    var carrinho = document.querySelector('.sai')

    carrinho.style.display = 'none'
}

function semNum(){
    var num = document.querySelector('.car-num')

    num.style.display = 'none'
}
