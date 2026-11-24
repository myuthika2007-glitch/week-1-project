import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";
import Button from "./components/Button";

export default function App() {
  const [cards, setCards] = useState([
    { title: "React", description: "UI library" },
    { title: "Vite", description: "Fast build tool" },
  ]);

  const addCard = (card) => setCards([...cards, card]);

  return (
    <>
      <Header title="React Components Practice" />
      <main>
        <Form onAdd={addCard} />
        <Button label="Clear All" onClick={() => setCards([])} />
        <div className="cards">
          {cards.map((c, i) => (
            <Card key={i} title={c.title} description={c.description} />
          ))}
        </div>
      </main>
      <Footer text="© 2026 Yuthi" />
    </>
  );
}