document.getElementById("megjelenit1").addEventListener("click", megjelenites1)
document.getElementById("elrejt1").addEventListener("click", elrejtes1)

function megjelenites1(){
    let kep1 = document.getElementById("kepcsere1");
    kep1.src="../Kepek/Orvos_tabla_stat/doktorno_stat_negyzet.png"
    document.getElementById("kepleiras1").innerHTML="Doktornő információi"
}

function elrejtes1(){
    let kep1 = document.getElementById("kepcsere1");
    kep1.src="../Kepek/Orvos/Doktorno_negyzet.jpg"
    document.getElementById("kepleiras1").innerHTML="Doktornő"

}

document.getElementById("megjelenit2").addEventListener("click", megjelenites2)
document.getElementById("elrejt2").addEventListener("click", elrejtes2)

function megjelenites2(){
    let kep2 = document.getElementById("kepcsere2");
    kep2.src="../Kepek/Orvos_tabla_stat/asszisztens_stat_negyzet.png"
    document.getElementById("kepleiras2").innerHTML="Asszisztens információi"

}

function elrejtes2(){
    let kep2 = document.getElementById("kepcsere2");
    kep2.src="../Kepek/Orvos/asszisztens_negyzet.jpg"
    document.getElementById("kepleiras2").innerHTML="Asszisztensnő"

}
