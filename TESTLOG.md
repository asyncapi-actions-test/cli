|S.No|Status|Workflow run|Comments|
|---|---|---|---|
|1|Success|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20456014851/job/58778137046)|Last release 4.1.3 was already published from local machine.|
|2|Success|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20456131127) | Mistake from me|
|3|Failure|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20456178197/job/58778662086) | Error occurred while publishing trusted-publishing-test_asyncapi-cli: ENEEDAUTH This command requires you to be logged in to https://registry.npmjs.org. Ignoring test-nodejs job, rest of the workflow is same as generator which worked fine as can be seen in [diff.patch](./diff.patch) |
|4|Failure|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20467908818/job/58816093663) | Same error. This time even version command is same as generator workflow seen in [diff_2.patch](./diff_2.patch) |
|5|Failure|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20468077628/job/58816657453) | Same error. Added debug steps.|
|6|Failure|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20659384380) | Changed package name and author to match the org. Didn't work still.|
|7|Failure|[Run Link](https://github.com/asyncapi-actions-test/cli/actions/runs/20659656767)|Unset NODE_AUTH_TOKEN in the workflow, and cat the .npmrc file|