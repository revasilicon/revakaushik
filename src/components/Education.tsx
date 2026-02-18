function Education() {
  return (
    <section className="section-padding bg-light">
        <div className="container">
            <h2 className="section-title">Education & Certifications</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="skill-card">
                        <h5 className="fw-800 mb-3">Master of Computer Applications (MCA)</h5>
                        <p className="text-secondary small mb-2"><strong>Acropolis Institute of Technology and Research</strong></p>
                        <p className="text-secondary small">Advanced coursework in software engineering, database systems, and distributed computing.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skill-card">
                        <h5 className="fw-800 mb-3">Professional Certifications</h5>
                        <p className="text-secondary small mb-2"><strong>Microsoft Certified:</strong> Database Administration Fundamentals (MTA)</p>
                        <p className="text-secondary small">Hands-on expertise in database design, optimization, and enterprise SQL Server administration.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
