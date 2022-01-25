import { styled } from '@linaria/react'

export const PropertiesContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  -webkit-row-gap: 1rem;
`
export const OverviewPropertiesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  -webkit-row-gap: 1rem;
  /* flex: 1; for dashboard container  */
`
export const OverviewCard = styled.div`
  background: var(--color-grey-light);
  padding: 1rem;
  flex: 1;
  border-radius: 0.25rem;

  .el-subtitle {
    color: var(--color-blue-dark);
  }
`

export const RevenueCard = styled.section`
  padding: 1rem;
  background: var(--color-grey-light);
  min-width: 475px;
  /* height: max-content; */
  min-height: 320px;
  margin-left: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .table-summary {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title {
      h1 {
        font-size: 2.5rem;
        letter-spacing: 1.5px;
      }
      h2 {
        font-size: 1.5rem;
        letter-spacing: 2.5px;
      }
    }

    .total-amount {
      margin-left: 0.5rem;
      h2 {
        font-weight: 700;
        font-size: 1.75rem;
      }
      span {
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
`

export const ChartWrapper = styled.div`
  background: var(--color-grey-light);
  min-height: 375px;
`

export const CustomTableWrapper = styled.section`
  /* background: var(--color-grey-light); */
  min-height: 475px;
  margin-top: 2rem;
`
