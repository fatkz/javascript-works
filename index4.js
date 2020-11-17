/*
function fonsiyonismi (parametre){
    document.write("selam")
}*/


/*
fonksiyon isimlendirme kuralları :







function denem(){
    document.write("ilk function")
}
denem()


var dea = function (){
    document.write("selam")
}

document.write(dea());


function dea(){
    var metin1 = "oha";
    var metin2 = "selam";
}


document.write(); //function golobal olandan kapsam alanına veri alan alabilir ama kapsam alanı dışından global alana veri veremez.







function dea(){
    var isim = "devo";
    var soyisim = "selam";
    //return isim,soyisim; // global alana değer veirlebilyior  2 tane değer alamaz
    var coklu = [isim,soyisim];
    return coklu;
}


var sonuc = dea();

document.write(sonuc);




var renk = "mavi";

if(renk == "selam"){
    function text(){
        document.write("selam ");
    }
}else if(renk == "isimler"){
    function text(){
        document.write("renk ne moruq");
    }
}else if(renk == "mavi"){
    function text(){
        document.write("testmoruq");
    }
}




(function selam(){
    document.write("merhaba amk")
})(); //sonuna eklenen "();" fonsiyon calıştırma olayı





var test = function () {
    document.write("oha amk")
}();

*/

var sayi1 = 15;
var sayi2 = 30;



function text(say1,say2){
    document.write("selam");
    document.write(say1+say2); //python aynısı moruq
}


text(sayi1,sayi2);

text(15,25)



function text(say1,say2=15){ //defult olarak aynı 15 atamoş olduk moruq unutma
    document.write("selam");
    document.write(say1+say2); //python aynısı moruq
}


text(15);




(function teqs(bir,iki,uc,dort){
    document.write("oha ak");
    document.write(bir+iki+uc+dort)
})(10,10,10,10);


var demo = function(sozcuk,soz1){
    document.write(sozcuk+"<br/>")
    document.write(soz1+"<br/>")
}("selam12","okey");

































