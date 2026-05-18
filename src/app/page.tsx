import Box from '@mui/material/Box'
import Navbar from '@/components/layout/Navbar'
import DolarBlueLogger from '@/components/DolarBlueLogger'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import HeroSection from '@/components/sections/HeroSection'
import ServiciosSection from '@/components/sections/ServiciosSection'
import ProcesoSection from '@/components/sections/ProcesoSection'
import PlataformasSection from '@/components/sections/PlataformasSection'
import PreciosSection from '@/components/sections/PreciosSection'
import TestimoniosSection from '@/components/sections/TestimoniosSection'
import SobreMiSection from '@/components/sections/SobreMiSection'
import ContactoSection from '@/components/sections/ContactoSection'

export default function Home() {
	return (
		<>
			<DolarBlueLogger />
			<Navbar />
			<Box component='main' id='main-content'>
				<HeroSection />
				<ServiciosSection />
				<ProcesoSection />
				<PlataformasSection />
				<PreciosSection />
				<TestimoniosSection />
				<SobreMiSection />
				<ContactoSection />
			</Box>
			<Footer />
			<WhatsAppButton />
		</>
	)
}
