import React from 'react'
import { TestCounterBadgeProps } from '../ui/TestCounterBadge'

export let lastFakeTestCounterBadgeProps: TestCounterBadgeProps | undefined

export const FakeTestCounterBadge: React.FC<TestCounterBadgeProps> = (
    props: TestCounterBadgeProps
) => {
    lastFakeTestCounterBadgeProps = props

    return (
        <div className="test-counter-badge" data-testid="test-counter-badge" />
    )
}
