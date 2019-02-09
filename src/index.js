let sayfa1 = true;
let sonsoru = false;

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let results = []

const removesmall = (arr) => {
  var min = Math.min.apply(null,arr);
  return arr.filter((e) => e != min)
}

window.onload = setTimeout(() => { // Buton çıkışı
  var button = document.createElement('img')
  button.src = "basla.png"
  button.id = "girisbutton"
  button.onclick = baslatma
  document.body.appendChild(button)
},2000)
function baslatma(){
  sayfa2 = true;
  sayfa1 = false;
  ekranlar();
}

function ekranlar() { // Ekranları gösterme
  if (sayfa2 == true) {
    document.body.innerHTML = `<p id = 'giris'>Senin için bu hayatta en önemli şey ?</p> <br>
    <text id = "cevap1" onclick = "dreactions()">a) Aile ve Arkadaşlar </text>
    <text id = "cevap2" onclick = "creactions()">b) Para</text> <br>
    <text id = "cevap1" onclick = "breactions()">c) Aşk</text>
    <text id = "cevap2" onclick = "areactions()">d) Kişisel Tutkular</text>`
    sayfa2 = false;
    sayfa3 = true;

  }else if (sayfa3 == true) {
    document.body.innerHTML= `<p id = 'giris'>Sevgilini seni aldatırken yakalasaydın <br> tepkin ne olurdu ?</p> <br>
    <text id = "cevap1" onclick = "creactions()">a) Çok sert tepki gösteririm</text>
    <text id = "cevap2" onclick = "dreactions()">b) Sert ve gereği bir tepki</text> <br>
    <text id = "cevap1" onclick = "breactions()" style= {text-align: center}>c) Ne yapacağımı kestiremiyorum</text>
    <text id = "cevap2" onclick = "areactions()">d) Şahsen pek de şaşırmam</text>`
    sayfa3 = false;
    sayfa4 = true;
  }else if (sayfa4 == true) {
    document.body.innerHTML= `<p id = 'giris'>5 yıl sonra kendini nasıl<br>biri olarak görüyorsun ?</p> <br>
    <text id = "cevap1" onclick = "areactions()">a) Başarılı bir insan olarak</text>
    <text id = "cevap2" onclick = "dreactions()">b) Daha da mutlu biri olarak</text> <br>
    <text id = "cevap1" onclick = "breactions()">c) Yine aynı insan olarak</text>
    <text id = "cevap2" onclick = "creactions()">d) Her şey olabilir</text>`
    sayfa4 = false;
    sayfa5 = true;
  }else if (sayfa5 == true) {
    document.body.innerHTML= `<p id = 'giris'>Hiç intihar etmeyi düşündün mü ?</p> <br>
    <text id = "cevap1" onclick = "breactions()">a) Birkaç kez aklımdan geçmedi değil</text>
    <text id = "cevap2" onclick = "creactions()">b) Neredeyse edecektim</text> <br>
    <text id = "cevap1" onclick = "areactions()">c) Sadece merak ettim</text>
    <text id = "cevap2" onclick = "dreactions()">d) Hayır, bunu hiç düşünmedim</text>`
    sayfa5 = false;
    sayfa6 = true;
  }else if (sayfa6 == true) {
    document.body.innerHTML= `<p id = 'giris'>Güzel bir yaz akşamı, ne yapıyorsun?</p> <br>
    <text id = "cevap1" onclick = "dreactions()">a) Arkadaşlarımla eğlenceli vakitler</text>
    <text id = "cevap2" onclick = "areactions()">b) Sevgilimle akşam yemeği</text> <br>
    <text id = "cevap1" onclick = "breactions()">c) Ben, Kahve ve Netflix</text>
    <text id = "cevap2" onclick = "creactions()">d) Yine bir şeyler düşünüyorum</text>`
    sayfa6 = false;
    sayfa7 = true;
  }else if (sayfa7 == true) {
    document.body.innerHTML= `<p id = 'giris'>Strese karşı bakış açın nedir ?</p> <br>
    <text id = "cevap1" onclick = "breactions()">a) Stresten nefret ediyorum</text>
    <text id = "cevap2" onclick = "creactions()">b) Strese artık alıştım sanırım</text> <br>
    <text id = "cevap1" onclick = "dreactions()">c) Stres olmadan hayat tatsız</text>
    <text id = "cevap2" onclick = "areactions()">d) Stresi kafaya takmam</text>`
    sayfa7 = false;
    sayfa8 = true;
  }else if (sayfa8 == true) {
    document.body.innerHTML= `<p id = 'giris'>Peki yarın ölecek olsan bugün ne yapardın?</p> <br>
    <text id = "cevap1" onclick = "dreactions()">a) Sevdiklerime tekrar tekrar sarılırdım</text>
    <text id = "cevap2" onclick = "breactions()">b) Cesaret edemediklerimi </text> <br>
    <text id = "cevap1" onclick = "creactions()">c) İnsanlara yardım ederdim</text>
    <text id = "cevap2" onclick = "areactions()">d) Çılgın ne varsa denerdim</text>`
    sayfa8 = false;
    sayfa9 = true;
  }else if (sayfa9 == true) {
    document.body.innerHTML= `<p id = 'giris'>Ölümden korkuyor musun?</p> <br>
    <text id = "cevap1" onclick = "dreactions()">a) Hayır, ölüm hayatın gerçeği</text>
    <text id = "cevap2" onclick = "creactions()">b) Nasıl öleceğime bağlı biraz</text> <br>
    <text id = "cevap1" onclick = "breactions()">c) Evet, bir gün ölecek olmak korkutucu</text>
    <text id = "cevap2" onclick = "areactions()">d) Ölüm olmazsa yaşamanın ne anlamı var ?</text>`
    sayfa9 = false;
    sayfa10 = true;
  }else if (sayfa10 == true ) {
    document.body.innerHTML= `<p id = 'giris'>Peki ya hangi süper kahraman ?</p> <br>
    <text id = "cevap1" onclick = "areactions()">a) Superman</text>
    <text id = "cevap2" onclick = "creactions()">b) Batman</text> <br>
    <text id = "cevap1" onclick = "breactions()">c) Spider-Man</text>
    <text id = "cevap2" onclick = "dreactions()">d) The Flash</text>`
    sayfa10 = false;
    sayfa11 = true;
  }else if (sayfa11 == true) {
    document.body.innerHTML= `<p id = 'giris'>Kendini tanıdığını düşünüyor musun ?</p> <br>
    <text id = "cevap1" onclick = "breactions()">a) Kendimi tanıma şansım olmadı</text>
    <text id = "cevap2" onclick = "areactions()">b) Hayır, daha çok yolum var</text> <br>
    <text id = "cevap1" onclick = "creactions()">c) Ben çok karmaşık biriyim</text>
    <text id = "cevap2" onclick = "dreactions()">d) Kendimi tanıdığımı düşünüyorum</text>`
    sayfa11 = false;
    sonsoru = true;
  }
}

function hesaplama(a,b,c,d) { // Tüm olasılıklara göre sonuç çıkartma
  let set = new Set();
  set.add(a)
  set.add(b)
  set.add(c)
  set.add(d)
  if (set.size != 4) {
    let lastarray = []
    let myarray = [a,b,c,d]
    let newarray = set.size = 2 ? removesmall(myarray) : removesmall(removesmall(myarray))
    newarray.forEach((e) => {
      if (e == a) {
        lastarray.push("a")
      }
      if (e == b) {
        lastarray.push("b")
      }
      if (e == c) {
        lastarray.push("c")
      }
      if (e == d) {
        lastarray.push("d")
      }
    })
    if (lastarray.length != 1) {
      if (lastarray.length == 2) {
        let random = Math.floor(Math.random() * 2)
        sonuc(lastarray[random])
      }else if (lastarray.length == 3) {
        let random = Math.floor(Math.random() * 3)
        sonuc(lastarray[random])
      }
      else if (lastarray.length == 4) {
        let random = Math.floor(Math.random() * 4)
        sonuc(lastarray[random])

      }
    }else {
      sonuc(lastarray[0])
    }
  }else{
    let lastarray = [a,b,c,d];
    let sonuch = "";
    var largest = Math.max.apply(Math, lastarray)
    if (largest == a) {
      sonuch = "a"
    }else if (largest == b) {
      sonuch = "b"
    }else if (largest == c) {
      sonuch = "c"
    }else if (largest == d) {
      sonuch = "d"
    }
    sonuc(sonuch);
  }

}

function areactions() {
  if (sonsoru == false) {
    one = one + 1
    ekranlar();
  }else {
    one = one + 1
    hesaplama(one,two,three,four);
  }

}

function breactions() {
  if (sonsoru == false) {
    two = two + 1
    ekranlar();
  }else {
    two = two + 1
    hesaplama(one,two,three,four);
  }
}

function creactions() {
  if (sonsoru == false) {
    three = three + 1
    ekranlar();
  }else {
    three = three + 1
    hesaplama(one,two,three,four);
  }
}

function dreactions() {
  if (sonsoru == false) {
    four = four + 1
    ekranlar();
  }else {
    four = four + 1
    hesaplama(one,two,three,four);
  }
}

function sonuc(harf){
  document.body.background = ""// Sonuca göre ekrana veri çıkartma
  if (harf == "a") {
    document.body.innerHTML = `<p id = "sonuc">Macerasever</p>
                               <p id = "sonucaciklama"> Sen tam bir maceraseversin dostum, bu hayat senin için keşfedilecek çok şey olan bir oyun gibi sanki.
                                                Seni hırsından ve azminden kimse uzaklaştıramaz, bu yoldan asla vazgeçmemeni, hayallerin için elinden
                                                geleni yapmanı sonuna kadar tavsiye ediyoruz.<br> Her şeyden önce kendin olman dileğiyle...</p>`
  }else if (harf == "b") {
    document.body.innerHTML = `<p id = "sonuc">Sakin ve Issız</p>
                               <p id = "sonucaciklama">Sen genel olarak kendi halinde takılan, sakin birisin. Sana dokunmayana dokunmazsın ve yaşamayı değerli bulursun.
                                                   Bu ruh hali seni mutlu ediyorsa biz senin yanındayız.<br>Her şeyden önce kendin olman dileğiyle...</p>`
  }else if (harf == "c") {
    document.body.innerHTML = `<p id = "sonuc">Belirsiz ve Gizemli</p>
                               <p id = "sonucaciklama">Dostum verdiğin cevaplardan şunu anladık, gerçekten gizemli bir kişiliğe sahipsin. Senin hakkında kesin bir
                                                        yorum yapmak gerçekten zor fakat şunu diyebilirz ki sen nabza göre şerbet felsefesinde bir insansın. Uyum sağlamak
                                                        senin işin. Bu şekilde mutluysan gerisini çok da düşünme.<br>Her şeyden önce kendin olman dileğiyle...</p>`
  }else{
    document.body.innerHTML = `<p id = "sonuc">Yaşamayı Bilen</p>
                               <p id = "sonucaciklama">Sen hayatın içinden birisin dostum. Yaşamayı bilen bir tarafının oldukça kuvvetli olduğunu sezdik. Senin için bu hayatta
                                                   tadına varmak kadar önemlisi yok. Bugün eğlenebiliyorsak senin sayende dostum. Böyle mutluysan bize de sana teşekkür etmek
                                                   kalıyor.<br> Her şeyden önce kendin olman dileğiyle...</p>`
  }
}

// ``
// Mert Ozdinc 2019.
