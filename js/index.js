
	      let open = document.querySelector(".open");
	      let close = document.querySelector(".close");
	      let ul = document.querySelector(".ul");

	let count = 0;
	document.querySelector(".hamburger").addEventListener("click", handleClick);
	function handleClick(){
		count += 1;
	if(count % 2 !== 0){
ul.style.translate = "0%";
ul.style.opacity = "100%";
close.style.display = "inline-block";
open.style.display = "none";

	}
                   
  else{ 
ul.style.translate = "100%";
close.style.display = "none";
open.style.display = "inline-block";
ul.style.opacity = "40%";
	      }
	    }
	      let section = document.querySelector("section");
	      let side = document.querySelector(".aside");
	      let formTwo = document.querySelector(".cgpa-form");
	      let enterOne = document.querySelector(".enter");
	      let enterTwo = document.querySelector(".enter2");
       
	      let pageOne = document.querySelector(".page1");
	      let pageTwo = document.querySelector(".page2");
	      let pageThree = document.querySelector(".page3");
	pageOne.addEventListener("click", handleClick1)
	pageTwo.addEventListener("click", handleClick2)

	function handleClick2(){
side.style.display = "block";
formTwo.style.display = "block";
section.style.display = "none";
$(function(){
$(".enter").hide(300);
$(".enter2").slideDown(300);
$(".page-cgpa").slideDown(300);
$(".page-gpa").hide(300);

})
	}
	function handleClick1(){
side.style.display = "none";
formTwo.style.display = "none";
section.style.display = "block";
$(function(){
$(".enter2").hide(300);
$(".enter").slideDown(300);
$(".page-cgpa").hide(300);
$(".page-gpa").slideDown(300);
})
	}
	      let button1 = document.querySelector(".calc");

	      button1.addEventListener("click", handleButton1)
	      function handleButton1(){
	      	event.preventDefault();

	      	function convertGrade(grade) {
    switch (grade.toUpperCase()) {
      case 'A': return 5;
      case 'B': return 4;
      case 'C': return 3;
      case 'D': return 2;
      case 'E': return 1;
      default : return 0;
    }
  }

	   let msg = document.querySelector(".message");
	      	 let check15 = document.querySelector(".five").checked;
	      	 let check16 = document.querySelector(".six").checked;
	      	 let check17 = document.querySelector(".seven").checked;
	      	 let check18 = document.querySelector(".eight").checked;
	      	 let check19 = document.querySelector(".nine").checked;
	      	 let check20 = document.querySelector(".ten").checked;
	      	 let check21 = document.querySelector(".eleven").checked;
	      	 let check22 = document.querySelector(".twelve").checked;
	      	 let check23 = document.querySelector(".thirteen").checked;
	      	 let check24 = document.querySelector(".forteen").checked;
	      	 let check25 = document.querySelector(".fifteen").checked;
	      	 let check26 = document.querySelector(".sixteen").checked;
	      	 let check27 = document.querySelector(".seventeen").checked;
	      	 let check28 = document.querySelector(".eighteen").checked;
	      	 let check29 = document.querySelector(".nineteen").checked;
	      	 let check30 = document.querySelector(".twenty").checked;

	      let input1 = convertGrade(document.querySelector(".input1").value);
	      let input2 = convertGrade(document.querySelector(".input2").value);
	      let input3 = convertGrade(document.querySelector(".input3").value);
	      let input4 = convertGrade(document.querySelector(".input4").value);
	      let input5 = convertGrade(document.querySelector(".input5").value);
	      let input6 = convertGrade(document.querySelector(".input6").value);
	      let input7 = convertGrade(document.querySelector(".input7").value);
	      let input8 = convertGrade(document.querySelector(".input8").value);
	      let input9 = convertGrade(document.querySelector(".input9").value);
	      let input10 = convertGrade(document.querySelector(".input10").value);
	      let input11 = convertGrade(document.querySelector(".input11").value);
	      let input12 = convertGrade(document.querySelector(".input12").value);
	      let input13 = convertGrade(document.querySelector(".input13").value);
	      let input14 = convertGrade(document.querySelector(".input14").value);


          let inputs1 = document.querySelector(".input1").value;
	      let inputs2 = document.querySelector(".input2").value;
	      let inputs3 = document.querySelector(".input3").value;
	      let inputs4 = document.querySelector(".input4").value;
	      let inputs5 = document.querySelector(".input5").value;
	      let inputs6 = document.querySelector(".input6").value;
	      let inputs7 = document.querySelector(".input7").value;
	      let inputs8 = document.querySelector(".input8").value;
	      let inputs9 = document.querySelector(".input9").value;
	      let inputs10 = document.querySelector(".input10").value;
	      let inputs11 = document.querySelector(".input11").value;
	      let inputs12 = document.querySelector(".input12").value;
	      let inputs13 = document.querySelector(".input13").value;
	      let inputs14 = document.querySelector(".input14").value;


	      let unit1 = Number(document.querySelector(".unit1").value);
	      let unit2 = Number(document.querySelector(".unit2").value);
	      let unit3 = Number(document.querySelector(".unit3").value);
	      let unit4 = Number(document.querySelector(".unit4").value);
	      let unit5 = Number(document.querySelector(".unit5").value);
	      let unit6 = Number(document.querySelector(".unit6").value);
	      let unit7 = Number(document.querySelector(".unit7").value);
	      let unit8 = Number(document.querySelector(".unit8").value);
	      let unit9 = Number(document.querySelector(".unit9").value);
	      let unit10 = Number(document.querySelector(".unit10").value);
	      let unit11 = Number(document.querySelector(".unit11").value);
	      let unit12 = Number(document.querySelector(".unit12").value);
	      let unit13 = Number(document.querySelector(".unit13").value);
	      let unit14 = Number(document.querySelector(".unit14").value);

	      let put1 = (document.querySelector(".unit1").value);
	      let put2 = (document.querySelector(".unit2").value);
	      let put3 = (document.querySelector(".unit3").value);
	      let put4 = (document.querySelector(".unit4").value);
	      let put5 = (document.querySelector(".unit5").value);
	      let put6 = (document.querySelector(".unit6").value);
	      let put7 = (document.querySelector(".unit7").value);
	      let put8 = (document.querySelector(".unit8").value);
	      let put9 = (document.querySelector(".unit9").value);
	      let put10 = (document.querySelector(".unit10").value);
	      let put11 = (document.querySelector(".unit11").value);
	      let put12 = (document.querySelector(".unit12").value);
	      let put13 = (document.querySelector(".unit13").value);
	      let put14 = (document.querySelector(".unit14").value);

  const product1 = eval(input1 * unit1);
  const product2 = Number(input2 * unit2);
  const product3 = Number(input3 * unit3);
  const product4 = Number(input4 * unit4);
  const product5 = Number(input5 * unit5);
  const product6 = Number(input6 * unit6);
  const product7 = Number(input7 * unit7);
  const product8 = Number(input8 * unit8);
  const product9 = Number(input9 * unit9);
  const product10 = Number(input10 * unit10);
  const product11 = Number(input11 * unit11);
  const product12 = Number(input12 * unit12);
  const product13 = Number(input13 * unit13);
  const product14 = Number(input14 * unit14);

const totalProducts = Number(product1 + product2 + product3 + product4 + product5 + product6 + product7 + product8 + product9 + product10 + product11 + product12 + product13);
let result;

if(inputs1.length < 1 && inputs2.length < 1 && inputs3.length < 1 && inputs4.length < 1 && inputs5.length < 1 && inputs6.length < 1 && inputs7.length < 1 && inputs8.length < 1 && inputs9.length < 1 && inputs10.length < 1 && inputs11.length < 1 && inputs12.length < 1 && inputs13.length < 1 && inputs14.length < 1){
	 msg.innerText = "Input Your Grades!";
    msg.style.color = "red";	
}
else if(put1.length < 1 && put2.length < 1 && put3.length < 1 && put4.length < 1 && put5.length < 1 && put6.length < 1 && put7.length < 1 && put8.length < 1 && put9.length < 1 && put10.length < 1 && put11.length < 1 && put12.length < 1 && put13.length < 1 && put14.length < 1){
	 msg.innerText = "Input Your Course Unit Loads!";
    msg.style.color = "red";	
}
else if(!check15 && !check16 && !check17 && !check18 && !check19 && !check20 && !check21 && !check22 && !check23 && !check24 && !check25 && !check26 && !check27 && !check28 && !check29 && !check30){
    msg.innerText = "Select Your Total Unit Load!";
    msg.style.color = "red";	
}
 else if (check15) {
    result = (totalProducts / 15).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
    
  } 
else if (check16) {
    result = (totalProducts / 16).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check17) {
    result = (totalProducts / 17).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check18) {
    result = (totalProducts / 18).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check19) {
    result = (totalProducts / 19).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check20) {
    result = (totalProducts / 20).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check21) {
    result = (totalProducts / 21).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check22) {
    result = (totalProducts / 22).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check23) {
    result = (totalProducts / 23).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  } 
  else if (check24) {
    result = (totalProducts / 24).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
}
else if (check25) {
    result = (totalProducts / 25).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  }  
  else if (check26) {
    result = (totalProducts / 26).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  }  
  else if (check27) {
    result = (totalProducts / 27).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  }  
  else if (check28) {
    result = (totalProducts / 28).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  }  
  else if (check29) {
    result = (totalProducts / 29).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  }  
  else if (check30) {
    result = (totalProducts / 30).toFixed(2);
    msg.innerText = "Your GPA is " + result;
    msg.style.color = "#063031";
  }  
 
let products = {
"Product 1": product1,
"Product 2": product2,
"Product 3": product3,
"Product 4": product4,
"Product 5": product5,
"Product 6": product6,
"Product 7": product7,
"Product 8": product8,
"Product 9": product9,
"Product 10": product10,
"Product 11": product11,
"Product 12": product12,
"Product 13": product13,
"Product 14": product14,
"Total Products": totalProducts
};
console.log(products)
console.log(input1)
console.log(unit1)
	      	
	}
	      let button2 = document.querySelector("#calc")
	      button2.addEventListener("click", handleButton2);
	      function handleButton2(){
	      	event.preventDefault();
      let returnMessage = document.querySelector("#message");
      let result1 = document.querySelector("#input1").value;
      let result2 = document.querySelector("#input2").value;
      let cgpaInputPattern = /^[0-9.]{4}$/;
      let cummulative = 0;
if(cgpaInputPattern.test(result1) === false){
		returnMessage.innerText = "Enter valid GPA values in two decimal places!";
		returnMessage.style.color = "red";
}
else if(cgpaInputPattern.test(result2) === false){
		returnMessage.innerText = "Enter valid GPA values in two decimal places!";
		returnMessage.style.color = "red";
}
	else{
		let aggreg = parseFloat(result1) + parseFloat(result2);
		let aggregate = eval(aggreg/2);
		cummulative = Number(aggregate).toFixed(2);
		console.log(cummulative)
		returnMessage.innerText = "Your CGPA Is " + cummulative;
		returnMessage.style.color = "#063031";

	}
	      }

window.addEventListener("scroll", handleScroll);
function handleScroll(){
	if(window.scrollY > 120){
		document.querySelector("main").style.background = "lavender"
	}
	else{
		document.querySelector("main").style.background = "#f3f8fb"	
	}
}	