import React, { useEffect, useRef, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@mui/material'

import { supabase } from '../../lib/supabaseClient'
import { likeStorage } from './likeStorage'

const LikeButton = () => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(() => likeStorage.hasLiked())
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const animationTimeout = useRef(null)

  useEffect(() => {
    const loadLikes = async () => {
      const { data, error } = await supabase
        .from('portfolio_likes')
        .select('count')
        .eq('id', 1)
        .single()

      if (error) {
        console.error('Could not load portfolio likes:', error)
      } else {
        setCount(data.count)
      }

      setIsLoading(false)
    }

    loadLikes()

    return () => {
      window.clearTimeout(animationTimeout.current)
    }
  }, [])

  const handleLike = async () => {
    if (hasLiked || isLoading) return

    setIsLoading(true)

    const { data, error } = await supabase.rpc('increment_portfolio_likes')

    if (error) {
      console.error('Could not like portfolio:', error)
      setIsLoading(false)
      return
    }

    setCount(data)
    setHasLiked(true)
    likeStorage.saveLiked()

    setIsAnimating(true)

    window.clearTimeout(animationTimeout.current)

    animationTimeout.current = window.setTimeout(
      () => setIsAnimating(false),
      450,
    )

    setIsLoading(false)
  }

  const HeartIcon = hasLiked ? FavoriteIcon : FavoriteBorderIcon

  return (
    <Button
      onClick={handleLike}
      disabled={hasLiked || isLoading}
      aria-pressed={hasLiked}
      aria-label={`${count} likes${
        hasLiked ? ', you liked this portfolio' : ', like this portfolio'
      }`}
      startIcon={
        <HeartIcon
          sx={{
            color: hasLiked ? 'secondary.main' : 'inherit',

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
      {isLoading ? '...' : count}
    </Button>
  )
}

export default LikeButton
