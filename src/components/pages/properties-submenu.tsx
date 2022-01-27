import React, { useState } from 'react'
import { BodyText, Subtitle, Icon, Title, Input, Button } from '@reapit/elements'
import {
  Pie,
  PieChart,
  Cell,
  Legend,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts'
import { BiChevronDown } from 'react-icons/bi'
// import { useProperties } from '../../hooks/useProperties'
import { typeOptions } from '../../constants/properties-api-params'
import { currencyConverter } from '../../utils/currencyConverter'

import {
  PropertiesContainer,
  OverviewCard,
  OverviewPropertiesWrapper,
  RevenueCard,
  ListPropertiesWrapper,
  RevenueChart,
  WrapperPropertiesChart,
  CardSingleProperty,
} from './__styles__/properties-submenu-styles'
import {
  dataPropertyForSaleAll,
  dataPropertyForRentAll,
  dataRevenueAllYear,
  dataRevenueOneYear,
  COLORS,
  RevenueChartTypes,
} from '../../constants/properties-submenu'

import dummy1 from '../../assets/dummy/dummy-prop-1.webp'
import dummy2 from '../../assets/dummy/dummy-property-2.webp'
import dummy3 from '../../assets/dummy/dummy-property-1.webp'
import dummy4 from '../../assets/dummy/dummy-plot-1.jpg'
import { navigate } from '../../utils/navigation'
import { Routes } from '../../constants/routes'
import { useHistory } from 'react-router'

const dummyListProperties = [
  { image: dummy1, address: '19, Grey Stone', price: 20000 },
  { image: dummy3, address: '23, Hillside', price: 14000 },
  { image: dummy2, address: '40, The Limes', price: 43500 },
  { image: dummy4, address: 'Building Plot at Carmel', price: 23800 },
  { image: dummy3, address: '23, Hillside', price: 14000 },
  { image: dummy1, address: '19, Grey Stone', price: 20000 },
  { image: dummy4, address: 'Building Plot at Carmel', price: 23800 },
]
const PropertiesSubmenu = () => {
  const [revenueFilter, setRevenueFilter] = useState({ type: 'year', from: '', to: '' })
  const history = useHistory()
  const RADIAN = Math.PI / 180
  const [chartRevenueData, setChartRevenueData] = useState<RevenueChartTypes[]>(dataRevenueAllYear)
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {value}
      </text>
    )
  }

  const handleYearRevenue = (e): void => {
    // switch (e.target.value) {
    //   case 'all-year':
    //     setChartRevenueData(dataRevenueAllYear)
    //     break
    //   default:
    //     setChartRevenueData(dataRevenueOneYear)
    //     break
    // }
  }
  return (
    <PropertiesContainer>
      <div className="el-flex el-flex-justify-end">
        {/* filter by property and marketing type */}
        <div>
          <select className="el-select el-ml2">
            <option value="">All Type Properties</option>
            {typeOptions.map((data) => (
              <option value={data.value} key={data?.value}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="el-flex el-flex-row">
        <OverviewPropertiesWrapper className="">
          <OverviewCard>
            <div className="el-flex el-flex-row el-flex-align-center el-pb3">
              <Icon icon="houseInfographic" iconSize="medium" />
              <div className="el-pl4">
                <Title hasNoMargin hasGreyText>
                  603
                </Title>
                <Subtitle hasNoMargin>Properties For Sale</Subtitle>
              </div>
            </div>
            <PieChart width={320} height={160}>
              <Pie
                data={dataPropertyForSaleAll}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {dataPropertyForSaleAll.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend layout="vertical" align="right" iconSize={24} />
            </PieChart>
          </OverviewCard>
          <OverviewCard>
            <div className="el-flex el-flex-row el-flex-align-center el-pb3">
              <Icon icon="houseInfographic" iconSize="medium" />
              <div className="el-pl4">
                <Title hasNoMargin hasGreyText>
                  224
                </Title>
                <Subtitle hasNoMargin>Properties For Rent</Subtitle>
              </div>
            </div>
            <PieChart width={320} height={160}>
              <Pie
                data={dataPropertyForRentAll}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {dataPropertyForRentAll.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend layout="vertical" align="right" iconSize={24} />
            </PieChart>
          </OverviewCard>
        </OverviewPropertiesWrapper>
        <RevenueCard>
          <div className="el-flex el-flex-row el-flex-justify-between el-flex-align-start">
            <div className="chart-summary">
              <div className="title">
                <Title hasNoMargin hasGreyText>
                  Total
                </Title>
                <Subtitle hasNoMargin>Revenue</Subtitle>
              </div>
              <div className="total-amount">
                <Subtitle hasNoMargin>
                  320K <span>from selling</span>
                </Subtitle>
                <Subtitle hasNoMargin className="el-pt2">
                  280K <span>from renting</span>
                </Subtitle>
              </div>
            </div>
            <div className="el-flex el-flex-column filter-section">
              <div className="el-flex el-flex-justify-end">
                <Button
                  className={`option-btn ${revenueFilter?.type === 'year' ? 'selected' : ''}`}
                  onClick={() => setRevenueFilter({ ...revenueFilter, type: 'year' })}
                >
                  Year
                </Button>
                <Button
                  className={`option-btn el-ml3 ${revenueFilter?.type === 'month' ? 'selected' : ''}`}
                  onClick={() => setRevenueFilter({ ...revenueFilter, type: 'month' })}
                >
                  Month
                </Button>
              </div>
              {revenueFilter.type === 'month' && (
                <div className="el-flex el-flex-row el-flex-align-center el-mt3">
                  <Input type="month" />
                  &nbsp; - &nbsp;
                  <Input type="month" />
                </div>
              )}
              {revenueFilter.type === 'year' && (
                <div className="el-flex el-flex-row el-flex-align-center el-mt3">
                  <Input type="text" />
                  &nbsp; - &nbsp;
                  <Input type="text" />
                </div>
              )}
            </div>
          </div>
          <div className="el-flex el-flex-justify-center">
            <Subtitle hasNoMargin hasGreyText className="el-py4">
              2018 - 2021
            </Subtitle>
          </div>
          <RevenueChart>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartRevenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickCount={8} minTickGap={5} tickSize={8} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sold" stroke="#0088FE" />
                <Line type="monotone" dataKey="rent" stroke="#FFBB28" />
              </LineChart>
            </ResponsiveContainer>
            <div className="last-updated">Last updated: 16:40 17/01/2022</div>
          </RevenueChart>
        </RevenueCard>
      </div>
      <WrapperPropertiesChart>
        Chart of (total) Property
        <div>-for sale and for rent (multiple line chart)</div>
        <div>&nbsp;&nbsp;&nbsp;-record total of property:year by year or month by month</div>
        <div>-filter property by type</div>
      </WrapperPropertiesChart>
      <ListPropertiesWrapper>
        <div className="el-flex el-flex-row el-flex-justify-between el-flex-align-end">
          <Title hasNoMargin className="el-pb6">
            All Properties
          </Title>
          {/* <div>Filter by recent add, recent sold</div> */}
        </div>
        <div className="main-list">
          {dummyListProperties.map((data, index) => (
            <CardSingleProperty key={index}>
              <img alt="property-img" src={data.image} />
              <p className="title">{data?.address}</p>
              <div className="additional-info">
                <BodyText hasGreyText>{currencyConverter(data?.price, 'GBP')}</BodyText>

                <p>-property type</p>
                <p>-agent who in charge</p>
                <p>-selling/renting status</p>
              </div>
            </CardSingleProperty>
          ))}
        </div>
        <div className="see-more" onClick={navigate(history, Routes.PROPERTIES)}>
          <BiChevronDown size={48} />
          <p>See More</p>
        </div>
      </ListPropertiesWrapper>
    </PropertiesContainer>
  )
}

export default PropertiesSubmenu
