import React, { useState, useEffect } from 'react'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { useReapitConnect } from '@reapit/connect-session'
import { Icon, Title, Subtitle } from '@reapit/elements'
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import { useNegotiatorByOfficeQuery } from '../../generated/graphql'
import { totalAgentsAllYear, totalAgentsOneYear } from '../../constants/agent-submenu'
import { AgentChart, SideInfo, ListAgentWrapper } from './__styles__/agents-submenu-styles'
import graphQLRequestClient from '../../platform-api/graphqlClient'

type Props = {}

const AgentsSubmenu = (props: Props) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  const [dataTotalAgent, setDataTotalAgent] = useState(totalAgentsAllYear)
  const agentList = useNegotiatorByOfficeQuery(graphQLRequestClient)
  console.log({ agentList })
  const handleYearAgent = (e): void => {
    switch (e.target.value) {
      case 'all-year':
        setDataTotalAgent(totalAgentsAllYear)
        break
      default:
        setDataTotalAgent(totalAgentsOneYear)
        break
    }
  }

  useEffect(() => {
    if (!connectSession) return
    graphQLRequestClient.setHeaders({
      // ...BASE_HEADERS,
      authorization: connectSession.idToken,
      'reapit-connect-token': connectSession.accessToken,
    })
  }, [connectSession])

  return (
    <main>
      <div className="el-flex el-flex-row">
        <SideInfo>
          <p>side info</p>
        </SideInfo>
        <AgentChart>
          <div className="el-flex el-flex-row el-flex-justify-between el-flex-align-end el-pb4">
            <div className="chart-summary">
              <div className="title">
                <Title hasNoMargin hasGreyText>
                  Total
                </Title>
                <Subtitle hasNoMargin>Agent</Subtitle>
              </div>
              <div className="total-amount">
                <Subtitle hasNoMargin>
                  300 <span>Active</span>
                </Subtitle>
                <Subtitle hasNoMargin className="el-pt2">
                  26 <span>Inactive</span>
                </Subtitle>
              </div>
            </div>
            <div>
              <select className="el-select el-ml2" onChange={handleYearAgent}>
                <option value="all-year">All Year</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart
                width={500}
                height={300}
                data={dataTotalAgent}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3" />
                <XAxis dataKey="date" />
                <YAxis tickCount={7} minTickGap={5} tickSize={8} />
                <Tooltip />
                <Legend />
                <Bar dataKey="active" stackId="a" fill="#0088FE" />
                <Bar dataKey="inactive" stackId="a" fill="#646464" />
              </BarChart>
            </ResponsiveContainer>
            <div className="last-updated">Last updated: 16:40 17/01/2022</div>
          </div>
        </AgentChart>
      </div>
      <ListAgentWrapper>
        <div>Sneak peek list of all agents</div>
      </ListAgentWrapper>
    </main>
  )
}

export default AgentsSubmenu
