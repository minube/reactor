const ATTRIBUTES = {
  username: {
    disabled: true, required: true, defaultValue: 'soyjavi', icon: 'twitter',
  },
  password: { required: true, defaultValue: 'soyjavi', icon: 'twitter' },
  role: {
    required: true,
    type: 'select',
    defaultValue: 'backend',
    dataSource: ['frontend', 'backend', 'fullstack'],
    style: 'inline2',
  },
  mail: {
    keyboard: 'email-address',
    placeholder: 'Your email...',
    required: true,
    style: 'inline2',
    hint: 'we will not send you spam.',
  },
  phone: {
    keyboard: 'phone-pad',
    placeholder: '000 000 000',
    style: 'inline2',
  },
  phoneCountryCode: {
    countryCode: true,
    keyboard: 'phone-pad',
    placeholder: '+00 000 000 000',
    hint: 'Using property countryCode',
    style: 'inline2',
  },
  bio: { lines: 4 },
  avatar: { type: 'image', defaultValue: 'http://soyjavi.com/assets/images/soyjavi.jpg' },
  twitter: { icon: 'twitter', style: 'inline3' },
  isPublic: { type: 'bool', style: 'inline3' },
  isPrivate: { type: 'bool', style: 'inline3' },

  isOption1: { type: 'option', label: 'Option' },
  isOption2: { type: 'option', label: 'Option 2' },
  isOption3: { type: 'option', label: 'Option 3' },
  isOptionRounded: { type: 'option', rounded: false, label: 'Checkbox' },

  social: {
    title: 'Social Networks',
    attributes: {
      twitter: { icon: 'twitter', style: 'inline3' },
      facebook: { icon: 'facebook', style: 'inline3' },
      github: { style: 'inline3', required: true },
    },
  },
  languages: { type: 'list' },
  terms: { type: 'option', label: 'ACCEPT, terms & conditions', rounded: false },
};

const VALUE = {
  username: 'soyjavi',
  isPublic: true,
  social: {
    twitter: 'soyjavi',
    facebook: '😅',
  },
  languages: ['JavaScript', 'CoffeeScript', 'C++'],
};

const STYLE = {
  backgroundColor: 'rgba(255,255,255,1)', padding: 20,
};

export { ATTRIBUTES, VALUE, STYLE };
