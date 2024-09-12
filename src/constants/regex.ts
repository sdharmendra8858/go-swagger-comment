export const regex = {
  API_CONTROLLER_FUNCTION:
    /func\s+\w+\(\s*(w\s+http\.ResponseWriter,\s*r\s+\*http\.Request|ctx\s*\*\s*gin\.Context)\s*\)\s*{[^}]*\b(ctx\.(JSON|BindJSON|Param|Query|Status|String)|w\.Write|w\.WriteHeader|r\.FormValue)\b[^}]*}/,
};
