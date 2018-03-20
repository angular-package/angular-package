/**
 * @export
 * @interface LaunchInterface
 */
export interface LaunchInterface {
  location: string;
  tooltip?: string;
};

/**
 * @export
 * @interface ViewInterface
 */
export interface ViewInterface {
  code: {
    active: boolean,
    tooltip: string
  };
  debug: {
    active: boolean,
    tooltip: string
  };
}
