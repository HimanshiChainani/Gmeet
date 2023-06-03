const { client, db } = require("./config/mongodb");

exports.saveCallId = (key, value) => {
  return new Promise((resolve, reject) => {
    db.collection("calls").insertOne({ _id: key, value }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    db.collection("calls").findOne({ _id: key }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res?.value);
    });
  });
};

