import React, { useEffect, useState } from 'react'
import ctabg1 from './assets/ctaBG.jpg'
import ctabg2 from './assets/ctaBG2.jpg'
import ctabg3 from './assets/ctaBG3.jpg'
import { motion,AnimatePresence } from 'framer-motion'
const images=[ctabg1,ctabg2,ctabg3]
const Bgselector = ({onClick , isSelected}) => {
  return (
    <div onClick={onClick} className={`w-16 h-2 bg-ghost-white cursor-pointer hover:scale-x-150 duration-200 ease-in-out ${
      isSelected ? 'scale-x-150 opacity-25 backdrop-blur-sm' : ''
    }`}>
    </div>
  )
}



const CTA1 = () => {
  const [selected,setSelected] = useState(0)
  const sectionList = [
    {'title':'Welcome to Ndah Studios','paragraph':"A haven of creativity, where moments transform into timeless art. Established with a passion for capturing the essence of personalities and styles, NDah Studios is more than just a photography studio; it's an experience that elevates the ordinary to the extraordinary.",'bg':ctabg1},
    {'title':"Capturing Nature's Palette","paragraph":"Capturing Nature's Palette",'bg':ctabg2},
    {'title':"Unveiling Timeless Elegance","paragraph":"Discover the elegance and sophistication that only timeless photography can convey...",'bg':ctabg3}
  ]
  const changeSectionAutomatically = () => {
    setSelected((prevSelected) => (prevSelected + 1) % sectionList.length);
  };
  useEffect(() => {
    const intervalId = setInterval(changeSectionAutomatically, 10000); 
    return () => clearInterval(intervalId);
  }, []);

  const Selectors = () => {
    return (
      <div className='flex-1 max-md:hidden flex flex-col gap-y-5 items-end'>
        {images.map((image, index) => (
          <Bgselector
            key={index}
            onClick={() => {
              setSelected(index);
            }}
            isSelected={selected === index}
          />
        ))}
      </div>
    );
  };
  const CTAcomponent = ({title,paragraph,background}) => {
    return (
      <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
       className='h-screen bg-cover bg-center text-ghost-white' style={{ backgroundImage:`url(${background})` }}>
          <div className=' h-screen w-full backdrop-brightness-50 flex flex-wrap justify-center items-center max-lg:px-16 max-md:px-8 px-16 py-16'>
              <div className='flex-1 text-left flex flex-col gap-y-8 '>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className=''>{paragraph}</p>
                <div>
                  <a className=' text-ghost-white font-bold block text-center bg-silver-platium hover:text-eerie-black hover:bg-ghost-white p-4 duration-200 ease-in-out w-96' href='/booking'>Get Started</a>
                </div>
              </div>
              <Selectors/>
          </div>
        </motion.div>
    )
  }
  return (
    <>
    <AnimatePresence>
      {
        selected === 0 ? <CTAcomponent title={sectionList[selected].title} paragraph={sectionList[selected].paragraph} background={sectionList[selected].bg}/>:
        selected === 1 ? <CTAcomponent title={sectionList[selected].title} paragraph={sectionList[selected].paragraph} background={sectionList[selected].bg}/>:
        selected === 2 ? <CTAcomponent title={sectionList[selected].title} paragraph={sectionList[selected].paragraph} background={sectionList[selected].bg}/>:
        <div>no content to display</div>
      }
    </AnimatePresence>
    </>
  )
}

export default CTA1