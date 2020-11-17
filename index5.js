/*
function deneme(param1,param2){
    document.write(param1+param2+"<br/>");
    function deneme1(son,son1){
        document.write(son+"<br/>");
        document.write(son1+"<br/>")
    }
    return deneme1(param1,param2);
}

function deneme(param1,param2){
    function deneme1(son){
        document.write(son * son+"<br />");

    }
    return deneme1(param1) + deneme1(param2);
}

deneme(3,6)




function bir(a,a1){
    function iki(b,b1){
        function uc(c,c1){
        return  a + b + c + a1 + b1 + c1
        }
        return uc;
    }
    return iki;
}

var degisken1 = 15,25
var degisken2 = 5,5
var degisken3 = 42,732

var sonuc = bir(degisken1)(degisken2)(degisken3);
document.write(sonuc);




function bir(aaa){
    function iki(bbb){
        function uc(ccc){
            function dort(ddd){
                var sonuc = aaa + bbb + ccc + ddd;
                document.write(sonuc);
            }
            dort(25);
        }
        uc(15);
    }
    iki(8);
}



bir(5);


function deneme(){
    var der = "ornek";
    function sonuc(der="selam"){
        document.write(der);
    }
    return sonuc;
}

deneme()("kes kes ");



function demobir(deger){
    function testbir(){
        document.write(deger);
    }
    return testbir();
}



demobir(15);



a = document.writeln("deger gir");
b = document.writeln("deger gir");



function tekrarla(baslangıcdegeri,bitisdegeri=200){
    if(baslangıcdegeri<50){
        document.write("selam amk"+"<br/>");
        baslangıcdegeri++
        tekrarla(baslangıcdegeri,bitisdegeri);
    }else {
        return;
    }
}


tekrarla(1,80);



// length() = fonksiyona verilen paramtere edğerini geri dondürür

function ornek(isim,yas,soyisim,adam){
    var islem = ornek.length;
    document.writeln(islem);
}


ornek()
ornek("ben","senin","adam","gibi")


// arguments = fonksiyona hangi bir parametrenin tanımlanmadan bile gelebilceği tüm parametre değerlerinin alınmasını sağlar

function ornek(){
    for(var baslangıc = 0; baslangıc < arguments.length;baslangıc++){ // icerisine gelen argumentslerini kac tane oldugunu length ile alıp gelen bütün parametlerei tek tek yazar
        document.write(arguments[baslangıc]);

    }
}


function selam(){
    for (){
        var a = arguments.length;
        document.write(a);
        document.write(arguments[a]);
    }
}



ornek("selam","ben","dünya");

selam("ben","burdan","bütün","herkesin","amk");


//caller : foksiyonu cağıran diğer bir fonksiyon referans olarak alınarak tüm bilgilerinin elde edilmesini sağlar .


function sesas(){
    for(var baslangic = 0; baslangic< sesas.caller.arguments.length;baslangic++){
    document.write(arguments[baslangic]+"<br/>");
    }
}


function diger(isim,soyisim){
    sesas();
}

diger("devran","altug");



var kisi = function (){
    var isimsoyisim = "dervan altug";
    return{
        isim_getir :function (lan){
            isimsoyisim = lan;
            return isimsoyisim;
        },
        isimsdegistir:function (yeniisim){
            isimsoyisim = yeniisim;
            return isimsoyisim;
        }



    };
}();


//kisi.isimsdegistir("selam canımq");
var sonuc = kisi.isim_getir("oha amk")
document.write(sonuc);




var degistirilcek_ad = "Devrana";
var degistirilecek_soyad = "Atuğ";

var adinizi_degistir = function (){
    var adiniz_a = "";
    var soyadiniz_a = "";
    return {
        isim : function (ad){
            adiniz_a = ad;
            return adiniz_a;
        },
        soyad : function (soy){
            soyadiniz_a = soy;
            return soyadiniz_a;
        }
    };
}();


var sonuc = adinizi_degistir.isim(degistirilcek_ad);
document.write(sonuc);





var day = new Array();
    day[1] = "pazartesi";
    day[2] = "salı";
    day[3] = "carşamba";
    day[4] = "perşembe";
    day[5] = "cuma";
    day[6] = "cumartesi";
    day[7] = "pazar";





document.write(day);

document.write(day[1]+"<br/>");
document.write(day[2]+"<br/>");
document.write(day[3]+"<br/>");
document.write(day[4]+"<br/>");
document.write(day[5]+"<br/>");
document.write(day[6]+"<br/>");
document.write(day[7]+"<br/>");

*/


















































































