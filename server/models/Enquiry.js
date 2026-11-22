import mongoose from 'mongoose';

const VALID_SECTORS = [
  'Manufacturing',
  'Infrastructure',
  'Healthcare',
  'Renewable Energy',
  'Hospitality',
  'MSME / Other',
  'Commercial & Industrial Projects',
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
    formType: {
      type: String,
      enum: ['dpr', 'corporate'],
      default: 'dpr',
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name must be 100 characters or less'],
    },
    // Contact Coordinates
    mobile: {
      type: String,
      trim: true,
      default: '',
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
    },
    // Corporate Mandate Fields (Homepage /)
    organisation: {
      type: String,
      trim: true,
      default: '',
      maxlength: [150, 'Organisation must be 150 characters or less'],
    },
    serviceRequired: {
      type: String,
      trim: true,
      default: '',
    },
    requirementDescription: {
      type: String,
      trim: true,
      default: '',
      maxlength: [3000, 'Requirement description must be 3000 characters or less'],
    },
    // DPR Landing Page Fields (/dpr-services)
    projectName: {
      type: String,
      trim: true,
      default: '',
      maxlength: [150, 'Project name must be 150 characters or less'],
    },
    sector: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      trim: true,
      default: '',
      maxlength: [150, 'Location must be 150 characters or less'],
    },
    estimatedCost: {
      type: Number,
      alias: 'cost',
      default: null,
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
      default: '',
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
      default: true,
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
