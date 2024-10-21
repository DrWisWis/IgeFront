import React from 'react';
import { Link } from 'react-router-dom';
//import './home.css';
import './alter.css';
import api from "../../services/api";

function Home(){

    return(

            <div>
        
        
            <div>
                  { }
        
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                    <link rel="shortcut icon" type="image/png" href="./assets/img/2.png"></link>
                    
            </div>
        
        
            <header className="header-home">
                        <nav className="navigation">
                            <a href="/" className="logo"><img src="./src/assets/logo_white-sf.png" alt="" className='imgLogo'/></a>
                                <ul>
                                    <div class="nav-li">
                                        <li><a href="#services">SERVIÇOS</a></li>
                                        <li><a href="#about">SOBRE</a></li>
                                        <li><a href="#contact">CONTATO</a></li>
                                    </div>
                                </ul>
                            <div className="btn">
                                <a href="/login"><button>FAZER LOGIN</button></a>
                                <a href="/usuario"><button>REGISTRAR</button></a>
                            </div>
                        </nav>
                        <div className="slogan">
                    <div class="slogan-principal">
                        <h1>Agende o sucesso do seu negócio</h1>
                    </div>
                    <div className="desc-slogan">
                    <p id="slogan-paragrafo">Com o sistema de agendamento IGE, você melhora a efetividade do contato entre você e seu cliente, adquira já!</p>
                    </div>
                </div>
                <div className="btn">
                    <div className="btn-pass-action">
                        <a href="/cliente"><button>Agendar</button></a>
                    </div>
                </div>
            </header>
        
            <div className="services" id="services">
                <div className="container-services">
                    <div className="title-services">
                        <h1>SERVIÇOS</h1>
                    </div>
                    <div className="cards-info-services">
                        <div className="card-user-left">
                            <div className="card-header-left">
                            <img src="./src/assets/img-client-card-services.png"/>
                            </div>
                            <h1>Cliente</h1>
                            <p>
                               Para o usuário que necessita agendar, basta se registrar e após,
                               será redirecionado para a página de Login, e acessar seus dados e poder fazer o agendamento!
                            </p>
                            <div className="btn-acess-services">
                                <a href="/usuario"><button>Acessar</button></a>
                            </div>
                        </div>
                        <div className="card-emp-right">
                        <div className="card-header-right">
                            <img src="./src/assets/img-emp-card-sevices.png"/>
                            </div>
                            <h1>Empreendedor</h1>
                            <p>
                               Para o empreendedor que deseja utilizar o serviço de agendamento para atender seus clientes, basta se registrar e adquirir o
                               plano de serviço para que seu dia seja eficiente, além de estar disponivel em nosso site!
                            </p>
                            <div className="btn-acquire-services">
                                <a href="/cadFuncionario"><button>Adquirir</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    <section id="about">
      <div id="about-text">
        <p class="section-subtitle">Sobre nós</p>
        <h3 class="section-title">
            O IGE - Agendamentos foi criado em 1 de maio de 2024 por Igor Ibiapino, Isaac Siqueira,
            Guilherme Ponchini, Gustavo Bego, Emilly Emiliano e Erick Leonardo 
            através de um projeto de TCC (Trabalho de Conclusão do Curso)
            para o ITB (Instituto Técnico de Barueri) Brasílio Flores de Azevedo.
        </h3>
        <div class="about-description">
          <div>
            <h4>Objetivo</h4>
            <p>
                O projeto foi pensado em auxiliar os usuários ao fácil acesso a um determinado
                serviço prestado pelo empreendedor ou empresário autônomo para que ajude organizar
                o tempo do seu dia e melhore a eficiência de seu serviço.
            </p>
          </div>
        </div>
        <div class="about-description">
          <div>
            <h4>Valores</h4>
            <p>
                Valorizamos a transparência e Inovação, acreditando que a tecnologia é uma solução
                que deve se usar para o bem da população acreditando existir uma responsabilidade social.
            </p>
          </div>
        </div>
      </div>
      <div id="about-data">
        <div class="data">
          <i class="bi bi-calendar-week"></i>
          <p class="number">Agendamento</p>
          <p class="text">Prático</p>
        </div>
        <div className="data">
          <i class="bi bi-check-lg"></i>
          <p class="number">Eficiencia</p>
          <p class="text">No sistema</p>
        </div>
        <div className="data">
          <i class="bi bi-star"></i>
          <p class="number">Qualidade</p>
          <p class="text">No serviço</p>
        </div>
        <div className="data">
          <i class="bi bi-trophy"></i>
          <p class="number">Meta</p>
          <p class="text">Praticidade</p>
        </div>
      </div>
    </section>
        
            <div>
                  { }
        
                <div class="cellphone-app">
                <div class="bordas">
                <div class="cellphone-content">
                    <div class="cellphone-content-left">
                        <img src="./src/assets/cellphone-app.png"/>
                    </div>
                    <div class="cellphone-content-right">
                        <h1>Baixe o nosso app gratuitamente</h1>
                        <p>Utilizando o app, você terá acesso ao nosso sistema!</p>
                            <button>
                                <a href="#">
                                    <img src="./src/assets/disponivel-google-play-badge.png"/>
                                </a>
                                <a href="#">
                                    <img src="./src/assets/disponivel-appstore-badge.png"/>
                                </a>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="contact" id="contact">
            <div className="container-contact">
                <div className="left-contact">
                    <img src="./src/assets/logo_black-sf.png" id="logo-contact"/>
                    <h1 id="title-contact-center">CONTATO</h1>
                    <div className="title-contact">
                        <h2>Entre em contato conosco</h2>
                    </div>
                    <div className="form-contact">
                        <form action="" method="">
                            <label for="name">Nome:</label>
                            <input type ="text" placeholder="Digite seu nome"/>
                            <label for="email">E-mail:</label>
                            <input type="email" placeholder="Digite seu email"/>
                            <label for="message">Mensagem:</label>
                            <textarea placeholder="Digite sua mensagem"></textarea>
                            <div className="send-btn-contact">
                                <a href=""><input type="submit" placeholder="Enviar" id="send"/></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-contact">
                <a><img src="./src/assets/img_send-contact.png"/></a>
                </div>
            </div>
        </div>
        
        <div>
                  { /* Footer - Cabeçalho Final*/ }
        
        <footer id="footer">
                <div class="contact-info">
                    <div class="footer-brand">
                        <a href="/"><img src="./src/assets/logo_white-sf.png" id="f-logo"/></a>
                    </div>
                    <p id="contato"><i class="bi bi-geo-alt"></i> R. Interna Grupo-Bandeirantes, 138</p>
                    <p><i class="bi bi-telephone"></i> (11) 9999-9999</p>
                    <p><i class="bi bi-envelope"></i> ige.agend@contato.com</p>
                </div>
                <div class="links-container">
                    <h4>Outros serviços</h4>
                    <nav>
                        <a href="#">Agendamento</a>
                        <a href="#">IGE Premium</a>
                        <a href="#">Afiliação</a>
                    </nav>
                </div>
                <div class="links-container">
                    <h4>Páginas</h4>
                    <nav>
                        <a href="#">Termos e condições</a>
                        <a href="#">Política de privacidade</a>
                        <a href="#">FAQ</a>
                    </nav>
                </div>
                <div class="links-container">
                    <h4 id="suporte">SUPORTE</h4>
                    <div class="phone-number">
                        <i class="bi bi-telephone"></i>
                        <p>(11) 9999-9999</p>
                    </div>
                    <p class="phone-info">
                        Contato para ajuda
                    </p>
                    <div class="social-networks">
                        <p>Siga-nos:</p>
                    </div>
                    <div class="networks">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </div>
                
        </div>
    )
}

export default Home;



