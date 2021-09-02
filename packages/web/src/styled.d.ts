// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    chrome: string;
    background: string;
    text: string;
  }
}
