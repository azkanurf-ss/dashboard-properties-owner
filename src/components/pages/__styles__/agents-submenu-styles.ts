import { styled } from '@linaria/react'

export const AgentContainer = styled.main``
export const AgentChart = styled.section`
  padding: 1rem;
  background: var(--color-grey-light);
  min-width: 475px;
  /* height: max-content; */
  min-height: 320px;
  margin-left: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .chart-summary {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title {
      text-align: center;
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
  .last-updated {
    display: flex;
    justify-content: end;
    font-size: 0.75rem;
    color: var(--color-grey-dark);
  }
`

export const SideInfo = styled.section`
  background: var(--color-grey-light);
  min-width: 236px;
`

export const ListAgentWrapper = styled.section`
  background: var(--color-grey-light);
  min-height: 236px;
  margin-top: 2rem;
`
