export default {
  inputContainer: [
    'flex',
    'justify-between',
    'items-center',
    'h-12',
    'text-sm',
    'font-bold',
    'p-2',
    'mt-2',
    'rounded-xl',
  ].join(' '),
  secondarySimple: [
    'bg-secondary-02',
    'text-secondary-10',
  ].join(' '),
  secondaryOutline: [
    'bg-transparent',
    'text-secondary-17',
    'border',
    'border-secondary-02',
    'focus-within:border-primary',
    'focus-within:border',
  ].join(' '),
  disabled: [
    'bg-secondary-02',
    'border',
    'border-secondary-03',
  ].join(' '),
};