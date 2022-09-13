import logo from './images/logo.png';
import info from './images/info.png';
function Header(){
   
    return(
        <>
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='infoicon'>
  <img src={info} className='info' alt='info' />
            </div>
        </div>
        <div className="header-text">
            <h1>Choose your mojo after this meeting</h1>
        </div>
        </>
    )
}

export default Header;