export interface LabProject {
	slug: string
	url: string
}

// Agregar acá cada propuesta nueva (ver paso 6 de la skill mondi-proposal).
// Archivos esperados en public/lab-previews/: <slug>-thumb.webp, <slug>.mp4 y <slug>.webm
export const labsProjects: LabProject[] = [
	{ slug: 'ransser', url: 'https://labs.mondistudio.com.ar/ransser/' },
	{ slug: 'retiro-yoga-swami', url: 'https://labs.mondistudio.com.ar/retiro-yoga-swami/' },
	{ slug: 'wanaku', url: 'https://labs.mondistudio.com.ar/wanaku/' },
	{ slug: 'dillom', url: 'https://labs.mondistudio.com.ar/dillom/' },
	{ slug: 'pritiado', url: 'https://labs.mondistudio.com.ar/pritiado/' },
]
