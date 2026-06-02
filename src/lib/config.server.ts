// Server-side configuration
// Use environment variables for sensitive data

export const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  environment: process.env.NODE_ENV || 'development',
  debug: process.env.DEBUG === 'true',
};

export function getApiUrl(): string {
  return config.apiUrl;
}

export function isProduction(): boolean {
  return config.environment === 'production';
}

export function isDevelopment(): boolean {
  return config.environment === 'development';
}