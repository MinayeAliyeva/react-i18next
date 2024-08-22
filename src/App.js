import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  console.log("i18n", i18n);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
      <button onClick={() => changeLanguage("tr")}>Türkçe</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
}

export default App;
