const LIKE_STATE_KEY = 'portfolio-like-state'

// Storage adapter isolated from the component so it can be replaced with Supabase later.
export const likeStorage = {
  load() {
    try {
      const savedState = window.localStorage.getItem(LIKE_STATE_KEY)
      const parsedState = savedState ? JSON.parse(savedState) : null

      return {
        count: Number.isFinite(parsedState?.count)
          ? Math.max(0, parsedState.count)
          : 0,
        hasLiked: parsedState?.hasLiked === true,
      }
    } catch {
      return { count: 0, hasLiked: false }
    }
  },

  save(state) {
    try {
      window.localStorage.setItem(LIKE_STATE_KEY, JSON.stringify(state))
    } catch {
      // Keep the control usable for this session if browser storage is unavailable.
    }
  },
}
