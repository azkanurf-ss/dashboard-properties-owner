import React, { useState, useEffect } from 'react'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { useReapitConnect } from '@reapit/connect-session'
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
import DatePicker from 'react-datepicker'

import graphQLRequestClient from '../../platform-api/graphqlClient'
import { useGetAllPropertiesQuery } from '../../generated/graphql'
import { useProperties } from '../../hooks/useProperties'
import { typeOptions } from '../../constants/properties-api-params'
// import { currencyConverter } from '../../utils/currencyConverter'
import CardProperty from '../ui/card/list-properties'

import {
  PropertiesContainer,
  OverviewCard,
  OverviewPropertiesWrapper,
  RevenueCard,
  ListPropertiesWrapper,
  RevenueChart,
  WrapperPropertiesChart,
  // CardSingleProperty,
  customYearInput,
} from './__styles__/properties-submenu-styles'
import {
  dataPropertyForSaleAll,
  dataPropertyForRentAll,
  dataRevenueAllYear,
  dataRevenueOneYear,
  COLORS,
  RevenueChartTypes,
} from '../../constants/properties-submenu'

// import dummy1 from '../../assets/dummy/dummy-prop-1.webp'
// import dummy2 from '../../assets/dummy/dummy-property-2.webp'
// import dummy3 from '../../assets/dummy/dummy-property-1.webp'
// import dummy4 from '../../assets/dummy/dummy-plot-1.jpg'
import { navigate } from '../../utils/navigation'
import { Routes } from '../../constants/routes'
import { useHistory } from 'react-router'

const PropertiesSubmenu = () => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  const history = useHistory()
  const RADIAN = Math.PI / 180
  const [revenueFilter, setRevenueFilter] = useState<{ type: string; from: any; to: any }>({
    type: 'year',
    from: new Date(2018, 11, 24, 10, 33, 30, 0),
    to: new Date(2021, 11, 24, 10, 33, 30, 0),
  })
  const [chartRevenueData, setChartRevenueData] = useState<RevenueChartTypes[]>(dataRevenueAllYear)
  const allProperties = useProperties(connectSession, { pageSize: 12, currentPage: 1, sortBy: '-price' })
  const propertiesFromGQL = useGetAllPropertiesQuery(graphQLRequestClient)
  console.log({ propertiesFromGQL })

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

  useEffect(() => {
    if (!connectSession) return
    graphQLRequestClient.setHeaders({
      // ...BASE_HEADERS,
      authorization: connectSession.idToken,
      'reapit-connect-token': connectSession.accessToken,
    })
  }, [connectSession])

  const handleDateRevenue = (value, name): void => {
    console.log({ value, name })
    setRevenueFilter({ ...revenueFilter, [name]: value })
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
                  onClick={() => setRevenueFilter({ type: 'year', from: '', to: '' })}
                >
                  Year
                </Button>
                <Button
                  className={`option-btn el-ml3 ${revenueFilter?.type === 'month' ? 'selected' : ''}`}
                  onClick={() => setRevenueFilter({ type: 'month', from: '', to: '' })}
                >
                  Month
                </Button>
              </div>
              {revenueFilter.type === 'month' && (
                <div className="el-flex el-flex-row el-flex-align-center el-mt3">
                  <Input
                    type="month"
                    onChange={(e) => handleDateRevenue(e.target.value, 'from')}
                    value={revenueFilter.from}
                  />
                  &nbsp; - &nbsp;
                  <Input
                    type="month"
                    onChange={(e) => handleDateRevenue(e.target.value, 'to')}
                    value={revenueFilter.to}
                  />
                </div>
              )}
              {revenueFilter.type === 'year' && (
                <div className="el-flex el-flex-row el-flex-align-center el-mt3">
                  <DatePicker
                    // selected={startDate}
                    onChange={(e) => handleDateRevenue(e, 'from')}
                    showYearPicker
                    dateFormat="yyyy"
                    className={customYearInput}
                    selected={revenueFilter.from}
                  />
                  &nbsp; - &nbsp;
                  <DatePicker
                    // selected={startDate}
                    onChange={(e) => handleDateRevenue(e, 'to')}
                    showYearPicker
                    dateFormat="yyyy"
                    className={customYearInput}
                    selected={revenueFilter.to}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="el-flex el-flex-justify-center">
            <Subtitle hasNoMargin hasGreyText className="el-py4">
              {revenueFilter.type === 'year' && revenueFilter.from
                ? `${new Date(revenueFilter?.from).getFullYear()} - ${new Date(revenueFilter?.to).getFullYear()}`
                : `${revenueFilter.from}  - ${revenueFilter.to}`}
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
            {/* All Properties */}
          </Title>
        </div>
        {allProperties?.data?._embedded && <CardProperty properties={allProperties?.data?._embedded} />}
        <div className="see-more" onClick={navigate(history, Routes.PROPERTIES)}>
          <BiChevronDown size={48} />
          <p>See All Properties</p>
        </div>
      </ListPropertiesWrapper>
    </PropertiesContainer>
  )
}

export default PropertiesSubmenu
