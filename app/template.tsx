'use client';

import useDownloadTracker from '@lib/hooks/useDownloadTracker';

export default function Template({ children }) {
	useDownloadTracker();
	return <>{children}</>;
}
