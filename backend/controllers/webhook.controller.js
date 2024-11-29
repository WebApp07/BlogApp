import User from "../models/user.model.js";
import { Webhook } from "svix";

const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  console.log(WEBHOOK_SECRET);

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env ");
  }

  const payload = req.body;
  const headers = req.headers;

  //console.log("Headers:", headers);
  //console.log("Raw Payload:", payload); // Log raw payload

  //console.log("Content-Type Header:", req.headers["content-type"]);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({ message: "WebHook verification failed" });
  }

  console.log(evt.data);
};

export default clerkWebHook;
