"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


import { useAppContext } from '@/context/AppContext';
import { assets } from "@/assets/assets";

const Devcard = ({dev}) => {
    
    const { router,currentUser } = useAppContext();
    const avatars = [assets.avatar1, assets.avatar2, assets.avatar3, assets.avatar4, assets.avatar5, assets.avatar6, assets.avatar7, assets.avatar8, assets.avatar9, assets.avatar10];

    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        setAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }, []);

    return (
        <div className="dev-card">
            <div className="dev-banner">
                {avatar && <Image src={avatar} alt="Developer" width={100} height={100} className="dev-avatar" />}
            </div>
            <div className="dev-info">
                <h3 className="dev-name">{`${dev.firstName} ${dev.lastName}`}</h3>
                <div className="dev-title">{dev?.userInfo?.careerInterest[0]}</div>
                <div className="dev-tags">
                    <span className="dev-tag">{dev?.skill?.skills[0]}</span>
                    <span className="dev-tag">{dev?.skill?.skills[1]}</span>
                    <span className="dev-tag">{dev?.skill?.skills[2]}</span>
                </div>
                <div onClick={() => { router.push('/developer/' + dev._id); scrollTo(0, 0) }} className="btn">View Profile</div>
            </div>
        </div>
    );

}

export default Devcard;