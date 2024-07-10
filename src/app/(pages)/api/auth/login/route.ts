
import { LoginResponse } from '@/app/components/Login/Forms/OtpForm/OTPFormProps.interface';
import { UserDto, UserRole } from '@/app/components/Login/user.class';
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const data : LoginResponse = { 
            otpExpiresIn: 60,
            trackingId: 'abc123',
            otpRetryCount: 3
        }
        res.status(200).json({ message: 'Logged in successfully', data});
    
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }

}

