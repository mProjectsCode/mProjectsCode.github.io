import SwirlyJulia3D from '../img/art/julia_3d_2/julia_3d_2_1920x1080.png';
import WhiteLines from '../img/art/white_lines/white_lines_1920x1080.png';
import SpikyLandscape from '../img/art/spikes_2/spikes_2_1706x480.png';
import WaveCube from '../img/art/wave_cube/wave_cube_1706x480.png';
import Mandelbulb from '../img/art/mandelbulb/mandelbulb_1920x1080.png';
import Julia3D from '../img/art/julia_3d/julia_3d_1920x1080.png';
import RedLines from '../img/art/red_lines/red_lines_1920x1080.png';
import FloatingHexagons from '../img/art/floating_hexagons/floating_hexagons_1920x1080.png';
import CrystalPillars from '../img/art/crystal_pillars/crystal_pillars_1215x1080.png';
import Vase from '../img/art/vase/vase_1920x1080.png';

export interface Image {
	img: any;
	src: string;
	title: string;
	subtitle: string;
}

export const images: Image[] = [
	{
		img: SwirlyJulia3D,
		src: '/img/art/julia_3d_2/julia_3d_2_1920x1080.png',
		title: 'Swirly Julia 3D',
		subtitle: 'A part of the cut open three dimensional Julia fractal',
	},
	{
		img: WhiteLines,
		src: '/img/art/white_lines/white_lines_1920x1080.png',
		title: 'White Lines',
		subtitle: 'Abstract white lines flowing through red-tinted terrain',
	},
	{
		img: SpikyLandscape,
		src: '/img/art/spikes_2/spikes_2_1706x480.png',
		title: 'Spiky Landscape',
		subtitle: 'A bizarre spiky and purple landscape',
	},
	{
		img: WaveCube,
		src: '/img/art/wave_cube/wave_cube_1706x480.png',
		title: 'Wave Cube',
		subtitle: 'A strange alien like cube',
	},
	{
		img: Mandelbulb,
		src: '/img/art/mandelbulb/mandelbulb_1920x1080.png',
		title: 'Mandelbulb',
		subtitle: 'A render of the Mandelbulb fractal',
	},
	{
		img: Julia3D,
		src: '/img/art/julia_3d/julia_3d_1920x1080.png',
		title: 'Julia 3D',
		subtitle: 'A cut open three dimensional Julia fractal',
	},
	{
		img: RedLines,
		src: '/img/art/red_lines/red_lines_1920x1080.png',
		title: 'Red Lines',
		subtitle: 'Layered wavy red lines',
	},
	{
		img: FloatingHexagons,
		src: '/img/art/floating_hexagons/floating_hexagons_1920x1080.png',
		title: 'Floating Hexagons',
		subtitle: 'Mysterious hexagons floating above a bright white plane',
	},
	{
		img: CrystalPillars,
		src: '/img/art/crystal_pillars/crystal_pillars_1215x1080.png',
		title: 'Crystal Pillars',
		subtitle: 'Two crystal pillars touching, in light and dark',
	},
	{
		img: Vase,
		src: '/img/art/vase/vase_1920x1080.png',
		title: 'Vase',
		subtitle: 'A modern Vase design',
	},
];
