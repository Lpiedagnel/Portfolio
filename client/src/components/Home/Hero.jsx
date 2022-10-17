import React from "react"
import heroImg from "../../images/lucas-piedagnel-developpeur-web-javascript-wordpress.JPG"

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover"
  }

  return (
    <div className="hero">
      <div
        className="hero__background "
        style={backgroundStyle}
      >
        <div className="hero__container">
          <h2 className="hero__name">Lucas Piedagnel</h2>
          <h1 className="hero__job">Développeur Web Full-Stack</h1>
          <hr className="hero__hr" />
          <h3 className="hero__subtitles">
            Je développe des sites Internet pour votre activité !
          </h3>
          <a
            href="#"
            className="hero__cta"
          >
            Créer mon site
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
