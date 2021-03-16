// import Form from "antd/lib/form/Form";
import React from "react";
import {useContext, useState} from 'react';
import { Title, Wrapper} from './styles';
import {Context} from 'pages/ConText';
import {useEffect } from "react";
// import {Input} from "antd";


export const PopUpSangTen = ({close}) => {

  const [value, setValue] = useContext(Context);
  const bks =  value.bienso_DAYDU;
    console.log("valuebks:" + value.bienso_DAYDU);

    const [dulieu, setDulieu] = useState({
        idOto: ' ',
        idOto_dang_ky: '',
        idOto_chu_so_huu: '',
        trang_thai_dang_ky: '',
        trang_thai_ho_so: '',
        trang_thai_hoat_dong: '',
        access: '',
        bienso_DAYDU: '',
        ten: '',
        so_KHUNG: '',
        so_may: ''
    });
    const [subOptions1, setSubOptions1] = useState([]);
    useEffect(() => {
        //fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/${value.id}`)
        fetch('http://10.0.25.184:8089/DkOtoFull/api/GetSTDCTheoBienSo?bienSo='+bks+'&donViCsgtID=29&isKhacTinh=true&api_key=123')
        .then((response) => response.json())
            .then((result) => {
                setDulieu(result);
            })
            .catch((error) => console.log('error', error));
    }, []);
 
    // make the HTTP put request using fetch api
    // Do something with the error
    function onSubmit(e) {
        e.preventDefault();
        const obj = {
            bienso_DAYDU: dulieu.bienso_DAYDU,
            ten: dulieu.ten,
        };
        console.log(obj);
        // fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/${value.id}`, {
            fetch('http://10.0.25.184:8089/DkOtoFull/api/GetSTDCTheoBienSo?bienSo='+bks+'&donViCsgtID=29&isKhacTinh=true&api_key=123' , {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data) {
                   
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setDulieu({
            idOto: ' ',
            idOto_dang_ky: '',
            idOto_chu_so_huu: '',
            trang_thai_dang_ky: '',
            trang_thai_ho_so: '',
            trang_thai_hoat_dong: '',
            access: '',
            bienso_DAYDU: '',
            ten: '',
            so_KHUNG: '',
            so_may: '',
        });

        fetch(`http://10.0.25.184:8089/DkOtoFull/api/GetSTDC?limit=10&page=1&donViCsgtID=29&isKhacTinh=true&api_key=123`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
           setValue(result);
        })
        .catch((error) => console.log('error', error));
    }
    const handleChange = (event) => {
        setDulieu({...dulieu, [event.target.name]: event.target.value});
        //console.log(dulieu);
    };
    return(
        <Wrapper>
            <div style={{backgroundColor: "whitesmoke",
            padding:"10px 20px 20px 20px", 
            border:"2px solid #6A6A6A",
            borderRadius:"10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <div style={{display:"flex", 
                    justifyContent:"space-between"}}>
                <h5>Bạn có chắc chắn muốn chuyển thông tin hồ sơ đến:</h5>
                <h5></h5>
                <div>
                        <button onClick={close} style={{
                            border:"none", 
                            backgroundColor:"whitesmoke", 
                            fontSize:"2rem", 
                            color:"darkred",
                            fontWeight:"700",
                            marginLeft:"20px"}}>
                            &times;
                        </button>
                </div>
                </div>
                <div style={{
                    width:"100%"
                    }}>
                    <form onSubmit={onSubmit} style={{
                    width:"100%"
                    }}>
                        <p style={{
                            marginBottom:"0rem"
                        }}>Biển kiểm soát:</p>
                        <input style={{
                            padding: "8px 3px"
                        }} type="text" value={value.bienso_DAYDU}/>
                        <p style={{
                            marginBottom:"0rem"
                        }}>Đơn vị:</p>
                        <input  name="ten" value={dulieu.ten}
                            onChange={handleChange} style={{
                                padding: "8px 3px"
                            }} type="text"/>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between",
                            marginTop:"20px"
                        }}>
                            <div>
                            </div>
                                <input style={{
                                    width:"30%",
                                    height: "50px",
                                    fontWeight:"600"
                                }} type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
        );
};
