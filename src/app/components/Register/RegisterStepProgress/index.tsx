import {RegisterStepProgressInterface} from "@/app/components/Register/RegisterStepProgress/registerStepProgress.interface";
import Icons from "../../../../../public/Icons";


export default function RegisterStepProgress(props: RegisterStepProgressInterface) {
  return (
    <div>
      <ol className="flex items-center w-full max-w-sm m-auto mt-10">
        <li
          className={`flex flex-1 items-center text-primary
        after:content-[''] after:w-full after:h-1 after:inline-block
        after:bg-gradient-to-l after:from-primary ${(props.step > 1) ? 'after:to-primary' : 'after:to-secondary-02'} `}>
        <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-primary-01 rounded-full ">
          <span
            className={`flex items-center justify-center 
            ${(props.step == 1) ? 'w-9 h-9 ' : 'w-12 h-12'}
            bg-primary rounded-full flex-shrink-0`}>
              <Icons name={'register-otp-done'} />
          </span>
        </span>
        </li>
        <li
          className={`flex flex-1 items-center
        after:content-[''] after:w-full after:h-1 after:inline-block
        after:bg-gradient-to-l 
        ${(props.step == 1) ? 'after:from-secondary-02 after:to-secondary-02' :
            (props.step == 2) ? 'after:from-primary after:to-secondary-02' :
              'after:from-primary after:to-primary'}`}>
        <span className={`flex items-center justify-center flex-shrink-0 
        ${(props.step < 2) ? 'w-9 h-9 ' : 'w-12 h-12'}
         bg-primary-01 rounded-full`}>
          <span
            className={`flex items-center justify-center 
            ${(props.step <= 2) ? 'w-9 h-9 ' : 'w-12 h-12'}
            ${(props.step < 2 ? 'bg-secondary-02' : 'bg-primary')}
             rounded-full flex-shrink-0`}>
            {
              (props.step == 1) ?
                <Icons name={'register-identity'} /> :
                <Icons name={"register-identity-done"} />
            }

          </span>
        </span>
        </li>
        <li className="flex flex-none items-center ">
        <span className={`flex items-center justify-center flex-shrink-0 
         ${(props.step < 3) ? 'w-9 h-9 ' : 'w-12 h-12'}
         bg-primary-01 rounded-full `}>
          <span
            className={`flex items-center justify-center 
            ${(props.step <= 3) ? 'w-9 h-9 ' : 'w-12 h-12'}
            ${(props.step < 3) ? 'bg-secondary-02' : 'bg-primary'}
             rounded-full flex-shrink-0`}>
            {
              (props.step <= 2) ?
                <Icons name={'register-password'} /> :
                <Icons name={"register-password-done"} />
            }
          </span>
        </span>
        </li>
      </ol>
      <ol className="flex items-center w-full max-w-[25rem] m-auto mt-4 justify-between">
        <li>
          <span className={`text-primary`}>Confirmation Code</span>
        </li>
        <li>
          <span className={`${(props.step == 1)?'text-secondary-10':'text-primary'}`}>Personal Information</span>
        </li>
        <li>
          <span className={`${(props.step <= 2)?'text-secondary-10':'text-primary'}`}>Password</span>
        </li>
      </ol>
    </div>


  );
}