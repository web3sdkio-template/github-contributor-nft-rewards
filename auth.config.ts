import { Web3sdkioAuth } from "@web3sdkio/auth/next";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  // It is not best practice to store your private key in an environment variable.
  // Learn how to store your private key securely: https://docs.web3sdk.io/sdk/set-up-the-sdk/securing-your-private-key
  privateKey: process.env.PRIVATE_KEY as string,
  domain: "example.com",
});
