import { ImageSourcePropType } from 'react-native';

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    idade: string;
    localizacao: string;
    sexo: string;
    vacinado: string;
    raca: string;
    perfil1: string;
    perfil2: string;
};

export const ImageSlider = [
    {
        title: 'Mel',
        image: require('../../assets/images/dog-1.jpg'),
        idade: '1 ano',
        localizacao: '15 Km de distância',
        sexo: 'Fêmea',
        vacinado: 'Vacinada',
        raca: 'Vira-lada (SRD)',
        perfil1: 'Curiosa',
        perfil2: 'Amiga'
    }, 

    {
        title: 'Gandalf',
        image: require('../../assets/images/dog-2.jpg'),
        idade: '5 anos',
        localizacao: '15 Km de distância',
        sexo: 'Macho',
        vacinado: 'Vacinado',
        raca: 'Schnauzer',
        perfil1: 'Quieto',
        perfil2: 'Carinhoso'
    }, 

    {
        title: 'Chris',
        image: require('../../assets/images/dog-3.jpg'),
        idade: '7 meses',
        localizacao: '15 Km de distância',
        sexo: 'Macho',
        vacinado: 'Vacinado',
        raca: 'Vira-lada (SRD)',
        perfil1: 'Brincalhão',
        perfil2: 'Sonolento'
    }, 

    {
        title: 'Penelope',
        image: require('../../assets/images/dog-4.jpg'),
        idade: '7 anos',
        localizacao: '15 Km de distância',
        sexo: 'Fêmea',
        vacinado: 'Vacinada',
        raca: 'Vira-lada (SRD)',
        perfil1: 'Inteligente',
        perfil2: 'Medrosa'
    }, 
];