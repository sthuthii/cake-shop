
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>We are a bakery dedicated to creating delicious cakes with love.</p>
      <h3>Contact Us</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default AboutUs;
