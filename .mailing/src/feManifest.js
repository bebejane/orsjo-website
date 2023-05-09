// mailing.config.json
var mailing_config_default = {
  typescript: true,
  emailsDir: "./emails",
  outDir: "./emails/previews_html",
  anonymousId: "6342ca0b-93db-48c3-9938-223ebdebcc94"
};

// .mailing/src/feManifest.ts
var feManifest = { config: mailing_config_default };
var feManifest_default = feManifest;
export {
  mailing_config_default as config,
  feManifest_default as default
};
