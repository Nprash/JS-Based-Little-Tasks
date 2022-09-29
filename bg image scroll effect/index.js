const backgroundimage = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateimage();
})

updateimage=()=>{
    backgroundimage.style.opacity = 1-window.pageYOffset/500; //it means when scroll down vertically or Y axis it show the opacity effect on the baground image
    // if we remove window.pageYoffset it wont work opacity while scroll down; opacity means to reduce visibility or make it transparent the less you give i will reduce the transparency of the image
    // console.log(window.pageYOffset, 1-window.pageYOffset/900) //pageYoffset means it returns pixels of the page when scroll y axis that means it increases the pixel reading when scroll down
    backgroundimage.style.backgroundSize = 160 - window.pageYOffset/12 +"%"; //while scroll down the image zoom out and shows so many images by deviding
    // console.log(160 - window.pageYOffset/12 +"%") // while scrolling image zoom levels dereasing from 160% to go on even on minus values in %age thats why we suppose to devide by with some number, then we stop too much reducing zoom level in %age

}