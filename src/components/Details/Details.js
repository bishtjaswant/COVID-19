import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Countries from '../Countries/Countries';
import  './Details.css';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state={
            global:[],
            countries:[],
            date:null,
            loading:false
        }
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
        .then(response=>response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                global:data.Global,
                countries:data.Countries,
                date:data['Date'],
            });
            this.setState({loading:true});

        }).catch((err) => {
            console.error(err);
        });
    }
    
    
    render() {
    
        // check all content being loaded or not
        if (this.state.loading==false) {
            return <small>data being intializing........</small>
        }
        return (
            <div className="container">
              <Summary  summary={this.state.global} date={this.state.date} countries={this.state.countries}  />
              <Countries countries={this.state.countries} />
            </div>
        );
    }
}

export default Details;