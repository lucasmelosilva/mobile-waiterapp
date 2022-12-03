import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  width: 100%;
  border-radius: 8px;
  padding: 24px 36px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Form = styled.View``;

export const Input = styled.TextInput`
  padding: 16px;
  margin-bottom: 24px;
  height: 56px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
`;
