const data = [
    "อำเภอเมืองชลบุรี",
    "อำเภอศรีราชา",
    "อำเภอบางละมุง",
    "อำเภอสัตหีบ",
    "อำเภอพานทอง",
    "อำเภอพนัสนิคม",
    "อำเภอบ้านบึง",
    "อำเภอบ่อทอง",
    "อำเภอหนองใหญ่",
    "อำเภอเกาะจันทร์",
    "อำเภอเกาะสีชัง",
    "ทองม้วนกรอบ",
    "ผ้าทอมือบ้านบางละมุง",
    "กระเป๋าสาน",
    "น้ำตาลสด",
    "สบู่สมุนไพร",
    "กล้วยฉาบบางแสน"
];


// เรียกช่องค้นหา
const input = document.querySelector('input[name="keyword"]');


// สร้างกล่องแนะนำ
const box = document.createElement("div");

box.className = "suggest-box";

input.parentElement.appendChild(box);



input.addEventListener("keyup", function(){

    let keyword = this.value.toLowerCase();

    box.innerHTML = "";


    if(keyword === ""){
        box.style.display = "none";
        return;
    }


    let result = data.filter(function(item){

        return item.toLowerCase().includes(keyword);

    });



    result.forEach(function(item){

        let option = document.createElement("div");

        option.className = "suggest-item";

        option.innerHTML = item;



        option.onclick = function(){

            input.value = item;

            box.style.display = "none";

        };


        box.appendChild(option);

    });



    if(result.length > 0){

        box.style.display = "block";

    }else{

        box.style.display = "none";

    }

});



// คลิกด้านนอกให้กล่องหาย
document.addEventListener("click", function(e){

    if(!input.contains(e.target)){

        box.style.display = "none";

    }

});