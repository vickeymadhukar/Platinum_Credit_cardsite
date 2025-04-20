import React from 'react'
import './Pageonestyle.css'
import Card from './Card'
import {useGSAP} from '@gsap/react'
import  gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttomcomp from './Buttomcomp'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger); 


const Pageone = () => {

useGSAP(()=>{
  const tl = gsap.timeline({
     scrollTrigger:{
      trigger:".page2",
      start:"0% 90%",
      end:"50% 50%",
      scrub:true,
      // markers:true,

     }
  });
  const tl2 = gsap.timeline({
    scrollTrigger:{
     trigger:".page3",
     start:"0% 90%",
     end:"50% 50%",
     scrub:true,
    //  markers:true,

    }
 });

  tl.to("#Platinum_card", {
    top: "148%",
    left: "6%",
    height:"280",
    width:"580",
  });

  tl2.to("#Platinum_card", {
    top: "250%",
    left: "30%",
    rotate:"-90deg",
    shrub:true,
  });

  tl2.from('.cards',{
    top:"350%",
      opacity:0,
      shrub:true,
  })

});
   useGSAP(()=>{
    gsap.from("#Platinum_card",{
     delay:0.5,
      top:"100%",
      left:"50%",
      rotate:"60deg",
      shrub:true,
      opacity:"0",
    });

   
    

   })

   useGSAP(() => {
    gsap.to('#Platinum_card', {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 2,
    });
  });

  return (
    <div>
    <div className='page1'>
       <div className="page-content">
         <div className="heading">
            <h1>Platinum :<span style={{color:"white",fontSize:"6vh"}}>
            Shaping your Financial destiny
              </span></h1>
              <p>Keep you personal money and business finances at peace <br /> Shape the future of your financial decision</p>
              <div className='but'>

            <Buttomcomp text="Get Started"/>
              </div>
         <div><h3>Over 500+ people trusted Platinum in the last week</h3></div>
         </div>
       </div>
       <div className="platinum">
        

        
        <img id='Platinum_card' src="./logo/debitcardimage.png" alt="" style={{height:"400px",width:"800px"}} />
        
        </div>  
    </div>
    <div className="page2">

      <div className="upper2">
      <h1>LEVEL UP YOUR FINANCIAL GAME</h1>
      <p>Discover actionable strategies and tips to enhance your financial prowess.
Elevate your money management skills and pave the way to a more prosperous future.
Whether you're just starting your financial journey or looking to refine your existing knowledge, the right guidance can make all the difference.
Learn how to budget smarter, invest wisely, reduce debt, and build lasting wealth.

      </p>
      <Buttomcomp text="See all"/>
      </div>
      
       <div className="lower2">
<Card  head="Platinum" text='Simplify your wallet with the ability to manage multiple credit cards Providing a convenient , all-in-one solution for streamlined financial control and management'/>
<Card head="Friend & family" text='Transfer money to friend and family free of charge and at lightning speed'/>
<Card head="25+ Currencis" text='25+ other currencies in one app no need to carry them in your pocket'/>

       </div>

    </div>

   

    <div className="page3">

<div className="upper3">
<h1>CONNECT YOUR APP</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores magni quidem culpa deleniti animi praesentium iusto sunt, illo optio voluptas? Accusantium, quibusdam blanditiis? Aliquam molestiae nihil nulla eaque repellat optio.
  
</p>
<Buttomcomp text="hello"/>
</div>

 <div className="lower3">
  <div className='swiper'>
<img  src="./logo/swipe.png" alt="swipeer" style={{height:"600px",width:"500px"}} />
</div>
 </div>

</div>






    
    </div>
  )
}

export default Pageone
