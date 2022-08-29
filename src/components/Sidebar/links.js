import { BsHouse } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const links = [
	{ name: "Home", path: "/", icon: <BsHouse /> },
	{ name: "My Tasks", path: "/mytasks", icon: <BsListUl /> },
	{
		name: "Notifications",
		path: "/notifications",
		icon: <IoNotificationsOutline />,
	},
	{ name: "Inbox", path: "/inbox", icon: <BsChatLeftDots /> },
	{ name: "People", path: "/people", icon: <BsPeople /> },
];

export default links;
