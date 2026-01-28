import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unicorn of One — One Person. One Vision. $1 Billion Impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)",
          position: "relative",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(65,105,225,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(142,68,173,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #4169E1, #8E44AD)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            U1
          </div>
          <span style={{ color: "#8888aa", fontSize: "20px" }}>
            Unicorn of One
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ color: "white" }}>One Person. One Vision.</span>
          <span
            style={{
              background: "linear-gradient(135deg, #4169E1, #8E44AD)",
              backgroundClip: "text",
              color: "transparent",
              marginTop: "8px",
            }}
          >
            $1 Billion Impact.
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#8888aa",
            fontSize: "24px",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Build and scale a billion-dollar business with a team of one.
        </div>

        {/* Footer bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #4169E1, #8E44AD, #4169E1)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
