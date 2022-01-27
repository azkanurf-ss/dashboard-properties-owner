import { styled } from '@linaria/react'

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
  cursor: pointer;
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
    line-height: inherit;
  }

  .additional-info {
    margin: 0.25rem;
  }

  .badge {
    font-size: 0.75rem;
    height: fit-content;
    padding: 0.25rem 0.75rem;
  }
`
