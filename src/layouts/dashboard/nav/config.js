// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Influencers',
    path: '/oo',
    icon: icon('ic_user'),
  },
  {
    title: 'statistics',
    path: '/oo',
    icon: icon('ic_cart'),
  },
  {
    title: 'Logout',
    path: '/oo',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
