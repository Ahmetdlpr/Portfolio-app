/* Tanımlanan öğeler */
let Loginbtn=document.querySelector(".Loginbtn");
let Logininput=document.querySelector(".Logininput");
let Loginpage=document.querySelector(".Loginpage");
let Logininfo=document.querySelector(".Logininfo");
let appcontainer=document.querySelector(".appcontainer");
let App=document.querySelector(".App");
let mainpage=document.querySelector(".mainpage");
let Profile=document.querySelector(".Profile");
let profilebtn=document.querySelector("#profilebtn");
let Username=document.querySelector(".Username");
let Screencontainer=document.querySelector(".Screencontainer");
let giriskontrol=false;



/* Silenen öğeler*/ 
appcontainer.remove();
Profile.remove();




/* Tanımlanan değişkenler*/ 
let karaktersayac=0;
let username;








/* Fonksiyonlar*/
const Login=()=>{
usernameinput=Logininput.value;

    for(let i=0; i<Logininput.value.length; i++)
    {
        
        karaktersayac++;
    }




             /* Login */
              if(karaktersayac<20 && karaktersayac!=0)
                {
             
             
                Loginpage.remove();
                App.appendChild(appcontainer);
                Username.textContent="Kullanıcı adı"+usernameinput;



              /* Profile page */ 
               const Profileadd=()=>{
                mainpage.remove();

                Screencontainer.appendChild(Profile);
               }
             





             
                /*Event listenerlar*/
                profilebtn.addEventListener("click",Profileadd); 
                }










         /* Login Error*/ 
         else 
        {
            Logininfo.textContent="Karakter sınırı aşıldı kullanıcı adınızı girerken 20 karakter kullanabilirsiniz";
            karaktersayac=0
            
         }


        /*-----Login Error 2--------*/         
        if(Logininput.value.length==0)
        {
            Logininfo.textContent="Giriş yapmak için kullanıcı adı girmeniz gerekir...";
          
        }




}




/* Eventlistenerlar*/
Loginbtn.addEventListener("click", Login);