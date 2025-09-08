import React, { Suspense } from 'react'
import classNames from 'classnames'
import Loading from '../loading'

export type DhSuspenseProps = {
    title?: string,
    className?: string,
    children: React.ReactNode
}

const DhSuspense: React.FC<DhSuspenseProps> = props => {
    const { title, className, children } = props

    return (
        <Suspense fallback={
            <div className={classNames('flex justify-center', className)}>
                <Loading size="medium">{title || '加载中...'}</Loading>
            </div>
        }>
            {children}
        </Suspense>
    )
}

export default React.memo(DhSuspense)