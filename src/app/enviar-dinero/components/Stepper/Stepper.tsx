import { Typography } from "@mui/material";
import {
  // Line,
  LineContainer,
  Main,
  StartLine,
  StepInfo,
  StepLine,
  Steps,
  EndDot,
  LineContainerLastDot,
  StepInfoLastStep,
} from "./StepperStyle";

export const Stepper = () => {
  // TODO: parametrizar mejor si se vuelve a usar en el futuro y agregarle steps y totalStepsCompleted
  return (
    <Main>
      <StepLine>
        {/* LINEA 1 */}
        <LineContainer>
          <StartLine />
        </LineContainer>
        {/* LINEA 2 */}
        <LineContainerLastDot>
          <EndDot />
        </LineContainerLastDot>
      </StepLine>
      <Steps>
        <StepInfo>
          <Typography variant="body1">Cuenta destino y monto</Typography>
        </StepInfo>
        <StepInfoLastStep>
          <Typography variant="body1">Revisa y confirma el envío</Typography>
        </StepInfoLastStep>
      </Steps>
    </Main>
  );
};
