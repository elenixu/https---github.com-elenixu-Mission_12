import React from 'react'
import { Box } from '@mui/material'

import SkillCard from '../SkillCard'
import { skills } from '../SkillCard/skillData'

const SkillsList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        overflowX: 'auto',
        py: 3,
        px: 1,

        '&::-webkit-scrollbar': {
          display: 'none',
        },

        scrollbarWidth: 'none',
      }}
    >
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          level={skill.level}
        />
      ))}
    </Box>
  )
}

export default SkillsList
