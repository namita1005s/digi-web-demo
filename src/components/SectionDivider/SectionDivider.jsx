import './SectionDivider.css'

export default function SectionDivider({
  from = 'var(--bg)',
  to = 'var(--bg-dark)',
  variant = 'angle',
  flip = false,
  height = 80,
}) {
  const W = 1440
  const B = 4          // bleed: rect overpaints 4px beyond each edge
  const H = height + B * 2

  const paths = {
    angle: flip
      ? `M0,0 L${W},${H} L${W},0 Z`
      : `M0,${H} L${W},0 L${W},${H} Z`,

    curve: flip
      ? `M0,0 Q${W / 2},${H} ${W},0 L${W},${H} L0,${H} Z`
      : `M0,${H} Q${W / 2},0 ${W},${H} L${W},${H} L0,${H} Z`,

    tilt: flip
      ? `M0,0 L${W * 0.4},${H} L${W},${H * 0.35} L${W},0 Z`
      : `M0,${H * 0.35} L${W * 0.6},${H} L${W},0 L${W},${H} L0,${H} Z`,

    masked: flip
      ? `M0,0 C${W*0.25},${H*0.85} ${W*0.5},${H*0.15} ${W*0.75},${H*0.75} S${W},0 ${W},0 L${W},${H} L0,${H} Z`
      : `M0,${H} C${W*0.25},${H*0.15} ${W*0.5},${H*0.85} ${W*0.75},${H*0.25} S${W},${H} ${W},${H} L${W},${H} L0,${H} Z`,
  }

  return (
    <div className="sdiv" style={{ height: H }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        width="100%"
        height={H}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width={W} height={H} fill={from} />
        <path d={paths[variant] ?? paths.curve} fill={to} />
      </svg>
    </div>
  )
}
