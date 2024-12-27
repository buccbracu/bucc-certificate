import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
    // match: /@g\.bracu\.ac\.bd$/,
  },
  recipientId: {
    type: String,
    required: true,
    match: /^[0-9]{8}$/, // Bracu ID
  },
  previewLink: {
    type: String,
  },
  downloadLink: {
    type: String,
  },
  issueDate: {
    type: Date,
  },
  fbShare: {
    type: String,
  },
  linkedinShare: {
    type: String,
  },
});

const Certificate =
  mongoose.models.certificate ||
  mongoose.model("certificate", certificateSchema);
export type RecipientType = mongoose.InferSchemaType<typeof certificateSchema>;
export default Certificate;
