const textArr1 = ['STACK OVERFLOW', 'Questions', 'Help'];
const linkArr1 = textArr1.map((el) => {
  return '#';
});

/**
 * 2023/04/23 - [ textArr, linkArr ] - fe-HyungUk
 * @param textArr1 ['STACK OVERFLOW', 'Questions', 'Help']
 * @param linkArr1 ['#','#','#']
 */
const BindArr1 = [textArr1, linkArr1];

const textArr2 = ['PRODUCTS', 'Teams', 'Advertising', 'Collectives', 'Talent'];
const linkArr2 = textArr2.map((el) => {
  return '#';
});

/**
 * 2023/04/23 - [ textArr, linkArr ] - fe-HyungUk
 * @param textArr ['PRODUCTS', 'Teams', 'Advertising', 'Collectives', 'Talent']
 * @param linkArr ['#','#','#','#','#']
 */
const BindArr2 = [textArr2, linkArr2];

const textArr3 = [
  'COMPANY',
  'About',
  'Press',
  'Work',
  'Legal',
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'Cookie Settings',
  'Cookie Policy',
];
const linkArr3 = textArr3.map((el) => {
  return '#';
});

/**
 * 2023/04/23 - [ textArr, linkArr ] - fe-HyungUk
 * @param textArr [
  'COMPANY',
  'About',
  'Press',
  'Work',
  'Legal',
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'Cookie Settings',
  'Cookie Policy',
]
 * @param linkArr ['#','#','#','#','#','#','#','#','#','#']
 */
const BindArr3 = [textArr3, linkArr3];

const textArr4 = [
  'PRODUCSTACK EXCHANGE NETWORKTS',
  'Technology',
  'Culture & recreation',
  'Life & arts',
  'Science',
  'Professional',
  'Business',
  'API',
  'Data',
];
const linkArr4 = textArr4.map((el) => {
  return '#';
});

/**
 * 2023/04/23 - [ textArr, linkArr ] - fe-HyungUk
 * @param textArr [
  'PRODUCSTACK EXCHANGE NETWORKTS',
  'Technology',
  'Culture & recreation',
  'Life & arts',
  'Science',
  'Professional',
  'Business',
  'API',
  'Data',
]
 * @param linkArr ['#','#','#','#','#','#','#','#','#']
 */
const BindArr4 = [textArr4, linkArr4];

const Wraptext = ['Blog', 'Facebook', 'Twitter', 'LinkedIn', 'Instagram'];
const Wraplink = textArr1.map((el) => {
  return '#';
});

/**
 * 2023/04/23 - [ textArr1, linkArr1 ] - fe-HyungUk
 * @param textArr ['Blog', 'Facebook', 'Twitter', 'LinkedIn', 'Instagram']
 * @param linkArr ['#','#','#','#','#']
 */
const WrapBind = [Wraptext, Wraplink];

export { BindArr1, BindArr2, BindArr3, BindArr4, WrapBind };
