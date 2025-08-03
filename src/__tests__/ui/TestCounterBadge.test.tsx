import AbstractSpruceTest, { generateId, test } from '@sprucelabs/test-utils'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import TestCounterBadge from '../../ui/TestCounterBadge'

export default class TestCounterBadgeTest extends AbstractSpruceTest {
    private static badge: HTMLElement
    private static anchor: HTMLAnchorElement
    private static img: HTMLImageElement

    protected static async beforeEach() {
        await super.beforeEach()

        this.render()
        this.loadElements()
    }

    @test()
    protected static async rendersTestCounterBadge() {
        expect(this.badge).toBeInTheDocument()
    }

    @test()
    protected static async rendersBadgeWithId() {
        expect(this.badge).toHaveAttribute('id', 'test-counter-badge')
    }

    @test()
    protected static async rendersBadgeWithAnchorTag() {
        expect(this.anchor).toBeInTheDocument()
    }

    @test()
    protected static async rendersAnchorTagWithCorrectHref() {
        expect(this.anchor).toHaveAttribute('href', this.githubUrl)
    }

    @test()
    protected static async rendersAnchorTagWithCorrectTarget() {
        expect(this.anchor).toHaveAttribute('target', '_blank')
    }

    @test()
    protected static async rendersAnchorTagWithCorrectRel() {
        expect(this.anchor).toHaveAttribute('rel', 'noopener noreferrer')
    }

    @test()
    protected static async rendersAnchorTagWithCorrectStyles() {
        expect(this.anchor).toHaveStyle({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        })
    }

    @test()
    protected static async rendersBadgeWithImageTag() {
        expect(this.img).toBeInTheDocument()
    }

    @test()
    protected static async rendersImgTagWithCorrectSrc() {
        expect(this.img).toHaveAttribute('src', this.badgeImageUrl)
    }

    @test()
    protected static async rendersImgTagWithCorrectAlt() {
        expect(this.img).toHaveAttribute(
            'alt',
            `${this.title} GitHub - ${this.numTests} tests`
        )
    }

    @test()
    protected static async passesStylePropToBadge() {
        expect(this.badge).toHaveStyle({
            color: 'rgb(255, 0, 0)',
        })
    }

    private static randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    private static title = generateId()
    private static githubUrl = generateId()
    private static numRepos = this.randomInt(1, 10)
    private static numTests = this.randomInt(1, 10)

    private static badgeImageUrl = `https://img.shields.io/badge/${this.title}-${this.numRepos}%20repos,%20${this.numTests}%20tests-brightgreen?logo=github&logoColor=white&labelColor=4c4c4c`

    private static style: React.CSSProperties = {
        color: 'red',
        backgroundColor: 'blue',
    }

    private static loadElements() {
        this.badge = screen.getByTestId('test-counter-badge')
        this.anchor = this.badge.querySelector('a') as HTMLAnchorElement
        this.img = this.anchor.querySelector('img') as HTMLImageElement
    }

    private static render() {
        render(
            <TestCounterBadge
                title={this.title}
                githubUrl={this.githubUrl}
                numRepos={this.numRepos}
                numTests={this.numTests}
                style={this.style}
            />
        )
    }
}
