/**
* Variant configuration
*/
export interface PushVariant {
  senderID?: string;
  appServerKey?: string;
  variantID: string;
  variantSecret: string;
}

/**
* Configuration options for Push registration
*/
export interface PushInitConfig {
  /**
   * Url to push server
   */
  url: string;

  // Platforms
  android?: PushVariant;
  ios?: PushVariant;
  webpush?: PushVariant;
}
