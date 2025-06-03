export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const data = req.body;

  console.log("✅ DIDIT Webhook Received:");
  console.log(JSON.stringify(data, null, 2));

  // TODO: You can later save this to a DB or send to email/Slack/etc.

  return res.status(200).json({ message: "Received successfully" });
}
