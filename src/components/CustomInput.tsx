import { type FormEvent, useState } from 'react';
import '../css/CustomInput.css';

type CustomInputProps = {
    placeholder?: string;
};

const STORAGE_KEY = 'compass-learn-email-list';

function getSavedEmails(): string[] {
    try {
        const storedEmails = window.localStorage.getItem(STORAGE_KEY);

        if (!storedEmails) {
            return [];
        }

        const parsedEmails = JSON.parse(storedEmails);

        return Array.isArray(parsedEmails)
            ? parsedEmails.filter((email): email is string => typeof email === 'string')
            : [];
    } catch {
        return [];
    }
}

function CustomInput({ placeholder = 'Enter your email' }: CustomInputProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedEmail = email.trim();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

        if (!isValidEmail) {
            setStatus('Please enter a valid email address.');
            return;
        }

        const savedEmails = getSavedEmails();
        const normalisedEmail = trimmedEmail.toLowerCase();

        if (!savedEmails.includes(normalisedEmail)) {
            const nextEmails = [...savedEmails, normalisedEmail];
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEmails));
        }

        setEmail('');
        setStatus('Thanks! Your email has been saved.');
    };

    return (
        <form className="custom-input" onSubmit={handleSubmit} noValidate>
            <input
                className="email-input"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={placeholder}
                autoComplete="email"
                aria-label="Email address"
            />
            <button type="submit" className="button">Submit</button>
            {status ? <p className="form-status">{status}</p> : null}
        </form>
    );
}

export default CustomInput;
