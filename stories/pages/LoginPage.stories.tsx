import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import TextInput from '~/modules/user/shared/components/form/TextInput';
import SubmitButton from '~/modules/user/shared/components/form/SubmitButton';
import ArrowRighticon from '~/modules/user/shared/components/icon/ArrowRighticon';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const LoginPage = () => {
    const { t } = useTranslation();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('invalid_email').required(t('fields.email.error')),
        password: Yup.string().required(t('fields.password.error')),
    });

    return (
        <div className="o-login-block">
            <div className="o-login-block__login-wrapper">
                <div className="o-login-block__login-inner">
                    <div className="o-login-block__input-wrapper">
                        <h1 className="a-text-style-1-b">{t('login.title')}</h1>
                    </div>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => console.log(values)}
                    >
                        <Form className="o-login-block__form">
                            <div className="o-login-block__text-wrapper">
                                <p className="o-login-block__text">{t('login.text_1')}</p>
                                <p className="o-login-block__text">{t('login.text_2')}</p>
                            </div>

                            <div className="o-login-block__input-wrapper">
                                <TextInput
                                    name="email"
                                    label={t('fields.email.label')}
                                    type="email"
                                    placeholder={t('fields.email.label')}
                                    className="o-login-block__input"
                                />
                            </div>

                            <div className="o-login-block__input-wrapper">
                                <TextInput
                                    name="password"
                                    label={t('fields.password.label')}
                                    type="password"
                                    placeholder="••••••••"
                                    className="o-login-block__input"
                                    link={{ label: t('login.recover_password'), to: '/forgot-password' }}
                                />
                            </div>

                            <SubmitButton label={t('login.action')} className="a-button--fluid" />
                        </Form>
                    </Formik>

                    <div>
                        <p className="o-login-block__note">{t('login.register_link.title')}</p>
                        <Link to="/register" className="o-login-block__link a-text-link-small-primary">
                            <ArrowRighticon className="o-login-block__icon" />
                            <span>{t('login.register_link.action')}</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className="o-login-block__image"
                style={{
                    backgroundImage: "url('/assets/images/forms/wellbeing.jpg')",
                }}
            />
        </div>
    );
};

const meta = {
    title: 'Pages/LoginPage',
    component: LoginPage,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => console.log('Submitted!', values)}
                >
                    <Story />
                </Formik>
            </MemoryRouter>
        ),
    ],
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
