import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Course from '../components/Course';
import test from './list.json';

class CoursesList extends Component {
    constructor() {
        super();
        this.state = {
            courses: test
        }
    }

    render(){
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={2} style={{padding: 24}}>
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        );
    }
}

export default CoursesList;