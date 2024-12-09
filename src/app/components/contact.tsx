import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Contact = () => (
    <div>
        <h4>These are the best ways to get in touch with me:</h4>
        <div>
            <h5>Email Inquiries:</h5>
            <Link href="https://www.instagram.com/serve6dots/" target="_blank">
                info@serve6dots.com
            </Link>
        </div>

        <div>
            <h5>Message me on:</h5>
            <Link href="https://www.instagram.com/serve6dots/" target="_blank">
                <Image
                    className="hover:scale-110"
                    src="/insta.gif"
                    alt="instagram image"
                    width={30}
                    height={30}
                    unoptimized
                />
            </Link>
        </div>
    </div>
);