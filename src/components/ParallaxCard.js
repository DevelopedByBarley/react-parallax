

export function ParallaxCard({ pageX, pageY, speed }) {
  const x = (window.innerWidth - pageX * speed) / 100
  const y = (window.innerHeight - pageY * speed) / 100

  const parallaxCardSyles = {
    height: "200px",
    width: "200px",
    backgroundColor: "white",
    margin: "5rem",
    transform: `translate(${x}px, ${y}px)`,
  }

  return (
    <div style={parallaxCardSyles}  >ParralaxCard </div>
  )
}
