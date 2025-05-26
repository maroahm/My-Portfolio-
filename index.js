const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


// function PageTransitions(){
//     for(let i = 0; i < sectBtn.length; i++)
//     {
//         sectBtns.addEventListener('click', function(){
//             let currentBtn = document.querySelector('.active-btn');

//             currentBtn.classList.remove('active-btn');
//             sectBtn[i].classList.add('active-btn');
//         });
//     }
// }

// PageTransitions();


document.addEventListener("DOMContentLoaded", function(){

    const buttons = document.querySelectorAll('.control');
    buttons.forEach(btn =>{
        btn.addEventListener("click", function(){
            document.querySelector('.active-btn')?.classList.remove('active-btn');
            this.classList.add('active-btn');
        });
    });

    allSections.addEventListener('click', (e)=>{

        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themebtn = document.querySelector('.theme-btn');
    themebtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
});