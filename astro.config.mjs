// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mewgenicsguide.online',
	integrations: [
		starlight({
			title: 'Mewgenics Guide 2026: Tips, Breeding & Classes Wiki',
			description: 'mewgenics guide wiki for breeding mechanics, classes & skills, and furniture dataThe most comprehensive Mewgenics guide. Updated daily. Master breeding mechanics, classes, and survival strategies with our database.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Beginner Guide', link: '/guides/beginner' },
						{ label: 'Breeding Mechanics', link: '/guides/breeding' },
					],
				},
				{
					label: 'Database',
					items: [
						{ label: 'Classes & Skills', link: '/database/classes' },
						{ label: 'Furniture List', link: '/database/furniture' },
					],
				},
			],
		}),
	],
});
