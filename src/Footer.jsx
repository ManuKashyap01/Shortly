import React from 'react'
import boostbg from '/bg-boost-mobile.svg'
import facebook from '/icon-facebook.svg'
import twitter from '/icon-twitter.svg'
import pinterest from '/icon-pinterest.svg'
import insta from '/icon-instagram.svg'
const Card=({item})=>{
    return (
        <div className='flex flex-col md:text-sm md:items-start md:flex-1 gap-2 mb-8 items-center'>
            <h1 className="font-bold text-[#fff] mb-2">{item.title}</h1>
            {item.links.map((x)=>{
                return <p className="text-gray">{x}</p>
            })}
        </div>
    )
}
const Footer = () => {
    const options=[
        {
            title:'Features',
            links:['Link Shortening','Branded Links','Analytics']
        },
        {
            title:'Resources',
            links:['Blog','Developers','Support']
        },
        {
            title:'Company',
            links:['About','Our Team','Careers','Contact']
        }
    ]
    const social=[facebook,twitter,pinterest,insta]
  return (
    <div>
        <div style={{backgroundSize:'cover'}} className='flex bg-boost_mb md:bg-boost flex-col text-[#fff] items-center gap-4 py-20 bg-dark_violet'>
            <h1 className=" font-bold md:text-3xl text-xl">Boost your links today</h1>
            <button className="bg-cyan md:text-lg rounded-[45px] px-8 py-2">Get Started</button>
        </div>
        <div className="flex p-10 md:items-start flex-col md:flex-row bg-vdark_violet pb-10 text-[#fff]">
            <h1 className="text-3xl md:basis-[35%] text-center mb-10">Shortly</h1>
            {options.map((item)=>{
                return <Card item={item}/>
            })}
            <div className="flex flex-1 md:gap-5 flex-row justify-center gap-3">
                {social.map((item)=>{
                    return <img src={item} alt="" />
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer