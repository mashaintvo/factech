import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

type WarningProps = {
    title?: string;
    message?: string;
    buttonText?: string;
    onClose?: () => void;
};

const NewWarning: React.FC<WarningProps> = ({
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

    return (
        <div className="o-warning-overlay" onClick={handleOverlayClick}>
            <div className="o-warning-block">
                <div className="o-warning-block__icon">
                    <img
                        src="/assets/images/icons/icon--warning.svg"
                        alt="Warning icon"
                        className="o-warning-block__icon-img"
                    />
                </div>

                <button className="o-warning-block__close" aria-label="Close warning" onClick={onClose}>
                    ✕
                </button>
                <h1 className="o-warning-block__title a-text-style-1">{title}</h1>
                <div className="o-warning-block__message">
                    <p className="a-text-note-grey-3">{message}</p>
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
};

export default meta;
type Story = StoryObj<typeof NewWarning>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(true);
        return (
            <>
                {isOpen && (
                    <NewWarning
                        title="Warning!"
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt."
                        buttonText="OKE"
                        onClose={() => setIsOpen(false)}
                    />
                )}
                <button onClick={() => setIsOpen(true)}>Mostrar warning</button>
            </>
        );
    },
};
