import { default as i18n, default as i18next } from "i18next";
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


export interface LanguageState {
    langs: string[]
}

const initialState: LanguageState = {
    langs: ['en', 'es', 'tr']
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: 'en',
        supportedLngs: initialState.langs,
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/assets/locale/{{lng}}/translations.json'
        }
    });

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            i18next.changeLanguage(action.payload)
        }
    },
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer