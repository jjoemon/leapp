import mongoose, { Schema, Document } from 'mongoose';

interface UserPreferences {
  theme?: 'light' | 'dark';
  notifications?: {
    email: boolean;
    sms: boolean;
  };
  language?: 'en' | 'fr' | 'es';
  custom?: Record<string, string | number | boolean>;
}

export interface IUser extends Document {
  email?: string;
  phone?: string;
  name?: string;
  signupIP?: string;
  lastLoginIP?: string;
  authProvider?: 'email' | 'phone' | 'google' | 'apple' | 'password';
  passwordHash?: string;   // store hashed password
  gdprConsent?: boolean;   // store user consent
  profileCompleted?: boolean; // for progressive onboarding
  preferences?: UserPreferences;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: false, unique: true, sparse: true },
  phone: { type: String, required: false, unique: true, sparse: true },
  name: String,
  signupIP: String,
  lastLoginIP: String,
  authProvider: { type: String, enum: ['email', 'phone', 'google', 'apple'], default: 'email' },
  preferences: {
    theme: { type: String, enum: ['light', 'dark'], default: 'light' },
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
    },
    language: { type: String, enum: ['en', 'fr', 'es'], default: 'en' },
    custom: { type: Map, of: Schema.Types.Mixed },
  }
}, { timestamps: true, strict: true });

// UserSchema.index({ email: 1 });
// UserSchema.index({ phone: 1 });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
