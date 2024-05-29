"use client";
import Modal from "@/components/core/Modal/Modal";
import {
  Download02,
  Receipt,
} from "../../../../../public/assets/iconsComponents/iconsComponents";
import { Row } from "@/components/core/Tabla/TablaProps";
import { Card } from "@/components/core/Card/Card";
import { GreyCardInfo } from "@/components/core/GreyCardInfo/GreyCardInfo";
import { Box, Button, Divider, Stack } from "@mui/material";

interface ModalDetalleProps {
  open: boolean;
  onClose: () => void;
  element: Row;
}
export function ModalDetalleTransaccion({
  open,
  onClose,
  element,
  ...props
}: ModalDetalleProps): React.JSX.Element {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Detalles del movimiento"}
      subtitle="Revisá la información del movimiento"
      maxWidth={"sm"}
      icon={<Receipt />}
      {...props}
    >
      <Card style={{ maxWidth: "100%", width: "100vw" }}>
        <Stack padding={"24px"} gap={"8px"}>
          <GreyCardInfo text1="Envías exactamente" text2="ARS $31.243,00" />
          <GreyCardInfo text1="Impuestos" text2="ARS $13,00" />
          <GreyCardInfo text1="Destinatario recibe" text2="ARS $31.299,00" />
          <GreyCardInfo text1="Moneda" text2="ARS" />
          <Divider style={{ margin: "8px 0" }} />
          <GreyCardInfo
            text1="Colaborador que envió"
            text2={element.collaboratorFirstName!}
          />
          <GreyCardInfo text1="Alias de cuenta" text2="Novaz" />
          <GreyCardInfo text1="CBU / CVU / ALIAS" text2="CBU" />
          <GreyCardInfo text1="CBU destino" text2="123972138127398" />
          <GreyCardInfo
            text1="Nombre del banco destino"
            text2="Santander Río"
          />
          <Divider style={{ margin: "8px 0" }} />
          <GreyCardInfo text1="Categoría de transacción" text2="Proveedores" />
          <GreyCardInfo text1="Fecha de envío" text2="29/04/2024 (HOY)" />
        </Stack>
      </Card>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        gap={"12px"}
        marginTop={"16px"}
      >
        <Button variant="outlined" onClick={onClose}>
          Volver
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          startIcon={<Download02 />}
        >
          Exportar como JPG
        </Button>
      </Box>
    </Modal>
  );
}
