import React, { useState, useEffect } from 'react';
import api from './services/api';

import'./global.css';
import'./App.css';
import'./Sidebar.css';
import'./Main.css';

//O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign,

function App() {
  //Toda vez que o estado do componente é alterado, ele vai renderizar este html novamente.
  const [ github_username, setGithubUsername] = useState('');
  const [ techs, setTechs] = useState('');
  const [ latitude, setLatitude] = useState('');
  const [ longitude, setLongitude] = useState('');

  useEffect(() =>  {
    
  //Pergunta ao usuário se ele permiti que o google chrome insira a localização dele no input.
    navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude  } = position.coords;
      
      //Atualiza os valores no estado e processa novamente o hmtl com as alterações.
      setLatitude(latitude);
      setLongitude(longitude);
    },
    //Exibe uma mensagem de erro caso as coordenadas não sejam passadas.
    (err) => {
      console.log(err);
    },
    {
      timeout: 30000,
    }
  )
  }, []);
  
  //Função disparada no submit do formulário.
  async function handleAddDev(e){
    //Evita que o usuário seja direcionado para outra tela devido ao comportamento padrão do html.
    e.preventDefault();

    const response = await api.post('devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
            name="github_username"
            id="github_username"
            required value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
           name="techs"
           id="techs"
           required value={techs}
           onChange={e => setTechs(e.target.value)}
           />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
              type="number"
              name="latitude"
              id="latitude"
              required value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
          </div>

          <div className="input-block">
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
               type="number"
               name="longitude"
               id="longitude"
               required value={longitude}
               onChange={e => setLongitude(e.target.value)}
              />
          </div>
         </div>
         </div>

         <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/46411240?s=460&u=f7bdd45513220d0aad29286d7831caa2de730181&v=4" alt="William Queiroz"/>
              <div className="user-info">
                <strong>William Queiroz</strong>
                <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Apenas uma Gamer apaixonado por tecnologia da informação, principalmente pelas partes de criação de apps e Pentest.
Instagram: willlpk
            </p>
            <a href="https://github.com/MrNoc">Acessar perfil do github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/46411240?s=460&u=f7bdd45513220d0aad29286d7831caa2de730181&v=4" alt="William Queiroz"/>
              <div className="user-info">
                <strong>William Queiroz</strong>
                <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Apenas uma Gamer apaixonado por tecnologia da informação, principalmente pelas partes de criação de apps e Pentest.
Instagram: willlpk
            </p>
            <a href="https://github.com/MrNoc">Acessar perfil do github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/46411240?s=460&u=f7bdd45513220d0aad29286d7831caa2de730181&v=4" alt="William Queiroz"/>
              <div className="user-info">
                <strong>William Queiroz</strong>
                <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Apenas uma Gamer apaixonado por tecnologia da informação, principalmente pelas partes de criação de apps e Pentest.
Instagram: willlpk
            </p>
            <a href="https://github.com/MrNoc">Acessar perfil do github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/46411240?s=460&u=f7bdd45513220d0aad29286d7831caa2de730181&v=4" alt="William Queiroz"/>
              <div className="user-info">
                <strong>William Queiroz</strong>
                <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Apenas uma Gamer apaixonado por tecnologia da informação, principalmente pelas partes de criação de apps e Pentest.
Instagram: willlpk
            </p>
            <a href="https://github.com/MrNoc">Acessar perfil do github</a>
          </li>
        </ul>

      </main>
      
    </div>  
  );
}

export default App;
