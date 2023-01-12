import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {UserRegister} from "../ts/type/User";
import {signUp} from "../feature/user/userSlice";
import {isObjectEmpty} from "../ts/utils/ObjectUtils";
import {Navigate} from "react-router-dom";
import {Button, Form, Input} from "antd";
import {useTranslation} from "react-i18next";

const {Item} = Form;
const {Password} = Input;

const SignUp = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {loggedInUser} = useSelector((state: RootState) => state.user)

    const formSubmit = async (values: any) => {
        try {
            const validatedForm = UserRegister.parse(values)
            await dispatch(signUp(validatedForm));
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
                <Item label={t("auth-form.email")} name="email">
                    <Input/>
                </Item>
                <Item label={t("auth-form.password")} name="password">
                    <Password/>
                </Item>
                <Item label={t("auth-form.password-confirmation")} name="passwordConfirmation">
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

export default SignUp;