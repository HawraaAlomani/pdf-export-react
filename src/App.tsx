import { useTranslation } from "react-i18next";
import PdfDesign from "./containers/user/exportPdfContainer";
import ExamplePage from "./pages/user/example-page";


function App() {

  const {t} = useTranslation();

  return (
    <div className="App">
     <ExamplePage></ExamplePage>
    </div>
  );
}

export default App;
