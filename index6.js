// isArray() = bir değişkenin dizi olup olmaıdıgı  soyler.

/*
var degisken = new Array("selam moruq","kers lan");
var sonuc1 = ["kes ","lan"]





var sonuc = Array.isArray(sonuc1);
document.write(sonuc);



var metin = "hayat kısaysa ben burdan ilerlerim nigga";

document.write(metin);
var legta = metin.length;
var sayı = 0;


for (i in metin ){
    document.write(metin[i]+" ");

}


var renkler = new Array("Siyah","mavi","kırmızı","kles");

//document.write(renkler[0]+"<br/>");
//document.write(renkler[1]+"<br/>");
//document.write(renkler[2]+"<br/>");
//document.write(renkler[3]+"<br/>");



for (i in renkler) {
    //var index = renkler.indexOf("Siyah");
    //document.write(index);

    if(i == 1 || i == 2){
        document.write("mal amk"+"<br/>")
    }else {
        document.write("kes la"+"<br/>")
    }

}
var metinler = ["ahmet","mehmet","dünya","halem","gülhan",["devran","babus",",1",["haya","güzel","maoseruq"],"selam"],"fuck","mean","man",["kes","hatya","güzeltir"]];
document.write(metinler);


for (i in metinler){
    if(Array.isArray(metinler[i])) {
        for (ilk in metinler) {
            if(Array.isArray(metinler[i][ilk])) {
                for (son_kontrol in metinler){
                    document.write(metinler[i][son_kontrol]);
                }
            }else{
                document.write(metinler[i][ilk]);
            }
        }
    }else{
        document.write(metin[i]+"<br/>");
    }
}


//legth();

var renkler = new Array("siyah","navi","beyaz","kırmızı" ,new Array("kwes","osjd","ashjd"),"ahsdm",new Array("la","kes"),"asjkld");
//var renkler = ["siyah","navi","beyaz","kırmızı",["kwes","osjd","ashjd"],["la","kes"]];
//document.write(renkler);
var islemler = renkler[4][0].length;

for (i in renkler[0][4]){
    document.write(renkler[i]+"<br/>")

}

document.write(islemler);


// delete = dizi silmeye yarar sadece değeri siler

var a = ["kes","öacas","xdk"];
document.write(a+"<br/>");

delete a[0];

document.write(a[0,1,2,3]+"<br/>")

// shift() : dizi icerisindeki ilk elemanı siler ve boş bi değer koyar:
// pop() : son elamını siler




var list  = ["ashdb","lxdkl","adjf","sdjkl"];
document.write(list+"<br/>");

list.shift();

document.write(list);

var list  = ["ashdb","lxdkl","adjf","sdjkl"];
document.write(list+"<br/>");

list.pop();

document.write(list);

// push(erguemnt) : listenin sonuna elaman ekler

var list  = ["ashdb","lxdkl","adjf","sdjkl"];
document.write(list+"<br/>");

list.push("selam","nasılsın");
document.write(list);


// unshift() : listenin basına eleman ekler.

var list  = ["ashdb","lxdkl","adjf","sdjkl"];
document.write(list+"<br/>");

list.unshift("selam","nasılsın");
document.write(list);

// splice() : diznin elaman silmeye ve geri dondürmeye yara .,


var list  = ["ashdb","lxdkl","adjf","sdjkl"];
document.write(list+"<br/>");

var islem = list.slice(0,6,"kes ","lan")
document.write("silinen elemanlar: "+islem+" ","<br/>");
document.write(list+"<br/>");

// slice() : kendisine verilecek olan parametrelerin ile tanımlanmış dizi aralığında bulunana değerlerin kopaalanarak yeni dizi oluşturur.

var list  = ["ashdb","lxdkl","adjf","sdjkl"];
document.write(list+"<br/>");

var islem = list.slice(-0,-2); // verilen indexten sonuna kadar alır ve yeni dizi oluşturur.(bası,sonu) - ile başlanırsa sondan alır kendisi almaz.
document.write(islem+"<br/>");


// copyWithin() : tanımlanan dizinin veilen parametrenin aralıgında kopyalar  ve geriye dondürür ve değiştirebilir.

var list  = ["ashdb","lxdkl","adjf","sdjkl","aslfjqs","asşdjm","aslhjd","asjkld","asskj"];
document.write(list+"<br/>");

var islem = list.copyWithin(2,0,8); // 1. parametre hedef/2. parametre başlangıc/3. parametre bitiş.
*****
eger target harf verirseniz oranın basını alır ve sonuna kadar yani listenin index değerinin tamamına kadar bastan alıdgı deperleri tamamlar
verilen targetin yanına gelir start ile nerden kopyalanacağı secilir dizinin mesela 2 ikinci indexten ilerlenir ve end ile kac verilmişse o araya kadar alır sonun ekler targetin eğer dizinin uzunlugu yetmez ise kendiliğinden
diziyi tamamlar baştan aldıgı değerlei
*****
document.write(islem+"<br/>");


// fill() : kendisine verilecek olan parametreler ile tanımlanmış dizi aralıgında  bulunanna değeri parametreler ile berlirtirlmilmiş değer doğrultusunda dizinni elamanlarını değiştirir ve geriye dondürür.

var meyverler  = ["muz","cilek","armut","kiraz","kavun","karpuz","ananas"];
document.write(meyverler+"<br/>");


var sonuc = meyverler.fill("nar",0,2) // 1. parametre değer , 2. paramterre başlangıc 3. parametre bitiş.
document.write(sonuc);

// concat() : üzerinde calışılan diziye parametrik  olarak verilen eleman veya elemanları dizi veya dizileri dahil ederek yeni bir izi oluşuturur ve geriye donürür.

var erkek = ["mehmet","ali","mahmut","ahmet","cakır","batu"];
var kız = ["ağşe","esra","zehra",["hale","asd","asdkljh"],"ayşe","eda","ozge"];
document.write(erkek+"<br/>");
document.write(kız);

var sonuc = erkek.concat(kız[3][0]); // sonuna eklendi
document.write(sonuc);


// join() : dizileride elamanların arasına kendisine paramere olarak verilen değeri ayracç olarak kullanarak strings veri türünde düz bir metin oluşturur.

var list = ["ben","bu","gün","dünyanın","bıoş ","olgunu buldum"];
var dondur = Array.isArray(list);
document.write(dondur);
document.write(list+"<br/>");

var islem = list.join("  "); // stings hale gelir ve dizi olmaktan cıkar // eğer parametre veilir ise ayırdıgı ayracları değiştirir
var don = Array.isArray(islem);
document.write(don);
document.write(islem);

// toStings() : direk diziyi strings donüştürür.
// objeleride stings donüştürür

var dizi = ["kes","lşan","dğünya","yazant","xzdj","alşsjd"];
//var son = dizi.toString();
//document.write(son+" ");
var sonuc0 = typeof  dizi;
document.write(sonuc0+" ");
document.write(dizi+"<br/>");


var sonuc = dizi.toString();
//var don = Array.isArray(sonuc);
//document.write(don+" ");
var sonuc1 = typeof  sonuc;
document.write(sonuc1+"  ");
document.write(sonuc);


// valueOf() : üzerinde calısılan dizinin değerinin tam anlamıyla aktarılmasını sağlacayacak yeni bir dizi oluşturulur ve geriye dondürülür.

var dizi = ["kes","lşan","dğünya","yazant","xzdj","alşsjd"];
document.write(dizi+"<br/>");

var sonuc = dizi.valueOf();
document.write(sonuc+"<br/>");


dizi.fill("volkan"); // tam orlarak bütün herşeyi değiştirir
document.write(dizi+"<br/>");
document.write(sonuc);


// indexOf() = dizi icerisindeki verilen değeri ara ve eşleşen sonucu ondürür.

var dizi = ["kes","lşan","dğünya","yazant","xzdj","alşsjd"];
document.write(dizi+"<br/>");

var sonuc = dizi.indexOf("lşan"); // verilen kelimenin index karşıtını getirir geri.
document.write(sonuc);

dizi.fill("kes amk");
document.write(dizi);

// lastİndexOf() : dizideki her objeyi arar ve
var dizi = ["kes","lşan","dğünya","yazant","xzdj","alşsjd"];
document.write(dizi+"<br/>");



var sonuc = dizi.lastIndexOf("0");
document.write(sonuc);

// find() : kendisine parametre olarak verilen fonksiyonu dizideki her eleman tek tek olmak üzere calıştırr ve dizi  icerisindeki parametrik oalrak verilen değeri arar. ve geriye dondürür.
// 1. parametre her işlemde elde edilen dizi elemanı
// 2. parametre her işlemde edilen dizi elemanının index degeri
// 3. parametre her tekrar işleminde diziyi tutan değişkenin referansının

function selam(eleman,index,referance){
    return index == 3

}


var dizi = ["kes","lşan","dğünya","yazant","xzdj","alşsjd"];
document.write(dizi+"<br/>");

var sonuc = dizi.find(selam);
document.write(sonuc);

// findİndex() : kendisine parametre olaraka  verilen fonksiyonu dizdeki her eleman te kte olmak üzere calıştırır ve dizi icerisindeki parametrik olarak verilen değeri ara. ilk eşleşmeyi sağlauan dizi elemanın geriye dondürü.
// 1. parametre : her işlemed elde edilen dizi elemanı
// 2. parametre : her işlemde elde edilen dizi elemanını index değeri
// 3. parametre : her değişkeni tutuan referanse değişkeni
// index değerini geri dondürür.



function func(eleman,index,referanse){
    return eleman == "kes";
}



var dizi = ["kes","lşan","dğünya","yazant","xzdj","alşsjd"];
document.write(dizi+"<br/>");

var sonuc = dizi.findIndex(func);
document.write(sonuc);

// reduce() : kendisine parametre olarak verilen fonksiyonu dizideki her eleman  üzerinde soldan sağ tek tek olamk üzedre calıştırır vbe tek tek değer oluışturu
// 1. parametre : dizi icerisinde mevcut değer oncesinde değerlerin toplamı / birleşimi.
// 2. parametre : her işlemde elde edilen
// 3. parametre : her işlemde elde edilen dizi elamının index / index değeri.
// 4. parametre : her tekrar dizyi tutan değişken


function func(degerlerin_toplamı,eleman,index,referanse){ // degerler_toplamı bütün gelen sayıları toplar ve ne son sayının icerisine koyar o yüzden en son eleman ile değer toplanınca toplam cıkıyor
    // stings işlemlerinde ise
    document.write(degerlerin_toplamı+"<br/>")
    return  degerlerin_toplamı + eleman
    return eleman;

}



var dizi = [15,123,12342,1231,5122351,12312];
document.write(dizi+"<br/>");

var sonuc = dizi.reduce(func);
document.write(sonuc);

// reduceRight() : kensiine verilen fonksiyon ile her elemanı sağdan sola tek tek üzerinde calışır ve bunu tek değer olarak geriye dondürür. sağdaj sola tek tek yazar
// 1 parametre : dizi icerisindeki sayıalrın toplamı
// 2. parametre : her işlemde elde edilen dizi elemanı
// 3. parametre : her işelmde elde edilen dizi elemanı indexi
// 4. parameter : diziyi tutuan referansın adı

function func(degerlerin_toplamı,eleman,index,referanse){
    document.write(degerlerin_toplamı+"<br/>");

    return degerlerin_toplamı + eleman;

}

var dizi = [15,123,12342,1231,5122351,12312];
document.write(dizi+"<br/>");

var sonuc = dizi.reduceRight(func);
document.write(sonuc);

// reverse() : dizi icerisindeki sıralamı tersine cevirirekre tekrar tersine dondürür.

var dizi = [15,123,12342,1231,5122351,12312,["selam","ben","ayşe"],-1]; /sıralam argoritması ilk once negatif sonra strigns sonra en büyük sayıdan
document.write(dizi+"<br/>");

var sonuc = dizi.reverse();
document.write(sonuc);

// sort() : en kücükten en büyüğe sıralar ve geriye dondürür.

var dizi = [15,123,12342,1231,5122351,12312,["selam","ben","ayşe"],-1];
document.write(dizi+"<br/>");

var sonuc = dizi.sort(); /sıralam argoritması ilk once negatif  sonra en büyük sayıdan en son strings işlemleri.
document.write(sonuc);

*/
// forEach() : kedisine paramtre olarak verilen fonksiyopnu dizideki her eleman üzerine tek tek calıştırı ve geriye bir değer dondürmez fakat ilgili değerlere ulaşılabilir.
// 1. parametre : her işlemde elde edilen dizi elemanı
// 2. parametre : her işlemde edle edilen dizi elemanının index değeri.
// 3. parametre : tekrarlama işlemi icin dizinin atandıgı değişken adı
// dişarı direk değer vermez cağrılması lazımr



function func(eleman,index,referanse){
    //sonuc = sonuc + eleman+"<br/>";
    sonuc += eleman +"<br/>";
}
var sonuc = ""; // bunun  sonucu kaspam alanında var kullanılır ise dişarı deger veremez ama  bu şekilde iceri değer alıyor
var dizi = [15,123,12342,1231,5122351,12312];

dizi.forEach(func) // fonksiyonu calıştıktan sonra yazılması gerekir parametre olarek verilen değerleri
document.write(sonuc+"<br/>");




































