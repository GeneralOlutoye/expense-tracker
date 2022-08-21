import { AppLayout } from '../../../shared/Layout/AppLayout'
import React, { useState } from 'react';
import { Card, Row, Col, Table } from 'antd'
import './style.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Data } from './data';
import { Columns } from './tableColomn';
import { Items } from '../../../item';
import { DollarOutlined } from '@ant-design/icons'
import showImage from './images/eye.png'
import hideImage from './images/eyes1.png'

export const DashboardComponent = () => {

  const [showBalance, setShowBalance] = useState(false)
  // const [tableContent, setTableContent] = useState([])

  return (
    <AppLayout defaultSelectedKeys='1' >
      <section className='dashboardMainContent'>
        <Row className='topCard' gutter={16}>
          <Col xxl={6} md={12} xl={8} xs={24}>
            <Card className='card'>
              <div className='cardChild'>
                <section>
                  <p>Last Month Expense</p> <br />
                  <h1 style={{ fontSize: '22px', fontWeight: 700 }}>$7,500</h1>
                </section>
                <DollarOutlined style={{ color: 'red', fontSize: 30 }} />
              </div>
            </Card>
          </Col>

          <Col xxl={6} md={12} xl={8} xs={24}>
            <Card className='card'>
              <div className='cardChild'>
                <section>
                  <p>Last Month Income</p> <br />
                  <h1 style={{ fontSize: '22px', fontWeight: 700 }}>$9,000</h1>
                </section>
                <DollarOutlined style={{ color: 'green', fontSize: 30 }} />
              </div>
            </Card>
          </Col>

          <Col xxl={6} md={12} xl={8} xs={24}> <Card className='card'>
            <div className='cardChild'>
              <section>
                <p>Net Savings</p> <br />
                <h1 style={{ fontSize: '22px', fontWeight: 700 }}>$12,000</h1>
              </section>
              <DollarOutlined style={{ color: 'grey', fontSize: 30 }} />
            </div>
          </Card></Col>
          <Col xxl={6} md={12} xl={8} xs={24}> <Card className='card wallet'>
            <div className='cardChild'>
              <section>
                <p>Wallet Balance</p> <br />
                <h1 style={{ fontSize: '27px', fontWeight: 700, color: 'white' }}> {showBalance ? '$1,000' : '*****'} </h1>
              </section>
                <img style={{width: 35, height: 35, cursor: 'pointer'}} src={showBalance ? hideImage : showImage} alt="logo" onClick={() => setShowBalance(!showBalance)} />
            </div>
          </Card></Col>
        </Row>
        <Card className='cardWrapper'>
          <section width="100%" height="60%">
            <div>
              <h3 className='income'>Total Income 2021</h3>
              <h1 className='cardText'>$108,000</h1>
            </div>
            <BarChart
              width={1300}
              height={300}
              data={Data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="expense" fill="red" background={{ fill: '#eee' }} />
              <Bar dataKey="income" fill="green" />
            </BarChart>
          </section>
        </Card>
        <Card className='cardWrapper'>
          <h1 style={{ textAlign: 'center', fontSize: '22px', fontWeight: '700' }}>Expense summary for 2021</h1>
          <Table dataSource={Items} columns={Columns} pagination={{ pageSize: 5 }} />
        </Card>
      </section>

    </AppLayout>
  )
}
