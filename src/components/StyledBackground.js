
import Clouds from '../images/clouud.png'
import Rain from '../images/rain.png'
import Snow from '../images/snow.png'
import Storm from '../images/storm.png'
import Sunny from '../images/sunny.png'



const Change = (props) => props.background === "Clouds" ? <img src={Clouds} alt='cloud' width={200} height={200}/>
                    : props.background === "Clear" ? <img src={Sunny} alt='sunny' width={200} height={200}/>
                    : props.background === "Rain" ? <img src={Rain} alt='rain' width={200} height={200}/>
                    : props.background === "Snow" ? <img src={Snow} alt='snow' width={200} height={200}/>
                    : props.background === "Thunderstorm" ? <img src={Storm} alt='thunderstorm' width={200} height={200}/> 
                    : '';

export default Change;