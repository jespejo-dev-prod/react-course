/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TU_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
