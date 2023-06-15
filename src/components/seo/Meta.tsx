import React from 'react';
import {IMeta} from "@/components/seo/meta.interface";
import Head from "next/head";

const getTitle = (title: string) => `${title} | Red Cars catalog`

const Meta = ({title, description, children}: IMeta) => {
    return (
        <>
            <Head>
                <title>
                    {getTitle(title)}
                </title>
                {
                    description
                        ? <>
                        <meta name='description' content={description}/>
                        <meta name='og:title' content={getTitle(title)}/>
                        <meta name='og:description' content={description}/>
                        </>
                        : <meta name='robots' content='noindex, nofollow'/>
                }
                {children}
            </Head>
        </>
    );
};

export default Meta;