// MetaMask and Web3 Integration
document.getElementById('connect-wallet').addEventListener('click', connectWallet);

// Guest Option - Bypass Login
document.getElementById('play-as-guest').addEventListener('click', playAsGuest);

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request MetaMask accounts
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];

            // Sign-in to Auth0 with MetaMask wallet address
            await loginWithMetaMask(walletAddress);
            
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask to continue.');
    }
}

// Auth0 login using MetaMask wallet address
async function loginWithMetaMask(walletAddress) {
    try {
        const authResult = await auth0Client.loginWithRedirect({
            redirect_uri: window.location.origin,
            login_hint: walletAddress // Use the MetaMask wallet address as the login hint
        });

        if (authResult) {
            window.location.href = "main-game.html"; // Redirect after successful login
        }
    } catch (error) {
        console.error("Auth0 Login Error:", error);
    }
}

// Play as Guest - Skip MetaMask and Auth0 login
function playAsGuest() {
    // Redirect to the game page without authentication
    window.location.href = "main-game.html?guest=true";
}
