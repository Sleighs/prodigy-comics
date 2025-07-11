// // app/api/products/route.ts
// import { NextResponse } from "next/server";
// // import { api } from "@/config/woocommerce";
// const api = require("../../../config/woocommerce.js");


// export async function GET() {
//   try {
//     console.log("Calling WooCommerce API...");
//     const { data: products } = await api.get("products");
//     console.log("Products fetched:", products);
//     return NextResponse.json(products);
//   } catch (error: any) {
//     console.error("[WooCommerce API ERROR]", error?.response?.data || error.message || error);
//     return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const WooCommerceRestApiModule = await import("@woocommerce/woocommerce-rest-api");
//     console.log("MODULE EXPORT:", WooCommerceRestApiModule);

//     return NextResponse.json({ debug: "Check console output" });
//   } catch (error: any) {
//     console.error("[WooCommerce API ERROR]", error?.response?.data || error);
//     return NextResponse.json(
//       { error: "Failed to load module", message: error?.message || "Unknown error" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const WooCommerceRestApiModule = await import("@woocommerce/woocommerce-rest-api");
    const WooCommerceRestApi = WooCommerceRestApiModule.default || WooCommerceRestApiModule.WooCommerceRestApi || WooCommerceRestApiModule;

    const api = new WooCommerceRestApi({
      url: process.env.WC_STORE_URL!,
      consumerKey: process.env.WC_CONSUMER_KEY!,
      consumerSecret: process.env.WC_CONSUMER_SECRET!,
      version: "wc/v3",
    });

    const response = await api.get("products");
    console.log("WooCommerce response:", response.data);
    console.log("API", WooCommerceRestApi);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("[WooCommerce API ERROR]", error?.response?.data || error.message || error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}