// if = eger
// else = değilse
// else if = değilse eğer
/* if (kosul/kosulalar){
ifade/ifadeler
//switch = kosul başlatır
//case =  kosula konturolu
//break = sonlandırı
//defult = koşul olumsuzlukları sonucu
// ?: = terny operatorü
//kosul ? ifade1 : ifade2 doğru ise ifade 1 yanlış ise ifade2 calıştırılur
// try = hata oluşturabilcek kodlar icin olur
// catch = hata olursa calıştırılcak kodlar icin kulalnılır
// finally = herşeye rağmen calısır
// throw = hata oluşturuabilcek kodların istisnai duruları icin kullanılır
// while(kosul){calışacak kodlar}
//do
//fonsiyonlar function 


}else if (){

}else(){

}

var deger1 = 5;
var deger2 = 10;



if (deger1 >deger2){
    document.write("helal")
}else if(deger1 == deger2){
    document.write("selam")
}else{
    alert("yanlıs")
}
*/
/*
var saat = 13;

if (saat == 10){
    document.write("saat 10")
}else if(saat == 11 || saat == 12){
    document.write("oh yeah")
}else{
    document.write("hata")
}
*/

/*

switch(kosul){
    case koşul kontrolu:
    ......
    break

    default:
    .......


}





var metin = "volkan alaken javascript eğitim seti."
var sonuc = metin.length;


//document.write(sonuc);



switch (sonuc){ //38
    case 38:
        document.write("selam canım ne yapıyopsun"+""+sonuc);
        break;
    default:
        document.write("leght değerden yüksek");
        break;
}


var kosul = ("selam==selam") ? "0" : "1"
document.write(kosul)






try{
    var isim = "devran";
    throw("değişken tanımlama hatası soyisim adındaki değişken yok"); //eger throw olamasa olan değişkeni yazar eger var ise olan değişkenide yazmaz direk hata mesajımızı dodder
    document.write(isim+"<br/>");
    document.write(soyad);
}
catch(err) { // err icersiine gelen hata yazısını ekran yazdırabilrisinz
    document.write("hata var ")
    document.write(err)
}
finally {
    alert("selam canım ne yapıyosun")
}






var metin = 1;

while (metin <= 1000){
    document.write("sayınız: "+metin+"<br/>");

    metin++;

}




var sayı = 1;
do{
    document.write("selam");
    sayı++;
}while (sayı>10){
    document.write("oha amk")
} // donun kullanılma amacı en az yanlış olasa bile bir kez dondürür while




var liste = [10, 100, 250, 30, 1, 45];
liste.sort();
document.write(liste)

var sayı = 20;
var sayı1 = 20;


for(var deger = 1; deger<=50;deger++){ // for dongüsünde dışarıdan değer almaz
    document.write(deger)

}






for(i in list){
    try:
        if(list[i] == "selam"){
            document.write("selma canım selam ");
        }else if (list[i] == "adam"){
            document.write("adam aq");
    }
    catch(err){
            document.write(err);
            document.write("listede isim yok")
    }
}

list = ["selam","ben","adam","kes","oha"]

for(i in list){

    if(list[i] == "selam"){
        document.write("selma canım selam ");
    }else if (list[i] == "adam"){
        document.write("adam aq");
    }else if (list[i] == "oha"){
        document.write("yok oyle bişey")
        break
    }
}
 */
var bas = 50;
var say = 0;
while (bas <=400){

    if (bas<=100){
        document.write("100 altı"+"<br/>")
    }else if (bas<=200){
        document.write("200 altı"+"<br/>")
    }else if (bas<=300){
        document.write("300 altı"+"<br/>")
    }else if (bas=400){
        document.write("dururuluyor 400 altı"+"<br/>")
        break
    }
    bas++
    say++
    document.write(say+"<br/>")
}


