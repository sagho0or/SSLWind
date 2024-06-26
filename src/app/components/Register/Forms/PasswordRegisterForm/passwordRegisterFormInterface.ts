
import {registerIdentityResponseInterface} from "@/store/auth/register/registerIdentity/registerIdentity.interface"
export interface PasswordRegisterFormInterface{
  mobile: string;
  backFunc: ()=>void;
  registerIdentityResponse: registerIdentityResponseInterface;
}