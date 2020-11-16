
//Alec Meyer Profile
import React, {Component} from 'react';
import './Profile.css';
import Login from '../Login/Login.js'
import { Redirect } from 'react-router-dom'
import ReactDOM from "react-dom";
import UserStore from '../../stores/UserStore';

class Profile extends Component {
	constructor(props) {
        super(props);
		this.profilePictureRef = React.createRef();

		this.state = {
				Stats: [
				  {
						"Win": 0,
						"Lose": 0
					},
				],
				logout: false
			};
			this.doLogout = this.doLogout.bind(this);
		}

	 renderTableData() {
         return (

            <tr>
               <td>{UserStore.win}</td>
               <td>{UserStore.lose}</td>
            </tr>
         )
   }

   renderTableHeader() {
      let header = Object.keys(this.state.Stats[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

	 doLogout(){
	 	this.setState({logout: true});
	 }

render() {
  const { redirect } = this.setState;

	if (this.state.logout){
		return (<Redirect to={'/login'}/>)
	}

return (
	<div className="row">
		<div className="medium-12 columns">
			<h2 id="welcomeText">Profile: {UserStore.username}</h2>
			<img src="pfp.png" alt="PFP place holder"></img>
			<table id='Stats'>
			   <tbody>
			   <tr>{this.renderTableHeader()}</tr>
				  {this.renderTableData()}
			   </tbody>
			</table>
			<input type="submit" className="button" value="logout" onClick={this.doLogout}/>
		</div>
	</div>
);
}


}
export default Profile;
