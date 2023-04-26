import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {
  const { register, handleSubmit, formState: { errors} } = useForm({mode: 'onChange'})
  const [messenger, setMessenger] = useState("");
  const navigate  = useNavigate();

    const onSubmit = e => {
        console.log(e)
    };
    return (
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">ログイン</h2>
                    <div className="mb-3">
                    {errors.username && <div className='alert alert-warning'> {errors.username.message}</div>}
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            ユーザー名
                          </Form.Label>
                          <Form.Control type="text" placeholder="ユーザー名を入力してください。" 
                          {...register("username",{
                            required: "ユーザー名を入力してください。",
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "アルファベットと番号のみです。"
                            },validate: value => {
                                if (value.indexOf(' ') !== -1) {
                                  return '値にスペースを含めることはできません。';
                                }
                              }
                        })} 
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>パスワード</Form.Label>
                          <Form.Control type="password" {...register("password")} placeholder="パスワードを入力してください。" />
                        </Form.Group>
                        {/* name input */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            名前
                          </Form.Label>
                          <Form.Control type="text" placeholder="名前を入力してください。" 
                          {...register("name",{
                            required: "名前を入力してください。",
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                // mada
                                message: "アルファベットと日本語のみです。"
                            }
                        })} 
                          />
                        </Form.Group>
                        {/*  生年月日*/}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                          生年月日
                          </Form.Label>
                          <Form.Control type="date" placeholder="生年月日を入力してください。" 
                          {...register("brithday",{
                            required: "生年月日を入力してください。"
                        })} 
                          />
                        </Form.Group>
                        {/* ビザ番号 */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                          ビザ番号
                          </Form.Label>
                          <Form.Control type="text" placeholder="ビザ番号を入力してください。" 
                          {...register("visa_ID",{
                            required: "ビザ番号を入力してください。"
                        })} 
                          />
                        </Form.Group>
                        {/* ビザ期限 */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            ビザ期限
                          </Form.Label>
                          <Form.Control type="date" placeholder="ビザ期限を入力してください。" 
                          {...register("visa_date",{
                            required: "ビザ期限を入力してください。"
                        })} 
                          />
                        </Form.Group>
                        {/*  */}
                        {messenger && <div className='alert alert-danger'> {messenger}</div>}

                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            ログイン
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3 btn-group d-flex justify-content-center">
                        <div className="row vw-100">
                        <Link className='col btn btn-primary mx-4' to='/'>ホーム</Link>
                        <Link className='col btn btn-success mx-4' to='/'>パスワード忘れ</Link>
                        <Link className='col btn btn-primary mx-4' to='/register'>登録</Link>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  )
}

export default Register