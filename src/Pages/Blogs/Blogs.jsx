import React from 'react';

const Blog = () => {
    return (
        <div className='bg-orange-50 p-20'>
            <div className='bg-stone-200 p-5'>
                <h2>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>
                    <br />  Access Token:
                    <br /> - Purpose: Provides limited access rights to protected resources.
                    <br />   - Usage: Sent with requests to authenticate and authorize the client.
                    <br />   - Lifespan: Short-lived and expires after a certain period.
                    <br />   - Storage: Typically stored in memory or as an HTTP-only cookie for secure retrieval during API requests.
                    <br />
                    <br />   Refresh Token:
                    <br />   - Purpose: Obtains a new access token without reauthentication.
                    <br />  - Usage: Exchanged for a fresh access token when the current one expires.
                    <br />  - Lifespan: Longer-lived than access tokens.
                    <br />  - Storage: Stored securely, either as an HTTP-only cookie or in local storage, with appropriate security measures such as encryption or secure storage libraries.
                    <br />
                    <br />  Client-Side Storage:
                    <br />  - Access Tokens: Stored in memory or as an HTTP-only cookie to ensure secure API request handling.
                    <br />  - Refresh Tokens: Stored in long-term storage mechanisms like HTTP-only cookies or local storage, taking care to implement security measures to prevent theft or unauthorized access.

                    <br />  It's important to follow security best practices and consult relevant guidelines for secure handling and storage of access tokens and refresh tokens based on your specific application requirements and architecture.</p>
            </div>
            <div className='bg-stone-200 p-5'>


            </div>
            <div className='bg-stone-200 p-5'>


            </div>
            <div className='bg-stone-200 p-5'>

                
            </div>

        </div>
    );
};

export default Blog;