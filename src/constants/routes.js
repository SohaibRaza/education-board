// Components
import Dashboard from '../views/dashboard/dashboard';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DateRangeIcon from '@material-ui/icons/DateRange';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InsertChartOutlinedTwoToneIcon from '@material-ui/icons/InsertChartOutlinedTwoTone';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';


const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: HomeIcon,
        layout: '/admin',
        component: Dashboard
    },
    {
        path: "/user",
        name: "Profile",
        layout: '/admin',
        icon: PersonOutlineIcon,
    },
    {
        path: "/table",
        name: "Table List",
        layout: '/admin',
        icon: ChatBubbleOutlineIcon,
    },
    {
        path: "/calender",
        name: "Calender",
        layout: '/admin',
        icon: CalendarTodayIcon,
    },
    {
        path: "/noticeboard",
        name: "Notice Board",
        layout: '/admin',
        icon: ListAltRoundedIcon,
    },
    {
        path: "/class-routine",
        name: "Class Routine",
        layout: '/admin',
        icon: DateRangeIcon,
    },
    {
        path: "/live-class",
        name: "Live Class",
        layout: '/admin',
        icon: VideoCallIcon,
    },
    {
        path: "/attendance",
        name: "Attendance",
        layout: '/admin',
        icon: CheckBoxIcon,
    },
    {
        path: "/assessment",
        name: "Assessment",
        layout: '/admin',
        icon: HelpRoundedIcon,
    },
    {
        path: "/result",
        name: "Result",
        layout: '/admin',
        icon: InsertChartOutlinedTwoToneIcon,
    },
    {
        path: "/course",
        name: "Course",
        layout: '/admin',
        icon: ImportContactsIcon,
    },
    {
        path: "/lectures",
        name: "Lectures",
        layout: '/admin',
        icon: LocalLibraryOutlinedIcon,
    },
    {
        path: "/fees",
        name: "Fees",
        layout: '/admin',
        icon: MonetizationOnOutlinedIcon,
    }
];

export default dashboardRoutes;