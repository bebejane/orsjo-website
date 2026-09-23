import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Next 16.3 stacks ~11 'close' listeners per ServerResponse (upstream vercel/next.js#96973),
    // exceeding Node's default cap of 10 and triggering a harmless MaxListenersExceededWarning.
    const { ServerResponse } = await import('node:http');
    ServerResponse.prototype.setMaxListeners(30);

    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
