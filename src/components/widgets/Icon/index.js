import React from 'react';
import { Platform } from 'react-native';
import { colors, measures } from '../../../common/styles';
import { 
  Entypo, 
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons
 } from '@expo/vector-icons';

const getSize = size => {
  if((size >>> 0) > 0) return size;

  switch(size) {
    case 'small':
    return measures.iconSizeSmall;

    case 'large':
    return measures.iconSizeLarge;

    case 'medium':
    default:
    return measures.iconSizeMedium;
  }
}

const getIonicon = ({ name, size, ...props }) => {
  name = (Platform.OS === 'ios') ? `ios-${name}` : `md-${name}`;
  return <Ionicons {...props} name={name} size={size}/>;
}

export const Icon = props => {
  if(!props.name) return null;
  const size = getSize(props.size);
  const color = props.color || colors.black;

  switch(props.type) {
    case 'ent':
    return <Entypo {...props} size={size} color={color}/>;

    case 'ei':
    return <EvilIcons {...props} size={size} color={color}/>;

    case 'fe':
    return <Feather {...props} size={size} color={color}/>;

    case 'fa':
    return <FontAwesome {...props} size={size} color={color}/>;

    case 'fo':
    return <Foundation {...props} size={size} color={color}/>;

    case 'md':
    return <MaterialIcons {...props} size={size} color={color}/>;

    case 'mdc':
    return <MaterialCommunityIcons {...props} size={size} color={color}/>;

    case 'oct':
    return <Octicons {...props} size={size} color={color}/>;

    case 'zo':
    return <Zocial {...props} size={size} color={color}/>;

    case 'simple':
    return <SimpleLineIcons {...props} size={size} color={color}/>;

    case 'ionicons':
    default:
    return getIonicon({ ...props, color, size });
  }
}
