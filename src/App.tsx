import './App.css';

function App() {
  return (
    <div className="App">
      <h2>
        Imagem Firebase:
      </h2>
      <img src="https://firebasestorage.googleapis.com/v0/b/show-room-dev-project.appspot.com/o/1615248209995_imagem2.png?alt=media&token=828e75e5-9dd1-4b93-99c5-0f220a61d1dc" alt="Imagem Firebase"/>

      <h2>
        Imagem Servidor:
      </h2>
      <img src="http://localhost:8000/images?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fshow-room-dev-project.appspot.com%2Fo%2F1615248209995_imagem2.png?alt%3Dmedia%26token%3D828e75e5-9dd1-4b93-99c5-0f220a61d1dc" alt="Imagem Servidor"/>

    </div>
  );
}

export default App;
