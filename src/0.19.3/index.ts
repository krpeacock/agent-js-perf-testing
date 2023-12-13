const CANISTER_ID_TEST = "ajuq4-ruaaa-aaaaa-qaaga-cai";
import { createActor } from "../declarations/test/index.js";

const actor = createActor(CANISTER_ID_TEST, {
    agentOptions: {
        host: "http://localhost:4943",
    },
});

const ITERATIONS = 1000;
const BATCH_SIZE = 10;

const main = async () => {
    const start = Date.now();
    for (let i = 0; i < ITERATIONS; i += BATCH_SIZE) {
        const promises: Promise<undefined>[] = [];
        for (let j = 0; j < BATCH_SIZE; j++) {
            promises.push(actor.ok());
        }
        await Promise.all(promises);
    }
    const end = Date.now();
    console.log(`Took ${end - start}ms for ${ITERATIONS} iterations`);
    console.log(`Average ${(end - start) / ITERATIONS}ms per iteration`);
}

main();




