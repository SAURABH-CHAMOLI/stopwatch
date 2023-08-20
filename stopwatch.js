let hr=document.querySelector('.hour');
let min=document.querySelector('.minute');
let sec=document.querySelector('.second');

let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');

let time=[0,0,0];

let disabled=0;
btn1.addEventListener('click',()=>{
    if(disabled==0) {
    btn1.classList.add('disabled');
    btn2.classList.remove('disabled')
     timer=setInterval(()=>{
        let s=++time[2];
        sec.innerText=s.toString().padStart(2,"0")
        if(time[2]==60) {
            time[2]=0;
            let m=++time[1];
            min.innerText=m.toString().padStart(2,"0").padEnd(4,": ")
            
        }
        if(time[1]==60) {
            time[1]=0;
            let h=++time[0];
            hr.innerText=h.toString().padStart(2,"0").padEnd(4,": ")
            
        }
        console.log(time)
        disabled=1;
        console.log(disabled)
    },1000)
    
}
})

btn2.addEventListener('click',()=>{
    btn2.classList.add('disabled')
    clearInterval(timer)
    btn1.classList.remove('disabled')
    disabled=0;
    

})

btn3.addEventListener('click',()=>{
    btn1.classList.remove('disabled')
    btn2.classList.remove('disabled')
    hr.innerText="00".padEnd(4,": ");
    min.innerText="00".padEnd(4,": ");
    sec.innerText="00";
    clearInterval(timer);
    disabled=0;
    time=[0,0,0];
    
})

