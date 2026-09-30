import React from 'react'
import { Box, Typography, Link, Chip, Button, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DownloadIcon from '@mui/icons-material/Download'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { cvData } from './cvData'

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
  const { personal, profile, skills, languages, experience, education } = cvData
  const { t } = useTranslation('global')

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: 2,
        py: { xs: 2, md: 3 },
        bgcolor: '#0c0c0d',
        '@media print': {
          minHeight: 0,
          p: 0,
          bgcolor: '#fff',
          '& .cv-actions': { display: 'none' },
          '& .cv-sheet': {
            width: '210mm',
            maxWidth: '100%',
            minHeight: 0,
            m: 0,
            overflow: 'visible',
            boxShadow: 'none',
            printColorAdjust: 'exact',
            WebkitPrintColorAdjust: 'exact',
          },
          '& .cv-sheet-body': { gridTemplateColumns: '32% 68%' },
        },
      }}
    >
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
        <Button
          onClick={() => window.print()}
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

        <Box sx={styles.header}>
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
              src={personal.photo}
              alt={`Portrait de ${personal.name}`}
              sx={styles.photo}
            />
          )}
        </Box>

        {/* ================= BODY ================= */}

        <Box className="cv-sheet-body" sx={styles.body}>
          {/* SIDEBAR */}
          <Box component="aside" sx={styles.sidebar}>
            {/* CONTACT */}
            <Box sx={styles.sidebarSection}>
              <Typography component="h3" sx={styles.sidebarTitle}>
                Contact
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
                LinkedIn
              </Link>

              <Link
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.sidebarText}
              >
                GitHub
              </Link>
            </Box>

            {/* DEVELOPMENT */}
            <Box sx={styles.sidebarSection}>
              <Typography component="h3" sx={styles.sidebarTitle}>
                Développement
              </Typography>

              <Box sx={styles.skillList}>
                {skills.development.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={styles.skillChip}
                    size="small"
                  />
                ))}
              </Box>
            </Box>

            {/* TOOLS */}
            <Box sx={styles.sidebarSection}>
              <Typography component="h3" sx={styles.sidebarTitle}>
                Outils
              </Typography>

              <Box sx={styles.skillList}>
                {skills.tools.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={styles.skillChip}
                    size="small"
                  />
                ))}
              </Box>
            </Box>

            {/* ANALYSIS */}
            <Box sx={styles.sidebarSection}>
              <Typography component="h3" sx={styles.sidebarTitle}>
                Analyse
              </Typography>

              {skills.analysis.map((skill) => (
                <Typography key={skill} sx={{ ...styles.sidebarText, mb: 0.5 }}>
                  {skill}
                </Typography>
              ))}
            </Box>

            {/* LANGUAGES */}
            <Box sx={styles.sidebarSection}>
              <Typography component="h3" sx={styles.sidebarTitle}>
                Langues
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

          <Box component="main" sx={styles.main}>
            {/* PROFILE */}
            <Box component="section" sx={styles.section}>
              <Typography component="h2" sx={styles.sectionTitle}>
                Profil
              </Typography>

              <Typography sx={styles.profile}>{profile}</Typography>
            </Box>

            {/* EXPERIENCE */}
            <Box component="section" sx={styles.section}>
              <Typography component="h2" sx={styles.sectionTitle}>
                Expériences professionnelles
              </Typography>

              {experience.map((job, index) => (
                <Box key={`${job.company}-${index}`} sx={styles.experience}>
                  <Box sx={styles.itemHeader}>
                    <Box>
                      <Typography component="h3" sx={styles.role}>
                        {job.role}
                      </Typography>

                      <Typography sx={styles.org}>
                        {job.company} · {job.location}
                      </Typography>
                    </Box>

                    <Box sx={styles.date}>
                      <Typography>
                        {job.start} — {job.end}
                      </Typography>

                      <Typography>{job.contract}</Typography>
                    </Box>
                  </Box>

                  <Box component="ul" sx={styles.description}>
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
            <Box component="section" sx={styles.section}>
              <Typography component="h2" sx={styles.sectionTitle}>
                Formation
              </Typography>

              {education.map((item, index) => (
                <Box key={`${item.school}-${index}`} sx={styles.education}>
                  <Box>
                    <Typography component="h3" sx={styles.role}>
                      {item.degree}
                    </Typography>

                    <Typography sx={styles.org}>{item.school}</Typography>
                  </Box>

                  <Box sx={styles.date}>
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
