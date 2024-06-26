export interface OTPFormProps {
  mobile: string;
  password: string;
  loginResponse: {
    token: string,
    type: string
  };
  backFunc: ()=>void
}