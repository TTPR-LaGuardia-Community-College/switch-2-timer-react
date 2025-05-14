import './App.css'
import switch2logo from './assets/switch2imgmini.png'
import Counter from "./Counter.jsx";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <div className="container text-center text-white">
                <img className="img-fluid w-50" src={switch2logo} alt="logo"/>
                <h1 className="mb-5">Counting down: </h1>

            </div>
            <Counter/>
        </>
    );
}


export default App
