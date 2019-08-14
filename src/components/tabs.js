import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/config';
import { mapElements } from 'src/lib/helpers';

export function Tabs(props) {
    const [activeTab, updateActiveTab] = useState(props.initialTab);

    return (
        <View>
            <ScrollView horizontal contentContainerStyle={style.container}>
                {/* header */}
                {mapElements(props.children, (child) => {
                    const { title, id } = child.props;
                    const tabStyle = [style.item];
                    if (id === activeTab) tabStyle.push(style.activeItem);

                    return (
                        <TouchableOpacity onPress={() => updateActiveTab(id)}>
                            <Text style={tabStyle}>{title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {mapElements(props.children, (child) => {
                if (child.props.id === activeTab) {
                    return child;
                }

                return null;
            })}
        </View>
    );
}

export function TabItem(props) {
    return <View>{props.children}</View>;
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center'
    },
    item: {
        paddingHorizontal: 7,
        color: colors.primary
    },
    activeItem: {
        backgroundColor: colors.primary,
        color: colors.white,
        paddingVertical: 3
    }
});
