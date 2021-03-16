import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
 
import {useHistory} from 'react-router-dom';
import {useRouter} from 'next/router';
import axios from 'axios';
 
export default function FirstPost() {
    const history = useHistory();
    const router = useRouter();
    const [formData, updateFormData] = useState({
        id: ' ',
        name: '',
        age: '',
        address: '',
        createdAt: '',
    });
    const handleChange = (event) => {
        updateFormData({...formData, [event.target.name]: event.target.value});
    };
    function onChangeValue(event) {
        updateFormData({
            id: event.target.value,
        });
    }
    function onChangename(event) {
        updateFormData({
            name: event.target.value,
        });
    }
    function onSubmit(e) {
        e.preventDefault();
 
        const obj = {
            id: formData.id,
            name: formData.name,
        };
        axios
            .post('https://6041af897f50e000173aae0c.mockapi.io/users', obj)
            .then((res) => {        
                console.log(res.data);
                if (res.data) {
                    router.push('/user/table');
                }
            });
 
        updateFormData({
            id: ' ',
            name: '',
            age: '',
            address: '',
            createdAt: '',
        });
    }
    return (
        <Layout children>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Add New User</h1>
            <div style={{marginTop: 10}}>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>id: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.id}
                            onChange={handleChange}
                            name="id"
                        />
                    </div>
                    <div className="form-group">
                        <label> Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Địa Chỉ: </label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Thêm Mới"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </Layout>
    );
    }