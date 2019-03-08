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
                  <Typography variant ="h1" className="title">
                    {"Let's write some code!"}
                  </Typography>
                  <Typography variant ="h5" className="text">
                    Congratulations on getting this far if people are still struggling: help them out or 
                    take a look at the code in 'components'
                  </Typography>

               



                </CardContent>
               </Card>;
	}
}
export default Tutorial