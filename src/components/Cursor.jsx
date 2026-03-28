import { useEffect, useRef } from "react"

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      dot.current.style.left = e.clientX - 6 + "px"
      dot.current.style.top = e.clientY - 6 + "px"
      ring.current.style.left = e.clientX - 18 + "px"
      ring.current.style.top = e.clientY - 18 + "px"
    }

    const grow = () => ring.current.style.transform = "scale(1.8)"
    const shrink = () => ring.current.style.transform = "scale(1)"

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
