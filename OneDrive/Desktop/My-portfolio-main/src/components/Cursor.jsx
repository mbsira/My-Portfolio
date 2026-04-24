import { useEffect, useRef } from "react"

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!dot.current || !ring.current) return
      
      const x = e.clientX
      const y = e.clientY
      
      dot.current.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0)`
      ring.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`
    }

    const grow = () => {
      if (ring.current) ring.current.classList.add('growing')
    }
    const shrink = () => {
      if (ring.current) ring.current.classList.remove('growing')
    }

    window.addEventListener("mousemove", move)
    
    const links = document.querySelectorAll("a, button, .group")
    links.forEach(el => {
      el.addEventListener("mouseenter", grow)
      el.addEventListener("mouseleave", shrink)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      links.forEach(el => {
        el.removeEventListener("mouseenter", grow)
        el.removeEventListener("mouseleave", shrink)
      })
    }
  }, [])

  return (
    <>
      <div 
        ref={dot} 
        className="cursor" 
        style={{ position: 'fixed', top: 0, left: 0, willChange: 'transform' }} 
      />
      <div 
        ref={ring} 
        className="cursor-follower" 
        style={{ position: 'fixed', top: 0, left: 0, willChange: 'transform' }} 
      />
    </>
  )
}