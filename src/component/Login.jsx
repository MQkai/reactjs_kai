import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const { register, handleSubmit, formState: { errors} } = useForm({mode: 'onChange'})
  const [messenger, setMessenger] = useState("");
  const navigate  = useNavigate ();

    const onSubmit = e => {
      setMessenger("");
        axios.post('http://localhost:8080/login',e, {
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => {
        if (response.data.status === "DEFEATED") {
          setMessenger("ユーザー名またはパスワードが間違います。");
        }else{
          sessionStorage.setItem("loginUsername", response.data.username);
          setMessenger("");
          navigate("/mypage");
        }
      })
    .catch(error => {
      setMessenger("ユーザー名またはパスワードが間違います。")
    });
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

export default Login