import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AorB<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = AorB<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
