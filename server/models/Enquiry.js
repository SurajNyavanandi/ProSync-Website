import mongoose from 'mongoose';

const VALID_SECTORS = [
  'Manufacturing',
  'Infrastructure',
  'Healthcare',
  'Renewable Energy',
  'Hospitality',
  'MSME / Other',
];

const VALID_STAGES = [
  'Idea stage',
  'Land identified',
  'Existing business expansion',
  'Project under implementation',
  'Other',
];

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name must be 100 characters or less'],
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true,
    },
    projectName: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
      maxlength: [150, 'Project name must be 150 characters or less'],
    },
    sector: {
      type: String,
      required: [true, 'Project sector is required'],
      enum: {
        values: VALID_SECTORS,
        message: 'Invalid sector selected',
      },
    },
    location: {
      type: String,
      required: [true, 'Project location is required'],
      trim: true,
      maxlength: [150, 'Location must be 150 characters or less'],
    },
    estimatedCost: {
      type: Number,
      alias: 'cost',
      required: [true, 'Estimated project cost is required'],
      min: [0.0001, 'Estimated cost must be greater than zero'],
    },
    fundingRequirement: {
      type: Number,
      alias: 'funding',
      default: null,
      min: [0, 'Funding requirement must be zero or more'],
    },
    projectStage: {
      type: String,
      alias: 'stage',
      required: [true, 'Project stage is required'],
      enum: {
        values: VALID_STAGES,
        message: 'Invalid project stage selected',
      },
    },
    expectedStartDate: {
      type: String,
      alias: 'startDate',
      default: null,
    },
    briefDetails: {
      type: String,
      alias: 'details',
      default: '',
      trim: true,
      maxlength: [2000, 'Brief details must be 2000 characters or less'],
    },
    consent: {
      type: Boolean,
      required: [true, 'Consent is required'],
      validate: {
        validator: (v) => v === true,
        message: 'Consent must be agreed to',
      },
    },
    pageSource: {
      type: String,
      alias: 'page',
      default: '/',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
    collection: 'enquiries',
  }
);

export { VALID_SECTORS, VALID_STAGES };
export const Enquiry = mongoose.model('Enquiry', enquirySchema);

