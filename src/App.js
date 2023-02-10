import './App.css';
import './css/main.css';
import './css/bootstrap.min.css';
import Header from './components/Header';
import Year from './components/Year';
import CompanyCom from './components/CompanyCom.jsx';
import FooterCom from './components/FooterCom.jsx';


function App() {
  return (
    <div>
      <Header />
      <Year />
      <CompanyCom />
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A975b37f9502307104c17660977d12d0c52c70919caaebf444280703d0659a40d&amp; source=constructor" width="100%" height="450" frameborder="0" title='map'/>
      <FooterCom />
    </div>
  );
}
export default App;
