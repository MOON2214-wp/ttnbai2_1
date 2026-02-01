function Welcome({ name, studentClass, age, hobby }) {
  return (
    <div className="welcome-card">
      <h2>👤 <span className="highlight-name">{name}</span></h2>
      <div className="info-box">
        <p><strong>Lớp:</strong> {studentClass}</p>
        <p><strong>Tuổi:</strong> {age}</p>
        <p><strong>Sở thích:</strong> <span className="hobby-text">{hobby}</span></p>
      </div>
    </div>
  );
}