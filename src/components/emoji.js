

function Emoji(props){
console.log(props.rot)
    return(
        <>
           <li style={props.rot}>
    <img src={process.env.PUBLIC_URL +props.url} />
    </li>

    </>
    )
}
export default Emoji;