import React from 'react'
import { Subtitle } from '@reapit/elements'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { WrapperPriceProperty } from '../__styles__/chart-style'

const data = [
  { date: 'Jan', price: 600000 },
  { date: 'Feb', price: 680000 },
  { date: 'Mar', price: 720000 },
  { date: 'Apr', price: 800000 },
  { date: 'Jun', price: 760000 },
  { date: 'Jul', price: 810000 },
  { date: 'Aug', price: 940000 },
  { date: 'Sept', price: 1050000 },
]

const ChartPriceSingleProperty = () => {
  return (
    <WrapperPriceProperty>
      <div className="el-flex el-flex-row el-flex-justify-between">
        <Subtitle>Price History</Subtitle>
        {/* filter by year */}
        <p>filter by year?</p>
      </div>
      <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />]
      </LineChart>
    </WrapperPriceProperty>
  )
}

export default ChartPriceSingleProperty
