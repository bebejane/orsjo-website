import * as Blocks from '@/components/blocks';

export type BlockProps = { data: any; onClick?: (id: string) => void; first?: boolean };

export default function Block({ data, onClick, first = false }: BlockProps) {
	const key = data.__typename?.replace('Record', '') as keyof typeof Blocks;

	const BlockComponent = Blocks[key];

	if (!BlockComponent) {
		console.warn(`Block ${key} not found`);
		return null;
	}

	return <BlockComponent data={data} onClick={onClick} first={first} />;
}
