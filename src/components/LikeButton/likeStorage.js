const HAS_LIKED_KEY = 'portfolio-has-liked'

export const likeStorage = {
  hasLiked() {
    try {
      return window.localStorage.getItem(HAS_LIKED_KEY) === 'true'
    } catch {
      return false
    }
  },

  saveLiked() {
    try {
      window.localStorage.setItem(HAS_LIKED_KEY, 'true')
    } catch {
      // Keep the UI usable if localStorage is unavailable.
    }
  },
}
