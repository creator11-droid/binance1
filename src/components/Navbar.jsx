import { Button, Typography, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {   MenuOutlined, WalletOutlined, DashboardOutlined, ProfileOutlined } from '@ant-design/icons'
import icon from '../images/icon.jpg'
import MenuItem from 'antd/es/menu/MenuItem'
const Navbar = () => {
  return (
      <div className='nav-container'>
          <div className='logo-container'>
          
              <Avatar src={icon} size='large'/>
              <Typography.Title level={3} >
                  <Link to='/' style={{
                      color:'white'
                  }}>Raven</Link>
              </Typography.Title>
              {/* <Button className='menu-control-container'>
                  
              </Button> */}
          </div>
              <Menu theme='dark'>
                  <MenuItem icon={<MenuOutlined />}>
                      <Link to='/'>Home</Link>
                  </MenuItem>
                  <MenuItem icon={<DashboardOutlined />}>
                      <Link to='/dashboard'>Dashboard</Link>
                  </MenuItem>
                  <MenuItem icon={<WalletOutlined />}>
                      <Link to='/wallets'>Wallet</Link>
                  </MenuItem>
                  <MenuItem icon={<ProfileOutlined />}>
                      <Link to='/profile'>Profile</Link>
                  </MenuItem>
                
              </Menu>
          
    </div>
  )
}
export default Navbar


                      