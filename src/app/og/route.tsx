import Image from "next/image";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const fontData = await fetch(
      new URL("../../assets/font/EBGaramond-SemiBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const imageData = await fetch(
      new URL("../../assets/images/profile.jpg", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              color: "black",
            }}
          >
            <img
              width="384"
              height="480"
              src={imageData as any}
              alt="Profile image"
              style={{ borderRadius: "12px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "EB_Garamond",
                fontSize: "120px",
                paddingLeft: "80px",
              }}
            >
              <div>Hey there,</div>
              <div>I&apos;m Alec 👋</div>
            </div>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "EB_Garamond",
            data: fontData,
            style: "normal",
          },
        ],
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
