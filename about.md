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
                        <li>
                            <i class="fas fa-cloud"></i>
                            <span>Architecting cloud-native solutions deployed on Kubernetes</span>
                        </li>
                        <li>
                            <i class="fas fa-network-wired"></i>
                            <span>Designing integration systems that connect complex banking operations</span>
                        </li>
                        <li>
                            <i class="fas fa-chart-line"></i>
                            <span>Building data-driven solutions that turn information into insights</span>
                        </li>
                        <li>
                            <i class="fas fa-shield-alt"></i>
                            <span>Implementing secure systems that comply with global banking regulations</span>
                        </li>
                    </ul>
                </div>

                <div class="about-section">
                    <h2 class="section-subtitle"><i class="fas fa-graduation-cap"></i> Education & Certifications</h2>
                    <div class="education-certifications">
                        <div class="education-item">
                            <h3>Education</h3>
                            <p>Bachelor of Engineering, Computer Science and Engineering</p>
                            <p class="cert-meta">Anna University, Chennai</p>
                        </div>
                        <div class="certification-item">
                            <h3>Technical Certifications</h3>
                            <ul class="cert-list">
                                <li>Oracle Certified Professional, Java SE6 Programmer</li>
                                <li>RedHat System Administrator</li>
                                <li>Google Data Analytics Professional</li>
                            </ul>
                        </div>
                        <div class="certification-item">
                            <h3>AI & Development</h3>
                            <ul class="cert-list">
                                <li>ChatGPT Prompt Engineering for Developers, DeepLearning.ai</li>
                                <li>Pair Programming with a Large Language Model, DeepLearning.ai</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="about-section">
                    <h2 class="section-subtitle"><i class="fas fa-language"></i> Languages</h2>
                    <div class="languages-container">
                        <div class="language-item-simple">
                            <span class="language-name">English</span>
                            <img src="https://img.shields.io/badge/-Full%20Professional%20Proficiency-2D3748?style=flat-square&logo=check-circle&logoColor=white" alt="Full Professional Proficiency">
                        </div>
                        <div class="language-item-simple">
                            <span class="language-name">Hindi</span>
                            <img src="https://img.shields.io/badge/-Full%20Professional%20Proficiency-2D3748?style=flat-square&logo=check-circle&logoColor=white" alt="Full Professional Proficiency">
                        </div>
                        <div class="language-item-simple">
                            <span class="language-name">Malayalam</span>
                            <img src="https://img.shields.io/badge/-Native%20Speaker-2D3748?style=flat-square&logo=star&logoColor=white" alt="Native Speaker">
                        </div>
                        <div class="language-item-simple">
                            <span class="language-name">Tamil</span>
                            <img src="https://img.shields.io/badge/-Working%20Knowledge-2D3748?style=flat-square&logo=book&logoColor=white" alt="Working Knowledge">
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
    max-width: 800px;
    margin: 0 auto;
}

.about-section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--card-bg);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease;
}

.about-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
}

.section-subtitle {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.section-subtitle i {
    color: var(--secondary-color);
    font-size: 1.75rem;
}

.section-intro {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding-left: 2.5rem;
    position: relative;
}

.feature-list li i {
    position: absolute;
    left: 0;
    color: var(--secondary-color);
    font-size: 1.2rem;
}

.feature-list li span {
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.5;
}

.tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.tech-badges .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: var(--light-gray);
    border-radius: 4px;
    color: var(--text-color);
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.tech-badges .badge:hover {
    background: var(--secondary-color);
    color: white;
    transform: translateY(-2px);
}

.tech-badges .badge i {
    font-size: 0.875rem;
    color: var(--secondary-color);
}

.tech-badges .badge:hover i {
    color: white;
}

.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

.cert-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: var(--light-gray);
    border-radius: 12px;
    transition: transform 0.2s ease;
}

.cert-item:hover {
    transform: translateY(-2px);
}

.cert-item i {
    font-size: 2rem;
    color: var(--secondary-color);
}

.cert-content h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.cert-content p {
    color: var(--text-color);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
}

.cert-meta {
    font-size: 0.95rem;
    color: var(--text-muted);
}

.cert-badges {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.cert-badges .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--light-gray);
    border-radius: 4px;
    color: var(--text-color);
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.cert-badges .badge:hover {
    background: var(--secondary-color);
    color: white;
    transform: translateY(-2px);
}

.cert-badges .badge i {
    font-size: 0.875rem;
    color: var(--secondary-color);
}

.cert-badges .badge:hover i {
    color: white;
}

.language-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

.language-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: var(--light-gray);
    border-radius: 12px;
    transition: transform 0.2s ease;
}

.language-item:hover {
    transform: translateY(-2px);
}

.language-header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.language-header i {
    font-size: 1.75rem;
    color: var(--secondary-color);
}

.language-header h3 {
    color: var(--primary-color);
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
}

.proficiency-badge {
    display: flex;
    justify-content: center;
}

.proficiency-badge .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--light-gray);
    border-radius: 4px;
    color: var(--text-color);
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.proficiency-badge .badge:hover {
    background: var(--secondary-color);
    color: white;
    transform: translateY(-2px);
}

.proficiency-badge .badge i {
    font-size: 0.875rem;
    color: var(--secondary-color);
}

.proficiency-badge .badge:hover i {
    color: white;
}

.interests-section {
    background-color: var(--light-gray);
    padding: 3rem 0;
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.interest-item {
    text-align: center;
    padding: 2rem;
    background: var(--card-bg);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease;
}

.interest-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
}

.interest-item i {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 1.25rem;
}

.interest-item h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.interest-item p {
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.interest-badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
}

.interest-badges .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: var(--light-gray);
    border-radius: 4px;
    color: var(--text-color);
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.interest-badges .badge:hover {
    background: var(--secondary-color);
    color: white;
    transform: translateY(-2px);
}

.interest-badges .badge i {
    font-size: 0.875rem;
    color: var(--secondary-color);
}

.interest-badges .badge:hover i {
    color: white;
}

.education-certifications {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.education-item, .certification-item {
    padding: 1.5rem;
    background: var(--light-gray);
    border-radius: 8px;
    margin-bottom: 1rem;
}

.education-item h3, .certification-item h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.cert-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cert-list li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.5;
}

.cert-list li::before {
    content: "•";
    color: var(--secondary-color);
    position: absolute;
    left: 0;
    font-weight: bold;
}

.language-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.languages-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.language-item-simple {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
}

.language-item-simple:last-child {
    border-bottom: none;
}

.language-name {
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.language-item-vertical {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    background: var(--light-gray);
    border-radius: 8px;
    transition: transform 0.2s ease;
}

.language-item-vertical:hover {
    transform: translateY(-2px);
    background: var(--card-bg);
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

    .feature-list li {
        padding: 1.25rem;
    }

    .cert-item {
        padding: 1.5rem;
    }

    .language-item {
        padding: 1.5rem;
    }

    .interest-item {
        padding: 1.5rem;
    }

    .language-item-vertical {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .language-item-simple {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0.75rem 0;
    }
}
</style> 