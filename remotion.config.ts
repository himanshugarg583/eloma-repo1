/**
 * Remotion CLI configuration (studio + render).
 * Docs: https://www.remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// High-quality H.264 for a corporate master.
Config.setCodec("h264");
Config.setCrf(16);
