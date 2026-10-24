import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f7fb",
          color: "#142033",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#1d4ed8" }}>
          LOTUSBYTE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Software for
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#1d4ed8", lineHeight: 1.05 }}>
            real work.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#5b6b7c" }}>
            Design · build · care
          </div>
        </div>
      </div>
    ),
    size,
  );
}
