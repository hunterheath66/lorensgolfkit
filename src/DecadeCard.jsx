export const DecadeCard = () => (
  <div style={{ textAlign: 'left', padding: '1rem' }}>
    <h2>DECADE Strategy Card</h2>
    <h3>📊 Baseline – Strokes to Hole Out</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
      <thead><tr><th>Distance</th><th>Baseline</th><th>Fairway</th><th>PGA Avg</th><th>LPGA Avg</th></tr></thead>
      <tbody>
        <tr><td>50 yds</td><td>2.7</td><td>Yes</td><td>2.74</td><td>2.76</td></tr>
        <tr><td>100 yds</td><td>2.8</td><td>Yes</td><td>2.89</td><td>2.91</td></tr>
        <tr><td>150 yds</td><td>3.1</td><td>Yes</td><td>3.12</td><td>3.18</td></tr>
        <tr><td>200 yds</td><td>3.4</td><td>Yes</td><td>3.43</td><td>3.54</td></tr>
      </tbody>
    </table>
    <h3>⚠️ Penalty Stroke Modifiers</h3>
    <ul><li>Rough = +0.25 strokes</li><li>Bunker (>190 yds) = +3.5 strokes</li><li>Trees = +3.8 strokes</li></ul>
    <h3>🌬 Wind Adjustment</h3>
    <ul><li>10–20mph = +1 stroke</li></ul>
    <h3>✅ Usage</h3>
    <ol><li>Know baseline</li><li>Adjust for lie and wind</li><li>Avoid penalty zones</li><li>Trust the shot</li></ol>
  </div>
);