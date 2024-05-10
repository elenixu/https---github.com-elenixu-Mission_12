import React from 'react'
import '../../Styles/app.css'
import { useTranslation } from 'react-i18next'
import Card from '../../components/Card'

import argentBankPic from '../../assets/argentbank.png'
import kasaPic from '../../assets/kasa.png'
import BookiPic from '../../assets/booki.png'
import EventsPic from '../../assets/724events.png'
import ninaCarPic from '../../assets/ninacarducci.png'
import foodPic from '../../assets/ohmyfood.png'
import printItPic from '../../assets/printit.png'
import sophieBlPic from '../../assets/sophiebluel.png'

function Travaux() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className="tr-container-global">
      <div className="tr-content">
        <div className="tr-container-text">
          <div id="projects" className="gl-title">
            {t('works-title')}
          </div>
          <div className="gl-text">{t('works-message')}</div>
        </div>
        <div className="container-filter">
          <div className="container-cards">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travaux
