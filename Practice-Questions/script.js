const speakers = [
      {
        name: "Dr. Sarah Chen",
        role: "Chief AI Researcher",
        company: "Future Labs",
        bio: "Dr. Chen is a leading researcher in artificial intelligence and ethical machine learning.",
        topic: "The Future of Ethical AI",
        image : "💻",
      },
      {
        name: "Marcus Rodriguez",
        role: "Founder & CEO",
        company: "GreenTech",
        bio: "Marcus builds sustainable technology startups focused on renewable energy.",
        topic: "Building Sustainable Startups",
        image : "📊",
      },
      {
        name: "Dr. Amara Okafor",
        role: "Director of Cybersecurity",
        company: "SecureNet",
        bio: "Dr. Okafor specializes in digital safety and global cybersecurity strategies.",
        topic: "Protecting Your Digital Identity",
        image : "💻",
      },
      {
        name: "James Patterson",
        role: "Lead UX Designer",
        company: "DesignFlow",
        bio: "James creates user-centered designs for major tech platforms.",
        topic: "Human-Centered Design in Tech",
        image : "💻"
      },
      {
        name: "Dr. Priya Sharma",
        role: "Data Science Lead",
        company: "Insight Analytics",
        bio: "Priya uses data-driven solutions to solve real-world problems.",
        topic: "Data-Driven Decision Making",
        image : "📊",
      },
      {
        name: "Alex Thompson",
        role: "Blockchain Architect",
        company: "ChainWorks",
        bio: "Alex develops secure decentralized systems using blockchain technology.",
        topic: "Blockchain Beyond Cryptocurrency",
        image : "💻"
      },
      {
        name : "Lisa Wang",
        role : "Cheif Marketing Officer",
        company : "BrandSpark Agency",
        bio : "Lisa has revolutionized digital marketing strategies for global brands.",
        topic : "Marketing in 2026: Authenticity Meets Automation",
        image : "📊",
      },
      {
        name : "Dr. Michael Foster",
        role : "Quantum Computing Researcher",
        company : "Quantum Dynamics Insitute",
        bio : "Dr Foster is at the forefront of quantum computing research. His work on quantum algorithms has potential applications in cryptography and optimization.",
        topic : "Quantum Computing: The Next Computing Revolution",
        image : "💻",
      },
    ];
    
    const container = document.getElementById("content");
    let html = '';
    speakers.forEach(speaker => {
      html += `
        <div class="card">
            <h3>${speaker.image}</h3>
            <h3>${speaker.name}</h3>
            <h4>${speaker.role}</h4>
            <h4>${speaker.company}</h4>
            <p>${speaker.bio}</p>
            <p class="topic">Topic: ${speaker.topic}</p>
            <div class="links">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Website</a>
            </div>
        </div>
      `;

      content.innerHTML = html;
    });

    