import React from 'react';
import './About.scss';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  Building2,
  Briefcase,
  Shield,
  Heart
} from 'lucide-react';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import HomeFAQ from '../Home/HomeFAQ/HomeFAQ';
import logoImage from '../../assets/tax.webp'; 

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience', icon: Award },
    { number: '450+', label: 'Satisfied Clients', icon: Users },
    { number: '800+', label: 'Projects Completed', icon: Briefcase },
    // { number: '50+', label: 'Expert Team Members', icon: Shield }
  ];

  const sectors = [
    { name: 'Oil & Gas', icon: '🛢️' },
    { name: 'Banking & Finance', icon: '🏦' },
    { name: 'Construction & Infrastructure', icon: '🏗️' },
    { name: 'Retail & Manufacturing', icon: '🏭' },
    { name: 'Transport & Logistics', icon: '🚛' },
    { name: 'Technology & Services', icon: '💻' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centered Service',
      description: 'Putting our clients first with personalized solutions tailored to their unique needs'
    },
    {
      icon: Award,
      title: 'High Quality & Accuracy',
      description: 'Delivering precise and reliable services that exceed industry standards'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Development',
      description: 'Embracing innovation and staying ahead with the latest industry trends'
    },
    {
      icon: Shield,
      title: 'Ethical Principles',
      description: 'Complete commitment to ethical and legal standards in all our operations'
    }
  ];

  return (
    <section className="aboutSection">
      <SectionHeader
      label="salam"
        title="About Us" 
        description="Discover our story and mission to create impactful solutions."
      />
      {/* Hero Section */}
      {/* <div className="aboutHero">
        <div className="heroContainer">
          <div className="heroLogo">
            <img src={logoImage} alt="Company Logo" className="companyLogo" />
          </div>
          <div className="heroContent">

            <h1 className="heroTitle">
              Tax, Audit and Consulting Services
            </h1>
            <p className="heroDescription">
              With over 15 years of professional experience, we are one of Azerbaijan's leading 
              audit and consulting firms, serving hundreds of companies across various sectors.
            </p>
          </div>
          <div className="heroPattern"></div>
        </div>
      </div> */}

      {/* Stats Section */}
      <div className="statsSection">
        <div className="statsContainer">
          {stats.map((stat, index) => (
            <div key={index} className="statCard">
              <div className="statIcon">
                <stat.icon size={30} />
              </div>
              <h3 className="statNumber">{stat.number}</h3>
              <p className="statLabel">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main About Content */}
      <div className="aboutMain">
        <div className="aboutContainer">
          <div className="aboutGrid">
            <div className="aboutContent">
              <div className="contentBlock">
                <h2>Our Mission</h2>
                <p>
                  Our primary goal is to provide <strong>transparent and reliable services based on modern standards</strong>, 
                  ensuring the financial and legal stability of businesses while contributing to their sustainable development.
                </p>
              </div>

              <div className="contentBlock">
                <h2>Professional Team</h2>
                <p>
                  Our specialists are <strong>professionals with deep knowledge and practical experience in finance, 
                  audit, law, and taxation</strong>. Our team constantly monitors changing legislation and international 
                  standards to provide clients with the most optimal and legally sound solutions.
                </p>
              </div>

              <div className="contentBlock">
                <h2>Our Approach</h2>
                <p>
                  Our operating principle is built on <strong>honesty, reliability, and professionalism</strong>. 
                  We apply an individual approach to each client, offering <strong>practical, transparent, 
                  and sustainable solutions</strong> tailored to their specific needs.
                </p>
              </div>
            </div>

            <div className="aboutSidebar">
              <div className="sidebarCard">
                <h3>Industries We Serve</h3>
                <div className="sectorGrid">
                  {sectors.map((sector, index) => (
                    <div key={index} className="sectorItem">
                      <span className="sectorIcon">{sector.icon}</span>
                      <span className="sectorName">{sector.name}</span>
                    </div>
                  ))}
                </div>
                <p className="sectorDescription">
                  We have established <strong>long-term and reliable partnerships</strong> with 
                  clients in these sectors. Their trust and continued satisfaction is our greatest achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="valuesSection">
        <div className="valuesContainer">
          <div className="valuesHeader">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="valuesGrid">
            {values.map((value, index) => (
              <div key={index} className="valueCard">
                <div className="valueIcon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="aboutCTA">
        <div className="ctaContainer">
          <div className="ctaContent">
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss how we can help your business achieve its goals</p>
            <div className="ctaButtons">
              <a href="/contact" className="ctaBtn primary">Get In Touch</a>
              <a href="/services" className="ctaBtn secondary">Our Services</a>
            </div>
          </div>
        </div>
      </div>
      <HomeFAQ/>
    </section>
  );
};

export default About;