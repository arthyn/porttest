require('dotenv').config()

module.exports = {
  packagerConfig: {
    appBundleId: 'dev.hmiller.taishotest',
    osxSign: {
      identity: 'Developer ID Application: Hunter Miller (8YA38DLJ3T)',
      "entitlements": "entitlements.plist",
      "entitlements-inherit": "entitlements.plist",
      'hardened-runtime': true,
      'gatekeeper-assess': false,
      'signature-flags': 'library'
    },
    osxNotarize: {
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_ID_PASSWORD,
      ascProvider: '8YA38DLJ3T'
    }
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "taishotest"
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        name: "taishotest"
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [
        "darwin",
      ]
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'arthyn',
          name: 'taishotest'
        },
        draft: true
      }
    }
  ]
}