export interface LabProject {
	slug: string
	url: string
}

// Agregar acá cada propuesta nueva (ver paso 6 de la skill mondi-proposal).
// Archivos esperados en public/lab-previews/: <slug>-thumb.webp, <slug>.mp4 y <slug>.webm
export const labsProjects: LabProject[] = [
	{ slug: 'quimica-dalton', url: 'https://labs.mondistudio.com.ar/quimica-dalton/' },
	{ slug: 'ransser', url: 'https://labs.mondistudio.com.ar/ransser/' },
	{ slug: 'retiro-yoga-swami', url: 'https://labs.mondistudio.com.ar/retiro-yoga-swami/' },
	{ slug: 'mg-customs', url: 'https://labs.mondistudio.com.ar/mg-customs/' },
	{ slug: 'wanaku', url: 'https://labs.mondistudio.com.ar/wanaku/' },
	{ slug: 'impluvium', url: 'https://labs.mondistudio.com.ar/impluvium/' },
	{ slug: 'dillom', url: 'https://labs.mondistudio.com.ar/dillom/' },
	{ slug: 'pritiado', url: 'https://labs.mondistudio.com.ar/pritiado/' },
	{ slug: 'mondi', url: 'https://www.mondistudio.com.ar/' },
]
