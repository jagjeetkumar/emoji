import images from "./data";
function Info(){
    return(

        <>
        {
            images.map((item , index) =>{
                return(
                    <div className="infos">
                        <img src={process.env.PUBLIC_URL +item.image} />
                    </div>
                )
            })
        }
        </>
    )
}
export default Info;