import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import CompetitiveProgramming from './pages/CompetitiveProgramming';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
    icon: 'Home',
    showInNav: true
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    icon: 'User',
    showInNav: true
  },
  {
    path: '/experience',
    component: Experience,
    name: 'Experience',
    icon: 'Briefcase',
    showInNav: true
  },
  {
    path: '/skills',
    component: Skills,
    name: 'Skills',
    icon: 'Code',
    showInNav: true
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects',
    icon: 'FolderPlus',
    showInNav: true
  },
  {
    path: '/competitive',
    component: CompetitiveProgramming,
    name: 'CP Profile',
    icon: 'Award',
    showInNav: true
  }
];

export default routes;