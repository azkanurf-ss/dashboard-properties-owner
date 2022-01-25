import { styled } from '@linaria/react'
import { css } from '@linaria/core'

export const DropdownWrapper = styled.div`
  position: relative;
`

export const customCarouselContainer = css`
  position: relative;

  .carousel__back-button {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border: none;
    background: none;
    &:disabled {
      svg {
        color: gray !important;
      }
    }
  }
  .carousel__next-button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border: none;
    background: none;

    &:disabled {
      svg {
        color: gray !important;
      }
    }
  }

  .video-property {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

export const carouselModalWrapper = css`
  max-height: 80%;
  top: 50%;

  .el-modal-body {
    padding: 0rem;
  }
`
