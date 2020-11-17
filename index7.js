// some() : kendisine parametre olarak veilen fonksiyonu true dondürene kadar tekrarlar (dogru/olumlu/başarılı) değeri dondürene kadar dizi elemanlarını üzerined sora ile gezinir
//1. parametre : her işlemde elde edilen dizi elemanı
//2. parametre : her işlemde elde edilen dizi elemanıın index değeri
//3. parameter : her tekrarlama işlemini tutuan değilekenin referansı.

/*function denemea(eleman,inedx,referanse){

    sonuc = eleman;
    a = eleman.length;
    b = 0;
    for ( a>=b ; a++){
        return  eleman %5 ===0; // işlem true oldugunda durur
    }
    return


}
function denemeb(eleman,index,referans){ // true gorünce direk durrar
        sonuc = index;
        return eleman == 124; //index değeri verirr

}
sonuc = 0;
var dizi = [15,124,6126,2525,5252];
document.write(dizi+"<br/>");

dizi.some(denemeb);
document.write(sonuc);

// every() : kendisine verilen parametre doğrultusunda fonksiyon false değeri dondürene kadar dizi elemanları gezer

function deneme(eleman,index,referans){ // false gorünce direk durar
    //sonuc = eleman;
    //return eleman %5 === 0;

}
function deneme_replay(eleman,index,referans){ // false gorünce direk durar
    sonuc = eleman;
    a = 0
    a++
    document.write(a);
    return eleman.length >=5

}
sonuc = 0;
a = 0;
sonuc_replay = 0;
var dizi = [15,124,6126,2525,5252];
var dizi_replay = ["selam","molruq","dünya","ahemet","eder"];
document.write(dizi_replay+"<br/>");
document.write(dizi.join(" ")+"<br/>");


dizi_replay.every(deneme_replay);
dizi.every(deneme);
document.write(sonuc+" "+"<br/>")
document.write(a);

// filter() : kendisine parametre olarak verilen fonksiyonu dizideki her elemanı üzerine calıştıuırlır. Fonksiyon geriye (doğru/olmlu/başarılı) diğeri dondüren tüm elemanlarını kopyalarını
//kopyalayarak yeni bi dizi oluşturur. ve geriye dondürür.
// 1. parameter : her işlemde calıştıgını dizinin elemanı
// 2. parametre : her işlem heldiğinde dizinin index değeri.
// 3. parametre : her değişkeni tutur

function deneme(eleman,index,degisken) {
    sonuc = eleman;
    index_number = index;
    return eleman %2 !== 0 || index++

}
var sonuc = 0;
var index_number = 0;
var dizi = [1,2,3,4,5,5,6,7,9,0,1512,5612341];
document.write(dizi+"<br/>");


dizi.filter(deneme);
document.write(sonuc+"<br/>");
document.write(index_number+1);

// map() : kendisine parametre olarak verilen fonkyonu dizideki her eleman üzerinde calıştırır. her sefereinde yeni bir dizi oluşturur.
// 1. parametre : her işlemin elde edilen dizi elemanı
// 2. parametre : her işlemde elde edilen dizi elemanının  index değeri
// 3. parametre : her tekrarda tutulun değişken

function deneme(eleman,index,değişken){
    var islem = eleman * 100;
    return islem;
}




var dizi = [1,2,3,4,5,6,7,9,0,10,12,1234,54123612];
document.write(dizi+"<br/>");

var sonuc = dizi.map(deneme);
document.write(sonuc);

// average() : number veri türü icerikli dizinin her elemanı tek tek olmak üzere calışır ve tüm elemanlarını bularak buıldugu değeri geriye dondürür.

Array.prototype.avarage = function (){
    var a = 0; // for dongüsü dışaraya
    for (var baslangic = 0; baslangic<=this.length; baslangic++){
        document.write("index moruqw: ",this[baslangic]+"<br/>");
        var a = this[baslangic];

    }
    var sonuc =  a / this.length;
    return sonuc;
}

var dizi = [10,20,30,40,50,60,70,90,10,12,1234,54123612]; // ortalama
document.write(dizi+"<br/>");




var ortalama = dizi.avarage();
document.write(ortalama+"<br/>");


Array.prototype.avarage = function ({
    var a = 0;
    for (var bas = 0; bas<=this.length; bas++;){
        var a = this[bas];
    }
    islem = a / this.length;
    return islem;
}

// shuffle() : dizinin her elemanı üzerinde tek tek calıştırarak tüm elemanları karıştırır ve yeni olışturduğu değeri geriye dondürür


Array.prototype.shuffle = function(){
    var eleman_sayisi = this.length;
    while (eleman_sayisi >0){
        var rasgele_sayi = Math.floor(Math.random() * (eleman_sayisi+1)); // en kücük değere atar tam sayıya
        var gecici = this[rasgele_sayi];
        document.write(gecici+"<br/>")
        eleman_sayisi--

    }
}


var dizi = ["bir","iki","üc","dort","bes"];
//document.write(dizi+"<br/>");


var sonuc = dizi.shuffle();
document.write(sonuc);


var degerbir = 15;
var deg = 15;

for (baslangıc = 0; baslangıc <10; baslangıc++){
    degerbir /= deg;
    a = degerbir;
}
document.write(a);


// for dongüsünde bir sıkıntısı yok ama
// ++i => i 'i bir attır ve devam et
// i++ => i 'i eger üzerinde bir işlem var ise onu i üzerinde yap işlem bittikten sonra i yi arttır
var a = 100;
document.write(a+"<br/>");


--a;
document.write(a);

a--;
document.write(a);

for (b = 0;++b<=100; ){ // bişey  farketmiyo
    document.write(b+"<br/>");
}

b = 0;

++b;
document.write(b);


// MAX_VALUE = en büyük pozitif sayı;

var enbuyuk = Number.MAX_VALUE;
document.write(enbuyuk+"<br/>");

// MİN_VALUE = en kücük sayı;

var enkucuk = Number.MIN_VALUE;
document.write(enkucuk);

// POSITIVE_INFINITY = atanabişcek en büyük pozitif sayı değerini sonsuz olanı;

var enkucuk = Number.POSITIVE_INFINITY; // direk sonsuz sayı yazdırır
document.write(enkucuk)

var sınırtsız = Number.MAX_VALUE;
document.write(sınırtsız+"<br/>");

var a = sınırtsız *2 ; // sınrısız sayı olur
document.write(a);

// NEGATIVE_INFINITY = atanabişcek en kücük pozitif sayı değerini sonsuz olanı;

var enkucuk = Number.NEGATIVE_INFINITY;// tersten negativ sonsuz sayı
document.write(enkucuk)


// NAN = değerin sayı olmaması durumunda geriye dondürür

var a = "aöshbmdas";
var b = 8;
var sonuc = a * b;
document.write(sonuc); // NaN döner

//  E : euler sayısını geriye dondürür:

var deger = Math.E;
document.write(deger);

// LN2 : 2 li sayının doğal sayı algoritmasını değerini geriye dondürür.
var deger = Math.LN2;
document.write(deger);


// isNaN : kendisine parametrik olrak verilen değişken icerğini Nan değilmi dşiye kontorl edeer


var sonuc = Number.isNaN(Number.NaN); // NaN değerde true dondürür.
document.write(sonuc);


// isFinite() : ekndisine parametre olarak verilen değerin sayı olup olmadıgı booline veri tipine donüştürendir.
// isInteger () : int verimi diye kontorl ederi
// isSafeInterger() : tam sayımı değilmi diye kontrol eder.
var sonuc = Number.isFinite(1);
document.write(sonuc);

// ParseInt() : kendisine parametre olarak verilen değelerin doğrultusunda değişken iceriğini tam sayı halinde donuştürerek yeni bir icerik oluşturur ve oluşturdugu değeri geriye dondürür.


var deger1 = "10";
var deger2 = "120,20,1232"; // sadece baştaki harfi alır yani "," yada "." sonraki almaz
var deger21 = "10 20 30 "; // sadece 10 aldı boşluk tanımaz
var deger3 =  " 25 "; // baştaki boşlugu yok sayar işk harfi alır
var deger4 = "10 numaralı işlem";// baştaki boşlugu yok sayar işk harfi alır
var degeraltı = "fiyat 10"; // sadece nuber değer alır
var dege7 = 12332; // int değerleride "," olamz
var a = "0x10"; // 16 lık değer hesaplar
var b = "10";  // 10 luk hexdecimal hesaplar


var sonuc = parseInt(b);
document.write(sonuc);

//parseFloat() : parseInt float versiyonu


var deger1 = "10";
var deger2 = "120.2323,1232"; // eger parse edilen "." sonraki alır ama ondan sonrakini almaz
var deger21 = "10 20 30 "; // sadece 10 alıyor
var deger3 =  " 25 "; // boşlugu yok sayar
var deger4 = "10 numaralı işlem";
var degeraltı = "fiyat 10"; // NaN değer
var dege7 = 12332; // int de alabilir
var a = "0x10";
var b = "10";
var de = -45;// buda yazılabilir


var sonuc = parseFloat(de);
document.write(sonuc);

// toString() : icerigi string veri türünü düz bir metine oluştyurur.

var deger1 = 5;
var deger2 = 15;

var sonuc1 = typeof deger1;
var sonuc2 = typeof deger2;

document.write(deger1+"<br/>");
document.write(deger2+"<br/>");

document.write(sonuc1+"<br/>");
document.write(sonuc2+"<br/>");

var sonuc = deger1 + deger2
var sonuc3 = sonuc.toString();
document.write(sonuc3);
var sonuc4 = typeof sonuc3;
document.write(sonuc4);

//cell() : kendisine parametre olarak verilen değeri yuvarlıyarak değeri dondürür.
var deger = 0.5;
var deger2 = 32897327893.286737823;
document.write(deger+"<br/>");

var sonuc = Math.ceil(deger);
var sonuc2 = Math.ceil(deger2); // yuvarlar

document.write(sonuc+"<br/>");
document.write(sonuc2+"<br/>");

// float() : değeri float olarak ve yuvarlayarak  geri dondürülür
var deger = 5.29372;
var deger2 = 32897323.23489232893729;


var sonuc = Math.floor(deger);
var sonuc2 = Math.floor(deger2); // float yuvarlanır

document.write(sonuc+"<br/>");
document.write(sonuc2+"<br/>");
// round() : yuvarlama yapar.

var deger = 5.2;
var deger2 = 3.5; // olunca otomatik olarak

var sonuc = Math.round(deger);
var sonuc2 = Math.round(deger2);

document.write(sonuc+"<br/>");
document.write(sonuc2+"<br/>");


// trunc() : kendisine parametre olarak verilen herhangi bir ondalık sayı değerinin kısmını kaldırarak, tam sayı deperini geriye dondürür.

var deger = 5.28;
var deger2 = 3.69; // olunca otomatik olarak

var sonuc = Math.trunc(deger);
var sonuc2 = Math.trunc(deger2); // ondalık kısmını kaldırı o sekilde geri verir

document.write(sonuc+"<br/>");
document.write(sonuc2+"<br/>");

// random() : 0 ile 1 arasında bir random  sayı oluşturur.


var rando = Math.random(Math.random() * 10);

var ransom = Math.ceil(rando);
document.write(ransom+"<br/>");

var random_sayi = Math.floor(Math.random() * 100);

document.write(random_sayi);

// sing() : kendisine parametre olarak verilen herhangi bir sayıyı değerinin bularak sonucu geriye dondürür.

var deger = 54;// pozitif sayılarda 1 gosteriri negatifte ise -1
var deger1 = -1;

var sonuc = Math.sign(deger);
var sonuc2 = Math.sign(deger1);
document.write(sonuc);
document.write(sonuc2);

// min() : kendisine parametre olarak verilen sayıyı değerinin en kücüğünü bularak

var deger1 = 5;
var deger2 = 10;
var deger3 = 2452;
var deger4 = 932832;

var sonuc = Math.min(deger1,deger2,deger3,deger4);
document.write(sonuc); // en kücüğü bulur.

//max() : en büyük değeri bulur:

var deger1 = 5;
var deger2 = 10;
var deger3 = 2452;
var deger4 = 932832;

var sonuc = Math.max(deger1,deger2,deger3,deger4);
document.write(sonuc); // en büyük olanı bulur


//pow() : kendisine parametre olarak verilen 2 sayının üssümü bularak geriye dondürür.

var sonuc = Math.pow(2,9)
document.write(sonuc);// üs alma

//abs() : kendisine parametre olarak verilen herhangi bir sayı değerinin mutlak değerini sonucunu geriye dondürür.

var sonuc = Math.abs(-55434);
document.write(sonuc);

// sqrt() : kendisine verilen herhangi bir sayı değerini karekökü bulur.

var sonuc = Math.sqrt(52);
document.write(sonuc);

//cbrt() : kendisine paremetre olrak verilen herhangi bir sayının bir küp kokünü bulur.

var sonuc = Math.cbrt(52); // 3 kokünü bulur
document.write(sonuc);

//sin() : kendisine parametre olrak verilen herhangi bir sayı değerinin sinüsünü bularak buldugu değeri geriye dondürür.

var sonuc = Math.sin(52);
document.write(sonuc);

*/
//


















































































































































