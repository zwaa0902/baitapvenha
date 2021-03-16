import Head from 'next/head';

import Layout from '../../components/Layout';
import {Context} from '../../pages/ConText';
import {useContext, useState} from 'react';
import React from "react";
import HoSoDiChuyen from '@/containers/HoSoDiChuyen';

const ProfilePage = () => {
    return (
        <>
            <Head>
                <title>HỒ SƠ DI CHUYỂN</title>
            </Head>
            <HoSoDiChuyen />
        </>
    );
};

ProfilePage.Layout = Layout;

export default ProfilePage;