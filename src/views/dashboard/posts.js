import React from 'react';
import Typography from '@material-ui/core/Typography';

const Posts = (props) => {
    return (
        <div style = {{ padding: '16px 0' }}>
            <div style = {{ display: "flex" }}>
                <div style = {{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">{ props.author }</Typography>
                    <Typography variant="body"> { props.role } </Typography>
                </div>
                <div>
                    { props.date }
                </div>
            </div>
            <div>
                <h4 variant="subtitle1">
                    <b>
                        { props.title }
                    </b>
                </h4>
                <p>
                    { props.message }
                </p>
            </div>
        </div>
    );
};

export default Posts;