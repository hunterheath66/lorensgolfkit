export const DecadeCard = () => (
  <div style={{ textAlign: 'left', padding: '1rem' }}>
    <h2>DECADE Strategy Card</h2>
    <p>This chart helps you set expectations and make smarter decisions based on real PGA/LPGA data and wind modifiers.</p>

    <h3>📊 Scoring Table</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
      <thead>
        <tr>
          <th>Distance</th><th>Baseline</th><th>PGA</th><th>LPGA</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>60</td><td>3</td><td>2.70</td><td>2.69</td></tr>
        <tr><td>70</td><td>4</td><td>2.73</td><td>2.72</td></tr>
        <tr><td>80</td><td>4</td><td>2.75</td><td>2.75</td></tr>
        <tr><td>90</td><td>5</td><td>2.78</td><td>2.80</td></tr>
        <tr><td>100</td><td>5</td><td>2.80</td><td>2.85</td></tr>
        <tr><td>110</td><td>6</td><td>2.83</td><td>2.90</td></tr>
        <tr><td>120</td><td>6</td><td>2.85</td><td>2.94</td></tr>
        <tr><td>130</td><td>7</td><td>2.88</td><td>2.98</td></tr>
        <tr><td>140</td><td>7</td><td>2.91</td><td>3.02</td></tr>
        <tr><td>150</td><td>8</td><td>2.95</td><td>3.06</td></tr>
        <tr><td>160</td><td>8</td><td>2.98</td><td>3.09</td></tr>
        <tr><td>170</td><td>9</td><td>3.03</td><td>3.15</td></tr>
        <tr><td>180</td><td>9</td><td>3.08</td><td>3.20</td></tr>
        <tr><td>190</td><td>10</td><td>3.14</td><td>3.30</td></tr>
        <tr><td>200</td><td>10</td><td>3.19</td><td>3.39</td></tr>
        <tr><td>210</td><td>11</td><td>3.26</td><td>3.51</td></tr>
        <tr><td>220</td><td>11</td><td>3.32</td><td>3.62</td></tr>
        <tr><td>230</td><td>12</td><td>3.39</td><td>3.63</td></tr>
        <tr><td>240</td><td>12</td><td>3.45</td><td>3.63</td></tr>
        <tr><td>250</td><td>13</td><td>3.52</td><td>3.72</td></tr>
      </tbody>
    </table>

    <h3>🌬 Wind Modifiers</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.85rem' }}>
      <thead>
        <tr><th>Wind Speed</th><th>Modifier</th></tr>
      </thead>
      <tbody>
        <tr><td>Under 5MPH</td><td>-1</td></tr>
        <tr><td>0 - 10MPH</td><td>0</td></tr>
        <tr><td>10 - 20MPH</td><td>+1</td></tr>
        <tr><td>20 - 30MPH</td><td>+2</td></tr>
        <tr><td>30+MPH</td><td>+3</td></tr>
      </tbody>
    </table>

    <h3>⚠️ Penalty Costs</h3>
    <ul>
      <li>Rough: +0.25 strokes</li>
      <li>Sand (80–180 yds): = 3.3</li>
      <li>Sand (190+ yds): = 3.5+</li>
      <li>Trees (100–200 yds): = 3.8+</li>
      <li>90% Rule from Trees: Assume 1 stroke loss if you’re in trees</li>
    </ul>

    <h3>D.E.C.A.D.E. Philosophy</h3>
    <ul>
      <li><strong>D:</strong> Distance</li>
      <li><strong>E:</strong> Expectation</li>
      <li><strong>C:</strong> Correct Target</li>
      <li><strong>A:</strong> Analyze</li>
      <li><strong>D:</strong> Discipline</li>
      <li><strong>E:</strong> Execute</li>
    </ul>
  </div>
);