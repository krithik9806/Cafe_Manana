import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get("x-sanity-webhook-secret") || req.nextUrl.searchParams.get("secret");
    const expectedSecret = process.env.SANITY_WEBHOOK_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid webhook secret" }, { status: 401 });
    }

    const body = await req.json();
    const type = body?._type;

    // Trigger tag-based revalidation based on Sanity document type
    if (type === "menuItem" || type === "menuCategory") {
      revalidateTag("menu");
    } else if (type === "siteSettings") {
      revalidateTag("site-settings");
    } else if (type === "testimonial") {
      revalidateTag("testimonials");
    } else if (type === "galleryImage") {
      revalidateTag("gallery");
    } else {
      // General revalidation for all tags
      revalidateTag("menu");
      revalidateTag("site-settings");
      revalidateTag("testimonials");
      revalidateTag("gallery");
    }

    return NextResponse.json({
      revalidated: true,
      type,
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json({ message: "Error revalidating", error: err?.message }, { status: 500 });
  }
}
