import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ClasseButtonComponent from "./ClasseButtonComponent";
import ImageComponent from "./ImageComponent";
import ClassImageToShow from "./ClassImageToShow";
function App() {
  return (
    <div>
      <ButtonComponent textToShow="Clicca prima qui" textColor="red" />
      <ButtonComponent textToShow="Dopo clicca qui" textColor="blue" />
      <ClasseButtonComponent textToShow="Classe: Clicca qui" textColor="red" />
      <ClasseButtonComponent
        textToShow="Classe: E ora clicca qui"
        textColor="blue"
      />
      <ImageComponent
        imageToShow="https://c8.alamy.com/compit/cr4f45/meat-loaf-nato-marvin-lee-aday-27-9-1947-cantante-statunitense-a-meta-durata-durante-un-concerto-circa-1992-cr4f45.jpg"
        alt="meat loaf"
        className="App-logo"
      />
      <ImageComponent
        imageToShow="https://ondarock.it/images/monografie/PanteraGrande673x348_1626699783.jpg"
        alt="pantera"
        className="App-logo"
      />
      <ClassImageToShow
        imageToShow="https://cdn.britannica.com/08/252308-050-D0C3221F/Members-of-thrash-metal-band-Megadeth-1986.jpg"
        alt="megadeth"
        className="App-logo"
      />
      <ClassImageToShow
        imageToShow="https://i0.wp.com/stonemusic.it/wp-content/uploads/2017/04/skid-row.jpg?resize=800%2C600&ssl=1"
        alt="skid row"
        className="App-logo"
      />
    </div>
  );
}

export default App;
