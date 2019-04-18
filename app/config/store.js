import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "../reducers";

const middelware = [];
if (process.env.NODE_ENV === "development") {
  middelware.push(logger);
}
export default createStore(reducers, applyMiddleware(...middelware));
