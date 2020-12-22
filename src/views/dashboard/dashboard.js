import React from 'react';

// Core Components
import CustomCard from '../../components/customCard/CustomCard';
import CustomCardBody from '../../components/customCard/CustomCardBody';
import Posts from './posts';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Material-UI Core
import Grid from '@material-ui/core/Grid';
// Material-UI Icons
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
// Charts
import ChartistGraph from "react-chartist";
import { barChart } from './charts';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
// Styles
import { useStyles } from './style';

import { POST_DATA } from '../../constants/postData';

const NextClassTimer = () => {
    const classes = useStyles();
    return (
        <div className={classes.timeContainer}>
            <span>01 : 20 : 00</span>
        </div>
    );
}

const CustomCardHead = (props) => {
    const classes = useStyles();
    return (
        <div>
            <h3>{ props.title }</h3>
            <hr/>
        </div>
    );
};

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
        }
    ]
};

const line = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            //label: 'Rainfall',
            fill: true,
            //lineTension: 0.5,
            backgroundColor: '#f3f2ff',
            borderColor: '#d5d1f9',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
};
const line2 = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            //label: 'Rainfall',
            fill: true,
            //lineTension: 0.5,
            backgroundColor: '#ffece0',
            borderColor: '#ffcead',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
};
const line3 = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            //label: 'Rainfall',
            fill: true,
            //lineTension: 0.5,
            backgroundColor: '#e7fcea',
            borderColor: '#cbfcd7',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
};

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div style={{ paddingTop: 16}}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <CustomCard>
                        <Line data={ line } />
                    </CustomCard>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <CustomCard> <Line data={ line2 } /> </CustomCard>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <CustomCard> <Line data={ line3 } /> </CustomCard>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item  lg={4}  sm={12} xs={12}>
                    <Grid item lg={12}>
                        <CustomCard>
                            <CustomCardBody>
                                <AccessTimeTwoToneIcon />
                                <h4>Next</h4>
                                <p>Lorem ipsum</p>
                                <NextClassTimer />
                            </CustomCardBody>
                        </CustomCard>
                    </Grid>
                    <Grid item lg={12} sm={12} xs={12} style = {{ marginTop: 16 }}>
                        <CustomCard>
                            <CustomCardBody>
                                <CalendarTodayTwoToneIcon />
                                <h4>Up Comming Event</h4>
                                <p>Lorem ipsum</p>
                            </CustomCardBody>
                        </CustomCard>
                    </Grid>
                </Grid>
                <Grid item lg={8} sm={12} xs={12}>
                    <CustomCard style = {{ height: '100%' }}>
                        <CustomCardBody>
                            {/* <ChartistGraph
                                style = {{ height: '100%' }}
                                className="ct-chart"
                                data={barChart.data}
                                type="Bar"
                                options={barChart.options}
                                responsiveOptions={barChart.responsiveOptions}
                                // listener={barChart.animation}
                            /> */}
                            <Bar data={barChart.data} />
                        </CustomCardBody>
                    </CustomCard>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item lg={6} sm={12} xs={12}>
                    <CustomCard style = {{ height: '100%' }}>
                        <CustomCardBody>
                            <CustomCardHead title={ "Attendance" } />
                            <Doughnut data={ data } />
                        </CustomCardBody>
                    </CustomCard>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                    <CustomCard style = {{ height: '100%' }}>
                        <CustomCardBody>
                            <CustomCardHead title={ "Event Calender" } />
                            <Calendar className={ classes.calendar } />
                        </CustomCardBody>
                    </CustomCard>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item lg={12} sm={12} xs={12}>
                    <CustomCard>
                        <CustomCardBody>
                            {
                                POST_DATA.map( post => (
                                    <>
                                    <Posts key={post.id} {...post} />
                                    { POST_DATA.length > 1 ? <hr/> : null }
                                    </>
                                ))
                            }
                        </CustomCardBody>
                    </CustomCard>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;