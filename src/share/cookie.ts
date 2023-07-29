export function getCookie(name: string): string | null {
  const cookieValue = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${encodeURIComponent(name)}=`));

  if (cookieValue) {
    return decodeURIComponent(cookieValue.split('=')[1]);
  }

  return null; // Return null if the cookie is not found
}

export function setSessionCookie(name: string, value: string | undefined) {
  if (!name || !value) {
    return;
  }
  // Calculate the cookie expiration date (session cookie)
  const expirationDate = new Date();
  expirationDate.setMinutes(expirationDate.getMinutes() + 30); // Set the expiration time to 30 minutes (adjust as needed)

  // Create the cookie string
  const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expirationDate.toUTCString()};path=/`;

  // Set the cookie
  document.cookie = cookieString;
}

export function deleteCookie(name: string) {
  document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}
