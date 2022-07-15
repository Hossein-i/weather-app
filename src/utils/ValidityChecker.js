import { isEmpty, isNil } from "lodash-es";

const isValid = (value) => {
  return !isEmpty(value) && !isNil(value);
};

export default isValid;
