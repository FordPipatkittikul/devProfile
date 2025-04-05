import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required : true },
    lastName: { type: String, required : true },
    email: { type: String, unique: true },
    password: { type: String, required : true },
}, { collection: "user" });

// Pre-remove hook to delete related documents
userSchema.pre('findOneAndDelete', async function (next) {
    const user = await this.model.findOne(this.getQuery());  // Get the user document
    if (user) {
      // Delete related documents
      await mongoose.model('userInfo').deleteMany({ user_id: user._id });
      await mongoose.model('education').deleteMany({ user_id: user._id });
      await mongoose.model('professionalExperience').deleteMany({ user_id: user._id });
      await mongoose.model('project').deleteMany({ user_id: user._id });
      await mongoose.model('skill').deleteMany({ user_id: user._id });
    }
    next();  // Proceed with the delete operation
});

export const User = mongoose.models.user || mongoose.model("user", userSchema);

