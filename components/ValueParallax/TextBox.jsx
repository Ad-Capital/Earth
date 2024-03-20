const TextBox = ({ activeSection }) => {
  const sections = {
    Community: {
      title: "Discover the Earth Community: A Revolution in the Art World",
      content:
        "Our community shines a spotlight on emerging and established artists alike, ensuring their voices are heard and their creations find the perfect audience.",
    },
    Partnerships: {
      title: "We're Open to Partnerships & Collaborations",
      content:
        "To discuss partnership and discover how we can elevate the art experience together, please reach out to our team in the contact section. We look forward to collaborating with you and transforming the art world as we know it.",
    },
    Marketplace: {
      title: "Coming soon",
      content:
        "Our platform provides a diverse range of NFTs for purchase, enabling artists to strategically organize and market their digital collections.",
    },
    Events: {
      title: "Coming soon",
      content:
        "Discover a world of excitement! Our upcoming events feature workshops, seminars, performances. Stay tuned for dates and tickets. Join the adventure.",
    },
    Blog: {
      title: "Coming soon",
      content:
        "Insightful Blog Posts Coming Soon! Stay tuned for engaging articles, expert tips, and inspiring stories. Explore, learn, and be inspired.",
    },

    // ... define content for all sections
  };

  const sectionData = sections[activeSection] || {}; // Handle missing sections

  return (
    <div className="text-box">
      <h2 style={{
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '37px',
        letterSpacing: '0em',
        textAlign: 'left',
        padding: '40px',
        fontWeight: 'bold',
      }}>{sectionData.title}</h2>
      <p style={{
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '34px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#7668FD',
        paddingTop: '10px',
        padding: '40px',
      }}>{sectionData.content}</p>
    </div>
  );
};

export default TextBox;