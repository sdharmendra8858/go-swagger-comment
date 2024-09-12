import { CODE_BLOCK, regex } from "../constants";

export const identifyCodeBlock = (code: string): CODE_BLOCK | undefined => {
  const match = code.match(regex.API_CONTROLLER_FUNCTION);

  if (match && match[2]) {
    return CODE_BLOCK.API_FUNCTION;
  }
  return;
};
