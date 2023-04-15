import React,{useState} from 'react'
import workbg from '/illustration-working.svg'
import inputbg from '/bg-shorten-mobile.svg'
import brand from '/icon-brand-recognition.svg'
import record from '/icon-detailed-records.svg'
import custom from '/icon-fully-customizable.svg'
import useIsTabVisible from './tab'
import { useMediaQuery } from '@material-ui/core'
const Card=({item,ind,last=false})=>{
    let orderclass=''
    switch(ind) {
        case 0:
            orderclass='md:self-start'
            break;
        case 1:
            orderclass='md:self-center md:justify-self-center'
            break;
        case 2:
            orderclass='md:self-end'
            break;
    }
    return (
        <div className={'my-8 max-w-[375px] px-4 flex flex-col items-center relative '+orderclass}>
            <div className='bg-[#fff] rounded-lg'>
                <div className='bg-dark_violet  rounded-full translate-x-[50%] translate-y-[-50%] p-4 w-fit'><img src={item.src} alt="" /></div>
                <h1 className="text-xl mt-[-20px] font-bold md:text-start md:px-4  text-center">{item.title}</h1>
                <p className="text-gray text-xs md:px-4 px-6 pt-4 md:text-start pb-6 text-center">{item.desc}</p>
            </div>
            {!last && <div className='bg-cyan md:top-[50%] md:translate-x-[100%] md:translate-y-[-100%] md:right-[0] absolute md:min-w-[150px] md:min-h-[10px]  translate-y-[100%] z-[-1] left-[50%] min-h-[150px] w-[10px]'></div>}
        </div>
    )
}
const UrlCard=({item})=>{
    const [iscopy, setiscopy] = useState('Copy')
    const visible=useIsTabVisible(setiscopy)
    const media=useMediaQuery('(min-width:600px)')
    console.log(item)
    return (
        <div className="bg-[#fff] mb-4 rounded-md md:items-center md:gap-4 p-3 text-xs gap-2 md:flex-row flex flex-col">
            <p className='overflow-x-scroll scroll flex-1'>{item.ori}</p>
            <p className="text-cyan">{item.short}</p>
            <button onClick={()=>{
                navigator.clipboard.writeText(item.short)
                setiscopy('Copied')
            }} className={`text-[#fff] md:px-6 rounded-md py-[7.5px] `+(iscopy==='Copy'?'bg-cyan':'bg-dark_violet')}>{iscopy}</button>
        </div>
    )
}
const Hero = () => {
    const [url, seturl] = useState('')
    const [urls, seturls] = useState(JSON.parse(localStorage.getItem('urls')) || [])
    const handleClick=()=>{
        fetch('https://api.shrtco.de/v2/shorten?url='+url)
        .then(res=>res.json())
        .then(data=>{
            if(data.error_code){
                alert('Some error has occured')
                seturl('')
                return;
            }
            const newurls=[...urls,{
                ori:url,
                short:data.result.full_short_link
            }]
            localStorage.setItem('urls',JSON.stringify(newurls))
            seturls(newurls)
            seturl('')
        })
    }
    const options=[
        {
            title:'Brand Recognition',
            desc:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
            src:brand
        },
        {
            title:'Detailed Records',
            desc:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            src:record
        },
        {
            title:'Fully Customizable',
            desc:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            src:custom
        }
    ]

    console.log('url',url)
    console.log('urls',urls)
  return (
    <div>
        <div className='relative md:ml-[15%] flex md:items-start items-center md:mt-8 md:flex-row flex-col'>
            <img src={workbg} className='md:flex-1 translate-x-[25%] md:order-2 md:w-[45%] w-[475px]'  alt="" />
            <div className='flex flex-col md:flex-1 md:order-1  md:items-start items-center gap-3'>
                <h1 className="text-3xl md:text-5xl md:text-start text-center mt-4 font-bold">More than just shorter links</h1>
                <p className="text-gray md:text-lg md:text-start text-center text-md md:px-0 px-4">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="bg-cyan md:text-lg text-[#fff] mt-3 tracking-[1px] rounded-[25px] py-2 px-6">Get Started</button>
            </div>
        </div>
        <div className='bg-gray_violet/[0.2]'>
        <div className="relative max-w-[1024px] mx-auto pb-6">
            <div style={{backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className={`md:bg-shorten bg-shorten_mb md:bg-right bg-[left_4rem_bottom_1rem] md:px-10 md:py-6 flex bg-dark_violet md:flex-row flex-col p-4 mt-28 translate-y-[-50%] md:mx-20 mx-3 gap-4 rounded-[10px]`}>
                <input type="text" value={url} onChange={(e)=>seturl(e.target.value)} className='py-[10px] md:text-lg outline-none border-none rounded-md md:flex-1 text-sm px-3' placeholder='Shorten a link here...' name="" id="" />
                <button onClick={handleClick} className='bg-cyan text-[#fff] py-[7.5px] md:px-6 md:text-lg rounded-md'>Shorten It!</button>
            </div>
            {urls.length!==0 && 
                <div className='mt-[-25px] md:mx-10 px-4 mb-6'>
                    <button onClick={()=>{
                        localStorage.setItem('urls',JSON.stringify([]))
                        seturls(JSON.parse(localStorage.getItem('urls')))
                    }} className='text-cyan underline mb-4'>Clear all</button>
                    {urls.map((item)=>{
                        return <UrlCard item={item}/>
                    })}
                </div>
            }
            <div className='px-3'>
                <h1 className="text-2xl md:text-4xl md:mt-20 md:mb-4 font-bold text-center">Advanced Statistics</h1>
                <p className="text-gray mt-3 max-w-[450px] mb-8 md:mx-auto text-sm text-center">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className="flex md:flex-row md:min-h-[350px] flex-col">
                {options.map((item,ind)=>{
                    if(ind===options.length-1) return <Card item={item} ind={ind} last/>
                    else return <Card ind={ind} item={item}/>
                })}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero