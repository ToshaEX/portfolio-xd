import React, { useEffect, useRef } from 'react'
import { pageWrapper, titleWrapper } from '../../wrapper';
import {motion, useInView, useScroll, useTransform} from 'framer-motion'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useParallax } from '../../hooks/useParralax';

const LearningPage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [300, -300]);

     const x1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
     const scalex1 = useTransform(scrollYProgress, [0, 3], [0, 3]);
//   const scalex2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

useEffect(()=>{
    const unsubscribe = scalex1.on("change", (latest) => {
    console.log("Parallax Y:", latest);
  });
  return () => unsubscribe();
},[y])

const cardContainer={
    offscreen:{
        height:"500px",
        background:"#415395",
    },
    onscreen:{
        height:"500px",
        background:"#000",
        // translateY:'500px'
    }
}

  return (
    
    <motion.div style={{height:'1000vh',display:'flex',flexDirection:'column',gap:'20rem'}}>
        <motion.div
        style={{background:"#000"}}
        ref={ref}
        >
        <div style={{ display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'2rem'}}>
           <motion.div key={'1'}
            style={{width:'250px',height:'250px',background:'#fd45',display:'flex',justifyContent:'center',alignItems:'center',
            // x:x1,
            y:y,
            scale:scalex1
            }} 
            >
        
           Left
           </motion.div> 
           <motion.div key={"2"} style={{width:'250px',height:'250px',background:'#fd45',display:'flex',justifyContent:'center',alignItems:'center',
        //    x:x2,
           y:y,
           scale:scalex1
           }} >
           Right
           </motion.div> 
        </div>
        </motion.div>
        
    </motion.div>
  )
}

export default pageWrapper(titleWrapper(LearningPage),'learnings');
