import HeroImg from '../assets/hero.png';
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="main-title">Find the Best Solution<br/> in Seconds</h1>
        <p>If debugging is the process of removing software bugs.</p>
        <button>get started</button>
        <button>try for free</button>

        <img src={HeroImg} alt="Hero Image" />
      </div>
    </section>
  )
}

export default Hero;
