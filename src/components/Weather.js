import { useState } from 'react'
import axios from "axios";

import Change from './StyledBackground'


function Weather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=873d1cc0664b0906ea3933a77036a3c8`

    const searchLocation = (event) => {
         if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })

        }
    };
    

    return (
        <div className='flex flex-col justify-center space-y-10 mt-6 mx-auto px-2 text-stone-50 max-w-sm sm:mx-auto'>
            <div className='flex justify-center'>
                <input
                    type="text"
                    value={location}
                    placeholder='Enter Location in USA'
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    className="border-2 text-neutral-500 border-sky-900 w-2/3 rounded-lg px-2 py-2"
                />
            </div>
            <div>
                    <div className="flex flex-col px-5 pb-6 pt-6 rounded-2xl" style={{backgroundColor: "#1A2033"}}>
                        <div className="content-start relative">
                            <div className="mb-10"><p className="uppercase text-3xl">{data.name}</p></div>
                            <div className=" ml-4">{data.main ? <Change background={data.weather[0].main}></Change> : null}</div>
                            <div className="mt-20">{data.main ? <p className="text-5xl">{data.main.temp}&#8457;</p> : null} </div>
                            <div className=" absolute top-16 rotate-180 right-0 text-2xl" style={{ writingMode: "vertical-rl" }}>{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
                        </div>
                        {data.name !== undefined &&
                            <div className="grid grid-cols-3 border-2 border-sky-600 text-center text-lg rounded-lg mt-16">
                                <div className="border-r-2 p-2 border-sky-600 ">{data.main ? <p>{data.main.humidity}%</p> : null}<p>Humidity</p></div>
                                <div className="border-r-2 p-2 border-sky-600 ">{data.wind ? <p>{data.wind.speed}Mph</p> : null}<p>Wind</p></div>
                                <div className="p-2 "><p>0</p><p>UVIndex</p></div>
                            </div>
                        }
                    </div>
            </div>
            </div>
    )
} 

            export default Weather;