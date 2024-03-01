/// <reference path="./.sst/platform/src/global.d.ts" />

export default $config({
  app({stage}) {
    if (stage !== "prod") {
      throw new Error("Invalid stage");
    }

    return {
      name: "docs",
      providers: {
        aws: {
          region: "eu-west-1",
        },
      },
      removalPolicy: "remove",
    };
  },
  async run() {
    new sst.aws.StaticSite("DocsSite", {
      domain: {
        domainName: "docs.frak.id",
        hostedZone: "frak.id",
      },
      build: {
        command: "bun run build",
        output: "src/dist",
      },
    });
  },
});
