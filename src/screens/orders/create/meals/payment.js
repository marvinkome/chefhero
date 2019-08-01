import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'src/components';
import { colors } from 'src/config';

class Payment extends React.Component {
    render() {
        return (
            <View style={style.paymentContainer}>
                <View style={style.basicReview}>
                    <Text>6 plates</Text>
                    <Text>:</Text>
                    <Text style={style.price}>₦2500</Text>
                </View>

                <View style={style.buttonContainer}>
                    <Button type="small" title="Review Orders" />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    paymentContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        borderTopColor: colors.lightGrey,
        borderTopWidth: 1
    },
    basicReview: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '60%',
        marginRight: 25
    },
    price: {
        color: colors.indigo2
    },
    buttonContainer: {
        width: '40%'
    }
});

export default Payment;
