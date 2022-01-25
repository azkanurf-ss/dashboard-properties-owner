import { styled } from '@linaria/react'

export const PropertiesContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  -webkit-row-gap: 1rem;
  margin-bottom: 2rem;
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

  .chart-summary {
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

export const RevenueChart = styled.div`
  .last-updated {
    display: flex;
    justify-content: end;
    font-size: 0.75rem;
    color: var(--color-grey-dark);
  }
`

export const WrapperPropertiesChart = styled.section`
  background: var(--color-grey-light);
  min-height: 325px;
`

export const ListPropertiesWrapper = styled.section`
  /* margin-top: 2rem; */
  position: relative;
  .main-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2rem;
    column-gap: 2rem;
  }

  .see-more {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: 52px;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    align-items: flex-end;
    justify-content: center;
    bottom: -24px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.25));
    color: white;
    font-size: 2.5rem;
  }
`

export const CardSingleProperty = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  flex: 1;
  max-width: 290px;

  img {
    min-width: 226px;
    width: 100%;
    height: 126px;
    object-fit: cover;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.25rem;
  }

  .additional-info {
    margin: 0.25rem;
  }
`

export const PropertyCard = styled.div``
