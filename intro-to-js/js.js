function askMyName() {
    const name = prompt("ใส่ชื่อซะไอเวร"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("name").innerHTML;// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + ' ไม่อยากเสียวอย่าเลี้ยวหน้าพี่')
 }

 function calAge() {
   const yearOfBirth = Number(prompt("ใส่ปีเกิด A.D ซะบักหำ"));
   
   if (isNaN(yearOfBirth)||(yearOfBirth==0)||(yearOfBirth==1)) {
      calAge();
   } else {
      const age = 2022 - yearOfBirth;
      alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${age} ปีแล้ว`);
   }
}

function loadProfile(){
   const name = 'Settawut';
   const province = 'Krungthep mahanakhon armon rattanakosin' ;
   document.querySelector('#my-name').innerHTML = "Name" + name;
   document.querySelector('#my-province').innerHTML = "Province" + province;
}
