import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Toggle } from "rsuite";
import "../App.css";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import { User } from "./Interface";

export const Delivery = () => {
  const defaultUsers = [
    {
      id: 1,
      customer: "ABC株式会社 栃木工場",
      postcode: "1234567",
      prefecture: "栃木県",
      municipality: "日光市",
      address1: "〇〇△△１－１－１",
      address2: "",
      department: "生産1部",
      responsibleparty: "山田次郎",
      tel: "044-1234-5678",
      email: "yamada@abc.com",
    },
    {
      id: 2,
      customer: "ABC株式会社 小田原工場",
      postcode: "1234567",
      prefecture: "神奈川県",
      municipality: "小田原市",
      address1: "〇〇町△△１－１－１",
      address2: "",
      department: "生産1部",
      responsibleparty: "山田次郎",
      tel: "044-1234-5678",
      email: "yamada@abc.com",
    },
    {
      id: 3,
      customer: "株式会社XYZ 東京本社",
      postcode: "1234567",
      prefecture: "東京都",
      municipality: "港区",
      address1: "〇〇△△１－１－１",
      address2: "XYZビル7F",
      department: "生産1部",
      responsibleparty: "山田次郎",
      tel: "044-1234-5678",
      email: "yamada@abc.com",
    },
  ];

  const initCurrentUser = {
    id: null,
    customer: "",
    customer_branch: "",
    postcode: "",
    prefecture: "",
    municipality: "",
    address1: "",
    address2: "",
    department: "",
    responsibleparty: "",
    tel: "",
    email: "",
  };

  const [users, setUsers] = useState(defaultUsers);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(initCurrentUser);
  const [showCreateBtn, setShowCreateBtn] = useState(true);
  const [editing, setEdit] = useState(false);
  const [rates, setRates] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    if (editing === false) {
      setNewUser(initCurrentUser);
    }
  };

  const onFormSubmit = (newUser: any) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };

  const onEdit = (newUser: any) => {
    setEdit(true);
    if (editing === true) {
      setNewUser({ ...newUser, newUser });
      handleShow();
    }

  };

  const onSubmit = (newUser: any) => {
    if (editing === true) {
      onUpdateUser(newUser);
    } else {
      onFormSubmit(newUser);
    }
  };

  const onUpdateUser = (newUser: User) => {
    setEdit(false);
    let id = newUser.id;
    setUsers(users.map((i) => (i.id === id ? newUser : i)));
  };

  const onDeleteUser = (currentUser: User) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
  };

  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <Card className="customCard">
            <Card.Body>
              <div className="d-flex justify-content-between customCardBody">
                <div>
                  <Card.Title>納品先</Card.Title>
                </div>
                <div className="d-flex">
                  <Toggle
                    className="userToggleBtn"
                    checked={showCreateBtn}
                    onClick={(e: any) => {
                      e.preventDefault();
                      setShowCreateBtn(!showCreateBtn);
                    }}
                  />
                  {showCreateBtn ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      title="追加"
                    >
                      <FaPlus />
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>顧客名</th>
                    <th>郵便番号</th>
                    <th>都道府県</th>
                    <th>市区町村</th>
                    <th>番地</th>
                    <th>ビル名等</th>
                    <th>部署名</th>
                    <th>担当者</th>
                    <th>電話番号</th>
                    <th>電子メール</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.customer}</td>
                        <td>{user.postcode}</td>
                        <td>{user.prefecture}</td>
                        <td>{user.municipality}</td>
                        <td>{user.address1}</td>
                        <td>{user.address2}</td>
                        <td>{user.department}</td>
                        <td>{user.responsibleparty}</td>
                        <td>{user.tel}</td>
                        <td>{user.email}</td>
                        <td>
                          <Button
                            variant="info"
                            size="sm"
                            title="編集"
                            onClick={() => onEdit(user)}
                          >
                            <FaPencilAlt size={12}/>
                          </Button>{" "}
                          <Button
                            variant="danger"
                            size="sm"
                            title="削除"
                            onClick={() => onDeleteUser(user)}
                          >
                            <FaTrashAlt size={12}/>
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={12} className="text-center">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(newUser);
              }}
            >
              <Modal.Header closeButton>
                {
                  editing === true
                    ? <Modal.Title>編集</Modal.Title>
                    : <Modal.Title>追加</Modal.Title>
                }
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>顧客名</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.customer}
                    required
                    onChange={(e) =>
                      setNewUser({ ...newUser, customer: e.target.value })
                    }
                    placeholder="顧客名"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>郵便番号</Form.Label>
                  <Form.Control
                    type="neumber"
                    value={newUser.postcode}
                    onChange={(e) =>
                      setNewUser({ ...newUser, postcode: e.target.value })
                    }
                    placeholder="郵便番号"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>都道府県</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.prefecture}
                    onChange={(e) =>
                      setNewUser({ ...newUser, prefecture: e.target.value })
                    }
                    placeholder="都道府県"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>市区町村</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.municipality}
                    onChange={(e) =>
                      setNewUser({ ...newUser, municipality: e.target.value })
                    }
                    placeholder="市区町村"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>番地</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.address1}
                    onChange={(e) =>
                      setNewUser({ ...newUser, address1: e.target.value })
                    }
                    placeholder="番地"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>ビル名等</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.address2}
                    onChange={(e) =>
                      setNewUser({ ...newUser, address2: e.target.value })
                    }
                    placeholder="ビル名等"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>部署</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.department}
                    onChange={(e) =>
                      setNewUser({ ...newUser, department: e.target.value })
                    }
                    placeholder="部署"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>担当者</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.responsibleparty}
                    onChange={(e) =>
                      setNewUser({ ...newUser, responsibleparty: e.target.value })
                    }
                    placeholder="担当者"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>電話番号</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.tel}
                    onChange={(e) =>
                      setNewUser({ ...newUser, tel: e.target.value })
                    }
                    placeholder="電話番号"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>電子メール</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    placeholder="電子メール"
                  />
                </Form.Group>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {editing === true ? (
                  <Button variant="primary" type="submit" onClick={handleClose}>
                    Update
                  </Button>
                ) : (
                  <Button variant="primary" disabled={!newUser.customer} type="submit" onClick={handleClose}>
                    Submit
                  </Button>
                )}
              </Modal.Footer>
            </Form>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};
