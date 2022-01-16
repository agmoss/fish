import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getAllFish, getFish } from "./service";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  const fishId = req.params.fishId;

  try {
    if (!fishId) {
      context.res = {
        status: 200,
        body: getAllFish(),
      };
    } else {
      const possibleFish = getFish(parseInt(fishId));
      if (possibleFish) {
        context.res = {
          status: 200,
          body: possibleFish,
        };
      } else {
        context.res = {
          status: 404,
          body: `No fish found for the id: ${fishId}`,
        };
      }
    }
  } catch (e) {
    context.res = {
      status: 500,
      body: `Server Error ${JSON.stringify(e)}`,
    };
  }
};

export default httpTrigger;
