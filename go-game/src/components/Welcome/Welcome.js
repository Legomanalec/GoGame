import React, {Component} from 'react';
import './Welcome.css';

class Welcome extends Component {
render() {
return (
<div className="row">
<div className="medium-12 columns">
<h2 id="welcomeText">Go Game</h2>

<a href="/findGame" className="button success">Find Game<br></br><br></br></a>
<a href="/profile" className="button success">Profile<br></br><br></br></a>
<a href="/login" className="button">Login<br></br><br></br></a>
<a href="/signup" className="button success">Signup<br></br><br></br></a>
</div>
</div>
);
}
}
export default Welcome;
