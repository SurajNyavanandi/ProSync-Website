import crypto from 'crypto';

/**
 * Constant-time comparison between two strings to prevent timing attacks.
 */
export function verifyPassword(inputPassword, correctPassword) {
  if (typeof inputPassword !== 'string' || typeof correctPassword !== 'string') {
    return false;
  }
  const inputBuffer = Buffer.from(inputPassword, 'utf8');
  const correctBuffer = Buffer.from(correctPassword, 'utf8');

  if (inputBuffer.length !== correctBuffer.length) {
    crypto.timingSafeEqual(inputBuffer, inputBuffer);
    return false;
  }
  return crypto.timingSafeEqual(inputBuffer, correctBuffer);
}

/**
 * Creates an HMAC-SHA256 signed admin token valid for 8 hours.
 */
export function signAdminToken(username, secret) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + 8 * 60 * 60; // 8 hours
  const payload = Buffer.from(
    JSON.stringify({ sub: username, role: 'admin', exp })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${payload}`)
    .digest('base64url');

  return `${header}.${payload}.${signature}`;
}

/**
 * Verifies HMAC-SHA256 admin token in constant time and checks expiration.
 */
export function verifyAdminToken(token, secret) {
  if (!token || typeof token !== 'string') return null;

  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [header, payload, signature] = parts;
  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${payload}`)
    .digest('base64url');

  const sigBuf = Buffer.from(signature, 'utf8');
  const expSigBuf = Buffer.from(expectedSig, 'utf8');

  if (sigBuf.length !== expSigBuf.length) {
    return null;
  }
  if (!crypto.timingSafeEqual(sigBuf, expSigBuf)) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (data.exp && data.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }
    return data;
  } catch {
    return null;
  }
}

