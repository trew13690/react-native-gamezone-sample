import React from 'react';
import {StyleSheet,Button, TextInput, View, Text} from "react-native";
import {globalStyles} from "../styles/global";
import {Formik} from "formik";
import * as yup from 'yup';
import FlatButton from "../shared/button";

export default function ReviewForm({addReview}){



    const ReviewSchema = yup.object({
        title: yup.string().required().min(4),
        body: yup.string().required().min(8),
        rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
    })

    return(
        <View style={globalStyles.container}>
            <Formik initialValues={{title: '', body: '', rating: ''}}
                    validationSchema={ReviewSchema}
                    onSubmit={(values,actions)=> {
                        console.log(values)
                        actions.resetForm()
                        addReview(values)

                    }}>
                {(props) => (
                   <View>
                       <TextInput
                           style={globalStyles.input}
                           placeholder='Review title'
                           onChangeText={props.handleChange('title')}
                           value={props.values.title}
                           onBlur={props.handleBlur('title')}

                           />
                           <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title  }</Text>

                       <TextInput
                           style={globalStyles.input}
                           placeholder='Review body'
                           onChangeText={props.handleChange('body')}
                           value={props.values.body}
                           onBlur={props.handleBlur('body')}
                       />

                       <Text style={globalStyles.errorText}>{props.touched.title && props.errors.body}</Text>
                       <TextInput
                           style={globalStyles.input}
                           placeholder='Rating (1-5)'
                           onChangeText={props.handleChange('rating')}
                           value={props.values.rating}
                           keyboardType='numeric'
                           onBlur={props.handleBlur('rating')}


                       />

                       <Text style={globalStyles.errorText}>{props.touched.title &&  props.errors.rating}</Text>
                       <FlatButton  text='submit' onPress={props.handleSubmit}/>
                   </View>
                )}
            </Formik>
        </View>
    )
}