// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
	dsn: 'https://594ad4199aeee380b18fc2cf174fae8b@o4510153832267776.ingest.de.sentry.io/4510159366389840',

	// Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
	tracesSampleRate: 1,
	// Enable logs to be sent to Sentry
	enableLogs: true,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
