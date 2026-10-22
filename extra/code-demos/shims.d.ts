// Stand-ins for packages the demos import but this repo doesn't install
declare module "react" {
  export type ReactNode = any;
  export const useEffect: any, useMemo: any, useState: any;
}
declare module "*";
