//@ts-ignore
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api");
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
  url: process.env.WC_STORE_URL!,
  consumerKey: process.env.WC_CONSUMER_KEY!,
  consumerSecret: process.env.WC_CONSUMER_SECRET!,
  version: "wc/v3",
});
