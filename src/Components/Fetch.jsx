import React from 'react'

class Fetch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value : "",
        }

        this.changeInput = this.changeInput.bind(this)  
    }

    changeInput(event){
        this.setState({value: event.target.value})
    }
    
    render() {
        
        return (
            <div className= "search-bar">
                <label>
                    Input City here:
                <input className = "search" type= "text" value= {this.state.value} onChange={this.changeInput}/>
                </label>
                <button className= "btn" type= "submit" value= "Submit" onClick={() => this.props.handleClick(this.state.value)}>Search</button>
            </div>
        )
    }
}

export default Fetch
