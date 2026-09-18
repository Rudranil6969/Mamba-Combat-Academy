import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, CheckCircle2, Clock, Dumbbell, Flame, Crosshair, Shield, Target, Coffee } from 'lucide-react';

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src="https://adrilly-s3.s3.ap-south-1.amazonaws.com/organizations/6a27b13996e2a1d24acc3981/logo/20260610_024434_4557a2e9.jpeg" alt="Mamba Combat Academy Logo" className="logo-img" />
            <span className="highlight">MAMBA</span> COMBAT ACADEMY
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About Us</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#schedule" className="nav-link">Schedule</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://www.instagram.com/mamba_combat/" target="_blank" rel="noopener noreferrer" className="nav-link social-link" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero_background_1789304047557.jpg" alt="Diverse group training at Mamba Academy" />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Be Better <span className="highlight">Every Single Day</span> at Mamba Combat Academy.
            </h1>
            <p className="hero-subtitle">
              Led by Coach Athul Hotkar. Build functional strength, learn martial arts, and make everyday life easier. Classes for kids, students, adults, and seniors.
            </p>
            <a href="#contact" className="btn btn-primary">
              Book Your First Class <ChevronRight size={20} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>
      </section>

      {/* About Us / Our Philosophy */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Our <span className="highlight">Philosophy</span></h2>
          <p className="section-subtitle">More than just a gym, we are a community dedicated to growth.</p>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                Founded and led by <strong>Coach Athul Hotkar</strong>, Mamba Combat Academy was built on a simple premise: fitness and martial arts are for everyone, regardless of age or experience level. 
              </p>
              <p>
                We don't just teach fighting; we teach you how to be better every single day. Our focus is on anti-weakness and functional strength. We want to banish weakness and help you build a capable, resilient body for real life.
              </p>
              <p>
                Whether you want to learn self-defense, improve your everyday mobility, or just make carrying groceries effortless, we are here to guide you. You don't have to want to be a professional fighter to train here; you just have to want to be the best version of yourself.
              </p>
            </div>
            
            <div className="mission-box">
              <h3>The Mamba Mission</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--accent-primary)" size={24} />
                  <span>Empowerment through functional strength</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--accent-primary)" size={24} />
                  <span>Real-world capability and resilience</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--accent-primary)" size={24} />
                  <span>Welcoming community for all ages</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--accent-primary)" size={24} />
                  <span>Continuous personal growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs / Who We Serve */}
      <section id="programs" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Who We <span className="highlight">Serve</span></h2>
          <p className="section-subtitle">Programs tailored for every stage of life. Everyone is welcome on our mats.</p>
          
          <div className="programs-grid">
            {/* Kids */}
            <div className="program-card">
              <img src="/images/kids_class_1789304065805.jpg" alt="Kids martial arts class" className="program-img" />
              <div className="program-content">
                <h3>Kids Program</h3>
                <p>Building discipline, focus, and fundamental movement skills in a fun, positive, and encouraging environment.</p>
                <div className="program-tags">
                  <span className="tag">Discipline</span>
                  <span className="tag">Fun</span>
                  <span className="tag">Confidence</span>
                </div>
              </div>
            </div>

            {/* Students */}
            <div className="program-card">
              <img src="/images/students_class_1789304103321.jpg" alt="College students fitness class" className="program-img" />
              <div className="program-content">
                <h3>College Students</h3>
                <p>The perfect outlet for stress relief, building fitness, and learning practical self-defense while juggling academics.</p>
                <div className="program-tags">
                  <span className="tag">Stress Relief</span>
                  <span className="tag">Fitness</span>
                  <span className="tag">Self-Defense</span>
                </div>
              </div>
            </div>

            {/* Adults & Seniors */}
            <div className="program-card">
              <img src="/images/seniors_class_1789304077556.jpg" alt="Seniors functional strength class" className="program-img" />
              <div className="program-content">
                <h3>Adults & Seniors</h3>
                <p>Focusing on longevity, joint health, and functional strength. Make everyday chores easy and live pain-free.</p>
                <div className="program-tags">
                  <span className="tag">Longevity</span>
                  <span className="tag">Joint Health</span>
                  <span className="tag">Mobility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section">
        <div className="container">
          <h2 className="section-title">Weekly <span className="highlight">Class Schedule</span></h2>
          <div className="schedule-header">
            <Clock size={24} color="var(--accent-primary)" />
            <span>Timings: <strong>8:00 AM - 9:00 AM</strong> | <strong>7:00 PM - 8:00 PM</strong></span>
          </div>
          
          <div className="schedule-grid">
            <div className="schedule-card">
              <div className="schedule-day">Monday</div>
              <div className="schedule-class">
                <Flame size={28} color="var(--accent-primary)" />
                <h4>Boxing</h4>
              </div>
            </div>
            
            <div className="schedule-card">
              <div className="schedule-day">Tuesday</div>
              <div className="schedule-class">
                <Crosshair size={28} color="var(--accent-primary)" />
                <h4>Kickboxing</h4>
              </div>
            </div>
            
            <div className="schedule-card">
              <div className="schedule-day">Wednesday</div>
              <div className="schedule-class">
                <Shield size={28} color="var(--accent-primary)" />
                <h4>BJJ & Wrestling</h4>
              </div>
            </div>
            
            <div className="schedule-card">
              <div className="schedule-day">Thursday</div>
              <div className="schedule-class">
                <Dumbbell size={28} color="var(--accent-primary)" />
                <h4>Strength & Conditioning</h4>
              </div>
            </div>
            
            <div className="schedule-card">
              <div className="schedule-day">Friday</div>
              <div className="schedule-class">
                <Target size={28} color="var(--accent-primary)" />
                <h4>Sparring Day</h4>
              </div>
            </div>
            
            <div className="schedule-card rest-card">
              <div className="schedule-day">Weekend</div>
              <div className="schedule-class">
                <Coffee size={28} color="var(--text-secondary)" />
                <h4>Rest & Recovery (Closed)</h4>
              </div>
            </div>
          </div>
          
          <div className="schedule-footer">
            <p>
              "All classes are scalable and safe for every age and fitness level. Whether you are a college student or a senior citizen, Coach Athul will adapt the workout to help you get better every single day."
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Join The <span className="highlight">Academy</span></h2>
          <p className="section-subtitle">Ready to take the first step? Drop us a message or visit us in person.</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+91 XXX XXX XXXX" required />
                  </div>
                  <div className="form-group">
                    <label>Age Group</label>
                    <select className="form-control" required style={{ appearance: 'none', backgroundColor: 'rgba(0,0,0,0.2)', color: 'var(--text-primary)' }}>
                      <option value="" disabled selected>Select Age Group</option>
                      <option value="kids">Kids</option>
                      <option value="students">College Students</option>
                      <option value="adults">Adults</option>
                      <option value="seniors">Seniors</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" placeholder="Tell us about your fitness goals..." required></textarea>
                  </div>
                  <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
              </div>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1d3888.892694155734!2d77.5960!3d12.8943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzM5LjUiTiA3N8KwMzUnNDUuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                title="Mamba Combat Academy Location"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin color="var(--accent-primary)" />
              <span>98, 4th Cross, Bannerghatta Rd, Shanbhog Nagappa Layout, Bilekahalli, Bengaluru, Karnataka 560076</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone color="var(--accent-primary)" />
              <span>+91 98765 43210</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail color="var(--accent-primary)" />
              <span>info@mambacombat.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div className="footer-logo" style={{ justifyContent: 'flex-start', margin: 0 }}>
                <img src="https://adrilly-s3.s3.ap-south-1.amazonaws.com/organizations/6a27b13996e2a1d24acc3981/logo/20260610_024434_4557a2e9.jpeg" alt="Mamba Combat Academy Logo" className="logo-img" />
                <span className="highlight">MAMBA</span> COMBAT ACADEMY
              </div>
              <p className="footer-text" style={{ margin: '1rem 0 0 0', textAlign: 'left' }}>
                © {new Date().getFullYear()} Mamba Combat Academy. Be Better Every Single Day.
              </p>
            </div>
            
            <div className="footer-social">
              <a href="https://www.instagram.com/mamba_combat/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
