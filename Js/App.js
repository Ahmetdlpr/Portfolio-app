let Loginbtn=document.querySelector(".Loginbtn");
let Logininput=document.querySelector(".Logininput");
let Loginpage=document.querySelector(".Loginpage");
let Logininfo=document.querySelector(".Logininfo");
Loginpage.remove();
let karaktersayac=0;
const Login=()=>{
let username=Logininput.value;

    for(let i=0; i<Logininput.value.length; i++)
    {
        
        karaktersayac++;
    }

              if(karaktersayac<20)
                {
                Loginpage.remove();
                    

                           


                }

        else 
        {
            Logininfo.textContent="Kullanıcı adınızı girerken 20 karakter kullanabilirsiniz";
        }
          
        if(karaktersayac==0)
        {
            Logininfo.textContent="Kullanıcı adı giriniz";
        }

}














Loginbtn.addEventListener("click", Login);