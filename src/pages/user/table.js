import Head from 'next/head';

import Layout from '../../components/Layout';
import Table from '../../containers/Table';
import {Context} from '../../pages/ConText';
import {useContext, useState} from 'react';
import React from "react";


export const TestProvider = React.createContext("HEllo");

const TableUserPage = () => {

    const [value, setValue] = useState([]);

    return (
        <>
            <Head>
                <title>Table</title>
            </Head>
            <Context.Provider value={[value, setValue]}>
                <Table />
            </Context.Provider>
        </>
    );
};

// TableUserPage.Layout = Layout;

export default TableUserPage;