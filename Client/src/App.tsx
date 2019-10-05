import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Contact } from "./modules/contact/Index";
import { Home } from "./modules/home/Index";

const App: React.FC = () => {
  const [page, setPage] = useState("Home");

  const pageClick = (page: string) => {
    setPage(page);
  };

  return (
    <>
      <Header pageClick={pageClick} />
      <main role="main" className="container">
        {page === "Contacts" && <Contact />}
        {page === "Home" && <Home />}
      </main>
    </>
  );
};

export default App;
