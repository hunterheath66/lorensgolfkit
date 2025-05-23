import React, { useState } from "react";
import { WarmupCard } from "./WarmupCard";
import { MentalGameCard } from "./MentalGameCard";
import { TailwindCard } from "./TailwindCard";
import { HeadwindCard } from "./HeadwindCard";
import { PracticePlanCard } from "./PracticePlanCard";
import { DecadeCard } from "./DecadeCard";

const cards = [
  { name: "Warmup", component: <WarmupCard /> },
  { name: "Mental Game", component: <MentalGameCard /> },
  { name: "Tailwind", component: <TailwindCard /> },
  { name: "Headwind", component: <HeadwindCard /> },
  { name: "Practice Plan", component: <PracticePlanCard /> },
  { name: "DECADE", component: <DecadeCard /> },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((index + 1) % cards.length);
  const prevCard = () => setIndex((index - 1 + cards.length) % cards.length);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>{cards[index].name}</h2>
      {cards[index].component}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevCard} style={{ marginRight: "10px" }}>⟵ Prev</button>
        <button onClick={nextCard}>Next ⟶</button>
      </div>
    </div>
  );
}
