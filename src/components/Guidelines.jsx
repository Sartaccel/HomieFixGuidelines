import React from 'react';

const Guidelines = () => {
    return (
        <div className="container my-5">
            <h2 className="mb-4">Account Deletion Guidelines</h2>

            <h5>Steps to Delete Your Account:</h5>
            <ol className="mb-4">
                <li>Open the HomieFix App</li>
                <li>Go to <strong>Profile</strong></li>
                <li>Tap on <strong>Settings</strong></li>
                <li>Select <strong>Delete Account</strong></li>
                <li>Choose a reason for deletion</li>
                <li>Click the <strong className="text-danger">Delete Account</strong> button</li>
            </ol>

            <h5>Account Deletion Policy:</h5>
            <p>
                You may choose to delete your account on the HomieFix Platform 
                <a className="text-decoration-none" href="https://play.google.com/store/apps/details?id=com.homiefix.homiefix_application" target="_blank" rel="noopener noreferrer"> HomieFix mobile application</a> at any time. To request account deletion, please send an email to 
                <strong> contact@homiefix.in</strong>.
            </p>

            <div>
                <p>Once your request is processed:</p>
                <ul>
                    <li>You will no longer be able to access your account or use any services on the HomieFix Platform.</li>
                    <li>We delete your personal information so that it cannot be linked back to you.</li>
                    <li>However, in compliance with our policies or legal requirements, some information may be retained even after account deletion.</li>
                </ul>
            </div>

            <p>
                Please note that terms not specifically defined here will carry the meaning assigned to them in our <a className='text-decoration-none' href="https://sartaccel.github.io/Homiefix_privacy_web/">Privacy Policy</a>.
            </p>
        </div>
    );
}

export default Guidelines;
