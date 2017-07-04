import React, { Component } from 'react';
import { Image, View } from 'react-native';

class FullBackImage extends Component {
    render() {
        return (
            <View>
                <Image source='./../src/images/book.jpg'
                    //resizeMode='cover'
                    //style={[Styles.imageStyle, this.props.imageStyle]}
                    >
                    {/*{this.props.children}*/}
                </Image>
            </View >

        );
    }
}

export default FullBackImage;