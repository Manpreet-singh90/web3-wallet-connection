import React, { memo } from 'react'
import LoginForm from '@/components/molecules/auth/login/form'

type Props = {}

const LoginWrapper = (props: Props) => {
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default memo(LoginWrapper)