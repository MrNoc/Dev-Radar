import React, { useState, useEffect } from 'react';
import api from './services/api';

import'./global.css';
import'./App.css';
import'./Sidebar.css';
import'./Main.css';

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

//O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign,

function App() {
  const [devs, setDevs] = useState([]);

  

  //Faz a chamada a APi.
  useEffect(() =>{
    //Retorna toda lista de devs.
    async function loadDevs(){
      const response = await api.get('/devs');

        setDevs(response.data);
    }

    //Executa logo após o useEffect acima.
    loadDevs();
  }, []);
  
  //Função disparada no submit do formulário.
  async function handleAddDev(data){
    const response = await api.post('/devs', data)

    //Da reload na page assim que o novo dev é adicionado ao banco.
    document.location.reload([true]);
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
      
    </div>  
  );
}

export default App;
