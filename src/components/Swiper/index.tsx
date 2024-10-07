import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { ImageSliderType } from "../../data/SliderData";
import SwiperItem from "../SwiperItem";

import Animated from "react-native-reanimated";


type Props = {
    itemList: ImageSliderType[]
}

const Swiper = ({itemList} : Props) => {

    return(
        <View>
            <Animated.FlatList 
                data={itemList} 
                renderItem={({ item, index}) => (
                    <SwiperItem item={item} index={index} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ListFooterComponent={
                    <ActivityIndicator 
                        style={{
                            marginTop: 250,
                            marginRight: 25,                     
                        }} 
                        size={'large'} 
                        color={'black'}/>}
                />
        </View>
    );
};

export default Swiper;