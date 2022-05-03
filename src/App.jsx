import './App.css';
import CTA from './CTA';
import Features from './Features';
import Header from './Header';
import RegisterForm from './RegisterForm';

function App() {
    return (
        <div className="App">
            <Header />
            <Features />
            <CTA />
            <RegisterForm />
        </div>
    );
}

export default App;
