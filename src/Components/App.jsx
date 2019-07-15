import React from 'react';
import Fetch from './Fetch.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            temperature: "",  
            humidity:"",
            weather: ""  , 
            icon:"",  
            val: "",   
            name: "",     
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(fetchValue){        
        const API_key = '48d33ecac4f045baaaa80bc10b7783eb'                
        const searchLink =`https://api.openweathermap.org/data/2.5/weather?q=${fetchValue}&appid=${API_key}&units=metric`;
        
        fetch(searchLink)
        .then(results => {
                return results.json();
            })
        .then(data => {
            this.setState({
                temperature : data.main.temp,
                humidity : data.main.humidity,
                weather : data.weather[0].main,
                icon: data.weather[0].icon,      
                name : data.name,      
            });           
            
        }).catch(err=>{

            console.log(err)
        })
    }

   
    render() {
        const src = `http://openweathermap.org/img/w/${this.state.icon}.png`
        return (
            
            <div>
                <Fetch handleClick = {this.handleClick}/>
                
                <div className="table">
                    <div className="name">{this.state.name}</div>
                    <div className="weather">
                        {this.state.weather}
                        <div className="icon">
                            <img src= {src} alt=""/>
                        </div>
                    </div>
                    <div className="temperature">{this.state.temperature}°</div>
                    <div className="humidity">{this.state.humidity}%</div>
                   
                </div>
            </div>
        )
    }
}

export default App;
