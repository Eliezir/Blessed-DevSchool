

import student from "../assets/img/icons/student.svg";
import teach from "../assets/img/icons/teach.svg";
import award  from "../assets/img/icons/award.svg";
import price  from "../assets/img/icons/prices.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Nosso Diferencial</h2>
                        <p>Motivos para você escolher a Blessed!</p>
                        <Carousel responsive={responsive} infinite={true} 
                         autoPlay={true}
                         autoPlaySpeed={4500}
                        className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={award} alt="Image banner alta qualidade" />
                                <h5>Alta qualidade</h5>
                            </div>
                            <div className="item">
                                <img src={teach} alt="Image banner prazos flexiveis" />
                                <h5>Acompanhamento Individualizado</h5>
                            </div>
                            <div className="item">
                                <img src={price} alt="Image banner os melhores preços" />
                                <h5>Os melhores preços!</h5>
                            </div>
                            <div className="item">
                                <img src={student} alt="Image banner feito por estudantes" />
                                <h5>Feito por estudantes</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
