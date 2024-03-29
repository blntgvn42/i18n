import React from 'react';
import {Button, Form, Input} from 'antd';
import {UserLogin} from "../ts/type/User";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../feature/user/userSlice";
import {RootState} from "../store";
import {Navigate} from "react-router-dom";
import {isObjectEmpty} from "../ts/utils/ObjectUtils";
import {useTranslation} from "react-i18next";

const {Item} = Form;
const {Password} = Input;

const SignIn = () => {
    const {t} = useTranslation()
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
                <Item label={t("auth-form.username")} name="username">
                    <Input/>
                </Item>
                <Item label={t("auth-form.password")} name="password">
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