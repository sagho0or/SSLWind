import Link from "next/link";
import React from "react";
import Icons from "../../../../public/Icons";

export default function Footer() {

    return (
        <div>
            <div className={"container mx-auto grid grid-cols-3 p-5 mt-5"}>
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
                        <p className="text-secondary-10"><Link href={'/faq'}>Faq</Link></p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className={'container mx-auto flex w-full p-2 justify-center'}>
                        <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                            name={'Linkedin'} /></Link></div>
                        <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                            name={'Telegram'} /></Link></div>
                        <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                            name={'Twitter'} /></Link></div>
                        <div className={"p-2 max-h-40 max-w-40"}><Link href={'https://linkedin.com'}><Icons
                            name={'Instagram'} /></Link></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={'w-full bg-secondary-002 py-5'}>
                    <div className="container mx-auto">
                        <p className={'text-secondary-10 text-xs text-center'}>
                            Copy Right!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}