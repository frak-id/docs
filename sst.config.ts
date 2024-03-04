import type { SSTConfig } from "sst";
import {StaticSite} from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "docs",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    // Remove all resources when non-prod stages are removed
    app.setDefaultRemovalPolicy("destroy");
    // Global function properties
    app.setDefaultFunctionProps({
      // Log param's
      logRetention: "three_days",
      // Build params
      nodejs: {
        // Minify code
        minify: true,
        // Disable source map for non ci/cd stage
        sourcemap: false,
        // Build options for esbuild
        esbuild: {
          // Bundle the packages
          bundle: true,
          // Always enable tree shaking
          treeShaking: true,
          // Override log level
          logLevel: "warning",
        },
      },
      // Runtime node env
      runtime: "nodejs20.x",
      // Use arm64
      architecture: "arm_64",
      // Disable xray tracing
      tracing: "disabled",
    });

    // Deploy the docs site
    app.stack(({stack}) => {
      new StaticSite(stack, "DocsSite", {
        path: "web/",
        customDomain: {
          domainName: "docs.frak.id",
          hostedZone: "frak.id",
        },
        buildCommand: "pnpm run build",
        buildOutput: "src/dist",
      });
    })
  },
} satisfies SSTConfig;

