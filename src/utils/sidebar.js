import { FiAlertCircle, FiBook, FiBookmark, FiLayers, FiLayout, FiSliders, FiUsers } from 'react-icons/fi'

export const sidemenus = [
    {
        id: '0',
        route: '/admin/dashboard',
        icon: <FiLayout className="icons" />,
    },
    {
        id: '1',
        route: '/admin/borrows',
        icon: <FiBookmark className="icons" />
    },
    {
        id: '3',
        route: '/admin/books',
        icon: <FiBook className="icons" />
    },
    {
        id: '4',
        route: '/admin/categories',
        icon: <FiLayers className="icons" />
    },
    {
        id: '5',
        route: '/admin/limit',
        icon: <FiAlertCircle className="icons" />
    },
    {
        id: '6',
        route: '/admin/users',
        icon: <FiUsers className="icons" />
    },
];

export const utilmenus = [
    {
        id: '0',
        route: '/admin/settings',
        icon: <FiSliders className="icons" />
    }
];