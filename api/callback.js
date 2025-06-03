export default function handler(req, res) {
  // You can optionally read query params here
  // const { query } = req;

  res.status(200).send(`
    <html>
      <head><title>Redirecting...</title></head>
      <body>
        <h2>Redirect received</h2>
        <script>
          // Optional: redirect back to app via custom scheme or just show status
          console.log("Callback hit");
        </script>
      </body>
    </html>
  `);
}
