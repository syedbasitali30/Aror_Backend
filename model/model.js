const mongoose = require("mongoose");
const { Schema } = mongoose;

const Degree_ = new mongoose.Schema({
  DEGREE_TITLE: {
    type: String,
  },
});
const Degree = (module.exports = mongoose.model("Degree", Degree_));

const BloodGroup_ = new mongoose.Schema({
  BLOOD_TITLE: {
    type: String,
  },
});
const BloodGroup = (module.exports = mongoose.model("BloodGroup", BloodGroup_));

const Religion_ = new mongoose.Schema({
  RELEGION_TITLE: {
    type: String,
  },
});
const Religion = (module.exports = mongoose.model("Religion", Religion_));

const District_ = new mongoose.Schema({
  DISTRICT_TITLE: {
    type: String,
  },
});
const District = (module.exports = mongoose.model("District", District_));

const Gender_ = new mongoose.Schema({
  GENDER_TITLE: {
    type: String,
  },
});
const Gender = (module.exports = mongoose.model("Gender", Gender_));

const Marry_ = new mongoose.Schema({
  MARRY_TITLE: {
    type: String,
  },
});
const Marry = (module.exports = mongoose.model("Marry", Marry_));

const User_ = new mongoose.Schema(
  {
    ApplicantID: {
      type: Schema.Types.ObjectId,
    },
    S_name: {
      type: String,
    },
    DOB: {
      type: String,
    },
    Domicile: {
      type: String,
    },
    S_Contact: {
      type: String,
    },
    Province: {
      type: String,
    },
    CNIC: {
      type: String,
    },
    C_Address: {
      type: String,
    },
    PerAddress: {
      type: String,
    },
    F_Name: {
      type: String,
    },
    F_Contact: {
      type: String,
    },
    F_OCC: {
      type: String,
    },
    Education: {
      type: Array,
    },
    Images: {
      type: Array,
    },
    SelectGender: {
      type: Array,
    },
    SelectMarital: {
      type: Array,
    },
    SelectBlood_Group: {
      type: Array,
    },
    SelectReligion: {
      type: Array,
    },
    SelectNationality: {
      type: Array,
    },
    SelectDistrict: {
      type: Array,
    },
    SelectDisability: {
      type: Array,
    },
    SelectQouta: {
      type: Array,
    },
    SelectTestCenter: {
      type: Array,
    },
    Status: {
      type: Boolean,
    },
    IsUpdate: {
      type: Boolean,
    },
    isActive: {
      type: Boolean,
    },
    FeeStatus: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = (module.exports = mongoose.model("add_Users", User_));

const Program_ = new mongoose.Schema({
  DISTRICT_TITLE: {
    type: String,
  },
});
const Program = (module.exports = mongoose.model("Programs", Program_));

const Register_ = new mongoose.Schema({
  NAME: {
    type: String,
  },
  CNIC: {
    type: String,
  },
  MOBILE: {
    type: String,
  },
  EMAIL: {
    type: String,
  },
  PINCODE: {
    type: String,
  },
});
const Register = (module.exports = mongoose.model("User", Register_));

// EXPORT MODULES
module.exports = {
  Degree: Degree,
  Register: Register,
  Program: Program,
  User: User,
  BloodGroup: BloodGroup,
  Religion: Religion,
  District: District,
  Gender: Gender,
  Marry: Marry,
};
