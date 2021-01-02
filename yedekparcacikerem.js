//1. Dizideki Parca isimlerini büyük harflere cevirme//
let yedekParca = ["karburator12", "motorv8", "sanziman456", "kaput2887"];
let buyukYedekParca = yedekParca.map(function (piece) {
  return piece.toUpperCase();
})
console.log("1. Arac Parcalari Buyuk harfe cevrildi" + "  " + buyukYedekParca);

//2. Dizideki Parca isimlerinden sayilari cikarma.//
function dizidekiRakamlariKaldirma(){
  let rakamlar =/[^\D\s]/g;
  let rakamlariKaldir=' ';
      for(let index = 0; index < yedekParca.length; index++){               
          rakamlariKaldir+=yedekParca[index]+",";            
         }
    
  let rakamsiz = rakamlariKaldir.replace(rakamlar,' ');
      return rakamsiz;
  }
console.log("2. Arac parcalarindaki rakamlar kaldirildi" + "   " + dizidekiRakamlariKaldirma());


//3. Dizideki Parca isimlerini tersine cevirme.//
function dizidekiElemanlariTerstenYazdirma(){
     let tersDizi=" "
   for(let index=0; index<yedekParca.length; index++){
       for(let j=yedekParca[index].length-1; j>=0; j--){
             tersDizi+=yedekParca[index].charAt(j);
       }
        tersDizi+=","+" ";
       }
  return tersDizi;
}
console.log("3. Arac parcalari tersten yazildi" + "  " +dizidekiElemanlariTerstenYazdirma());
//4. Dizinin her elemaninin basina KEREMAG_ ekleme.//
function diziElemanlarinaEkleme() {
    let diziyeEklemeYap = [];

    for (let index = 0; index < yedekParca.length; index++) {
        diziyeEklemeYap.push("KEREMAG_" + yedekParca[index]);
    }
    return diziyeEklemeYap;
  }
console.log("4. Arac parcalari basina KEREMAG_ eki getirildi" + "  " +diziElemanlarinaEkleme());

//5. Her parcanin sonuna parcanin sisteme girildigi tarih ve saat ekleme.//
function diziElemanlarinaTarihSaatEkle(){
  let tarihSaatEkle=" ";
  let zaman=new Date();
  let yil=zaman.getFullYear();
  let ay=zaman.getMonth();
  let gun=zaman.getDay();
  let saat=zaman.getHours();
  let dakika=zaman.getMinutes();
  
 for(let index=0; index<yedekParca.length; index++){
     tarihSaatEkle+= yedekParca[index]+" "+yil+"/"+ay+"/"+gun+" "+saat+":"+dakika;
     tarihSaatEkle+=","+" ";
 }
  return tarihSaatEkle;
}
console.log("5. Arac parcalarina tarih ve saat eklendi" + "  " + diziElemanlarinaTarihSaatEkle());