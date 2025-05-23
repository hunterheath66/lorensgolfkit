export const TailwindCard = () => (
  <div style={{ textAlign: "left", padding: "1rem" }}>
    <h2>Tailwind Adjustment Chart</h2>
    <p>
      Subtract yards based on wind speed. Example: 150 yards with 15mph tailwind = play it like 141 yards.
    </p>
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
      <thead>
        <tr><th>Original Distance</th><th>5mph</th><th>10mph</th><th>15mph</th><th>20mph</th></tr>
      </thead>
      <tbody>
        <tr><td>100 yds</td><td>97</td><td>94</td><td>91</td><td>88</td></tr>
        <tr><td>125 yds</td><td>121</td><td>117</td><td>113</td><td>109</td></tr>
        <tr><td>150 yds</td><td>145</td><td>141</td><td>137</td><td>133</td></tr>
        <tr><td>175 yds</td><td>170</td><td>165</td><td>160</td><td>155</td></tr>
        <tr><td>200 yds</td><td>194</td><td>188</td><td>182</td><td>176</td></tr>
      </tbody>
    </table>
  </div>
);