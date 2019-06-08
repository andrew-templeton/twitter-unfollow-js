;((SCROLL_NODES, SELECTOR, TIME_DELAY_MS) => {
  const unfollowNext = () => {
    const unfollowable = document.querySelector(SELECTOR)
    if (unfollowable) {
      const queryable = $(unfollowable)
      const scrollTop = queryable.offset().top
      unfollowable.click()

      setTimeout(() => {
        unfollowNext()
        SCROLL_NODES.animate({ scrollTop }, TIME_DELAY_MS);
      }, TIME_DELAY_MS)
    }
  }
  unfollowNext()
})($([document.documentElement, document.body]), '.ProfileCard .following .follow-button', 500);
