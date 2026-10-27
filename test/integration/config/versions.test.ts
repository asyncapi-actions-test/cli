import { expect, test } from '@oclif/test';

describe('config', () => {
  describe('config:versions', () => {
    test
      .stderr()
      .stdout()
      .command(['config:versions'])
      .it('should show versions of AsyncAPI tools used', (ctx, done) => {
        expect(ctx.stdout).to.contain('@action-test-ash17290/asyncapi-cli-release-test-20261022/');
        expect(ctx.stdout).to.contain('├@asyncapi/');
        expect(ctx.stdout).to.contain('└@asyncapi/');
        expect(ctx.stderr).to.equal('');
        done();
      });

    test
      .stderr()
      .stdout()
      .command(['config:versions'])
      .it('should show address of repository of AsyncAPI CLI', (ctx, done) => {
        expect(ctx.stdout).to.contain('https://github.com/asyncapi-actions-test/cli');
        expect(ctx.stderr).to.equal('');
        done();
      });
  });
});
