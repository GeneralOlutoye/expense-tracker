/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import './style.css'
import { Menu, Layout } from 'antd'
import { MenuItems } from './MenuItems';
import { UserOutlined } from '@ant-design/icons'


const { Sider } = Layout;

export const AppLayout = (props) => {

  const [greetings, setGreetings] = useState()

  useEffect(() => {
    let date = new Date()
    let time = date.getTime()

    setGreetings(time)
  }, [])


  return (
    <div>
      <header>
        <h1 className='h1'> EXPENSE-TRACKER </h1>
        <h3> {greetings <= 12 ? 'Good Morning General' : greetings < 5 ? 'Good Afternoon e-diot' : 'Good Evening Olutoye'} <UserOutlined /> </h3>
      </header>
      <section className='section'>
        <Sider className="sideBar" theme="light" breakpoint="lg" collapsedWidth="0" >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[props.defaultSelectedKeys]}
            items={MenuItems}
          />
        </Sider>
        <main className='main'>
          {props.children}
        </main>
      </section>
    </div>
  )
}
