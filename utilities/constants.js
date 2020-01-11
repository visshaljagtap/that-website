import * as Yup from 'yup';
import { RegularExpressions } from './validation';

// eslint-disable-next-line import/prefer-default-export
export const sessionConstants = {
  SessionFors: [
    { value: 'PROFESSIONAL', label: 'Professionals' },
    { value: 'FAMILY', label: 'Family' },
  ],

  SessionTypes: [
    { value: 'REGULAR', label: 'Regular session (60 minute talk)' },
    { value: 'KEYNOTE', label: 'Keynote (90 minute talk)' },
    { value: 'HALF_DAY_WORKSHOP', label: 'Half-day Workshop (pre-conference)' },
    { value: 'FULL_DAY_WORKSHOP', label: 'Full-day Workshop (pre-conference)' },
  ],

  SessionCategories: [
    { value: 'ACCESSIBILITY', label: 'Accessibility' },
    { value: 'ARCHITECTURE', label: 'Architecture' },
    { value: 'AR_VR', label: 'AR/VR' },
    { value: 'CLOUD_COMPUTING', label: 'Cloud' },
    { value: 'DATABASE_STORAGE', label: 'Database/Storage' },
    { value: 'DESIGN_UX', label: 'Design/UX' },
    { value: 'DEV_OPS', label: 'DevOps' },
    { value: 'INFRASTRUCTURE', label: 'Infrastructure' },
    { value: 'IOT_MAKER', label: 'IoT/Maker' },
    { value: 'LANGUAGES', label: 'Languages' },
    { value: 'MACHINE_LEARNING', label: 'Machine Learning' },
    { value: 'MOBILE', label: 'Mobile' },
    { value: 'PRODUCT_MANAGEMENT', label: 'Product Management' },
    { value: 'SOFT_SKILLS', label: 'Soft Skills' },
    { value: 'SECURITY', label: 'Security' },
    { value: 'TESTING', label: 'Testing' },
    { value: 'TOOLING', label: 'Tooliing' },
    { value: 'USER_INTERFACES', label: 'UI' },
    { value: 'WEB', label: 'Web' },
    { value: 'OTHER', label: "You Can't Put a Label on Me" },
  ],

  SessionAudiences: [
    { value: 'ANYBODY', label: 'Anybody' },
    { value: 'DEVELOPERS', label: 'Developers' },
    { value: 'MANAGERS', label: 'Managers' },
  ],

  SessionMentorshipLevels: [
    { value: 'NO', label: "None, I've got this" },
    { value: 'SOME', label: 'Some would be good' },
    { value: 'YES', label: 'All I can get' },
  ],

  SessionStatuses: [
    { value: 'DRAFT', label: 'Draft' },
    { value: 'SUBMITTED', label: 'Submiteed' },
    { value: 'ACCEPTED', label: 'Accepted' },
    { value: 'DENIED', label: 'Declined' },
    { value: 'WITHDREW', label: 'Withdrew' },
    { value: 'WAIT_LIST', label: 'Wait List' },
    { value: 'CANCELLED', label: 'Canceled' },
  ],
};

export const memberConstants = {
  // commented out some links until we get icons
  linkTypes: {
    // devTo: "DEV_TO",
    // dribbble: "DRIBBBLE",
    facebook: 'FACEBOOK',
    github: 'GITHUB',
    instagram: 'INSTAGRAM',
    linkedin: 'LINKEDIN',
    medium: 'MEDIUM',
    // stackOverflow: "STACK_OVERFLOW",
    // tictok: "TICTOK",
    // twitch: "TWITCH",
    twitter: 'TWITTER',
    website: 'WEBSITE',
    youtube: 'YOUTUBE',
  },

  validationRules: {
    createOnly: {
      acceptedCodeOfConduct: Yup.bool().required('Field must be checked'),
      acceptedTermsOfService: Yup.bool().required('Field must be checked'),
      isOver13: Yup.bool().required('Field must be checked'),
    },
    contactInfo: {
      city: Yup.string().nullable(),
      company: Yup.string().nullable(),
      firstName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      country: Yup.string().nullable(),
      jobTitle: Yup.string().nullable(),
      lastName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Required'),
      mobilePhone: Yup.string()
        .matches(RegularExpressions.phoneRegExp, 'Phone number is not valid')
        .nullable(),
      profileSlug: Yup.string().required('Required'),
      state: Yup.string().nullable(),
    },
    onlinePresence: {
      facebook: Yup.string().url('Invalid URL'),
      github: Yup.string().url('Invalid URL'),
      instagram: Yup.string().url('Invalid URL'),
      linkedin: Yup.string().url('Invalid URL'),
      slack: Yup.string(),
      twitter: Yup.string().url('Invalid URL'),
      website: Yup.string().url('Invalid URL'),
    },
    image: { profileImage: Yup.mixed().required() },
    bio: {
      bio: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .required(),
    },
  },
};

export const socialConstants = {
  thatSocialLinks: Object.freeze({
    facebook: 'https://www.facebook.com/ThatConference/',
    instagram: 'https://www.instagram.com/thatconference/',
    twitter: 'https://twitter.com/ThatConference',
    medium: 'https://medium.com/that-conference',
    youtube: 'https://www.youtube.com/thatconference/',
  }),

  socialIcons: {
    facebook: {
      icon: {
        name: 'facebook',
        width: 12,
        height: 24,
      },
      className: 'is-bigger',
    },
    instagram: {
      icon: {
        name: 'instagram',
        width: 24,
        height: 24,
      },
      className: 'is-bigger',
    },
    twitter: {
      icon: {
        name: 'twitter',
        width: 32,
        height: 26,
      },
    },
    medium: {
      icon: {
        name: 'medium',
        width: 24,
        height: 19,
      },
    },
    youtube: {
      icon: {
        name: 'youtube',
        width: 90,
        height: 63,
      },
    },
  },
};

export default { sessionConstants, memberConstants, socialConstants };
