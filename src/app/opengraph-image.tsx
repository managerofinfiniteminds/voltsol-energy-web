/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VoltSol Energy — Off-Grid Solar for Northern California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            marginBottom: 16,
          }}
        >
          &#9889;
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          VoltSol Energy
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#F59E0B",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Off-Grid Solar Under $10k
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          EG4 battery + inverter + mini-split systems for Northern California
          homes. Free estimate, no pressure.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 16,
            color: "#64748B",
            letterSpacing: 2,
            textTransform: "uppercase" as const,
          }}
        >
          voltsolenergy.com
        </div>
      </div>
    ),
    { ...size }
  );
}
