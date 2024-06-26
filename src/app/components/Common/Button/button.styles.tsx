import {bgWhite} from "next/dist/lib/picocolors";

export default {
  button: [
    'w-full',
    'h-12',
    'py-2 px-6',
    'rounded-xl ',
  ].join(' '),
  errorSimple: [
    'bg-error',
    'text-white',
    'disabled:bg-secondary-02',
    'disabled:text-secondary-10',
  ].join(' '),
  errorOutline: [
    'bg-error-01',
    'text-error',
    'border',
    'border-error',
    'disabled:bg-secondary-02',
    'disabled:text-secondary-10',
  ].join(' '),
  successSimple: [
    'bg-success-10',
    'text-white',
    'disabled:bg-secondary-02',
    'disabled:text-secondary-10',
  ].join(' '),
  successOutline: [
    'bg-success-01',
    'text-success',
    'border',
    'border-success',
    'disabled:bg-secondary-02',
    'disabled:text-secondary-10',
  ].join(' '),
  primarySimple: [
    'bg-primary',
    'text-white',
    'disabled:bg-secondary-02',
    'disabled:text-secondary-10',
  ].join(' '),
  primaryOutline: [
    'bg-transparent',
    'text-primary',
    'border',
    'border-primary',
  ].join(' '),
  secondarySimple: [
    'bg-secondary-02',
    'text-secondary-10',
  ].join(' '),
  secondaryOutline: [
    'bg-transparent',
    'text-secondary-10',
    'border',
    'border-secondary-02',
  ].join(' '),
  whiteSimple:[
      'bg-white',
      'text-black'
  ]
};