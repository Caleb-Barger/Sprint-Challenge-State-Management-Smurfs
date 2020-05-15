import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 400,
        marginTop: 30,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto"
        // margin: "0 auto"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SmurfCard = props => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const { smurf } = props


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    SMURF NAME: {smurf.name}
                </Typography>
                <Typography variant="body2" component="p">
                    AGE: {smurf.age}
                    <br />
                    HEIGHT: {smurf.height}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit Smurf</Button>
                <Button size="small">Remove Smurf</Button>
            </CardActions>
        </Card>
    );
}

export default SmurfCard