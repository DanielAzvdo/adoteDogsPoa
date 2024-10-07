import { ImageSourcePropType } from 'react-native';

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Sabugo',
        image: require('../../assets/images/dog-1.jpg'),
        description: 'Cachorrinho 1'
    }, 

    {
        title: 'Gandalfo',
        image: require('../../assets/images/dog-2.jpg'),
        description: 'Cachorrinho 2'
    }, 

    {
        title: 'Chris',
        image: require('../../assets/images/dog-3.jpg'),
        description: 'Cachorrinho 3'
    }, 

    {
        title: 'Penelope',
        image: require('../../assets/images/dog-4.jpg'),
        description: 'Cachorrinho 4'
    }, 
];