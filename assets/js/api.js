
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/EvanildoBatista/js-developer-portfolio/refs/heads/develop/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
