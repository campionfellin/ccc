import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import { App, Stack } from '@aws-cdk/core'
import CdkCommonAlarms = require('../lib/index');

test('AccountRCUAlarm is created', () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    // WHEN
    new CdkCommonAlarms.AccountRCUAlarm(stack, 'MyTestConstruct', {
      tableName: 'TestTable'
    });
    // THEN
    expectCDK(stack).to(haveResource("AWS::Cloudwatch::Alarm"));
});