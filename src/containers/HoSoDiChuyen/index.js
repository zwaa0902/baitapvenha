// import React from "react";
// import {useContext, useState} from 'react';
// import { Form, Checkbox, Row,Input } from 'antd';
// import Button from 'components/Button';
// import {Context} from 'pages/ConText';
// const HoSoDiChuyen = () => {
//     // const [value, setValue] = useContext(Context);
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };


//     return (
//         <Form
//         {...layout}
//         name="basic"
//         style={{
//             display: "flex",
//             position: "fixed",
//             border: "none",
//             width: "100%",
//             backgroundColor:"#fafdff",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             right: 0,
//             overflow: "auto",
//             zIndex: "10"
//         }}

//       >
//           <Form  style={{
//             display: "flex",
//             border: "1px solid #b8d4ff",
//             width: "70%",
//             backgroundColor:"#fff",
//             padding: "20px",
//             alignSelf: "center",
//             marginLeft: "25px",
//             marginRight: "20px",
//             borderRadius: "8px"
//         }}
// >
//         <Row  style={{
//             display: "flex",
//             alignItems: "center",
//             paddingBottom: "10px"
//           }}>
//         <Form.Item
//           label="Chủ sở hữu"
//           name="username"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginRight: "20px"
//           }}
//         >
//           <Input style = {{
//               border: "2px solid #174a84",
//               borderRadius: "8px",
//               width: "180px",
//               height: "28px",
//               marginLeft: "10px",
//               marginRight: "20px"
//           }}/>
//         </Form.Item>
  
//         <Form.Item
//           label="Năm sinh"
//           name="dob"
//           style={{
//             alignItems: "center",
//             display: "flex",
//             marginRight: "20px"
//           }}
//         >
//           <Input style = {{
//               border: "2px solid #174a84",
//               borderRadius: "8px",
//               width: "180px",
//               height: "28px",
//               marginLeft: "10px"
//           }} type = "date" dateFormat="dd/mm/yyyy" />
//         </Form.Item>
//           </Row>
//         </Form>
//         <Form  style={{
//             border: "1px solid #b8d4ff",
//             width: "30%",
//             backgroundColor:"#fff",
//             padding: "20px",
//             alignSelf: "center",
//             marginRight: "25px",
//             borderRadius: "8px"
//         }}
// >
//     <Row  style={{
//             alignItems: "center",
//             marginRight: "20px",
//             paddingBottom: "10px"
//           }}>
//         <Form.Item
//           label="Loại cải tạo"
//           style={{
//             alignItems: "center",
//             display: "flex",
//             marginRight: "20px"
//           }}
//         >
//           <Input name = "loaiCaiTao"style = {{
//               border: "2px solid #174a84",
//               borderRadius: "8px",
//               height: "28px",
//               marginLeft: "15px"
//           }}/>
//         </Form.Item>
//         </Row>
//         <Row style={{
//             display: "flex",
//             alignItems: "center",
//             paddingBottom: "10px"
//           }}>

  
//         <Form.Item
//           label="Loại xe"
//           style={{
//             alignItems: "center",
//             display: "flex",
//             marginRight: "20px"
//           }}
//         >
//           <Input style = {{
//               border: "2px solid #174a84",
//               borderRadius: "8px",
//               height: "28px",
//               marginLeft: "10px"
//           }} name = "loaiXe" />
//         </Form.Item>
//         </Row>
//         </Form>
//         <Form  style={{
//         position: "fixed",
//         top: "90%",
//         left: "50%"
//         }}>
//         <Row>
//         <Button >Cấp biển</Button>
//         <Button style={{backgroundColor: "red"}}>Hủy</Button>
//           </Row>
//           </Form>
//       </Form>

//         //     <h5>ĐĂNG KÝ SANG TÊN KHÁC TỈNH</h5>
//         //     <h6>Hồ sơ chuyển đến</h6>
//         //     <div>
                
//         //     </div>
//         // </div>
//         // <Row><h4 style = {{
//         //     textAlign:"center"
//         // }}>ĐĂNG KÝ SANG TÊN KHÁC TỈNH</h4></Row>
//         // <Row><h5 style = {{
//         //     textAlign:"center"
//         // }}>Hồ sơ chuyển đến</h5></Row>
//         // <Row>
//         //     <Col>aaaaa</Col>
//         //     <Col>2 of 2</Col>
//         // </Row>

//     );
//     };
// export default HoSoDiChuyen;

import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import 'antd/dist/antd.css'; 
import Grid from "antd/lib/card/Grid";
import { useState, useEffect } from "react";
// import Input from "../../components/Input";
// import { Context } from "../Context";
import Wrapper from "./Wrapper";

const HoSoDiChuyen = () => {
  const [form] = Form.useForm();
  // const { recordEditing } = useContext(Context);

  const onFinish = () => {};
  const onFinishFailed = () => {};
  const onValuesChange = () => {};
  const onCancel = () => {
      recordEditing.setData({});
  };
  const validateMessages = {
      required: "${label} là trường bắt buộc!",
  };

  return (
      <Wrapper>
          <Form
              form={form}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
              colon={false}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              onValuesChange={onValuesChange}
              validateMessages={validateMessages}
              scrollToFirstError={true}
              labelAlign="left"
          >
              <Row>
                  <Col span={14} className="leftForm">
                      <Divider>Thông tin chủ sở hữu mới</Divider>
                      <Grid style = {{
                          width: "100%",
                          height: "100%"
                      }}>
                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Chủ sở hữu"
                                  name={["otoChuSoHuu", "ten"]}
                                  rules={[{ required: true }]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Năm sinh"
                                  name={["otoChuSoHuu", "namsinh"]}
                                  rules={[{ required: true }]}
                              >
                                  <input type="date" />
                              </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Quốc gia"
                                  name={["otoChuSoHuu", "quocGiaId"]}
                                  rules={[{ required: true }]}
                              >
                                  <Select></Select>
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Tỉnh/Thành phố"
                                  name={["otoChuSoHuu", "tinhThanhPho"]}
                                  rules={[{ required: true }]}
                              >
                                  <Select></Select>
                              </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Quận/Huyện"
                                  name={["otoChuSoHuu", "quanHuyen"]}
                                  rules={[{ required: true }]}
                              >
                                  <Select></Select>
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Phường/Xã"
                                  name={["otoChuSoHuu", "phuongXa"]}
                                  rules={[{ required: true }]}
                              >
                                  <Select></Select>
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row>
                          <Col span="24">
                              <Form.Item
                                  label="Địa chỉ"
                                  name={["otoChuSoHuu", "diaChi"]}
                                  rules={[{ required: true }]}
                                  labelCol={{ span: 5 }}
                                  wrapperCol={{ span: 19 }}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                          <Col span="24">
                              <Form.Item
                                  label="Số CCCD/CMND/ Hộ chiếu của chủ xe"
                                  name={["otoChuSoHuu", "soCMND"]}
                                  rules={[{ required: true }]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Cấp ngày"
                                  name={["otoChuSoHuu", "ngayCapCMND"]}
                                  rules={[{ required: true }]}
                              >
                                  <input type="date"  />
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Nơi cấp"
                                  name={["otoChuSoHuu", "noiCapCMND"]}
                                  rules={[{ required: true }]}
                              >
                                  <Select></Select>
                              </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                          <Col span="24">
                              <Form.Item
                                  label="Số CCCD/CMND/ Hộ chiếu của NLTT"
                                  name={["otoChuSoHuu", "soCMND_nltt"]}
                                  rules={[{ required: true }]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Cấp ngày"
                                  name={["otoChuSoHuu", "ngayCapCMND_nltt"]}
                              >
                                  <input type="date" />
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Nơi cấp"
                                  name={["otoChuSoHuu", "noiCapCMND_nltt"]}
                              >
                                  <Select></Select>
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Điện thoại chủ xe"
                                  name={["otoChuSoHuu", "sdt"]}
                                  rules={[{ required: true }]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Email chủ xe"
                                  name={["otoChuSoHuu", "email"]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Điện thoại NLTT"
                                  name={["otoChuSoHuu", "sdt_nltt"]}
                                  rules={[{ required: true }]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                          <Col span={12}>
                              <Form.Item
                                  label="Email của NLTT"
                                  name={["otoChuSoHuu", "email_nltt"]}
                              >
                                  <Input />
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row>
                          <Col span={12}>
                              <Form.Item
                                  label="Ngày đăng ký sang tên"
                                  name={["otoChuSoHuu", "ngaySangTen"]}
                              >
                                  <input type="date" />
                              </Form.Item>
                          </Col>
                         
                      </Row>
                      </Grid>
                  </Col>
                 
                  <Col span={10} className="rightForm">
                      <Divider>Thông tin xe</Divider>
                      <Grid style = {{
                          width: "100%",
                          height: "100%"
                      }}>
                      <Form.Item label="Biển số">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item
                          label="Loại cải tạo"
                          name={["oto", "loaiCaiTao"]}
                      >
                          <Select></Select>
                      </Form.Item>

                      <Form.Item label="Loại xe">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Nhãn hiệu">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Số loại">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Số khung">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Số máy 1">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Số máy 2">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Màu sơn">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Đầu biển theo tỉnh">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Đầu biển quốc gia">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Seri chữ">
                          <Input disabled />
                      </Form.Item>

                      <Form.Item label="Màu biển">
                          <Input disabled />
                      </Form.Item>
                      
                      </Grid>

                  </Col>
               
              </Row>
               <Row style = {{
                   width: "100%"
               }}>
                  {/* <Space>
                      <Button type="primary">Lưu</Button>
                      <Button type="primary">Quay lại</Button>
                  </Space> */}
              </Row>
              
          </Form>
         
      </Wrapper>
  );
};

export default HoSoDiChuyen;