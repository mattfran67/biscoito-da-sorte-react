import { useState } from "react";
import { getRandomMsg } from "./fakeApi/getRandomMsg";

const App = () => {
  const [message, setMessage] = useState({
    text: '',
    loading: false
  });

  const getMessage = () => {
    setMessage({ loading: true });
    getRandomMsg().then(response => {
      setMessage({ text: response.text, loading: false });
    });
  };

  return (
    <>
      <button onClick={getMessage}>
        Frase do Dia
      </button>
      <p>{message.loading ? 'Carregando...' : message.text}</p>
    </>
  );
}

export default App;