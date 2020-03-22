import React from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const {Component} = this.props
    return (
      <React.Fragment>
        <Head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='x-ua-compatible' content='ie=edge'/>
          <meta name='description' content='Training'/>
          <meta name='theme-color' content='#317EFB'/>
          <meta name='xp-version' content='0.0.1'/>
          {/* <meta name="google-site-verification" content="9mK8P8lt6Hiu2rsqBlU1mQrQydK2ivRUP1OGuWlBhTY" /> */}
          {/* <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/> */}
          {/* <link rel='apple-touch-icon' href='/static/images/icons-192.png'/> */}
          {/* <link rel='icon' sizes='192x192' href='/static/images/icons-192.png'/> */}
          {/* <link rel='manifest' href='/static/manifest.json'/> */}
          {/* <link rel='shortcut icon' href='/static/images/favicon.ico'/> */}
          <title>Training</title>
        </Head>
        <Component {...this.props} />
      </React.Fragment>
    )
  }
}