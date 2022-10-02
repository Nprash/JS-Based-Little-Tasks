const tabs = document.querySelector(".tabs");
const Btns =document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event)=>{ 
    // console.log(event.target.dataset.id)
    const id =event.target.dataset.id;

    if (id){// if id exists
        Btns.forEach((btn) =>{
            btn.classList.remove('live');
            
        });
        event.target.classList.add("live");//if user clicks buttn then live class wil added
        
        articles.forEach((article)=>{
            article.classList.remove('live');
            // console.log(article.classList.remove('live'))
        });
        const element = document.getElementById(id);
        element.classList.add("live")
    }
});