import React from 'react';
import {Button, Form, Input} from 'antd';
import {UserLogin} from "../ts/type/User";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../feature/user/userSlice";
import {RootState} from "../store";
import {Navigate} from "react-router-dom";
import {isObjectEmpty} from "../ts/utils/ObjectUtils";

const {Item} = Form;
const {Password} = Input;

const SignIn = () => {
    const dispatch = useDispatch()
    const {loggedInUser} = useSelector((state: RootState) => state.user)
    const formSubmit = async (values: any) => {
        try {
            const validatedForm = UserLogin.parse(values)
            await dispatch(signIn(validatedForm));
        } catch (e) {
            console.error(e)
        }
    }
    if (isObjectEmpty(loggedInUser)) {
        return <Navigate to="/"/>
    } else {
        return (
            <Form name="basic" autoComplete="off" onFinish={formSubmit}>
                <Item label="Username" name="username">
                    <Input/>
                </Item>

                <Item label="Password" name="password">
                    <Password/>
                </Item>

                <Item wrapperCol={{offset: 8, span: 8}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Item>
            </Form>
        );
    }
}

export default SignIn;