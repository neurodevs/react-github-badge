import React from 'react'

import { TestCounterBadgeProps } from '../ui/TestCounterBadge.js'

export let lastFakeTestCounterBadgeProps: TestCounterBadgeProps | undefined

const FakeTestCounterBadge: React.FC<TestCounterBadgeProps> = (
    props: TestCounterBadgeProps
) => {
    lastFakeTestCounterBadgeProps = props

    return (
        <div className="test-counter-badge" data-testid="test-counter-badge" />
    )
}

export default FakeTestCounterBadge
