import React from 'react'
import {Link} from '@/i18n/navigation';

const NextLink = ({children, href, className , target , scroll}: {children: React.ReactNode, href: string, className?: string , target?: string , scroll?: boolean}) => {
    return (
    <Link href={href} className={className} target={target} scroll={scroll}>
        {children}
    </Link>
  )
}

export default NextLink