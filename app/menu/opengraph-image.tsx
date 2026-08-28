import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cafe Manana — Our Full Menu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#3B2314",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          color: "#FAF6F1",
          position: "relative",
          padding: "40px",
        }}
      >
        {/* Border Accent */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "2px solid #C4623A",
            borderRadius: "16px",
            pointerEvents: "none",
          }}
        />

        {/* Coffee Icon */}
        <div
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          ☕
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Cafe Manana
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            color: "#C4623A",
            fontFamily: "sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Explore Our Full Menu
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#F0E8DC",
            fontFamily: "sans-serif",
            opacity: 0.8,
          }}
        >
          Wood-Fired Pizzas • Experimental Cold Brews • Anna Nagar East, Chennai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
