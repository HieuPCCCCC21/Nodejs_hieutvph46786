module.exports = {
    multipleMongooseToObject: function(mongooseArray ){
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseToObject:function(mgArray){
           return mgArray ? mgArray.toObject() : mgArray;
    }
}