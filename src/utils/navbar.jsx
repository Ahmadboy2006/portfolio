import { v4 as uuidv4 } from 'uuid';
import Main from '../components/Main/Index';
import AllProjects from '../components/Work/AllProjects/Index';

export const navbar = [
    {
        id: uuidv4(),
        title: 'portfolio',
        path: '/',
        element: <Main />,
    },
    {
        id: uuidv4(),
        title: 'AllProjects',
        path: '/projects',
        element: <AllProjects />,
    }
];
