import go from './images/go.png';
import enter from './images/enter.png'
function Footer(){
 return(
    <>
    <div className="footer">
    <div className="firstbutton">
    <img src={enter} alt='go'></img>
    </div>
     <div className="secondbutton">
<img src={go} alt='go'></img>
     </div>
    </div>
    </>
 )
}
export default Footer;