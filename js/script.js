(function () {
  const btn = document.getElementById("resumeBtn");

  // fully built resume HTML (exact copy from PDF content, nicely formatted)
  function buildResumeHTML() {
    return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Ali Haraira · detailed resume</title>
<style>
    * { margin:0; padding:0; box-sizing:border-box; font-family:'Inter', 'Segoe UI', system-ui, sans-serif; }
    body { background:#263b4a; display:flex; justify-content:center; padding:2rem 1rem; }
    .resume-container { max-width:1000px; width:100%; background:#fcf9f4; border-radius:32px; box-shadow:0 30px 60px #00000050; overflow:hidden; }
    .resume-header { background:#1e3c4f; color:white; padding:2rem 2.5rem 1.8rem; }
    .resume-header h1 { font-size:3rem; font-weight:600; letter-spacing:-0.5px; line-height:1.1; }
    .title-tag { font-size:1.2rem; color:#cbdbe9; margin-top:0.4rem; font-weight:400; }
    .contact-row { display:flex; flex-wrap:wrap; gap:1.5rem 2.5rem; margin-top:1.5rem; border-top:1px solid #35637c; padding-top:1.5rem; }
    .contact-item { display:flex; align-items:center; gap:8px; }
    .main-grid { display:grid; grid-template-columns:1fr 2.2fr; background:#fcf9f4; }
    .sidebar { background:#eef3f7; padding:2rem 1.6rem; border-right:1px solid #dae2e9; }
    .main-content { padding:2rem 2rem 2rem 1.8rem; }
    .section-title { font-size:1.1rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#1e3c4f; border-bottom:3px solid #c4d3e0; padding-bottom:0.5rem; margin:1.5rem 0 1.2rem; }
    .section-title:first-of-type { margin-top:0; }
    .skill-tag { background:white; padding:0.3rem 0.9rem; border-radius:20px; font-size:0.85rem; font-weight:500; color:#0f2a38; box-shadow:0 2px 5px #00000010; display:inline-block; margin:0.2rem 0.2rem; border:1px solid #ced9e2; }
    .compact-list { list-style:none; } .compact-list li { margin-bottom:0.45rem; font-size:0.9rem; display:flex; gap:8px; } .compact-list li::before { content:"•"; color:#2d7ca0; font-weight:bold; }
    .job-item { margin-bottom:1.8rem; } .job-header { display:flex; justify-content:space-between; font-weight:600; color:#0d3f57; flex-wrap:wrap; } .job-title { font-size:1.05rem; } .job-date { color:#4f6f85; font-weight:400; font-size:0.85rem; } .job-company { font-weight:500; color:#2b4e65; margin:0.1rem 0 0.5rem; } .job-desc { padding-left:1.2rem; list-style:none; } .job-desc li { font-size:0.9rem; margin-bottom:0.4rem; display:flex; gap:8px; } .job-desc li::before { content:"▹"; color:#1f6392; }
    .edu-line { font-weight:600; font-size:1rem; margin:0.8rem 0 0.2rem; } .edu-detail { font-size:0.95rem; color:#1e3b4b; } hr { border:1px solid #d0dee9; margin:1rem 0; }
    .badge-sm { background:white; border-radius:16px; padding:0.2rem 0.8rem; font-size:0.75rem; font-weight:600; color:#1f4b64; border:1px solid #adc6da; display:inline-block; margin:0.1rem 0.2rem; }
    .skill-block { margin-bottom:1rem; }
</style>
</head>
<body>
<div class="resume-container">
    <div class="resume-header">
        <h1>Ali Haraira</h1>
        <div class="title-tag">SOFTWARE ENGINEER | UNITY GAME DEVELOPER | PHP LARAVEL DEVELOPER</div>
        <div class="contact-row">
            <span class="contact-item">📍 Gujrat, Punjab Pakistan</span>
            <span class="contact-item">📞 +92 316 7979691</span>
            <span class="contact-item">✉️ alibutt610354@gmail.com</span>
            <span class="contact-item">🔗 linkedin.com/in/ali-haraira-119a7a1ab</span>
        </div>
    </div>

    <div class="main-grid">
        <!-- SIDEBAR left -->
        <div class="sidebar">
            <div class="section-title">Technical Skills</div>
            <div class="skill-block">
                <span class="skill-tag">C#</span> <span class="skill-tag">HTML</span> <span class="skill-tag">CSS</span> <span class="skill-tag">Bootstrap</span> <span class="skill-tag">PHP</span> <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Worldpay</span> <span class="skill-tag">MB Way</span> <span class="skill-tag">Cartes Bancaires</span> <span class="skill-tag">iDEAL</span>
                <span class="skill-tag">Checkout flow</span> <span class="skill-tag">webhooks</span> <span class="skill-tag">callbacks</span> <span class="skill-tag">transaction verification</span> <span class="skill-tag">refunds</span>
                <span class="skill-tag">Payment validation</span> <span class="skill-tag">API authentication</span> <span class="skill-tag">secure data handling</span>
                <span class="skill-tag">Unity</span> <span class="skill-tag">Visual Studio</span> <span class="skill-tag">Vs Code</span> <span class="skill-tag">Game mechanics</span> <span class="skill-tag">physics</span> <span class="skill-tag">AI</span>
                <span class="skill-tag">Backend APIs</span> <span class="skill-tag">authentication</span> <span class="skill-tag">admin dashboards</span> <span class="skill-tag">responsive UI</span> <span class="skill-tag">role-based access</span>
                <span class="skill-tag">database design</span> <span class="skill-tag">Android</span> <span class="skill-tag">iOS</span> <span class="skill-tag">WebGL</span> <span class="skill-tag">Debugging</span> <span class="skill-tag">optimization</span>
                <span class="skill-tag">MySQL</span> <span class="skill-tag">UML</span> <span class="skill-tag">SYSML</span> <span class="skill-tag">OOP</span>
            </div>

            <div class="section-title">Core Competencies</div>
            <ul class="compact-list">
                <li>Creative problem-solving</li>
                <li>Project management and teamwork</li>
                <li>Attention to detail & adaptability</li>
                <li>Communication & analytical skills</li>
                <li>Time management & meeting deadlines</li>
            </ul>

            <div class="section-title">Game Dev Expertise</div>
            <div><strong>Ad Integrations:</strong> <span class="badge-sm">AdMob</span> <span class="badge-sm">Applovin</span> <span class="badge-sm">Unity Ads</span> <span class="badge-sm">Facebook Ads</span></div>
            <div style="margin-top:0.8rem;"><strong>Game Types:</strong> Action, Shooting, Role-Playing, Simulation, Fighting, Sports</div>
            <div style="margin-top:0.8rem;"><strong>Plugins/SDKs:</strong> Firebase (analytics, remote config, review), Unity IAP, Unity Analytics, Mobile Notifications</div>

            <div class="section-title">Education</div>
            <div class="edu-line">Bachelor of Science in Software Engineering (BSSE)</div>
            <div class="edu-detail">University of Lahore · CGPA: 3.65</div>
        </div>

        <!-- MAIN right -->
        <div class="main-content">
            <div class="section-title">Profile</div>
            <p style="font-size:0.95rem; line-height:1.5; color: #1d2f3c;">Results-driven and innovative Software Developer with over 4 years of experience specializing in Unity game development and recent expertise in PHP Laravel web application development. Demonstrates strong proficiency in C#, PHP, and MySQL, with a solid understanding of game mechanics, artificial intelligence, backend architecture, and cross-platform deployment. Adept at full-stack development, RESTful API integration, payment gateway integrations (Worldpay Checkout, MB Way, Cartes Bancaires, iDEAL), and performance optimization. Known for delivering high-quality, scalable solutions through efficient project management, teamwork, and problem-solving. Passionate about creating immersive digital experiences and writing clean, maintainable code that drives user engagement and business value.</p>

            <div class="section-title">Professional Experience</div>

            <div class="job-item">
                <div class="job-header"><span class="job-title">PHP Laravel Developer</span><span class="job-date">MAR 2025 - PRESENT</span></div>
                <div class="job-company">ACE Money Transfer, Kharian</div>
                <ul class="job-desc">
                    <li>Developed and maintained scalable web applications using PHP Laravel, MySQL, and Bootstrap. Designed responsive and user-friendly interfaces.</li>
                    <li>Integrated RESTful APIs and real-time data handling for business operations.</li>
                    <li>Implemented secure payment gateway integrations: Worldpay Checkout, MB Way, Cartes Bancaires, iDEAL. Handled callbacks/webhooks, transaction validation, error handling.</li>
                    <li>Ensured compliance with security best practices (tokenization, HTTPS, validation) for financial transactions.</li>
                    <li>Collaborated with cross-functional teams, applied Git version control, database design, and app security.</li>
                </ul>
            </div>

            <div class="job-item">
                <div class="job-header"><span class="job-title">Unity Game Developer</span><span class="job-date">JUN 2024 - NOV 2024</span></div>
                <div class="job-company">Cedar Technologies PVT. LTD, Gujranwala</div>
                <ul class="job-desc">
                    <li>Designed and implemented engaging game mechanics and user interfaces for simulator games.</li>
                    <li>Optimized game performance, reducing memory usage and improving gameplay experience.</li>
                    <li>Conducted code reviews and provided constructive feedback to ensure code quality.</li>
                    <li>Collaborated with a multidisciplinary team to meet project deadlines efficiently.</li>
                </ul>
            </div>

            <div class="job-item">
                <div class="job-header"><span class="job-title">Unity Game Developer (Remote)</span><span class="job-date">MAR 2024 - MAY 2024</span></div>
                <div class="job-company">Nipsapp (India), Game Alpha Studio (Lahore), Apex Solution (Islamabad)</div>
                <ul class="job-desc">
                    <li>Diagnosed and resolved complex VR and multiplayer game issues.</li>
                    <li>Introduced new functionalities and performed seamless game reskins.</li>
                    <li>Maintained consistent communication with international teams to meet client expectations.</li>
                </ul>
            </div>

            <div class="job-item">
                <div class="job-header"><span class="job-title">Unity Game Developer</span><span class="job-date">JAN 2023 - FEB 2024</span></div>
                <div class="job-company">Cipher Star PVT. LTD, Lalamusa</div>
                <ul class="job-desc">
                    <li>Designed and developed captivating game mechanics and core gameplay features.</li>
                    <li>Minimized load times and optimized memory usage to enhance performance.</li>
                    <li>Created and maintained technical documentation for future development.</li>
                    <li>Successfully integrated ad platforms (AdMob, Unity, Applovin) and analytics tools (Unity, Firebase).</li>
                </ul>
            </div>

            <div class="job-item">
                <div class="job-header"><span class="job-title">Unity Game Developer</span><span class="job-date">FEB 2021 - DEC 2022</span></div>
                <div class="job-company">Cipher Coders PVT. LTD, Gujrat</div>
                <ul class="job-desc">
                    <li>Revamped outdated code to align with modern standards and best practices.</li>
                    <li>Collaborated with artists and designers to develop visually appealing and interactive features.</li>
                    <li>Utilized analytical thinking to solve critical issues and improve game functionality.</li>
                    <li>Played a key role in brainstorming and implementing innovative gameplay ideas.</li>
                </ul>
            </div>

            <div style="font-size:0.85rem; color:#3b5c74; margin-top:1.2rem; border-top:1px dashed #b3c9db; padding-top:0.8rem;">
                <span>⭐ Backend APIs · authentication systems · admin dashboards · responsive UI · role-based access · database design</span>
            </div>
        </div>
    </div>
    <!-- tiny footer (optional) -->
    <div style="background:#e2eaf1; padding:0.7rem 2rem; font-size:0.8rem; color:#2d4d65; text-align:right;">Ali Haraira · detailed resume</div>
</div>
</body>
</html>`;
  }

  btn.addEventListener("click", function () {
    // open a new blank window/tab
    const resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
      resumeWindow.document.write(buildResumeHTML());
      resumeWindow.document.close(); // ensure rendering
    } else {
      alert("Please allow pop-ups to view the resume.");
    }
  });
})();

function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toastMessage');
  const toastText = document.getElementById('toastMessageText');
  
  // Update message and color
  toastText.textContent = message;
  
  if (isSuccess) {
    toast.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
  } else {
    toast.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
  }
  
  // Show toast
  toast.classList.remove('toast-hide');
  toast.classList.add('toast-show');
  
  // Hide after 3 seconds
  setTimeout(function() {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
  }, 3000);
}

function copyEmail() {
  navigator.clipboard.writeText('alibutt610354@gmail.com').then(function() {
    showToast('✓ Email copied to clipboard!', true);
  }).catch(function() {
    showToast('✗ Failed to copy email', false);
  });
}

document.getElementById('emailLink').addEventListener('click', function(e) {
  setTimeout(function() {
    if (!document.hidden) {
      showToast('✗ Email client not detected. Use copy button instead.', false);
    }
  }, 1000);
});