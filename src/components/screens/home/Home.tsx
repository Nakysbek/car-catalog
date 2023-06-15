import React from 'react';
import {Inter} from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({subsets: ['latin']})

const Home = () => {
    return (
        <Layout title='Home' description='We love our customers, we like to sale cars'>
           <h1>Hello html lessons.kz</h1>
        </Layout>
    );
};

export default Home;