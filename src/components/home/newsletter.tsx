import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import { Link as ScrollLink } from 'react-scroll'

const HomeNewsLetter: FC = () => {
  return (
    <Box id="Commencer" sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
        <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
          Lancez-vous maintenant !
        </Typography>
        <Typography sx={{ mb: 6 }}>
          Cliquez sur le bouton ci-dessous et accédez immédiatement à nos cours.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
            width: { xs: '100%', md: 560 },
            mx: 'auto',
          }}
        >
          <Box>
          <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>

            <StyledButton disableHoverEffect size="large">
            S'Inscrire
            </StyledButton>
            </ScrollLink>
          </Box>


          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
