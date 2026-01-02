---
'@asyncapi-actions-test/trusted-publishing-test_asyncapi-cli': minor
---

- dac7bb4: Removed support for AsyncAPI Generator v1 and v2. The CLI now exclusively uses Generator v3. The `--use-new-generator` flag has been removed from the `generate fromTemplate` command.

- b90a9b7: ## Major release with important security updates
  - Keeping in mind the recent Shai-Hulud attack, we have adopted trusted publishing with NPM.
  - This requires us to use node >= 24 and npm >= 11
  - Next.js version is in sync with Studio, and is currently 14.2.35 deemed safe by CVE. [For more details](https://nextjs.org/blog/CVE-2025-66478)

  ### Breaking Changes
  - Node.js version 24 or higher is now required.
  - NPM version 11 or higher is now required.
  - Next.js version is now 14.2.35 or higher.
  - The CLI now exclusively uses Generator v3 only.
  - The `--use-new-generator` flag has been removed from the `generate fromTemplate` command.
  - Default template in action has been upgraded to `@asyncapi/markdown-template@2.0.0`

  Please make sure to update your environment accordingly before upgrading to this version.
