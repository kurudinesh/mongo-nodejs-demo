module.exports = {
  url: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB}:27017/health-camp?authSource=admin`
};
