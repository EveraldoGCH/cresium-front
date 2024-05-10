import { colorsVars } from '@/utils/colorsVars';
import { styled } from '@mui/material/styles';

export const Main = styled('main')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const StepLine = styled('article')(() => ({
  width: '15%',
  display: 'flex',
  flexDirection: 'column',
}));

export const LineContainer = styled('div')(() => ({
  display: 'flex',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const LineContainerLastDot = styled('div')(() => ({
    display: 'flex',
    height: '25px',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }));

export const StartLine = styled('div')(() => ({
  width: '2px',
  height: '100%',
  position: 'relative',
  backgroundColor: 'lightgrey',
  '&::before': {
    content: '""',
    position: 'absolute',
    boxShadow: `0px 0px 0px 5px ${colorsVars.primary50}`,
    // bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: colorsVars.primary600,
  },
  '&::after': {
      content: '""',
      position: 'absolute',
      // bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 150%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: "white",
    },
}));

export const Line = styled('div')(() => ({
  width: '2px',
  height: '100%',
  backgroundColor: colorsVars.primary600,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    boxShadow: `0px 0px 0px 5px ${colorsVars.primary50}`,
    // bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: colorsVars.primary600,
  },
  '&::after': {
      content: '""',
      position: 'absolute',
      // bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 150%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: "white",
    },
}));

export const EndDot = styled('div')(() => ({
  width: '2px',
  position: 'relative',
  backgroundColor: 'lightgrey',
  '&::before': {
    content: '""',
    position: 'absolute',
    // bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    boxShadow: `0px 0px 0px 4px white`,
    backgroundColor: colorsVars.grey100,
  },
  '&::after': {
      content: '""',
      position: 'absolute',
      // bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 150%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: "white",
    },
}));

export const StartLine3 = styled('div')(() => ({
    width: '2px',
    height: '100%',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      boxShadow: `0px 0px 0px 5px ${colorsVars.primary50}`,
      // bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: colorsVars.primary600,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        // bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 150%)',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: "white",
      },
  }));

export const Steps = styled('article')(() => ({
  width: '85%',
}));

export const StepInfo = styled('div')(() => ({
  height: '50px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));
export const StepInfoLastStep = styled('div')(() => ({
    height: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }));
