import type { ReactNode } from 'react';
import { styled } from '../../../styled-system/jsx'

const StyledBadge = styled('div', {
    base: {
        color: 'text',
        borderColor: 'java.400',
        border: 'solid 1px',
        backgroundColor: 'java.100',
        fontSize: {base:'sm'},
        width: 'fit-content',
        padding: {base: '2px 6px'},
        borderRadius: '8px'
    },
    variants: {
        variant: {
            neutral: {
                borderColor: 'neutral.500',
                backgroundColor: 'neutral.50'
            },
            success: {
                borderColor: 'success',
                backgroundColor: 'green.50',
                color: 'green.800',
            },
            warning: {
                borderColor: 'warning',
                backgroundColor: 'gold.50',
                color: 'gold.800'
            },
            error: {
                borderColor: 'error',
                backgroundColor: 'red.50',
                color: 'red.800'
            },
        },
        size: {
            sm: { fontSize: 'sm', padding: '2px 6px' },
            md: { fontSize: 'md', padding: '4px 10px' },
            lg: { fontSize: 'lg', padding: '6px 16px' },
        }
    }
})

type BadgeProps = {
    children: ReactNode;
    variant?: "success" | "neutral" | "error" | "warning" 
    size?: "sm" | "md" | "lg";
}
const Badge = (props : BadgeProps) => {
    const {children } = props;
    return <StyledBadge {...props}>{children}</StyledBadge>
}

export default Badge