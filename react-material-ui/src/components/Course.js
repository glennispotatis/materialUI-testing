import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Course = (props) => {
    console.log(props);
    return(
        <div>
            {props.course ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.course.Image}
                        title={props.course.Title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h1" component="h2">
                                {props.course.Title}
                            </Typography>
                            <Typography component="p">
                                {props.course.Description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href={props.course.URL} target="_blank">
                                Go to site
                            </Button>
                        </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Course;