function Hero() {
  return (
     <header className="hero">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <span className="text-primary fw-bold mb-3 d-block">Senior Software Engineer — 12+ Years Exp.</span>
                    <h1 className="hero-title mb-4">Architecting <span className="text-gradient">Scalable Solutions</span> for Web and Mobile.</h1>
                    <p className="lead text-secondary mb-5" style={{ maxWidth: '650px' }}>
                        Seasoned full-stack developer specializing in Node.js,MySQL, React, Flutter, and AWS. From optimizing LMS platforms to building AI-powered SaaS and mobile applications, I turn complex requirements into high-performance code.
                    </p>
                    <div className="d-flex gap-3">
                        <a href="#projects" className="btn btn-primary shadow">View Case Studies</a>                       
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hero
