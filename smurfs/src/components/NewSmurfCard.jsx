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
        marginTop: 40,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 40
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

const NewSmurfCard = props => {
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
        </Card>
    );
}

export default NewSmurfCard