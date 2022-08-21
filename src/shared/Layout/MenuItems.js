import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const MenuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      name: 'Dashboard',
      url: '/',
    }
  ].map( x => ({
    label: (<Link to={x.url}>{ x.name}</Link>),
    icon: x.icon,
    key: x.key
}))