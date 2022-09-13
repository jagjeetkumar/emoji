import Emoji from "./emoji"
import images from "./data"

function Card(){
     
    const type = 1;
    const radius = 12;
   const start = -90;
   const num = images.length;
   console.log(num)
  const slice = 360 * type / num;
  console.log(slice);
    return(
        <>
        
        <ul className="cards">
            {images.map((item ,index) =>{
              const  rotate = slice * index + start;
             
              const rotateReverse = rotate * -1;
            
              const rotatecss =  
              { transform: 'rotate(' + rotate + 'deg) translate(' + radius + 'em) rotate(' + rotateReverse + 'deg)'}
              ;
              
                return(
                 
 <Emoji url = {item.image} name = {item.name} rot={rotatecss} key={index}/>
        )    })}
        
        </ul>
        </>
    )
}
export default Card