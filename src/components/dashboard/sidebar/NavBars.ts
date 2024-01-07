import { FaChartBar, FaBell, FaLandmark, FaExchangeAlt, FaFileAlt, FaCog } from 'react-icons/fa'; // Import icons from react-icons
interface NavBarItem {
    name: string;
    url: string;
    icon: any;
}
const NavBars: NavBarItem[] = [
    {
        name: "Dashboard",
        url: "/dashboard",
        icon: FaChartBar,
    },
    {
        name: "Notifications",
        url: "/notifications",
        icon: FaBell,
    },
    {
        name: "Land Records",
        url: "/land-records",
        icon: FaLandmark,
    },
    {
        name: "Transactions",
        url: "/transactions",
        icon: FaExchangeAlt,
    },
    {
        name: "SC Templates",
        url: "/sc-templates",
        icon: FaFileAlt,
    },
    {
        name: "Settings",
        url: "/settings",
        icon: FaCog,
    },
];

export default NavBars