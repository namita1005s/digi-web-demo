import './TrustedBy.css'

const brands = ['Nexora', 'Veltrix', 'Optica', 'Brandify', 'Lumex', 'Zyntec', 'Axiom', 'Primeflow', 'Cortex', 'Elevate']

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="trusted__label-row">
        <span className="trusted__label">Trusted by 50+ growing businesses</span>
      </div>
      <div className="trusted__track-wrap">
        <div className="trusted__track">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="trusted__logo">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
