/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_TOKEN_KEY: string;
  readonly VITE_USER_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
