import * as cdk from 'aws-cdk-lib';
import * as ecrassets from 'aws-cdk-lib/aws-ecr-assets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class HaaskaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'function', {
      code: lambda.DockerImageCode.fromImageAsset('src/', { platform: ecrassets.Platform.LINUX_AMD64 }),
      architecture: lambda.Architecture.X86_64,
      timeout: cdk.Duration.seconds(30),
    });

  }
}
