import React, { useEffect, useRef, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@mui/material'
import { likeStorage } from './likeStorage'

const LikeButton = () => {
  const [likeState, setLikeState] = useState(() => likeStorage.load())
  const [isAnimating, setIsAnimating] = useState(false)
  const animationTimeout = useRef(null)

  useEffect(() => () => window.clearTimeout(animationTimeout.current), [])

  const handleLike = () => {
    if (likeState.hasLiked) return

    const nextState = { count: likeState.count + 1, hasLiked: true }
    setLikeState(nextState)
    likeStorage.save(nextState)
    setIsAnimating(true)
    window.clearTimeout(animationTimeout.current)
    animationTimeout.current = window.setTimeout(
      () => setIsAnimating(false),
      450,
    )
  }

  const HeartIcon = likeState.hasLiked ? FavoriteIcon : FavoriteBorderIcon

  return (
    <Button
      onClick={handleLike}
      disabled={likeState.hasLiked}
      aria-pressed={likeState.hasLiked}
      aria-label={`${likeState.count} likes${likeState.hasLiked ? ', you liked this portfolio' : ', like this portfolio'}`}
      startIcon={
        <HeartIcon
          sx={{
            color: likeState.hasLiked ? 'secondary.main' : 'inherit',
            animation: isAnimating
              ? 'portfolio-heart-pop 450ms ease-out'
              : 'none',
            '@keyframes portfolio-heart-pop': {
              '0%': { transform: 'scale(1)' },
              '35%': { transform: 'scale(1.45)' },
              '65%': { transform: 'scale(.9)' },
              '100%': { transform: 'scale(1)' },
            },
          }}
        />
      }
      variant="outlined"
      sx={{
        color: 'text.primary',
        borderColor: 'rgba(255,255,255,.24)',
        '&:hover': {
          borderColor: 'secondary.main',
          bgcolor: 'rgba(153,31,43,.12)',
        },
        '&.Mui-disabled': {
          color: 'text.primary',
          borderColor: 'rgba(255,255,255,.24)',
          opacity: 1,
        },
      }}
    >
      {likeState.count}
    </Button>
  )
}

export default LikeButton
