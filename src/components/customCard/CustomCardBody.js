import React from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import { useStyles } from './style';

const CustomCardBody = (props) => {
    const classes = useStyles();
    const { className, children, plain, ...rest } = props;
    const cardClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
};

CustomCardBody.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    children: PropTypes.node
};

export default CustomCardBody;