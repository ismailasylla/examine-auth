import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  /* margin-top: 50px;
  width: 100%;
  min-height: 600px; */
  /* Frame 20659 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 75px;
  gap: 10px;

  /* position: absolute; */
  width: 649px;
  /* height: 753.32px; */
  min-height: 753.32px;
  left: 539px;
  top: 199px;

  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
`;

export const FormWrapper = styled.div`
  background: white;
  width: 23%;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
  border-bottom: 1px solid rgba(0, 0, 0, 0);
`;

export const NameInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
