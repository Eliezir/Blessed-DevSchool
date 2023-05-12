import { Container, Row, Col } from "react-bootstrap";
import goldStar from "../assets/img/star.svg";
import 'animate.css';
import Carousel from 'react-multi-carousel';

export const FeedBack = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const depoimentos = [
    "Sim. É um bom curso, principalmente para quem está começando agora, pois não usa termos muito difíceis e estão acompanhando bem o crescimento dos alunos(dispostos a tirar dúvidas, atividades que condizem com os conteúdos passados e etc.)",
    "Sim, além de ser muito útil é divertido aprender um pouco sobre o funcionamento de coisas presentes no nosso dia a dia",
    "Sim, pois o conteúdo pode ser entendido com grande facilidade, ensinado por esses instrutores",
    "Sim, porque já é um pontapé inicial para quem quer ingressar nesse mundo da informática e também os professores são ótimos e se preocupam com a aprendizagem de cada um.",
    "Sim, pois os monitores são 'gente como a gente'! Explicam bem e com calma",
    "Sim, o curso trás um conhecimento enorme, e te tira varias duvidas e saber que fazem isso por vontade própria me inspira mais e mais, a equipe Blessed é simplesmente incrível e quero aprender muito com eles.",
    "Com certeza como já fiz isso, as aulas são muitos boa e conseguimos aprender bem o conteúdo, alem de ótimos professores, vocês fazem a turma caminhar no mesmo ritmo, assim ninguém se sente inferior a ninguém facilitando assim a aprendizagem",
    "simm, porque os professores são bem instruídos e atenciosos, e o conteúdo passado é muito bem planejado, dá pra ver que todos se esforçam bastante",
    "Sim, o curso conta com pessoas que tem uma forma didática de ensinar e fazendo com que a aula não fique chata, desenvolvimento web é uma área que me interessa muito. As aulas são bem completas e explicativas e contando com exercícios na prática."
  ]

  const depoimentosRandom = depoimentos.sort(() => Math.random() - 0.5);

  return (
    <section className="FeedBack" id="feedback">
      <Container>
        <Row className="align-items-center">
      <Col xs={12} lg={6} md={12} xl={6}>
      <div className="container-rating">
        <div className="course">
          <h4 className="neon">desenvolvimento WEB</h4>
          <div className="rating">
            <div className="rating-row">
              <img src={goldStar} alt="estrela" />
              <img src={goldStar} alt="estrela" />
              <img src={goldStar} alt="estrela" />
              <img src={goldStar} alt="estrela" />
              <img src={goldStar} alt="estrela" />
              <span>4.9 de 5</span>
            </div>
            <p>28 avaliações</p>
            <div className="vote-count">5 
            <div className="StarRating">
            <div className="FiveStarRating"/></div>89%</div>

            <div className="vote-count">4  
            <div className="StarRating">
            <div className="FourStarRating"/></div>11%</div>

            <div className="vote-count">3  
            <div className="StarRating">
            <div className="ThreeStarRating"/></div>0%</div>

            <div className="vote-count">2  
            <div className="StarRating">
            <div className="TwoStarRating"/></div>0% </div>

            <div className="vote-count">1  <div className="StarRating">
            <div className="OneStarRating"/></div>0%</div>
          </div>
        </div>
       
      </div>
       </Col>
       <Col xs={12} lg={6} md={12} xl={6}>
       <div className="feedback">
        <h3 class="neon">FeedBack dos Alunos</h3>
        <h4>Você recomendaria este curso?</h4>
   
          
                        <Carousel responsive={responsive} infinite={true} 
                         autoPlay={true}
                         autoPlaySpeed={30000}
                        className="owl-carousel owl-theme skill-slider"
                        >
                        {depoimentosRandom.map((depoimento) => {
                          return (
                            <div className="item">
                              <p className="depoimentos">{depoimento}</p>
                            </div>
                          )
                        })}
                        </Carousel>
   
       </div>
       </Col>
        </Row>
      </Container>
    </section>
  )
}
