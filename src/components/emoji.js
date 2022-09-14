
function Emoji(props){
console.log(props.rot)
const widths =  props.rotate == "-90" ? "100%" : "65px" ;
    return(
        <>
           <li style={props.rot}>
    <img src={process.env.PUBLIC_URL +props.url}   style={{width : widths}}/>
    </li>

    </>
    )
}
export default Emoji;