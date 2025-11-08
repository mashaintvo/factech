import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

type WarningType = 'warning' | 'info' | 'error';

type WarningProps = {
    type?: WarningType;
    title?: string;
    message?: string;
    buttonText?: string;
    onClose?: () => void;
};

const NewWarning: React.FC<WarningProps> = ({
    type = 'warning',
    title = 'Warning!',
    message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText = 'OK',
    onClose,
}) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };

    const iconMap: Record<WarningType, string> = {
        warning: '/assets/images/icons/icon--warning.svg',
        info: '/assets/images/icons/icon--information.svg',
        error: '/assets/images/icons/icon--error.svg',
    };

    const iconSrc = iconMap[type];

    return (
        <div className={`o-warning-overlay o-warning-overlay--${type}`} onClick={handleOverlayClick}>
            <div className={`o-warning-block o-warning-block--${type}`}>
                <div className="o-warning-block__icon">
                    <img src={iconSrc} alt={`${type} icon`} className="o-warning-block__icon-img" />
                </div>

                <button className="o-warning-block__close" aria-label="Close warning" onClick={onClose}>
                    ✕
                </button>

                <h1 className="o-warning-block__title a-text-style-1">{title}</h1>

                <div className="o-warning-block__message">
                    <p>{message}</p>
                    <button className="o-warning-block__button">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

const meta: Meta<typeof NewWarning> = {
    title: 'Components/User/NewWarning',
    component: NewWarning,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['warning', 'info', 'error'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof NewWarning>;

export const Default: Story = {
    args: {
        type: 'warning',
        title: 'Warning!',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Nulla quis sem at nibh elementum imperdiet.',
        buttonText: 'OKE',
    },
};

export const Info: Story = {
    args: {
        type: 'info',
        title: 'Information',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Nulla quis sem at nibh elementum imperdiet.',
        buttonText: 'GOT IT',
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        title: 'Error!',
        message: 'Something went wrong. Please try again later.',
        buttonText: 'RETRY',
    },
};
