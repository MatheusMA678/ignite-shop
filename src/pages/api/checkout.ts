import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  // if (req.method !== "POST") {
  //   return res.status(405).json({ error: "Method not allowed" })
  // }

  if (!priceId) {
    return res.status(404).json({ error: "Price id not found" })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}`,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}