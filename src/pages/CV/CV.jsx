import React from 'react'
import { Box, Typography, Link, Chip } from '@mui/material'

import { cvData } from './cvData'
import './CV.scss'

const CV = () => {
  const { personal, profile, skills, languages, experience, education } = cvData

  return (
    <Box className="cv-page">
      {/* ================= HEADER ================= */}

      <Box className="cv-header">
        <Box className="cv-header-text">
          <Typography component="h1" className="cv-name">
            {personal.name}
          </Typography>

          <Typography component="h2" className="cv-title">
            {personal.title}
          </Typography>

          <Typography className="cv-subtitle">{personal.subtitle}</Typography>
        </Box>

        {personal.photo && (
          <Box
            component="img"
            src={personal.photo}
            alt={`Portrait de ${personal.name}`}
            className="cv-photo"
          />
        )}
      </Box>

      {/* ================= BODY ================= */}

      <Box className="cv-body">
        {/* SIDEBAR */}
        <Box component="aside" className="cv-sidebar">
          {/* CONTACT */}
          <Box className="sidebar-section">
            <Typography component="h3" className="sidebar-title">
              Contact
            </Typography>

            <Typography>{personal.location}</Typography>

            <Link href={`mailto:${personal.email}`}>{personal.email}</Link>

            <Link href={`tel:${personal.phone}`}>{personal.phone}</Link>

            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>

            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Box>

          {/* DEVELOPMENT */}
          <Box className="sidebar-section">
            <Typography component="h3" className="sidebar-title">
              Développement
            </Typography>

            <Box className="skill-list">
              {skills.development.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  className="skill-chip"
                  size="small"
                />
              ))}
            </Box>
          </Box>

          {/* TOOLS */}
          <Box className="sidebar-section">
            <Typography component="h3" className="sidebar-title">
              Outils
            </Typography>

            <Box className="skill-list">
              {skills.tools.map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  className="skill-chip"
                  size="small"
                />
              ))}
            </Box>
          </Box>

          {/* ANALYSIS */}
          <Box className="sidebar-section">
            <Typography component="h3" className="sidebar-title">
              Analyse
            </Typography>

            {skills.analysis.map((skill) => (
              <Typography key={skill} className="sidebar-item">
                {skill}
              </Typography>
            ))}
          </Box>

          {/* LANGUAGES */}
          <Box className="sidebar-section">
            <Typography component="h3" className="sidebar-title">
              Langues
            </Typography>

            {languages.map((language) => (
              <Box className="language" key={language.name}>
                <Typography className="language-name">
                  {language.name}
                </Typography>

                <Typography className="language-level">
                  {language.level}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= MAIN COLUMN ================= */}

        <Box component="main" className="cv-main">
          {/* PROFILE */}
          <Box component="section" className="main-section profile-section">
            <Typography component="h2" className="section-title">
              Profil
            </Typography>

            <Typography className="profile-text">{profile}</Typography>
          </Box>

          {/* EXPERIENCE */}
          <Box component="section" className="main-section">
            <Typography component="h2" className="section-title">
              Expériences professionnelles
            </Typography>

            {experience.map((job, index) => (
              <Box className="experience" key={`${job.company}-${index}`}>
                <Box className="experience-header">
                  <Box>
                    <Typography component="h3" className="experience-role">
                      {job.role}
                    </Typography>

                    <Typography className="experience-company">
                      {job.company} · {job.location}
                    </Typography>
                  </Box>

                  <Box className="experience-date">
                    <Typography>
                      {job.start} — {job.end}
                    </Typography>

                    <Typography>{job.contract}</Typography>
                  </Box>
                </Box>

                <Box component="ul" className="experience-description">
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
          <Box component="section" className="main-section">
            <Typography component="h2" className="section-title">
              Formation
            </Typography>

            {education.map((item, index) => (
              <Box className="education" key={`${item.school}-${index}`}>
                <Box>
                  <Typography component="h3" className="education-degree">
                    {item.degree}
                  </Typography>

                  <Typography className="education-school">
                    {item.school}
                  </Typography>
                </Box>

                <Box className="education-date">
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
  )
}

export default CV
