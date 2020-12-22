import { makeStyles } from '@material-ui/core/styles';

const NextClassTimerStyles = {
    timeContainer: {
        backgroundColor: '#ececf9',
        display: 'inline-block',
        padding: 8,
    }
};

export const useStyles = makeStyles((theme) => ({
    ...NextClassTimerStyles,
    calendar: {
        width: '100%',
        border: 'none',
        '& button': {
            border: '1px solid #ededed'
        },
        '& abbr': {
            textDecoration: 'none',
        },
        '& .react-calendar__month-view__weekdays__weekday': {
            border: '1px solid #ededed',
            fontSize: '0.85rem',
            fontWeight: '500',
        }
    }
}));