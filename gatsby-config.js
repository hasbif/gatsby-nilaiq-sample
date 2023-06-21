/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: `gatsby-plugin-rudderstack`,
    options: {
      // your rudderstack write key for your production environment
      // when process.env.NODE_ENV === 'production'
      // required; non-empty string
      //NOTE: Do not commit this to git. Process from env.
      prodKey: `RUDDERSTACK_PRODUCTION_WRITE_KEY`,
      // if you have a development env for your rudderstack account, paste that key here
      // when process.env.NODE_ENV === 'development'
      // optional; non-empty string
      //NOTE: Do not commit this to git. Process from env.
      devKey: `RUDDERSTACK_DEV_WRITE_KEY`,
      // If you need to proxy events through a custom data plane,
      // add a `dataPlaneUrl` property (defaults to https://hosted.rudderlabs.com )
      // RudderStack docs:
      //   - https://rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/#31-load
      dataPlaneUrl: `https://aixp-rudder-api-aks.digitallab.id/1982c4cc-d2eb-40e0-83e5-b32863520d20/d3c3beb2-44d5-466e-b3f9-36f09edbae85`,
      // Add a `controlPlaneUrl` property if you are self-hosting the Control Plane
      // RudderStack docs:
        // - https://rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/#311-self-hosted-control-plane
      controlPlaneUrl: `https://aixp-rudder-api-aks.digitallab.id/1982c4cc-d2eb-40e0-83e5-b32863520d20/d3c3beb2-44d5-466e-b3f9-36f09edbae85`,
    }
  }],
}
