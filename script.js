var fourthValue;
const retry = document.getElementById('retry');
var input = document.getElementById('input');
const randomValue4 = document.getElementById('randomvalue4');
var wrong = document.getElementById('wrong');
var right = document.getElementById('right');
duniya() ;
function duniya() {
randomValue4.innerText="?";
randomValue4.style.color="black";
input.value="";
/////////////////////////////////////
var img1=parseInt(Math.random()*10);
var img2=parseInt(Math.random()*10);
var img3=parseInt(Math.random()*10);
var img1_set=-1;
var img2_set=-1;
var img3_set=-1;

img1=parseInt(Math.random()*10);
img1_set=1;


while (img2_set==-1) {
let temp=parseInt(Math.random()*10);
if(img1!=temp)
{
img2=temp;
img2_set=1;	
}
}

while (img3_set==-1) {
let temp1=parseInt(Math.random()*10);
if(img1!=temp1 && img2!=temp1)
{
img3=temp1;
img3_set=1;	
}
}

const img=document.getElementsByClassName('image');

 var img_path1=img[0].src.split(".");
 let img_len_count=img_path1[0].length-1;
var img_path=img_path1[0].slice(0,img_len_count);

for( let i=0;i<img.length;i++){
	if(i<4){
		img[i].src="https://us.123rf.com/450wm/utima/utima1606/utima160600068/59830973-fresh-red-apple-with-leaf-isolated-on-white-.jpg?ver=6";
	}

	else if (i>3 &&i<7 ){
img[i].src="https://thumbs.dreamstime.com/z/isolated-strawberry-single-strawberry-fruit-isolated-white-background-clipping-path-fresh-strawberry-fruits-isolated-136191179.jpg";
	}

	else if(i>6 &&i<9){
		img[i].src="https://image.shutterstock.com/image-photo/single-fresh-green-wet-apple-260nw-215705464.jpg";
	}

		else if(i==9){
			img[i].src="https://us.123rf.com/450wm/utima/utima1606/utima160600068/59830973-fresh-red-apple-with-leaf-isolated-on-white-.jpg?ver=6";
		}
		
		else if(i==10){
			img[i].src="https://thumbs.dreamstime.com/z/isolated-strawberry-single-strawberry-fruit-isolated-white-background-clipping-path-fresh-strawberry-fruits-isolated-136191179.jpg";
		}
		
		else if(i==11){
			img[i].src="https://image.shutterstock.com/image-photo/single-fresh-green-wet-apple-260nw-215705464.jpg";
		}
		
}
/////////////////////////////////////////
//First Random value Code
var setvalue1=-1;
while(setvalue1==-1){
let temp = parseInt(Math.random()*10)*5;
if(temp!=0){
var firstValue = temp;
const randomValue1 = document.getElementById('randomvalue1');
randomValue1.innerText=firstValue*3;
setvalue1=1;
}}
//second Random value Code
var setvalue2 = -1;
while(setvalue2==-1){
	let temp = parseInt(Math.random()*10)*5;
if(temp!=0){
var secondValue = temp;
const randomValue2 = document.getElementById('randomvalue2');
randomValue2.innerText=firstValue+(secondValue*2);
setvalue2=1;
}}
//Third Random value Code
var setvalue3 = -1;
while(setvalue3==-1){
	let temp = parseInt(Math.random()*10)*5;
if(temp!=0){
	var thirdValue = temp;
const randomValue3 = document.getElementById('randomvalue3');
randomValue3.innerText=secondValue+(thirdValue*2);
setvalue3=1;
}}
//Final value Code
fourthValue = firstValue+secondValue+thirdValue;
}
//duniya khatam
//Get Value From Input
function valuechange()
{
	var getinputvalue = input.value;
	if(getinputvalue==""){
randomValue4.innerText="?";

	}
	else{
	randomValue4.innerText= getinputvalue;
  }
}
function result()
{
if(input.value=="")
{
}
     else{
       randomValue4.innerText=input.value;
       randomValue4.style.color="brown";
       check.style.display="none";
       retry.style.display="block";
       var getinputvalue = input.value;

       if(getinputvalue==fourthValue)
       {
       	right.style.color ="green";
       	right.innerText="Congratulation!";
       	right.style.display="block";
      
       }
       else
       {
        wrong.style.display="block";
        wrong.style.color ="rgba(255,0,0,0.8)";
       	wrong.innerText="Wrong! Right Answer Is = "+fourthValue;
       }}
}
function retry1(){
       	check.style.display="block";
       	wrong.style.display="none";
       	right.style.display="none";
duniya();
}