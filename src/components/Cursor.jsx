import { useEffect, useRef } from "react"

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!dot.current || !ring.current) return
      dot.current.style.left = e.clientX - 5 + "px"
      dot.current.style.top = e.clientY - 5 + "px"
      ring.current.style.left = e.clientX - 16 + "px"
      ring.current.style.top = e.clientY - 16 + "px"
    }

    const grow = () => {
      if (ring.current) ring.current.style.transform = "scale(1.8)"
    }
    const shrink = () => {
      if (ring.current) ring.current.style.transform = "scale(1)"
    }

    window.addEventListener("mousemove", move)
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", grow)
      el.addEventListener("mouseleave", shrink)
    })

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className="cursor-follower" />
    </>
  )
}
