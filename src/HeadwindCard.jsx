export const HeadwindCard = () => (
  <div style={{ textAlign: "left", padding: "1rem" }}>
    <h2>Headwind Adjustment Chart</h2>
    <p>
      Add yards based on wind speed. Example: 150 yards into 15mph = play it like 168 yards.
    </p>
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
      <thead>
        <tr><th>Original Distance</th><th>5mph</th><th>10mph</th><th>15mph</th><th>20mph</th></tr>
      </thead>
      <tbody>
        <tr><td>100 yds</td><td>104</td><td>109</td><td>114</td><td>118</td></tr>
        <tr><td>125 yds</td><td>130</td><td>136</td><td>141</td><td>147</td></tr>
        <tr><td>150 yds</td><td>156</td><td>162</td><td>168</td><td>174</td></tr>
        <tr><td>175 yds</td><td>182</td><td>189</td><td>196</td><td>203</td></tr>
        <tr><td>200 yds</td><td>208</td><td>216</td><td>224</td><td>232</td></tr>
      </tbody>
    </table>
  </div>
);