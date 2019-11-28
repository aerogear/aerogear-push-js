/**
* Variant configuration
*/
export interface PushVariant{
  senderID?: string,
  appServerKey: string,
  variantID: string
  variantSecret: string
}

/**
* Configuration options for Push application
*/
export interface PushConfig {
  pushServerURL: string,
  android?: PushVariant,
  ios?: PushVariant,
  webpush?: PushVariant
}
