import React, { useRef } from 'react'
import {
  Box,
  Typography,
  Link,
  Chip,
  Button,
  Stack,
  MenuItem,
  Select,
  GlobalStyles,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DownloadIcon from '@mui/icons-material/Download'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { cvData } from './cvData'
import { cvDataEng } from './cvDataEng'
import { cvDataEsp } from './cvDataEsp'

const cvDataByLanguage = {
  fr: cvData,
  eng: cvDataEng,
  esp: cvDataEsp,
}

const burgundy = '#991f2b'
const muted = '#6d6d6d'
const styles = {
  page: {
    width: { xs: '100%', md: '210mm' },
    maxWidth: '100%',
    minHeight: { xs: '100vh', md: '297mm' },
    mx: 'auto',
    my: { xs: 0, md: 5 },
    bgcolor: '#fff',
    color: '#202020',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    boxShadow: { xs: 'none', md: '0 8px 30px rgba(0,0,0,.3)' },
  },
  header: {
    px: { xs: 3, md: '18mm' },
    py: { xs: 4, md: '18mm 12mm' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 3,
    flexWrap: 'wrap',
  },
  name: {
    fontSize: '2.7rem',
    fontWeight: 300,
    letterSpacing: '.08em',
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  title: { mt: 1, fontSize: '1.25rem', fontWeight: 600 },
  subtitle: { mt: 0.5, color: burgundy, fontSize: '.95rem', fontWeight: 500 },
  photo: { width: 112, height: 112, borderRadius: '50%', objectFit: 'cover' },
  body: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '32% 68%' },
    minHeight: '230mm',
  },
  sidebar: {
    bgcolor: burgundy,
    color: '#fff',
    px: { xs: 3, md: '9mm' },
    py: { xs: 4, md: '12mm' },
  },
  sidebarSection: {
    mb: 3.5,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.7,
  },
  sidebarTitle: {
    mb: 0.5,
    pb: 0.7,
    borderBottom: '1px solid rgba(255,255,255,.35)',
    fontSize: '.95rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.08em',
  },
  sidebarText: {
    fontSize: '.8rem',
    lineHeight: 1.5,
    color: '#fff',
    overflowWrap: 'anywhere',
  },
  skillList: { display: 'flex', flexWrap: 'wrap', gap: 0.75 },
  skillChip: {
    bgcolor: 'rgba(255,255,255,.14)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.3)',
    fontSize: '.7rem',
  },
  main: {
    px: { xs: 3, md: '9mm' },
    pt: { xs: 4, md: 0 },
    pb: { xs: 4, md: '12mm' },
  },
  section: { mb: 4 },
  sectionTitle: {
    mb: 2,
    pb: 1,
    borderBottom: `2px solid ${burgundy}`,
    fontSize: '1.25rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.04em',
  },
  profile: { color: '#444', fontSize: '.88rem', lineHeight: 1.55 },
  experience: { mb: 3 },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 2,
    flexDirection: { xs: 'column', sm: 'row' },
  },
  role: { fontSize: '1rem', fontWeight: 700 },
  org: { mt: 0.4, color: burgundy, fontSize: '.82rem', fontWeight: 600 },
  date: {
    flexShrink: 0,
    color: muted,
    textAlign: { xs: 'left', sm: 'right' },
    '& p': { fontSize: '.72rem' },
  },
  description: {
    mt: 1.5,
    mb: 0,
    pl: 2.5,
    '& li': { mb: 0.6, color: '#3d3d3d', fontSize: '.8rem', lineHeight: 1.45 },
  },
  education: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 2,
    mb: 2.5,
    flexDirection: { xs: 'column', sm: 'row' },
  },
}

const CV = () => {
  const { t, i18n } = useTranslation('global')
  const cvContainerRef = useRef(null)
  const language = i18n.resolvedLanguage || i18n.language
  const { personal, profile, skills, languages, experience, education } =
    cvDataByLanguage[language] || cvData

  const handlePrint = () => {
    const container = cvContainerRef.current
    const sheet = container?.querySelector('.cv-sheet')

    if (!container || !sheet) {
      window.print()
      return
    }

    container.classList.add('cv-print-ready')

    try {
      window.print()
    } finally {
      container.classList.remove('cv-print-ready')
    }
  }

  return (
    <Box
      ref={cvContainerRef}
      className="cv-container"
      sx={{
        minHeight: '100vh',
        px: 2,
        py: { xs: 2, md: 3 },
        bgcolor: '#0c0c0d',
        '&.cv-print-ready': {
          minHeight: 0,
          px: 0,
          py: 0,
          bgcolor: '#fff',
        },
        '&.cv-print-ready .cv-actions': { display: 'none' },
        '&.cv-print-ready .cv-sheet': {
          width: '210mm',
          maxWidth: 'none',
          height: '297mm',
          minHeight: '297mm',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          mx: 'auto',
          my: 0,
          overflow: 'hidden',
          boxShadow: 'none',
          userSelect: 'text',
        },
        '&.cv-print-ready .cv-sheet-header': {
          px: '12mm',
          pt: '12mm',
          pb: '8mm',
          gap: 2,
        },
        '&.cv-print-ready .cv-photo': {
          width: 80,
          height: 80,
        },
        '&.cv-print-ready .cv-sheet-body': {
          gridTemplateColumns: '32% 68%',
          flex: 1,
          minHeight: 0,
        },
        '&.cv-print-ready .cv-sidebar': {
          px: '7mm',
          py: '7mm',
          boxSizing: 'border-box',
        },
        '&.cv-print-ready .cv-sidebar-section': {
          mb: 1.4,
          gap: 0.35,
        },
        '&.cv-print-ready .cv-sidebar-title': {
          mb: 0.3,
          pb: 0.4,
          fontSize: '.75rem',
        },
        '&.cv-print-ready .cv-sidebar .MuiTypography-root, &.cv-print-ready .cv-sidebar .MuiLink-root':
          {
          fontSize: '.68rem',
          lineHeight: 1.3,
        },
        '&.cv-print-ready .cv-skill-list': { gap: 0.4 },
        '&.cv-print-ready .cv-skill-chip': { fontSize: '.6rem' },
        '&.cv-print-ready .cv-main': {
          px: '7mm',
          pt: 0,
          pb: '7mm',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '5mm',
        },
        '&.cv-print-ready .cv-section': { mb: 1.5 },
        '&.cv-print-ready .cv-section-title': {
          mb: 0.7,
          pb: 0.4,
          fontSize: '.95rem',
        },
        '&.cv-print-ready .cv-profile': {
          fontSize: '.75rem',
          lineHeight: 1.35,
        },
        '&.cv-print-ready .cv-item-header, &.cv-print-ready .cv-education': {
          flexDirection: 'row',
        },
        '&.cv-print-ready .cv-experience': { mb: 1.2 },
        '&.cv-print-ready .cv-role': { fontSize: '.8rem' },
        '&.cv-print-ready .cv-org': { fontSize: '.7rem' },
        '&.cv-print-ready .cv-date p': { fontSize: '.65rem' },
        '&.cv-print-ready .cv-description': {
          mt: 0.6,
          pl: 2,
          '& li': { mb: 0.25, fontSize: '.68rem', lineHeight: 1.25 },
        },
        '&.cv-print-ready .cv-education': { mb: 1.2 },
        '@media print': {
          minHeight: 0,
          p: 0,
          bgcolor: '#fff',
          '& .cv-sheet': {
            printColorAdjust: 'exact',
            WebkitPrintColorAdjust: 'exact',
          },
        },
      }}
    >
      <GlobalStyles
        styles={{
          '@page': { size: 'A4 portrait', margin: 0 },
          '@media print': {
            html: { margin: 0 },
            body: { margin: 0 },
          },
        }}
      />
      <Stack
        className="cv-actions"
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={1.5}
        sx={{
          width: { xs: '100%', md: '210mm' },
          maxWidth: '100%',
          mx: 'auto',
          mb: 2,
        }}
      >
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          sx={{ color: 'common.white', borderColor: 'rgba(255,255,255,.35)' }}
        >
          {t('cv-back')}
        </Button>
        <Select
          size="small"
          value={language}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
          aria-label={t('cv-language')}
          sx={{
            minWidth: 130,
            color: 'common.white',
            bgcolor: 'rgba(255,255,255,.08)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255,255,255,.35)',
            },
            '& .MuiSvgIcon-root': { color: 'common.white' },
          }}
        >
          <MenuItem value="fr">{t('button-language-fr')}</MenuItem>
          <MenuItem value="eng">{t('button-language-eng')}</MenuItem>
          <MenuItem value="esp">{t('button-language-esp')}</MenuItem>
        </Select>
        <Button
          onClick={handlePrint}
          startIcon={<DownloadIcon />}
          variant="contained"
          sx={{
            bgcolor: burgundy,
            color: 'common.white',
            '&:hover': { bgcolor: '#751721' },
          }}
        >
          {t('cv-download')}
        </Button>
      </Stack>
      <Box className="cv-sheet" sx={styles.page}>
        {/* ================= HEADER ================= */}

        <Box className="cv-sheet-header" sx={styles.header}>
          <Box>
            <Typography component="h1" sx={styles.name}>
              {personal.name}
            </Typography>

            <Typography component="h2" sx={styles.title}>
              {personal.title}
            </Typography>

            <Typography sx={styles.subtitle}>{personal.subtitle}</Typography>
          </Box>

          {personal.photo && (
            <Box
              component="img"
              className="cv-photo"
              src={personal.photo}
              alt={t('cv-photo-alt', { name: personal.name })}
              sx={styles.photo}
            />
          )}
        </Box>

        {/* ================= BODY ================= */}

        <Box className="cv-sheet-body" sx={styles.body}>
          {/* SIDEBAR */}
          <Box component="aside" className="cv-sidebar" sx={styles.sidebar}>
            {/* CONTACT */}
            <Box className="cv-sidebar-section" sx={styles.sidebarSection}>
              <Typography
                component="h3"
                className="cv-sidebar-title"
                sx={styles.sidebarTitle}
              >
                {t('cv-section-contact')}
              </Typography>

              <Typography sx={styles.sidebarText}>
                {personal.location}
              </Typography>

              <Link href={`mailto:${personal.email}`} sx={styles.sidebarText}>
                {personal.email}
              </Link>

              <Link href={`tel:${personal.phone}`} sx={styles.sidebarText}>
                {personal.phone}
              </Link>

              <Link
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.sidebarText}
              >
                {personal.linkedin.replace(/^https?:\/\//, '')}
              </Link>

              <Link
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.sidebarText}
              >
                {personal.github.replace(/^https?:\/\//, '')}
              </Link>

              <Link
                href={personal.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.sidebarText}
              >
                {personal.portfolio.replace(/^https?:\/\//, '')}
              </Link>
            </Box>

            {/* DEVELOPMENT */}
            <Box className="cv-sidebar-section" sx={styles.sidebarSection}>
              <Typography
                component="h3"
                className="cv-sidebar-title"
                sx={styles.sidebarTitle}
              >
                {t('cv-section-development')}
              </Typography>

              <Box className="cv-skill-list" sx={styles.skillList}>
                {skills.development.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    className="cv-skill-chip"
                    sx={styles.skillChip}
                    size="small"
                  />
                ))}
              </Box>
            </Box>

            {/* TOOLS */}
            <Box className="cv-sidebar-section" sx={styles.sidebarSection}>
              <Typography
                component="h3"
                className="cv-sidebar-title"
                sx={styles.sidebarTitle}
              >
                {t('cv-section-tools')}
              </Typography>

              <Box className="cv-skill-list" sx={styles.skillList}>
                {skills.tools.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    className="cv-skill-chip"
                    sx={styles.skillChip}
                    size="small"
                  />
                ))}
              </Box>
            </Box>

            {/* ANALYSIS */}
            <Box className="cv-sidebar-section" sx={styles.sidebarSection}>
              <Typography
                component="h3"
                className="cv-sidebar-title"
                sx={styles.sidebarTitle}
              >
                {t('cv-section-analysis')}
              </Typography>

              {skills.analysis.map((skill) => (
                <Typography key={skill} sx={{ ...styles.sidebarText, mb: 0.5 }}>
                  {skill}
                </Typography>
              ))}
            </Box>

            {/* LANGUAGES */}
            <Box className="cv-sidebar-section" sx={styles.sidebarSection}>
              <Typography
                component="h3"
                className="cv-sidebar-title"
                sx={styles.sidebarTitle}
              >
                {t('cv-section-languages')}
              </Typography>

              {languages.map((language) => (
                <Box key={language.name} sx={{ mb: 1.25 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {language.name}
                  </Typography>

                  <Typography sx={{ opacity: 0.8, fontSize: '.8rem' }}>
                    {language.level}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ================= MAIN COLUMN ================= */}

          <Box component="main" className="cv-main" sx={styles.main}>
            {/* PROFILE */}
            <Box component="section" className="cv-section" sx={styles.section}>
              <Typography
                component="h2"
                className="cv-section-title"
                sx={styles.sectionTitle}
              >
                {t('cv-section-profile')}
              </Typography>

              <Typography className="cv-profile" sx={styles.profile}>
                {profile}
              </Typography>
            </Box>

            {/* EXPERIENCE */}
            <Box component="section" className="cv-section" sx={styles.section}>
              <Typography
                component="h2"
                className="cv-section-title"
                sx={styles.sectionTitle}
              >
                {t('cv-section-experience')}
              </Typography>

              {experience.map((job, index) => (
                <Box
                  key={`${job.company}-${index}`}
                  className="cv-experience"
                  sx={styles.experience}
                >
                  <Box className="cv-item-header" sx={styles.itemHeader}>
                    <Box>
                      <Typography component="h3" className="cv-role" sx={styles.role}>
                        {job.role}
                      </Typography>

                      <Typography className="cv-org" sx={styles.org}>
                        {job.company} · {job.location}
                      </Typography>
                    </Box>

                    <Box className="cv-date" sx={styles.date}>
                      <Typography>
                        {job.start} — {job.end}
                      </Typography>

                      <Typography>{job.contract}</Typography>
                    </Box>
                  </Box>

                  <Box component="ul" className="cv-description" sx={styles.description}>
                    {job.description.map((item, itemIndex) => (
                      <Typography component="li" key={itemIndex}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* EDUCATION */}
            <Box component="section" className="cv-section" sx={styles.section}>
              <Typography
                component="h2"
                className="cv-section-title"
                sx={styles.sectionTitle}
              >
                {t('cv-section-education')}
              </Typography>

              {education.map((item, index) => (
                <Box
                  key={`${item.school}-${index}`}
                  className="cv-education"
                  sx={styles.education}
                >
                  <Box>
                    <Typography component="h3" className="cv-role" sx={styles.role}>
                      {item.degree}
                    </Typography>

                    <Typography className="cv-org" sx={styles.org}>{item.school}</Typography>
                  </Box>

                  <Box className="cv-date" sx={styles.date}>
                    <Typography>
                      {item.start} — {item.end}
                    </Typography>

                    <Typography>{item.level}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CV
