
import './App.css';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  return (
    <main>
      <div className="block bcg-block">
      </div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="random user" className="user-img" />
        </div>
      </div>
    </main>
  );
}

export default App;
