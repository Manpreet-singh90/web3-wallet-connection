import React, { memo } from 'react'
import UserProfile from "@/components/molecules/user/profile";

type Props = {}

const Profile = (props: Props) => {
    return (
        <UserProfile />
    )
}

export default memo(Profile)