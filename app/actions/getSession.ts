import { getServerSession } from "next-auth";

import { authOptions } from "../libs/auth";
import exp from "constants";

export default async function getSession() {
  return await getServerSession(authOptions);
}
