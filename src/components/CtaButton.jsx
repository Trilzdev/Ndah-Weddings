import React from 'react'

const CtaButton = ({path,text,className,onClick,type}) => {
  return (
    <div className={` cursor-pointer ${className}`} onClick={onClick}>
            <a href={path} className='text-ghost-white font-bold  bg-silver-platium hover:text-eerie-black hover:bg-ghost-white p-4 duration-200 ease-in-out'>{text}</a>
        </div>
  )
}

export default CtaButton