import { fetchRequest } from "./helpers/fetch-activity.js";
import { parse } from "./helpers/parse.js";

const execute = async () => {
  const username = process.argv[2];

  if (!username) {
    console.error(`No username found...`);

    process.exit(0);
  }

  const items = await fetchRequest(username);

  const result = parse(items);

  console.log(result);
};

execute();
