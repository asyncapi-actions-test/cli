/**
 * Node treats a `.mjs` file as an ES module.
 */

import { writeFileSync } from 'node:fs';
import bundle from '@action-test-ash17290/asyncapi-bundler-release-test-20261022';

const document = await bundle(['./main.yaml'], {
  xOrigin: true,
});
const yaml = document.yml();
if (yaml) {
  writeFileSync('asyncapi.yaml', yaml);
}
