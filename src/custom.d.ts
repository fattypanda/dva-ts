declare module "*.css" {
  const content: {
    [propName: string]: any
  };
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: object;
  export default content;
}

declare const require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

interface System {
  import<T = any>(module: string): Promise<T>
}

declare const System: System

declare module 'react-async-component';

declare const describe: {
  (...args): any
}

declare const it: {
  (...args): any
}