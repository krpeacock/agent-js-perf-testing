var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const CANISTER_ID_TEST = "ajuq4-ruaaa-aaaaa-qaaga-cai";
import { createActor } from "../declarations/test/index.js";
const actor = createActor(CANISTER_ID_TEST, {
    agentOptions: {
        host: "http://localhost:4943",
    },
});
const ITERATIONS = 1000;
const BATCH_SIZE = 10;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const start = Date.now();
    for (let i = 0; i < ITERATIONS; i += BATCH_SIZE) {
        const promises = [];
        for (let j = 0; j < BATCH_SIZE; j++) {
            promises.push(actor.ok());
        }
        yield Promise.all(promises);
    }
    const end = Date.now();
    console.log(`Took ${end - start}ms for ${ITERATIONS} iterations`);
    console.log(`Average ${(end - start) / ITERATIONS}ms per iteration`);
});
main();
