import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import Input from '../../components/Input';
import {useHistory} from 'react-router-dom';
import {useRouter} from 'next/router';
import axios from 'axios';

export default function EditUser() {
const router = useRouter();
    const id = router.query.id;
    const [dulieu, setDulieu] = useState({
        id: ' ',
        name: '',
        age: '',
        address: '',
        createdAt: '',
    });
    const [subOptions1, setSubOptions1] = useState([]);
    useEffect(() => {
        fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/${id}`)
            .then((response) => response.json())
            .then((result) => {
                setDulieu(result);
            })
            .catch((error) => console.log('error', error));
    }, []);
    function onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: dulieu.name,
            address: dulieu.address,
        };
        console.log(obj);
        fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data) {
                    router.push('/user/table');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setDulieu({
            id: ' ',
            name: '',
            age: '',
            address: '',
            createdAt: '',
        });
    }
    const handleChange = (event) => {
        setDulieu({...dulieu, [event.target.name]: event.target.value});
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                <h1>Edit User</h1>
                    <div className="form-group">
                        <label>Id: </label>
                        <Input
                            type="text"
                            className="form-control"
                            value={dulieu.id}
                            onChange={handleChange}
                            name="id"
                        />
                    </div>
                    <div className="form-group">
                        <label> Name: </label>
                        <Input
                            type="text"
                            className="form-control"
                            value={dulieu.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Địa Chỉ: </label>
                        <Input
                            type="text"
                            name="address"
                            className="form-control"
                            value={dulieu.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Register Person"
                            className="btn btn-primary"
                            />
                     </div>
                     </div>
                            </form>
                            </div> 
    );
}