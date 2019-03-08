import React from 'react'
// External components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo_icon from './img/logo.svg';
// Components
import Tutorial from './Tutorial.jsx';

class HelloUCL extends React.Component {
	render() {
	    return <div className="example-react">
	      <AppBar position="static">
	        <Toolbar>
	          <IconButton className="logo" color="inherit" aria-label="Menu">
	            <img src={logo_icon} width="50" height="50"></img>
	          </IconButton>
	          <Typography variant="h6" color="inherit" className="app-bar-name">
	            React-ive app bar
	          </Typography>
	        </Toolbar>
	      </AppBar>

	      <Tutorial />
	    </div>;
	}
}
export default HelloUCL