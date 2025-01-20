
let vaqt = 0;
let sekundametr;

function formatTime(milliseconds) {
  const soat = Math.floor(milliseconds / 3600000); 
  const minut = Math.floor((milliseconds % 3600000) / 60000); 
  const sekund = Math.floor((milliseconds % 60000) / 1000); 
  const millis = milliseconds % 1000; 

  const soatStr = soat < 10 ? `0${soat}` : soat;
  const minutStr = minut < 10 ? `0${minut}` : minut;
  const sekundStr = sekund < 10 ? `0${sekund}` : sekund;
  const millisStr = millis < 100 ? (millis < 10 ? `00${millis}` : `0${millis}`) : millis;

  return `${soatStr}:${minutStr}:${sekundStr}:${millisStr}`; 
}

function start() {
  if (!sekundametr) { 
    const startTime = Date.now() - vaqt; 
    sekundametr = setInterval(() => {
      vaqt = Date.now() - startTime; 
      document.getElementById("display").textContent = formatTime(vaqt);
    }, 1); 
  }
}

function stop() {
  clearInterval(sekundametr); 
  sekundametr = null; 
}

function reset() {
  stop(); 
  vaqt = 0; 
  document.getElementById("display").textContent = "00:00:00:000"; 
}





// Malumot tuzilmalarni tashkil qilish:Malumotlarni tartibga solish va ularga tezkor kirish imkoniyitani berish.
//  Samarali qidruv va saqlash : Malumotlarni samarali tartibga solidh va saqlash usullarini taqdim etish
// Malumotlar ustida amallar bajarish : malumotlar tahrirlash,qoshish, ochirish va boshqa operatsiyalar samarali
// oddiy yani primitiv turlar
// integer,float,boolean,char,string.
// murakkab non-primitiv tuzilmalar
// array,object,stack,queue, linked list, tree,garph,hash table,

// array nun bir xil turdagi malumotlar tartiblangan holda saqlanadigan malumotlar tuzilmasi har bir element index boyicha aniqlanadi
// let massiv = [10,20,30,40]
// console.log(massiv[1]);

// stek- bu lifo (oxirgi kirgan birinchi chiqadi)prinspida ishlaydigan malumot
// let stek = [];
// stek.push(10);
// stek.push(20);
// console.log(stek.pop()); yani 20 ni olish  birinchi 20 chiqadi

// queue (navbat)
// navbat bu ham fifo (birinchi kirgan birinchi chiqadi ) prinspida ishlaydigan malumot tuzilmasi yani elementlar boshidan kiritilib boshidan ochiriladi.
// let navbat = []
// navbat.push(10) 
// navbat.push(20) 
// console.log(navbat.shift()); bunda 10 elementi ochadi yani birinchi 10 kirgan edi

// linked list (zanjirlangan royxati)
// bu tuzilma elementlar ketma-ketlikda saqlanadi har bir element keyingi elemenga boglangan bu 
// yerda elementlar xotiraning turli qismlarda saqlanadi 

// tree (daraxt)
// daraxt tuzilmasi kop darajali malumotlar saqlash uchun ishlatiladi har bir element 
//(tugun) bir nechta boshqa elementlarga (farzand tugunlari) boglangan bolishi mumkin daraxtning eng yuqori tuguni ildiz (root) deb ataladi

// hash table 
// bu malumotlarni kalit-qiymat juftligi shaklida saqlash imkonini beraddigan tuzilma bolib kalitlar 
// yordamida malumotlar tezkor qidirilishi imkonin beradi. JavaSkriotda object yoki Map bu maqsadda ishlatilishi mumkin

// map ham obektga oxshash kalit qiymat malumotlar saqlash imkonini beradi 
// obektdan farqli ravishda Map har qanday malumot turini shuningdak objektni ham ishlatishi mumkin
// Map 
// map.size uzunlik olish: 
// map.get  qiymat olish
// map.has kalitni tekshirish
// map.delete malumotni o'chirish
// map.clear barcha elementlarni o'chirish
 
// map xusuaiyatlari:
// kalit sifatida string, number,boolean ,object,va function ishlatadi 
// tartibli tuzilma mapda elementlar qoshilgan tartibda saqlanadi 
// forEach() yoki for...of mapda elemtlar takrorlandi

// set: noyob qiymatlar to'plami
// set obektlar toplamiga oxshaydi, ammo u faqat noyob qiymatlarni saqlaydi.
// setda bir xil qiymat bir necha marta bolishi mumkin emas!!!!!

// set.size uzunlik olish: 
// set.get  qiymat olish
// set.has kalitni tekshirish
// set.delete malumotni o'chirish
// set.clear barcha elementlarni o'chirish

// set xususiyatalri 
// set har bir qiymat bir martta bolishi mumkin 
// tartib saqlanmaydi,lekin qiymat kiritilgan tartibda o'qiladi
// forEach() yoki for...of bilan setdagi elementlarni takrorlash mumkin 

// WeakMap:faqat obekt kalitlar 
// weakMap ham Map kabi kalit-qiymat juftligini saqlaydi lekin bundan faqat obetk kalit sifatida ishlatiladi
// WeakMapning oziga xosligi shundaki u avtomatik xotira boshqaruvi (garbage collection)
// bilan bogliq yani obekt kalitga bogliq bolmagan qiymatlar avtomatik ravishda xotiradan o'chiriladi


// WeakMap xususiyatlari 
// faqat obektlar kalit sifatida ishlatiladi
// kalitlar avtomatik ravishda garbage collection tomonidan o'chiriladi, yani
// xotira samaradorligi oshadi
// WeakMap iteratsiya qilinmaydi (yani forEach() va for...of yordamida o'qib bo'maydi!!!!!!!!) 


// WeakSet obekt toplami 
// WeakSet ham set kabi ishlaydi lekin faqat obektlarni saqlaydi. WeakSet ham avtomatik garbage collection bilan bogliq bolib obektga
// obektga bogliq bolmagan malumotlarni avtomatik ochiriladi.

// xulosa

// Map va Set JavaScriptda malumotlarni tartibli saqlash uchun  qo'llaniladi
// WeakMap va WeakSet xotiradan samarali foydalanish uchun ishlatiladi va ular 
// obektga asoslangan tuzilmalardir. WeakMap va WeakSet avtomatik garbage collectoin 
// bilan bog'liq bo'lib xotiraga nisbatan ehtiyotkor ishlov beradi.
// Map kalit-qiymat juftligi uchun Set esa noyob qiymatlar toplamini saqlash uchun moljallangan 



// dom syle va classList

// classLIst  bu html elementlarining css klasslarini boshqarish uchun qulay interfeys.
// bu metodlar bilan ishlash juda oson ba klasslar bilan ishlashni ancha sodda qiladi.
 

// add(className) berilgan klasni  elementga qo'shadi 
// let element = document.querySelector("my-element")
// element .classList.add("new-class")


// remove(className) Berilgan klassni elemenrdan ochiradi
// element.classList.remove("old-class")


// toggle(ClassName) agar klass mavjud bolsa umi ochiradi aks holda qoshadi. bu metod holatlarni 
// ozgaruvchan qilsh uchun  juda foydali
// element.classList.toggle.(active)


// contains(className) agar berilgan klass elementda mavjud bo'lsa true qaytaradi
// aks holda false qaytaradi 
// if (element.classList.contains(active)){
// console.log("element active")
//   }


// replace(oldclass, newClass) eski klassni yangi klassga almashtirdi
// element.classList.replace(old-class, new-class)

// todo List funksiyalari 
// Create:yangi vazifani yaratish
// Deleta: vazifani ochiradi
// edit : vazifani tahrirlaydi
// complete :vazifani tugatish 


// classList bilan ishlash 
// classList   html elmentlarining klasslarini boshqarish uchun qulay interfeys.
// bu orqali klasslarni qoshish ochirish va ulardan foydalanish mumkin 
// add(className) klass qoshadi 
// remove(className) klass o'chirish 
// toggle(ClassName) agar klass bolsa ochiradi bolmasa qo'shadi.


// node.style bilan ishlash 
// node.style yordamida elementning inline uslublarni ozgartirish mumkin biroq 
// usullarni togri qoshish uchun qiymatga css birligini (px, em ) va boshqalar 
// qoshish kerak



//  event


//  event bu dasturda sodir boladigan har qanday hodisa 

// 1 sichqon xodisasi

// click foydalanuvchi elementni bosganda 
// dblclick  foydalanuvchi elementni ikki marrta bosganda 
// mouseover sichqoncha element ustiga olib kelsa 
// mouseout sichqoncha elemetdan chiqsa
// mousemove sichqoncha harakati sodir bolganda 
// contextmenu ong tugma bosilganda (kontekst mnyu ochiladi)

// 2 keyboard events  
// klavetura bilan ishlash

// keydown foydalanuvchi tugmachani bosganda 
// keyup  foydalanuvchi tugmachani boshatganda 
// keypress  foydalanuvchi harf yoki raqam tugmasini bosganda 


// 3 Form Events  

// foydalanuvchi formalar bilan aloqada boladigan sodir boladi

// sumbit  forma yuborilganda 
// change forma maydonidagi qiymat ozgarganda 
// focus forma maydoniga kelsa 
// blur  forma maydonidan chiqsa 
// input  forma maydoni ichidagi qiymat ozgarganda 


// 4 Window events
// sahifada sodir boladigan voqealar qamrab oladi

// load sahifani toliq yuklanganda 
// resize foydalanuvchi brauzer olvhamini ozgartirganda 
// scroll foydalanuvchi sahifani aylantirganda 




