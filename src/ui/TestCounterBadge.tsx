import React from 'react'

export interface TestCounterBadgeProps {
    title: string
    githubUrl: string
    numRepos: number
    numTests: number
    style?: React.CSSProperties
}

const TestCounterBadge: React.FC<TestCounterBadgeProps> = (
    props: TestCounterBadgeProps
) => {
    const { title, githubUrl, numRepos, numTests, style } = props

    return (
        <div
            className="test-counter-badge"
            data-testid="test-counter-badge"
            style={style}
        >
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    src={`https://img.shields.io/badge/${title}-${numRepos}%20repos,%20${numTests}%20tests-brightgreen?logo=github&logoColor=white&labelColor=4c4c4c`}
                    alt={`${title} GitHub - ${numTests} tests`}
                />
            </a>
        </div>
    )
}

export default TestCounterBadge
