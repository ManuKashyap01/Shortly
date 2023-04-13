import React,{useState} from 'react'
import {RxHamburgerMenu,RxCross1} from 'react-icons/rx'
import { useMediaQuery } from '@material-ui/core'
const Sidebar=()=>{
    const options=['Features','Pricing','Resources']
    return (
        <div className="bg-dark_violet mx-4 rounded-[10px] p-5 text-[#fff] z-[10] absolute top-[100%] left-0 right-0 flex flex-col items-center gap-6 text-white">
            {options.map((item)=>{
                return <p>{item}</p>
            })}
            {/* <div className='bg-white min-h-[5px]'></div> */}
            <p className='border-t-[1px] border-gray w-[90%] text-center pt-4'>Login</p>
            <p className="bg-cyan rounded-[50px] w-[90%] text-center py-2">Sign Up</p>
        </div>
    )
}
const Temp=({nav,setnav})=>{

}
const Header = () => {
    const options=['Features','Pricing','Resources']
    const [nav, setnav] = useState(false)
    const media=useMediaQuery('(min-width:600px)')
    console.log('media',media)
  return (
    <div className='max-w-[1024px] mx-auto flex py-5 px-3 gap-4 items-center relative'>
        <h1 className="font-bold text-3xl md:mr-3 opacity-[0.8]">Shortly</h1>
        {!media && <>
        {nav===false?<RxHamburgerMenu onClick={()=>{
            setnav(true)
        }} className='text-3xl ml-auto cursor-pointer opacity-[0.8]'/>
        :<RxCross1 onClick={()=>{
            setnav(false)
        }} className='text-3xl ml-auto cursor-pointer opacity-[0.8]'/>
        }
        {nav && <Sidebar/>
        }
        </>}
        {media && <>
            <div className='flex gap-4'>
                {options.map(item=>{
                    return <p className='text-gray'>{item}</p>
                })}
            </div>
            <div className='flex ml-auto gap-4'>
                <button className="text-gray">Login</button>
                <button className="text-[#fff] bg-cyan px-2 py-1 rounded-[35px]">Sign Up</button>
            </div>
        </>}

    </div>
  )
}

export default Header