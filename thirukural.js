//Html Dom ELements
document.body.innerHTML=`<div class="main-container">
                         <div class="image">
                         <img src="https://wallpapercave.com/wp/wp5489522.png" class="img-fluid" alt="Responsive image">
                         </div>
                        <input class="input1"  type="text" placeholder="Enter the  Thirukural Number">
                        <p class="validate"></p>
                        <button type="submit" onclick="getdata();validator();" class="btn btn-primary">Submit</button>
                        <div class="details">
                        </div>
                        </div>`

//Getting data asynchronously from rest api                        
async function getdata(){
    try{
    let input=document.querySelector(".input1").value;  
    let para=document.querySelector(".validate");
    para.style.display="none";


      
    const data=await fetch(`https://api-thirukkural.vercel.app/api?num=${input}`);
    const user= await data.json();
    const details=document.querySelector(".details");
    details.innerHTML=`<p>Number:${user.number}</p>
                       <p>Expression:${user.eng}</p>                 
                       <p>Explanation:${user.eng_exp}</p>` 
    }
    catch(e)
    {
        console.log(e,"Error");
    }   
}


//validating input box
function validator(){
    let para=document.querySelector(".validate");
    let inp=document.querySelector(".input1").value; 
    const details=document.querySelector(".details");
    if (isNaN(inp)||inp<=0)

    {   para.style.display="block";
        para.innerHTML="Enter a number greater than zero";
        details.innerHTML="";
        
    }
}








