import colors from './colors';

const feelingsEnums = {
  0: 'loved',
  1: 'happy',
  2: 'calm',
  3: 'sad',
  4: 'anxious',
  5: 'angry',
};

const feelingList = [
  {
    key: 'loved',
    label: 'Loved',
    variant: 'loved',
    color: colors.variantMap.loved,
  },
  {
    key: 'happy',
    label: 'Happy',
    variant: 'happy',
    color: colors.variantMap.happy,
  },
  {
    key: 'calm',
    label: 'Calm',
    variant: 'calm',
    color: colors.variantMap.calm,
  },
  {
    key: 'anxious',
    label: 'Anxious',
    variant: 'anxious',
    color: colors.variantMap.anxious,
  },
  { key: 'sad', label: 'Sad', variant: 'sad', color: colors.variantMap.sad },
  {
    key: 'angry',
    label: 'Angry',
    variant: 'angry',
    color: colors.variantMap.angry,
  },
];

export { feelingsEnums, feelingList };
