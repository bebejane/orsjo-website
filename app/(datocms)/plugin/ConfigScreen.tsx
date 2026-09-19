'use client';

import { RenderConfigScreenCtx } from 'datocms-plugin-sdk';
import { Canvas, ContextInspector, SwitchField } from 'datocms-react-ui';
import 'datocms-react-ui/styles.css';

type PropTypes = {
	ctx: RenderConfigScreenCtx;
};

export function ConfigScreen({ ctx }: PropTypes) {
	return (
		<Canvas ctx={ctx}>
			<span>Örsjö plugin settings</span>
		</Canvas>
	);
}
