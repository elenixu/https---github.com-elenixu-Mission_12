import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../../components/Card'
import { Box, Container, Typography } from '@mui/material'

import argentBankPic from '../../assets/argentbank.png'
import kasaPic from '../../assets/kasa.png'
import BookiPic from '../../assets/booki.png'
import EventsPic from '../../assets/724events.png'
import ninaCarPic from '../../assets/ninacarducci.png'
import foodPic from '../../assets/ohmyfood.png'
import printItPic from '../../assets/printit.png'
import sophieBlPic from '../../assets/sophiebluel.png'

function Travaux() {
  const [t] = useTranslation('global')
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 7, md: 12 },
        borderTop: '1px solid rgba(255,255,255,.07)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 400,
            mb: 1.5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {t('works-title')}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 780,
            lineHeight: 1.9,
            mb: 4,
            mx: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {t('works-message')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },
            gap: 3,
          }}
        >
          <Card
            title="Argent Bank"
            picture={argentBankPic}
            taglist={[
              'React',
              'HTML',
              'CSS',
              'Sass',
              'JS',
              'Redux',
              'API',
              'MongoDB',
            ]}
            gitlink="https://github.com/elenixu/Mission-11"
            description={t('travaux-argentbank')}
          />
          <Card
            title="Kasa"
            picture={kasaPic}
            taglist={['HTML', 'CSS', 'Sass', 'JS', 'React', 'ReactRouter']}
            gitlink="https://github.com/elenixu/Mission08/tree/main/GILSALAZAR_Elena_8_Kasa_11012024"
            description={t('travaux-kasa')}
          />
          <Card
            title="724 Events"
            picture={EventsPic}
            taglist={['Chrome DevTools', 'React', 'JS']}
            gitlink="https://github.com/elenixu/Debuggez-une-application-React.JS-main"
            description={t('travaux-724')}
          />
          <Card
            title="Booki"
            picture={BookiPic}
            taglist={['HTML', 'CSS', 'Responsive']}
            gitlink="https://github.com/elenixu/Mission_3"
            websitelink="https://elenixu.github.io/Mission_3/"
            description={t('travaux-booki')}
          />
          <Card
            title="Nina Carducci"
            picture={ninaCarPic}
            taglist={['SEO', 'Optimization', 'Accesibility']}
            gitlink="https://github.com/elenixu/https---github.com-elenixu-Mission_09"
            websitelink="https://elenixu.github.io/https---github.com-elenixu-Mission_09/"
            description={t('travaux-nina')}
          />
          <Card
            title="OhmyFood"
            picture={foodPic}
            taglist={['HTML', 'CSS', 'SaSS']}
            gitlink="https://github.com/elenixu/Mission_04"
            websitelink="https://elenixu.github.io/Mission_04/"
            description={t('travaux-ohmy')}
          />
          <Card
            title="Print it!"
            picture={printItPic}
            taglist={['HTML', 'JS', 'CSS']}
            gitlink="https://github.com/elenixu/GILSALAZAR_Elena_5_Printit_16102023"
            websitelink="https://elenixu.github.io/GILSALAZAR_Elena_5_Printit_16102023/"
            description={t('travaux-print')}
          />
          <Card
            title="Sophie Bluel Photography"
            picture={sophieBlPic}
            taglist={['JS', 'CSS', 'SaSS', 'HTML']}
            gitlink="https://github.com/elenixu/mission_06"
            description={t('travaux-sophie')}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Travaux
