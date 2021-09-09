import { useState } from "react";
import { getRandomMsg } from "./fakeApi/getRandomMsg";
import cookie from './images/cookie.svg';

const App = () => {
  const [message, setMessage] = useState({
    text: '',
    loading: false
  });

  const getMessage = () => {
    if (message.loading) return;

    setMessage({ loading: true });
    getRandomMsg().then(response => {
      setMessage({ text: response.text, loading: false });
    });
  };

  return (
    <div className="app">
      <h1>Biscoito da Sorte</h1>
      <button onClick={getMessage}>
        🍀 Ler mensagem
      </button>
      <div className="plate">
        <div className="inner-border">
          <img src={cookie} alt="" />
        </div>
      </div>
      {(!message.loading && message.text) &&
        <div className="message">{message.text}</div>
      }
    </div>
  );
}

export default App;