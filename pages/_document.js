import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "/loader";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        {loader}
                    </style>
                    <link rel="icon" href="/public/static/favicon.ico" />
                </head>
                <body>
                <div id={'globalLoader'}>
                     <div className="loader">
                        <div/>
                        <div/>
                    </div>
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument