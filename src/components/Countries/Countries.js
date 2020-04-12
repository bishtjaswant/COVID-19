import React, { Component } from 'react';
import './Countries.css';

class Countries extends Component {
 
    
    render() {
       
         const {countries}=this.props;
        return (
    
                <table className="countries">
                    <thead>
                        <tr>
                              <th>country</th>
                              <th>code</th>
                              <th>new  confirmed</th>
                              <th>total confirmed</th>
                              <th>new  deaths</th>
                              <th>new recovered</th>
                              <th>total recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       countries.map((country)=>{
                            return (<tr key={country.Country}>
                            <td> {country.Country} </td>
                            <td> {country.NewConfirmed} </td>
                            <td> {country.TotalConfirmed} </td>
                            <td> {country.TotalDeaths} </td>
                            <td> {country.NewDeaths} </td> 
                            <td> {country.NewRecovered} </td>
                            <td> {country.TotalRecovered} </td>                             
                        </tr>)
                       })  
                   } 
                      
                    </tbody>
                </table>
    
        );
    }
}

export default Countries;