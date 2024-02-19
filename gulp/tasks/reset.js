import { deleteAsync } from "del";
import { filePaths } from "../config/paths.js";

const reset = () => deleteAsync(filePaths.buildFolder);

export { reset };
