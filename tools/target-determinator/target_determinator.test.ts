import { makeToolTestConfig, toolTest } from "tests";

toolTest({
  toolName: "target-determinator",
  toolVersion: "0.3.0",
  testConfigs: [
    makeToolTestConfig({
      command: ["target-determinator"],
      expectedErr:
        "Failed to parse flags: expected one positional argument, <before-revision>, but got 0",
      expectedExitCode: 1,
    }),
  ],
});
