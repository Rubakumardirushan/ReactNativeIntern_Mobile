import React from "react";
import { View,Button,InputItem,Text} from "@ant-design/react-native";

const functionalcom =()=>{
    return(
<View>
    <Text>
        Login page
    </Text>
    <InputItem
    placeholder="Username"
    />
    <InputItem
    placeholder="Password"
/>
    <Button >Click me</Button>
</View>
    );
};
export default functionalcom;