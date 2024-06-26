export default function errorConverterToText(errorNumber: number, errorMessage: string): string {
  switch (errorNumber){
    case 80002: //token required
      return 'شما ابتدا باید وارد شوید'
    case 401: //token required
      return 'شما ابتدا باید وارد شوید'
    case 2242210023: //The username or password is invalid
      return 'نام کاربری یا پسورد صحیح نیست.'
    case 2242210050: //Google authenticator code is invalid
      return 'کد ارسالی صحیح نیست.'
    case 2242210003: //The user already exists
      return 'حساب کاربری وجود دارد.'
    case 2242210028: //The Referral code is not valid
      return 'کد معرف صحیح نیست.'
    case 2240410001: //The user doesn't exist
      return 'کاربر وجود ندارد.'
    case 2242210002: //The user already exists
      return 'کاربر وجود دارد.'
    case 2250310004: //Unable to send SMS
      return 'پیامک ارسال نشد.'
    case 2242210005: //The password is weak
      return 'پسورد قابل قبول نیست.'
    case 2242210006: //The OTP code is not valid
      return 'کد ارسالی معتبر نیست.'
    case 2242210007: //The national code doesn't match the mobile number
      return 'کد ملی برای شماره موبایل ارسالی نیست.'
    case 2242210008: //The token is invalid
      return 'توکن ارسالی معتبر نیست.'
    case 2242210009: //One or more fields are empty
      return 'تعدادی از ورودی ها مقدار ندارند.'
    case 2242210010: //The user is not verified
      return 'کاربر احراز هویت نشده است.'
    case 2242210011: //The user is verified
      return 'کاربر احراز هویت شده است.'
    case 2242210012: //The password is incorrect
      return 'کلمه عبور اشتباه است.'
    case 2242210013: //The password is the same as the previous one
      return 'کلمه عبور با کلمه عبور قبلی یکسان است.'
    case 2242210014: //Email address is invalid
      return 'آدرس ایمیل معتبر نیست.'
    case 2250310015: //Server error
      return 'مشکل داخلی سرور.'
    case 2250310016: //Unable to send Email
      return 'مشکل در ارسال ایمیل.'
    case 2250310017: //The Email already exists
      return 'ایمیل قبلا ثبت شده است.'
    case 2250310018: //Unable to add Referral code
      return 'کدد معرف معتبر نیست.'
    case 2242210019: //The card number is not valid
      return 'شماره کارت معتبر نیست.'
    case 2242210020: //The google authenticator code is invalid
      return 'کد Google Authenticator معتبر نیست.'
    case 2240410021: //The google authenticator seed is not generated
      return 'مشکل در کد Google Authenticator.'
    case 2242210022: //The Referral code has assigned before
      return 'کد معرف قبلا استفاده شده است.'
    case 2242210025: //The recaptcha token is invalid
      return 'ریکپچا صحیح نیست.'
    case 2242210024: //Passwords do not match
      return 'پسورد صحیح نیست.'
    case 2242210026: //Make sure mobile number has exactly 11 digits
      return 'تعداد ارقام موبایل ۱۱ نیست.'
    case 2242210027: //The national id is not valid
      return 'کد ملی معتبر نیست.'
    case 2250310029: //Recaptcha server error
      return 'مشکل در سرور ریکپچا.'
    case 2250310030: //Finnotech service is down
      return 'سرویس فینوتک پایین است.'
    case 2250310031: //Unable to add card
      return 'مشکل در اضافه کردن کارت.'
    case 2242210034: //The Referral code has expired
      return 'کد معرف منقضی شده است.'
    case 2242210035: //The maximum number of otp trials exceeded
      return 'حداکثر تعداد OTP ارسال شده است.'
    case 2240010036: //Unable to validate social login
      return 'نمیتوان لاگین سوشال را احراز کرد.'
    case 2240010037: //Wrong issuer
      return 'صادر کننده اشتباه.'
    case 2250310038: //Faraboom service is down
      return 'سرویس فرابوم در دسترس نیست.'
    case 2242210039: //Input parameters is not valid
      return 'پارامترهای ورودی صحیح نیستند.'
    case 2220010040: //The birth date does not match the national id
      return 'تاریخ تولد یا شماره ملی صحیح نیستند.'
    case 2250310041: //User Account service is down
      return 'سرویس کاربری از دسترس خارج است.'
    case 2242210042: //This user has already registered
      return 'کاربر قبلا ثبت نام کرده است.'
    case 2250310043: //The user has not passed the first step of registration
      return 'کاربر اولین مرحله ثبت نام را انجام نداده است.'
    case 2250310044: //You have already started your registration with this mobile number
      return 'شما روند ثبت نام را با این شماره موبایل اغاز کردید و باید تا انتهای پروسه با همان شماره موبایل باشید.'
    case 2250310045: //This user has already registered.so
      return 'این کاربر قبلا ثبت نام کرده است.'
    case 2240410046: //OTP not found
      return 'کد OTP وجود ندارد.'
    case 2242210047: //Unable to activate google authenticator
      return 'عدم توانایی فعال سازی Google Authentication.'
    case 2250310049: //The qrcode data of google authenticator has not been generated
      return 'کد QrCode برای GA ساخته نشده است.'
    case 2242210051: //Unable to deactivate google authenticator
      return 'نمیتوان GA را غیرفعال کرد.'
    case 2250310053: //Unable to update Email because your registration is not complete
      return 'به دلیل اینکه پروسه ثبت نام به اتمام نرسیده است نمیتوان ایمیل را عوض کرد.'
    case 22403310054: //user is block
      return 'کاربر بلاک است.'
    case 22400310055: //The user has an active api key
      return 'کاربر کلید Api فعال دارد.'
    case 22400310056: //API key dose not exist
      return 'کلید Api وجود ندارد.'
    case 22400310058: //It is not possible to use two-factor authentication
      return 'امکان احراز هویت دو مرحله ای وجود ندارد چون هنوز ایمیل فعال نشده است .'
    case 22400310059: //It is not possible to use two-factor authentication with Google Authenticator
      return 'امکان احراز هویت دو مرحله ای با GA  وجود ندارد.'
    case 22400310060: //The age of the user is less than 18 years
      return 'سن کاربر کمتر از ۱۸ سال است.'
    case 22400310061: //discount code not found
      return 'کد تخفیف یافت نشد.'
    case 22400310064: //You can not change your phone number
      return 'شما نمیتوانید شماره موبایل را عوض کنید.'
    case 22400310063: //Your authentication process is being checked
      return 'پروسه احراز هویت شما بررسی شد.'
    case 22400310065: //Set email first
      return 'ابتدا ایمیل را ثبت کنید.'
    case 22400310066: //User has not Referral code
      return 'کاربر کد معرفی ندارد.'
    case 22400310067: //Uid service is down
      return 'سرویس UID پایین است.'
    case 22400310068: //Google authenticator is already active
      return 'گوگل قبلا فعال شده است.'
    case 22400310069: //Google authenticator is already deactivate
      return 'گوگل قبلا غیرفعال شده است.'
    case 22400310070: //Google authenticator method is already in used
      return 'گوگل قبلا استفاده شده است.'
    case 22400310071: //The user does not have a phone number
      return 'کاربر شماره موبایل ندارد.'
    case 22400310072: //Birthdate is not valid
      return 'تاریخ تولد معتبر نیست.'
    case 22400310073: //The user already verified
      return 'کاربر قبلا احراز هویت شده است.'
    case 22400310074: //The status cannot be changed
      return 'استتوس را نمیتوان تغییر داد.'
    case 22400310062: //invalid discount code
      return 'کد تخفیف نامعتبر است.'
    case 5040010005: //invalid discount code
      return 'موجودی کیف پول کافی نیست.'
    case 3240050019: //The user`s wallet balance is not enough
      return 'موجودی پول کافی نیست.'
    default:
      return errorMessage
  }
}