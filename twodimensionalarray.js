const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

//1. Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi//
//Matematik Dersinin ortalamasi//
function matematikOrtalama() {
    let ortalama = 0;
    for (let index = 0; index < notes.length; index++) {
        ortalama = ortalama + notes[index][1];
    }
    return ortalama / notes.length;
}
console.log("Matematik dersi ortalamasi = " + "  " + matematikOrtalama());
//Almanca dersinin ortalamasini alan fonksiyon
function almancaOrtalama() {
    let ortalama = 0;
    for (let index = 0; index < notes.length; index++) {
        ortalama = ortalama + notes[index][2];
    }
    return ortalama / notes.length;
}
console.log("Almanca dersi ortalamasi = "+ "  " + almancaOrtalama());
//Ingilizce dersinin ortalamasini alan fonksiyon
function ingilizceOrtalama() {
    let ortalama = 0;
    for (let index = 0; index < notes.length; index++) {
        ortalama = ortalama + notes[index][3];
    }
    return ortalama / notes.length;
}
console.log("Ingilizce dersi ortalamasi = "+ "  " + ingilizceOrtalama());
//Cografya dersinin ortalamasini alan fonksiyon
function cografyaOrtalama() {
    let ortalama = 0;
    for (let index = 0; index < notes.length; index++) {
        ortalama = ortalama + notes[index][4];
    }
    return ortalama / notes.length;
}
console.log("Cografya dersi ortalamasi = "+ "  " + cografyaOrtalama());

//2.Herhangi bir dersden 70 puan üstü alanlarin listesi//
function dersten70UstuAlanlar() {
    let ogrenci = []; 
    let tekrarsizOgrenci=[]; 
    for (let index = 0; index < notes.length; index++) //Herhangibir dersten 70 ustu alan tum ogrencileri listeler. //
    {
        for (let j = 1; j < notes.length; j++) {
            if (notes[index][j] > 70) {
                ogrenci.push(notes[index][0]);
            }
        }
    }
     for (let str of ogrenci) //tekrarlanan ogrenci listeden cikarma//
     {
        if (!tekrarsizOgrenci.includes(str)) {
          tekrarsizOgrenci.push(str);
        }
        
      } return tekrarsizOgrenci;
 }

 console.log("Bu ogrenciler Derslerden 70 Ustu puan aldilar :" + "  " + dersten70UstuAlanlar());

 //3.Tüm derslerden ortalamanin üstünde olanlarin listesi//
 function ortamaNotuGecenler(){
     let ortalamayiGecenler=[];
     for (let index = 0; index < notes.length; index++) {

        if(notes[index][1]>matematikOrtalama()){
            ortalamayiGecenler.push(notes[index][0]);
            continue;
        } else 
        if(notes[index][1]>cografyaOrtalama()){
            ortalamayiGecenler.push(notes[index][0]);
            continue;
        }
        if(notes[index][1]>ingilizceOrtalama()){
            ortalamayiGecenler.push(notes[index][0]);
            continue;
        }
        if(notes[index][1]>almancaOrtalama()){
            ortalamayiGecenler.push(notes[index][0]);
            continue;
        }
    }
        return ortalamayiGecenler;
    }
    
console.log("Derslerde Ortalamayi Gecen Ogrenciler: " + "  " + ortamaNotuGecenler());

//4.Sinif hangi dersde en iyi not ortalamasina sahip//



//5.Sinif hangi dersde en iyi not ortalamasina sahip//


