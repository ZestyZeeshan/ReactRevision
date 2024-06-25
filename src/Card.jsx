import Profilepic from './assets/Profile.png'

function Card(){

    return(
        
        <div className="card">
            <img className='image' src={Profilepic} alt="Photo"></img>
            
            <h2>Zesty</h2>
            <p>helo lets brushnup React</p>

        </div>
        
        

    );
}
export default Card