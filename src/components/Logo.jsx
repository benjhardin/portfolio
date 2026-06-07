export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hexGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#7dd8f5" />
          <stop offset="100%" stopColor="#29b5e8" />
        </linearGradient>
        <linearGradient id="hexGradFill" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#1a4a6e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0c2a42" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Hex fill */}
      <polygon
        points="50,8 87.7,29 87.7,71 50,92 12.3,71 12.3,29"
        fill="url(#hexGradFill)"
      />

      {/* Outer hex border */}
      <polygon
        points="50,8 87.7,29 87.7,71 50,92 12.3,71 12.3,29"
        stroke="url(#hexGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Small tick marks at each vertex — snowflake crystal feel */}
      <g stroke="url(#hexGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        {/* Top */}
        <line x1="50" y1="8" x2="44" y2="3" />
        <line x1="50" y1="8" x2="56" y2="3" />
        {/* Top-right */}
        <line x1="87.7" y1="29" x2="93.7" y2="25" />
        <line x1="87.7" y1="29" x2="91.7" y2="35" />
        {/* Bottom-right */}
        <line x1="87.7" y1="71" x2="93.7" y2="75" />
        <line x1="87.7" y1="71" x2="91.7" y2="65" />
        {/* Bottom */}
        <line x1="50" y1="92" x2="44" y2="97" />
        <line x1="50" y1="92" x2="56" y2="97" />
        {/* Bottom-left */}
        <line x1="12.3" y1="71" x2="6.3" y2="75" />
        <line x1="12.3" y1="71" x2="8.3" y2="65" />
        {/* Top-left */}
        <line x1="12.3" y1="29" x2="6.3" y2="25" />
        <line x1="12.3" y1="29" x2="8.3" y2="35" />
      </g>

      {/* BH monogram */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="-1.5"
        fill="url(#hexGrad)"
      >
        BH
      </text>
    </svg>
  )
}
