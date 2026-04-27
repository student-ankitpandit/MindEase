import crypto from "crypto";

let ENCRYPTION_KEY: Buffer | null = null;

function getEncryptionKey(): Buffer {
    if (ENCRYPTION_KEY) return ENCRYPTION_KEY;

    const envKey = process.env.ENCRYPTION_KEY;

    if (envKey && Buffer.from(envKey, 'hex').length === 32) {
        ENCRYPTION_KEY = Buffer.from(envKey, 'hex');
    } else if (envKey && Buffer.from(envKey, 'utf8').length === 32) {
        ENCRYPTION_KEY = Buffer.from(envKey, 'utf8');
    } else {
        const secret = envKey || process.env.SESSION_SECRET || process.env.JWT_SECRET || "default_fallback_secret_do_not_use_in_prod";
        ENCRYPTION_KEY = crypto.createHash("sha256").update(secret).digest();
    }
    return ENCRYPTION_KEY;
}

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // 12 bytes is standard for GCM

export function encryptMessage(text: string): string {
    if (!text) return text;
    try {
        const iv = crypto.randomBytes(IV_LENGTH);
        const cipher = crypto.createCipheriv(ALGORITHM, getEncryptionKey(), iv);
        
        let encrypted: string = cipher.update(text, "utf8", "base64");
        encrypted += cipher.final("base64");
        const authTag = cipher.getAuthTag().toString("base64");
        
        // Format: iv:authTag:encryptedData
        return `${iv.toString("base64")}:${authTag}:${encrypted}`;
    } catch (e) {
        console.error("Encryption error:", e);
        return text; // Fallback to plaintext if encryption fails
    }
}

export function decryptMessage(encryptedText: string): string {
    if (!encryptedText || !encryptedText.includes(":")) {
        // If it doesn't have the colon format, it's likely plaintext (old message)
        return encryptedText;
    }
    
    try {
        const parts = encryptedText.split(":");
        if (parts.length !== 3) return encryptedText;

        const ivBase64 = parts[0] as string;
        const authTagBase64 = parts[1] as string;
        const encryptedDataBase64 = parts[2] as string;

        const iv = Buffer.from(ivBase64, "base64" as BufferEncoding);
        const authTag = Buffer.from(authTagBase64, "base64" as BufferEncoding);
        
        const decipher = crypto.createDecipheriv(ALGORITHM, getEncryptionKey(), iv);
        decipher.setAuthTag(authTag);
        
        const decrypted = decipher.update(encryptedDataBase64, "base64" as crypto.Encoding, "utf8" as crypto.Encoding) + decipher.final("utf8");
        
        return decrypted;
    } catch (e) {
        // If decryption fails (e.g. key changed or corrupt data), return the original
        // This prevents the whole chat from crashing
        console.error("Decryption error:", e);
        return encryptedText;
    }
}
