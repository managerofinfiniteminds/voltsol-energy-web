/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VoltSol Energy — Residential Solar + Battery Storage";
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
        <svg
          width="170"
          height="170"
          viewBox="0 0 1000 1000"
          style={{ marginBottom: 24 }}
        >
          <path
            fill="#f49527"
            d="M452.92,890.34c-.59,0-.87-.16-1.2-.38l188.36-388.96c2.4-4.95-.14-9.05-5.64-9.1l-164.83-1.71c-5.5-.06-7.98-4.12-5.51-9.04l143.23-284.88c2.47-4.91,8.99-8.91,14.49-8.87l172.08,1.04c5.5.03,7.9,4.04,5.32,8.9l-96.77,182.95c.37.56.59.53,1.17.53l192.08-.13c.72,0,1.14-.06,1.46.3.16.19-.2.51-.6,1l-406.64,501.06c-3.47,4.27-10.8,7.7-16.3,7.61l-20.7-.31Z"
          />
          <path
            fill="#ffffff"
            d="M382.27,878.66c-2.41,4.95-6.09,4.83-8.18-.26L90.71,189.97c1.67-.03,2.9.82,4.67.46l165.91-2.34c5.5-.08,11.71,4.02,13.81,9.11l197.34,479.14c2.09,5.09,1.84,13.29-.57,18.24l-89.6,184.08Z"
          />
        </svg>
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
          Solar + Battery Storage from $8,700
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
          EG4 battery + inverter + mini-split systems for your
          home. Free estimate, no pressure.
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
