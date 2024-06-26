import Link from "next/link";
import React from "react";
import Icons from "../../../../public/Icons";

export default function Footer() {

    return (
        <div>
            <div className={"grid grid-cols-2 p-20 "}>
                <div className="col-span-1 ">
                    <h3 className={'font-bold py-5'}>About Us</h3>
                    <div>
                        <p className="text-secondary-10"><Link href={'/about'}>About Us</Link></p>
                        <p className="text-secondary-10"><Link href={'/about'}>Contact Us</Link></p>
                        <p className="text-secondary-10"><Link href={'/about'}>Rules</Link></p>
                    </div>
                </div>
                <div className="col-span-1 ">
                    <h3 className={'font-bold py-5'}>More Information</h3>
                    <div>
                        <p className="text-secondary-10"><Link href={'/about'}>How to register</Link></p>
                        <p className="text-secondary-10"><Link href={'/faq'}>Faq</Link></p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 p-20">
                <div className={'bg-secondary-002 py-5'}>
                    <p className={'text-secondary-10 text-xs'}>
                        Copy Right!
                    </p>
                </div>
                <div className={'flex'}>
                    <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                        name={'Linkedin'}/></Link></div>
                    <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                        name={'Telegram'}/></Link></div>
                    <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                        name={'Twitter'}/></Link></div>
                    <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                        name={'Instagram'}/></Link></div>
                </div>
                <div className={'m-auto'}><Link href={'https://linkedin.com'}><Icons name={'AzkiBit'}/></Link></div>
            </div>
        </div>
    );

}