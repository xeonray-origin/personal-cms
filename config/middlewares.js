module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": [
            "'self'",
            "https://personal-cms-content.s3.us-east-1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "res.cloudinary.com", // cloudinary images
            "lh3.googleusercontent.com", // google avatars
            "platform-lookaside.fbsbx.com", // facebook avatars
            "dl.airtable.com", // strapi marketplace
            "data:",
            "blob:",
            `https://${env("AWS_BUCKET_NAME")}.${env(
              "AWS_REGION"
            )}.s3.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
