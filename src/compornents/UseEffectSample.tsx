// 副作用のフック
// 副作用とは：コンポーネントの描画と直接関係のない処理

import React, { useState, useEffect } from "react";

// タイマーが呼び出される間隔
const UPDATE_CYCLE = 1000

//localstorageで使用するキー
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en_US',
    JP = 'ja-JP'
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimeStamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    //タイマーをセットするための副作用
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeStamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer)
        }
    }, [])

    //localstorageから値を読み込むための副作用
    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)

        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale} 
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}

export default Clock