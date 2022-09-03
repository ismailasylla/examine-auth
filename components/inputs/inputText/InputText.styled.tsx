import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Container = styled.div``;

export const InputLabel = styled.div`
  color: ${colors.primary};
  margin-bottom: 5px;
`;
export const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 20px;

  ::-webkit-input-placeholder {
    color: #ddd;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${colors.primary};
  }

  /* Form/Input-Type */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  width: 499px;
  height: 46px;

  /* White */
  background: #ffffff;
  /* Gray/400 */
  border: 1px solid #ced4da;
  border-radius: 4.8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
