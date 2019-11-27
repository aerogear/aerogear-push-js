export interface ServiceConfiguration<Config = any> {
    readonly url?: string;
    readonly config: Config;
  }