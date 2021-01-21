import React, { Component } from 'react';
import axios from 'axios';
import classes from './Advice.module.css';

class Advice extends Component {
    state = { advice:'' }

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip

            this.setState({advice});
        })
        .catch((error) => {

        })
    }
    render() { 
        const {advice} = this.state;
        return ( 
            <div className={classes.App}>
                {/* <h1 className={classes.Title}>Advice App</h1> */}
                <div className={classes.Card}>
                    <h1 className={classes.Heading}>{ advice } </h1>
                    <button className={classes.Btn} onClick={this.fetchAdvice}>
                        <span>more advice</span>
                    </button>
                </div>
                
            </div>
            
         );
    }
}
 
export default Advice;