import React, { useState } from "react";

const cards = [
  {
    title: "Tailwind",
    content: "Use this chart when you’re playing with the wind at your back. Subtract yardage based on the speed of the wind. Example: 150 yards with a 15mph tailwind = play it like 141 yards. Adjust club selection accordingly."
  },
  {
    title: "Headwind",
    content: "Use this chart when hitting into the wind. Add yardage based on wind speed. Example: 150 yards into 15mph = play it like 168 yards. Always take more club and swing smooth."
  },
  {
    title: "Practice Plan",
    content: `Full Swing (2x/week):\n- Alignment, plane board, target stations.\nFinesse Wedges (2x/week):\n- Setup, contact drills, trajectory work.\nDistance Wedges (1x/week):\n- Block practice from 30–100 yards.\nPutting (2x/week):\n- Arc drills, mirror, 10% game, pullbacks.`
  },
  {
    title: "Decade Strategy",
    content: `Use the DECADE system to make smart decisions:\n- D: Distance\n- E: Expectation\n- C: Correct Target\n- A: Analyze\n- D: Discipline\n- E: Execute\nAvoid bunkers/trees, adjust for rough and wind. Play to patterns, not pins.`
  },
  {
    title: "Warmup",
    content: `15-minute routine:\n- Jumping Jacks (25)\n- Speed Skaters (16)\n- 90° Lower Body Rotations (16)\n- Mountain Climbers w/ Rotation (16)\n- Inchworms (5)\n- Hip Rotations & RDLs (8ea)`
  },
  {
    title: "Mental Game",
    content: `Think Box:\n- Lie, Land, Loft, Club\nPlay Box:\n- See, Feel, Trust\nMemory Box:\n- Assess, Correct, Leave\nUse this process for every shot to stay focused, committed, and learning.`
  }
];

export default function GolfCardKit() {
  const [index, setIndex] = useState(0);
  const nextCard = () => setIndex((index + 1) % cards.length);
  const prevCard = () => setIndex((index - 1 + cards.length) % cards.length);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>{cards[index].title}</h2>
      <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>{cards[index].content}</pre>
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevCard} style={{ marginRight: "10px" }}>⟵ Prev</button>
        <button onClick={nextCard}>Next ⟶</button>
      </div>
    </div>
  );
}
