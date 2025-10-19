import React, { useEffect, useRef } from 'react'
import { pageWrapper } from '../../wrapper';
import {motion,  useMotionTemplate, useScroll, useTransform} from 'framer-motion'
import IntroVideo from "../../assets/noticeble.mp4"

const LearningPage = () => {
    const ref = useRef(null);




    const { scrollYProgress } = useScroll({ 
      target: ref,
      offset:["0%","66%"],
      // layoutEffect:false
    });
    const y = useTransform(scrollYProgress, [0,1], [0, 200]);
    const css =  useMotionTemplate`calc(${y}vh)`


useEffect(()=>{
    const unsubscribe = y.on("change", (latest) => {
    console.log("Parallax Y:", latest);
    console.log("offset Y:", y.get());
  });
  return () => unsubscribe();
},[y])



  return (
    
    <motion.div ref={ref} style={{height:'300vh'}}>
        {/* <div style={{height:"4rem"}} /> */}
        <motion.video
         src={IntroVideo} autoPlay loop muted style={{height:'calc(100vh + 64px)',width:'100vw',objectFit:'cover',position:'relative',marginTop:'-64px',
        y:css,
        }}></motion.video>
    </motion.div>
  )
}

export default pageWrapper(LearningPage,'learnings',true);


