module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("dhqurtr4r"),
      api_key: env("291775821481642"),
      api_secret: env("NfskBAcHlVFbyorBwUK-wHH4gOc"),
    },
  },
  // ...
});
