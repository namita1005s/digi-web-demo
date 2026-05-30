import './TrustedBy.css'

const brands = ['Nexora', 'Veltrix', 'Optica', 'Brandify', 'Lumex', 'Zyntec']

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container trusted__inner">
        <p className="trusted__label">Trusted by <span>20+ Businesses</span></p>
        <div className="trusted__logos">
          {brands.map(b => (
            <span key={b} className="trusted__logo">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
