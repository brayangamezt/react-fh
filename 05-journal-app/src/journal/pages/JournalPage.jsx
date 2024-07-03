import { Typography } from '@mui/material';
import { MailOutline } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <>
      {/* Con esto podemos modificar la etiqueta html, haciendola por defecto un parrafo, pero puede cambiar a H1,H2 etc */}
      <Typography> JournalPage </Typography>

      {/* Para usar iconos usamos lo siguiente */}
      <MailOutline/>

    </>
  )
}
