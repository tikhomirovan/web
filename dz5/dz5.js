let a = document.querySelector("#cl");
a.addEventListener("click", myMove);

function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id)
            a.addEventListener("click", myMove);
            //  a.style.display = "block"
            
        }
        else {
           a.removeEventListener("click", myMove);
            //  a.style.display = "none"
            pos++
            elem.style.top = pos + "px"
            elem.style.left = pos + "px"
            
        }
        
    }
}













// document.write("<div id='van'></div>");
// let div = document.getElementById("van");
// div.innerHTML = ("Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым отверстием), измеренным в миллиметрах..")

// div.style.color = "#99ffff";
// div.style.background = "#f0f";
// div.style.width = "50%";
// div.style.outline = "10px dotted #000";
// div.className = "resetFont";
// let two = document.querySelectorAll(".resetFont")[0];
// // console.log(two);
//  two.style.fontSize = "12pt";
// two.style.fontWeight = "bold";
//  two.style.textDecoration = "line-through";


//  console.log(true ? 1 : 2);
// let m = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// for (let i = 0; i < m.length; i++) {
//     document.write(`<div class = 'block'>${m[i]}</div>`);
//     let c = document.querySelectorAll(".block")[i]
//     Color();
//     c.style.textAlign = "center";
//     c.style.height = "25px"
//     function Color() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     c.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
// }

   
// }