
interface DescriptionProps{
  text:string
}

const Description = ({text}:DescriptionProps) =>{
  
  return (
    <p className="p-[2px] text-[12px] font-inter md:text-sm lg:text-2xl text-center  text-white">{text}</p>
      )
}

export default Description;


