const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
const showLog = NODE_ENV === "development";

const Log = {
  log: (...args: any) => {
    if (showLog) {
      console.log(args);
    }
  },
};

export default Log;
