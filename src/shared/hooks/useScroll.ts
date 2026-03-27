import { useEffect, useState } from 'react'

export function useScroll(thresholdBottom = 100) {
  const [scrollY, setScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingUp(false)
      } else {
        setIsScrollingUp(true)
      }

      const isBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - thresholdBottom

      setIsAtBottom(isBottom)
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [thresholdBottom])

  return { scrollY, isScrollingUp, isAtBottom }
}
