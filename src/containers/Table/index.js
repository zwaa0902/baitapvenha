import { useState, useEffect, useContext } from "react";
import { Wrapper, DrawTable } from "./styles";
import Popup from 'reactjs-popup';
import {PopUpSangTen} from "../PopUpSangTen";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Form } from 'react-bootstrap';
import { Col} from 'antd';
import { Context } from 'pages/ConText';
import 'antd/dist/antd.css'; 
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Button from '../../components/Button';
const TableDiChuyen = () => {

    const [data, setData] = useState([]);
    const [click, setClick] = useState(false);
    const [value, setValue] = useContext(Context);
    const [issubmit, setIsSubmit] = useState(false);
    const [bks, setBks] = useState('');
    const Searching = (e) =>{
        e.preventDefault();
        if(bks === ''){
    //  useEffect(() => {
        fetch('http://10.0.25.184:8089/DkOtoFull/api/GetSTDC?limit=10&page=1&donViCsgtID=29&isKhacTinh=true&api_key=123')
       // fetch('https://6041af897f50e000173aae0c.mockapi.io/users') 
        .then(
            (res) => (res.json())
        )
        .then(
            (result) => {
                setData(result.result.Result)           
            }
        )
        .catch((error) => { });            
    //    }, []);
     } else {
        fetch('http://10.0.25.184:8089/DkOtoFull/api/GetSTDCTheoBienSo?bienSo='+bks+'&donViCsgtID=29&isKhacTinh=true&api_key=123')
        .then(
            (res) => (res.json())
        )
        .then(
            (result) => {
                setData(result.result.Result)           
            }
        )
        .catch((error) => { }); 
    }
    }
     const handleChange = e => {
        setBks({
          [e.target.name]: e.target.value}
        );
      };
      console.log("bks:" +bks);
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
     

      const buttonStyle = {
          backgroundColor:  "#2478d8",
          border:"none",
          color:"white",
          borderRadius: "8px",
          padding: "5px 12px",
          fontSize: "0.85rem",
          marginRight: "10px",
          fontWeight:"700"
      }

      const styleButton = {
            backgroundColor:  "white",
            border:"1px solid #2478d8",
            color:"#2478d8",
            borderRadius: "8px",
            padding: "5px 50px",
            fontSize: "0.85rem",
            fontWeight: "700"   
      }

      
      const labelStyle = {
         color: "#194a84",
         fontWeight: "600",
         
      }


      const inputStyle = {
        border:"2px solid #194a84",
        borderRadius: "8px",
  
        width:"90%"
      }

      const styleInput = {
     
        border:"2px solid #194a84",
        borderRadius: "8px",

        width:"90%"
      }


      const onClick = () => {
        click === false ? setClick(true) : setClick(false);
      }


      const onRow = (item) => {

        
        setValue(item);
        console.log(item);

      }    
    
    return (
        
        <div style={{backgroundColor: "#fafdff"}}>
            <div style={{textAlign:"center", marginBottom:"80px"}}>
                <div>
                <Layout style={{
                    backgroundColor: "#fafdff"
                }}>
                    <Header style={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "1.3rem",
                        fontWeight:"600"
                    }}>HỆ THỐNG ĐĂNG KÝ XE Ô TÔ</Header>
                    <Content style={{
                        marginTop:"20px",
                        color: "#174a84",
                        textAlign:"center",
                        fontSize: "1.4rem",
                        fontWeight:"600",
                        backgroundColor:"#fafdff",
                        paddingBottom: "20px"
                }}>ĐĂNG KÝ SANG TÊN KHÁC TỈNH</Content>
                </Layout>
    
                </div>
            </div>
            <div>
                <div  style={{textAlign:"center"}}>
               
                    <div>
                    <span style={{paddingRight:"80px"}}>Đăng ký di chuyển</span>
                    <span>Hồ sơ chuyển đến</span>
                    </div>
                </div>
                <div style={{marginTop: "50px"}}>
                    <form>
                        <Container style={{marginBottom:"25px"}}>
                            <Row>
                            <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                <Col span = {12} style ={{
                                    alignSelf: "center"
                                }}>
                                    <label style={labelStyle}>
                                        Biển số
                                    </label>   
                                </Col>
                                <Col span = {12} style ={{
                                    alignSelf: "center"
                                }}>
                                    <input name = "bks" onChange={event => setBks(event.target.value)} type="text" style = {styleInput}/>
                                </Col>
                            </Col>
                            <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                <button onClick = {Searching}  style={buttonStyle}>Tim kiem</button>    
                                <button type="button" style={styleButton} onClick={onClick}>Tim kiem nang cao</button>
                                    
                            </Col>
    
                            </Row>    
                        </Container>
                        <Container style={{display: click === false ? "" : "none"}}>
                            <Row  style={{marginBottom:"25px"}}>
                                <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                    <Col span = {12}>
                                    <label style={labelStyle}>Số khung</label>
                                    </Col>
                                    <Col span = {12}>
                                    <input type="text" style = {inputStyle}/>
                                    </Col>
                                </Col>
                                <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                    <Col span = {12} >
                                    <label style={labelStyle}>Số máy 1</label>
                                    </Col>
                                    <Col span = {12}>
                                    <input type="text"  style = {inputStyle}/>
                                    </Col>
                                </Col>
                                <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                    <Col span = {12}>
                                    <label style={labelStyle}>Số máy 2</label>
                                    </Col>
                                    <Col span = {12}>
                                    <input type="text"  style = {inputStyle}/>
                                    </Col>
                              </Col>
                            </Row>
                            <Row>
                            <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                    <Col span = {12}>
                                    <label style={labelStyle}>Trạng thái đăng ký</label>
                                    </Col>
                                    <Col span = {12}>
                                    <select style = {inputStyle}>
                                        <option>data</option>
                                        <option>data</option>
                                        <option>data</option>
                                    </select>
                                    </Col>
                                </Col>
                                <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                                    <Col span = {12}>
                                    <label style={labelStyle} >Trạng thái hồ sơ</label>
                                   
                                    </Col>
                                    <Col span = {12}>
                                    <select style = {inputStyle}>
                                        <option>data</option>
                                        <option>data</option>
                                        <option>data</option>
                                    </select>
                                    </Col>
                                </Col>
                               
                            </Row>
                        </Container>
                    </form>
                </div>
            </div>
            <div>
            <div style={{
                textAlign:"right",
                paddingTop: "15px",
                paddingBottom: "20px"
            }}>
            <Container style={{marginBottom:"25px"}}>
            {/* <Row  style={{marginBottom:"25px"}}>
            <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                </Col>
                                <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                </Col>
                <Col span ={8}  style = {{
                                    display: "flex"
                                }}> 
                    <Popup modal trigger={<Button>Di chuyển</Button>}>
                     {close => <PopUpSangTen close={close} />}
                    </Popup>
                </Col>
            </Row> */}
            <Row style = {{
                position: "unset",
                rowGap: "0px",
                display: "initial",
                textAlign: "right",
                width: "80%",
                margin: "0 auto",
                paddingBottom: "20px"
            }}> 
             <Popup style = {{
                    paddingLeft: "15px"
                }}modal trigger={<Button >Hồ sơ trả về</Button>}>
                {close => <PopUpSangTen close={close} />}
            </Popup>
            <Popup style = {{       
                }}modal trigger={<Button >Di chuyển</Button>}>
                {close => <PopUpSangTen close={close} />}
            </Popup>
            </Row>
            </Container>
            </div>
            <DrawTable>
                <thead>
                    {/* <th>Name</th>
                    <th>Age</th>
                    <th>Address</th> */}
                    <th>
                    STT
                    </th>
                    <th>
                        Số hồ sơ
                    </th>
                    <th>
                        Biển số
                    </th>
                    <th>
                        Chủ sở hữu
                    </th>
                    <th>
                        Số khung
                    </th>
                    <th>
                        Số máy
                    </th>
                    <th>
                        Trạng thái đăng ký
                    </th>
                    <th>
                        Trạng thái hồ sơ
                    </th>
                </thead>
                <tbody>
                    {

                        // dataSource.map(item => (
                        //     <tr onClick={() => onRow(item)} key={item.key} >
                        //         <td>{item.name}</td>
                        //         <td>{item.age}</td>
                        //         <td>{item.address}</td>
                        //     </tr>
                        // ))

                        // data.map(item => (
                        //     <tr onClick={() => onRow(item)} key={item.key} >
                        //          <td>{item.name}</td>
                        //          <td>{item.age}</td>
                        //          <td>{item.address}</td>
                        //      </tr>
                        // ))
                        data.map((item,index) => (
                            <tr onClick={() => onRow(item)} key={item.key} >
                                <td>{index}</td>
                                <td>{item.idOto}</td>
                                <td>{item.bienso_DAYDU}</td>
                                <td>{item.ten}</td>
                                <td>{item.so_KHUNG}</td>
                                <td>{item.so_may}</td>
                                <td>{item.trang_thai_dang_ky}</td>
                                <td>{item.trang_thai_ho_so}</td>
                            </tr>
                            ))          
                    }
                </tbody>
            </DrawTable>
        </div>
        
        </div>
    );
};
export default TableDiChuyen;