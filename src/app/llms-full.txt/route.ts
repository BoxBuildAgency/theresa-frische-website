import { readLlmsFile, textResponse } from "@/content/llms/serve";

export const dynamic = "force-static";

export function GET() {
  return textResponse(readLlmsFile("llms-full.txt"));
}
