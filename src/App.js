import './App.css';
import Data from './models/Data.js'
import Listing from './components/Listing';


function App() {

  return (
    <div className="App">
      <div className="item-list">
        {Data.map((data) => {
          const dataForList = {
            url: data.url,
            MainImageUrl: data.MainImage ? data.MainImage.url_570xN : '',
            title: (data.title && data.title.length) > 50 ? (data.title.substr(0, 49) + '...') : data.title,
            currency_code: data.currency_code,
            price: data.price,
            quantity: data.quantity
          }
          return (
            <Listing dataForList={dataForList} />
          )
        })}
      </div>
    </div>
  );
}

export default App;

