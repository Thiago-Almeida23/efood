import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
`

export const PaymentContainer = styled.div`
  padding: 32px;
  background-color: ${colors.salmon};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaymentForm = styled.form`
  width: 100%;
  max-width: 480px;
  background-color: ${colors.white};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const FormGroup = styled.div`
  margin-bottom: 16px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.lightSalmon};
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.lightSalmon};
    color: ${colors.almostBlack};
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border: none;
    outline: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;
  }

  .card-number {
    width: calc(115%);
  }

  .card-cvv {
    width: 90px;
  }
`

export const CardInputRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 34px;
`
