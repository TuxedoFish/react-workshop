import React from 'react'
// External components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Tutorial extends React.Component {
	render() {
	    return <Card className="tutorial-card">
                <CardContent>
                  <Typography variant ="h1" className="tutorial-title">
                    {"Let's write some code!"}
                  </Typography>

               

               

                </CardContent>
               </Card>;
	}
}
export default Tutorial