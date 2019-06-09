const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoid: { type: Number, required: true, unique: true },
    content: { type: String, required: true },
    completed: { type: String, default: false }
},{
    timestamps: true
});

todoSchema.statics.create = function (payload) {
    const todo = new this(payload);
    return todo.save();
};

todoSchema.statics.findAll = function () {
    return this.find({});
};

todoSchema.statics.findOneByTodoid = function (todoid) {
    return this.findOne({ todoid });
}

todoSchema.statics.updateByTodoid = function (todoid, payload) {
    return this.findOneAndUpdate({ todoid }, payload, { new: true });
};

todoSchema.statics.deleteByTodoid = function (todoid) {
    return this.remove({ todoid });
};


module.exports = mongoose.model('Todo', todoSchema);
