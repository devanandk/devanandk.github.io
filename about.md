---
layout: default
title: About
---

<section class="section">
    <div class="container">
        <h1 class="section-title">About Me</h1>
        <div class="about-grid">
            <div class="about-main">
                <div class="about-intro">
                    <p class="lead-text">I'm a passionate technologist with over 12 years of experience crafting enterprise solutions that make a difference. My journey has taken me from coding full-stack applications to architecting cloud-native systems that power international banking operations for India's largest bank.</p>
                </div>
                
                <div class="about-section">
                    <h2 class="section-subtitle">Professional Focus</h2>
                    <p class="section-intro">Currently leading enterprise-scale technical initiatives at State Bank of India, I focus on:</p>
                    <ul class="feature-list">
                        <li><i class="fas fa-cloud"></i> Architecting cloud-native solutions deployed on Kubernetes</li>
                        <li><i class="fas fa-network-wired"></i> Designing integration systems that connect complex banking operations</li>
                        <li><i class="fas fa-chart-line"></i> Building data-driven solutions that turn information into insights</li>
                        <li><i class="fas fa-shield-alt"></i> Implementing secure systems that comply with global banking regulations</li>
                    </ul>
                </div>

                <div class="about-section">
                    <h2 class="section-subtitle">Education & Certifications</h2>
                    <div class="cert-grid">
                        <div class="cert-item">
                            <i class="fas fa-graduation-cap"></i>
                            <div class="cert-content">
                                <h3>Education</h3>
                                <p>Bachelor of Engineering, Computer Science</p>
                                <p class="cert-meta">Anna University, Chennai</p>
                            </div>
                        </div>
                        <div class="cert-item">
                            <i class="fas fa-certificate"></i>
                            <div class="cert-content">
                                <h3>Technical Certifications</h3>
                                <ul>
                                    <li>Oracle Certified Professional, Java SE 6 Programmer</li>
                                    <li>RedHat System Administration I & II (RH124 & RH134)</li>
                                    <li>Google Data Analytics Professional Certificate</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cert-item">
                            <i class="fas fa-robot"></i>
                            <div class="cert-content">
                                <h3>AI & Development</h3>
                                <ul>
                                    <li>ChatGPT Prompt Engineering for Developers</li>
                                    <li>Pair Programming with a Large Language Model</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-section">
                    <h2 class="section-subtitle">Languages</h2>
                    <div class="language-grid">
                        <div class="language-item">
                            <span class="language-name">English</span>
                            <span class="language-level">Full Professional</span>
                        </div>
                        <div class="language-item">
                            <span class="language-name">Hindi</span>
                            <span class="language-level">Full Professional</span>
                        </div>
                        <div class="language-item">
                            <span class="language-name">Malayalam</span>
                            <span class="language-level">Native</span>
                        </div>
                        <div class="language-item">
                            <span class="language-name">Tamil</span>
                            <span class="language-level">Working</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section interests-section">
    <div class="container">
        <h2 class="section-title">Beyond Tech</h2>
        <div class="interests-grid">
            <div class="interest-item">
                <i class="fas fa-book"></i>
                <h3>Reading</h3>
                <p>Avid reader with a particular love for science fiction and fantasy</p>
            </div>
            <div class="interest-item">
                <i class="fas fa-headphones"></i>
                <h3>Audiobooks</h3>
                <p>Frequently immersed in audiobooks and digital reading</p>
            </div>
            <div class="interest-item">
                <i class="fas fa-plane"></i>
                <h3>Flight Simulation</h3>
                <p>Virtual piloting of Airbus A320 neo in Microsoft Flight Simulator</p>
            </div>
            <div class="interest-item">
                <i class="fas fa-brain"></i>
                <h3>Continuous Learning</h3>
                <p>Always exploring new technologies and concepts</p>
            </div>
        </div>
    </div>
</section>

<style>
.about-grid {
    display: grid;
    gap: 2rem;
}

.about-main {
    max-width: 1000px;
    margin: 0 auto;
}

.about-intro {
    margin-bottom: 3rem;
}

.lead-text {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--text-color);
}

.about-section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section-subtitle {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.section-intro {
    color: var(--text-color);
    margin-bottom: 1.5rem;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
}

.feature-list li i {
    position: absolute;
    left: 0;
    color: var(--secondary-color);
}

.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

.cert-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: var(--light-gray);
    border-radius: 8px;
}

.cert-item i {
    font-size: 1.5rem;
    color: var(--secondary-color);
}

.cert-content h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.cert-content ul {
    list-style: none;
    padding: 0;
}

.cert-content li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.cert-meta {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.language-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
}

.language-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem;
    background: var(--light-gray);
    border-radius: 8px;
}

.language-name {
    font-weight: 600;
    color: var(--primary-color);
}

.language-level {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.interests-section {
    background-color: var(--light-gray);
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.interest-item {
    text-align: center;
    padding: 2rem;
    background: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.interest-item i {
    font-size: 2rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.interest-item h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.interest-item p {
    color: var(--text-color);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .about-section {
        padding: 1.5rem;
    }

    .cert-grid {
        grid-template-columns: 1fr;
    }

    .language-grid {
        grid-template-columns: 1fr;
    }

    .interests-grid {
        grid-template-columns: 1fr;
    }
}
</style> 