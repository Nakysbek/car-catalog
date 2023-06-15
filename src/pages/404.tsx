import React from 'react';
import Layout from "@/components/layout/Layout";
import Image from 'next/image'
import Head from "next/head";

const NotFound = () => {
    return (
        <Layout>

            <div style={{textAlign: 'center'}}>
                <Image src='/404.png' alt='404-error' width={500} height={500}/>
            </div>

        </Layout>
    );
};

export default NotFound;