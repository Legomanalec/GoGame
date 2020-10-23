
//Alec Meyer Profile
import React, {Component} from 'react';
import './Profile.css';
import Login from '../Login/Login.js'
import { Redirect } from 'react-router-dom'
import ReactDOM from "react-dom";


class Profile extends Component {
	constructor(props) {
        super(props);
		this.profilePictureRef = React.createRef();
		
		
		this.state = {
				Stats: [
				  {
						"Rank": 2,
						"GamesCount": 203,
						"AccountDate": 2008,
					},
				]
			};	
		}
	
	
	 renderTableData() {
      return this.state.Stats.map((Stats, index) => {
         const {Rank, GamesCount, AccountDate} = Stats 
         return (	

            <tr>
               <td>{Rank}</td>
               <td>{GamesCount}</td>
               <td>{AccountDate}</td>
            </tr>
         )
      })
   }
   
   renderTableHeader() {
      let header = Object.keys(this.state.Stats[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   
   

render() {
  const { redirect } = this.setState;

return (
	<div className="row">
		<div className="medium-12 columns">
			<h2 id="welcomeText">Profile</h2>
			<img src="pfp.png" alt="PFP place holder"></img>
			<table id='Stats'>
			   <tbody>
			   <tr>{this.renderTableHeader()}</tr>
				  {this.renderTableData()}
			   </tbody>
			</table>		
		</div>
	</div>
);
}


}
export default Profile;