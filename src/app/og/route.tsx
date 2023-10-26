import Image from "next/image";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Hey there,\n I'm Alec 👋";

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
              textAlign: "center",
              fontFamily: "EB_Garamond",
              fontSize: "100px",
            }}
          >
            {title}
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
