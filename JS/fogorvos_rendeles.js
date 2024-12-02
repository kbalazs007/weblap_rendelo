document.getElementById("osszeg").addEventListener("click", osszegzo);
document.getElementById("elkuld").addEventListener("click", osszegzo);

function osszegzo(){
    let ertek=0;
    if (document.getElementById("kezeles_01").checked) ertek=ertek+20000;
    if (document.getElementById("kezeles_02").checked) ertek=ertek+23000;
    if (document.getElementById("kezeles_03").checked) ertek=ertek+32000;
    if (document.getElementById("kezeles_04").checked) ertek=ertek+73000;
    if (document.getElementById("kezeles_05").checked) ertek=ertek+263000;
    if (document.getElementById("kezeles_06").checked) ertek=ertek+13000;
    if (document.getElementById("kezeles_07").checked) ertek=ertek+41000;
    document.getElementById("eredmeny").value=ertek;
}