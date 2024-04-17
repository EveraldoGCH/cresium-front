import { icons } from "@/utils/icons";
import { Box, Divider, Stack } from "@mui/material";
import Button from "@/components/core/Button/Button";
import Image from "next/image";
import React from "react";

export default function DashBoard() {
  return (
    <Stack spacing={4}>      
      <Stack> {/* Stack cont divider */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: 'center' }}>
            <Box sx={{ flex: '1 1 auto' }}>
              <p 
                className="Text-smRegular"
              >
                Home
              </p>
              <h1 
                className='Display-smSemibold'
              >
                Bienvenido Maximiliano
              </h1>
              <p 
                className="Text-smRegular"
              >
                Cresium.io
              </p>
            </Box>
            <Button
              size="xl" 
              color="primary" 
            >
              <>
                <Image
                  src={icons.TrendUp02}
                  alt={"Ícono de tendencia ascendente"}
                  style={{ filter: 'invert(100%)' }}
                />
                Enviar dinero
              </>
            </Button>
            <Button 
              size="xl" 
              color="primary" 
            >
              <>
              <Image
                  src={icons.TrendDown02}
                  alt={"Ícono de tendencia descendente"}
                  style={{ filter: 'invert(100%)' }}
                />
                Recibir dinero
              </>
            </Button>
          </Stack>
        <Divider/>
      </Stack>
    </Stack>
  )
}
