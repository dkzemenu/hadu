import config from "@payload-config";
import "@payloadcms/next/css";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";
import type { ServerFunctionClient } from "payload";

export { metadata } from "@payloadcms/next/layouts";

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";

  return handleServerFunctions({
    ...args,
    config,
    importMap
  });
};

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={config} htmlProps={{ suppressHydrationWarning: true }} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
