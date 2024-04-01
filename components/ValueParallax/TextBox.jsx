const TextBox = ({ activeSection }) => {
  const sections = {
    Community: {
      title: "Experience Community Spirit",
      content:
        "Experience the warmth and camaraderie of our tight-knit community. From virtual exhibitions to collaborative projects, there's always something exciting happening at Earth",
    },
    Partnerships: {
      title: "We're actively seeking collaborations and partnerships with individuals and organizations who share our passion for the arts.",
      content:
        "Whether you're an artist, gallery owner, technology provider, or industry enthusiast, we invite you to Reach out to us today to explore partnership opportunities and be part of our journey towards innovation and excellence.",
    },
    Marketplace: {
      title: "Coming soon",
      content:
        "Stay tuned for our upcoming launch, where you'll have access to a curated selection of artworks from talented artists around the globe.",
    },
    Events: {
      title: "Artistry in Motion: Events & Exhibitions",
      content:
        "Engage with upcoming exhibitions, workshops, and artist talks. Stay in the loop with all our artistic gatherings.",
    },
    Blog: {
      title: "Art & Culture Chronicles",
      content:
        "Explore our latest insights, stories, and updates in the world of art and culture. Dive into thought-provoking articles, behind-the-scenes features, and much more. Stay informed and inspired by visiting our blog regularly.",
    },
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