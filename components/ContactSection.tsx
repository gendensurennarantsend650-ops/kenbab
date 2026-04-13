export default function ContactSection() {
  return (
    <div className="contact-section">
      <div>
        <div className="contact-title">Холбоо барих</div>
        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <div className="contact-info">
            <strong>99376238</strong>
            Захиалга, асуулт
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">✈️</div>
          <div className="contact-info">
            <strong>@Bannerbairluul</strong>
            Telegram захиалга
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div className="contact-info">
            <strong>Дархан-Уул аймаг</strong>
            Дархан хот
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">🕐</div>
          <div className="contact-info">
            <strong>09:00 – 22:00</strong>
            Долоо хоногийн 7 өдөр
          </div>
        </div>
      </div>
      <div>
        <div className="contact-title">Байршил</div>
        <div className="map-placeholder">
          <div className="map-pin">📍</div>
          <div>Дархан-Уул аймаг</div>
          <div style={{ fontSize: 11, marginTop: 4 }}>Байршил удахгүй нэмэгдэнэ</div>
        </div>
      </div>
    </div>
  );
}
