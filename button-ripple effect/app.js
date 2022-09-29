const btnEl = document.querySelector('.btn');
btnEl.addEventListener("mouseover", (event)=>{
    // console.log(event.pageX); //we aregetting  x axis value
    // console.log(event.pageY);//we aregetting  y axis value of the page  
    //console.log(event.pageX - btnEl.offsetLeft); // gives the x axis value with respective button not page
    // console.log(event.pageY - btnEl.offsetTop); // gives the x axis value with respective button not page
    // console.log(btnEl.offsetTop)
    const x= (event.pageX - btnEl.offsetLeft);
    const y= (event.pageY - btnEl.offsetTop);
    btnEl.style.setProperty("--xposition", x+"px") /* variable value will be x with px ls*/
    btnEl.style.setProperty("--yposition", y+"px") /* variable value will be x with px ls*/
    // console.log(x,y);
})

// to get the position of mouse pointer on a button