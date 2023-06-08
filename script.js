const container=document.querySelector(".container");
const btns=document.querySelectorAll(".btn");
const imgList=["2", "3", "4", "5", "1"]

let i=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            i--;
            if(i<0){
                i=imgList.length-1;
            }
            container.style.background = `url(images/${imgList[i]}.jpg) center/cover`         
        }
        else{
            i++;
            if(i===imgList.length){
                i = 0;
            }
            container.style.background = `url(images/${imgList[i]}.jpg) center/cover` 

        }
    })
})