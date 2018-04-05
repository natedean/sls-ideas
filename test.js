const getIdeasList = require('./handlers/list').default;

const callBack = (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }

  process.exit();
};

getIdeasList(null, {}, callBack);
