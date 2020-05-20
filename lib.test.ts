import {shouty} from "./lib.ts"

Deno.test("env", () => {
  if("HELLO WORLD" !== shouty("hello world")) {
    throw new Error("OK")
  }
});
