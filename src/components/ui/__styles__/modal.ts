import { styled } from '@linaria/react'
import { css } from '@linaria/core'
export const CutomModalWrapper = styled.div`
  .el-modal.el-is-active {
    overflow-y: scroll;
    max-height: 680px;
    top: 50%;
  }
`
export const cutomModalNegotiator = css`
  max-width: 380px;

  .el-modal-body {
    padding: 0;
  }
`
