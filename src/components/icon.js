import React from 'react';
import { Image } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import CookingPNG from 'src/assets/images/cooking.png';

export function Icon({ type, ...props }) {
    switch (type) {
        case 'simple-line-icons':
            return <SimpleLineIcons {...props} />;
        case 'feather':
            return <Feather {...props} />;
        case 'evilicons':
            return <EvilIcons {...props} />;
        case 'entypo':
            return <Entypo {...props} />;
        case 'font-awesome':
            return <FontAwesome {...props} />;
        case 'ionicons':
            return <IonIcons {...props} />;
        case 'material-community':
            return <MaterialCommunity {...props} />;
        case 'ant-design':
            return <AntIcons {...props} />;
        default:
            return <MaterialIcons {...props} />;
    }
}

export function CookingIcon(props) {
    return <Image source={CookingPNG} style={{ width: props.size, height: props.size }} />;
}
