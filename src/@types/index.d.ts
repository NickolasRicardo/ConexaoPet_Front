declare module "*.ttf";
declare module "@mars/heroku-js-runtime-env";
declare module "*.svg";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module "*.png" {
  const value: string;
  export default value;
}
