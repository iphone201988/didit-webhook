export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "7923B3RA3R.com.newtunesllc.newtunes",
          paths: ["/callback"]
        }
      ]
    }
  })
}