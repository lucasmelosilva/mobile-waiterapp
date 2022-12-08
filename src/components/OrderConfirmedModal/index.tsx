import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Button, Container } from "./styles";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({
  visible,
  onOk,
}: OrderConfirmedModalProps) {
  return (
    <>
      <StatusBar style="light" />

      <Modal visible={visible} animationType="fade">
        <Container>
          <CheckCircle />
          <Text style={{ marginTop: 15 }} color="#fff" size={20} weight="600">
            Pedido confirmado
          </Text>
          <Text color="#fff" style={{ marginTop: 4 }}>
            O pedido já entrou na fila de produção!
          </Text>

          <Button onPress={onOk} style={{ marginTop: 24 }}>
            <Text color="#d73035" weight="600">
              OK
            </Text>
          </Button>
        </Container>
      </Modal>
    </>
  );
}
