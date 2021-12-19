
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <A/>
      <B/>

      </header>
    </div>
  );
}

export default App;

// DİKKAT : iki coponentta da aynı className kullanıldıgında style a tanımladıklarımız cakısır.
// Bu nedenle her bir className unique olmalıdır. Burada da karsımıza module css kavramı karsımıza cıkar.
// ÖNEMLİ : CSS dosyalarının adını styles.css olarak degilde style.module.css olarak vermeliyiz.
//İsmin style.module.css  seklinde olması gerekiyor.
// MODULE CSS : Benzersiz still isimleri oluşturarak olası CSS çakışmalarının önüne geçer.
