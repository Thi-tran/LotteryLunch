import React, { useState } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { Button, Dialog, Tabs, Icon, Input } from "element-react";
import 'element-theme-default';

import {getUserData} from '../actions/firebase';

const UserTable = (props) => {
    const [isViewing, setIsViewing] = useState(false);
    const [isLogined, setIsLogined] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onHandleInfo = (data) => {
        setIsViewing(true);
        setUser(getUserData(data.id));
    }

    const onHandleLogin = (user, pass) => {
        if ((user === "admin") && (pass === "admin" )) { 
            setIsLogined(true) 
        } else {setErrorLogin('Please input another username and password')}
    }

    const columns = [
        {
          Header: "Name",
          accessor: "name" // String-based value accessors!
        },
        {
          Header: "Email",
          accessor: "email",
          sortable: false
        },
        {
          Header: "Note",
          accessor: "note",
          sortable: false,
          filterable: false,
        },
        {
            sortable: false,
            filterable: false,  
            Cell: row => <button className="btn-info" onClick={() => onHandleInfo(row.original)}>INFO</button>
        }
      ];
    
    return (
    <div>
        <Dialog 
            title="Login"
            size="tiny"
            visible={!isLogined}  
        >
            <Dialog.Body>
                <Input placeholder="Username" value={username} onChange={(username) => setUsername(username)}/>
                <br></br>
                <Input placeholder="Password" value={password} onChange={(pass) => setPassword(pass)}/>

                {errorLogin}
            </Dialog.Body>

            <Dialog.Footer>
                <Button 
                    onClick={() => onHandleLogin(username, password)}
                >
                    Login
                </Button>
            </Dialog.Footer>
        </Dialog>

        
        { isLogined && (
            <>
            <ReactTable
                data={props.data}
                defaultPageSize={5}
                columns={columns}
                filterable={true}
            />

            <Dialog
                title="Info"
                size="large"
                visible={ isViewing }
                onCancel={() => setIsViewing(false) }
                lockScroll={ false }
            >
                <Dialog.Body>
                    <Tabs type="border-card">
                        <Tabs.Pane 
                            label={
                                <> 
                                    <Icon name="setting" className="icon" />
                                    User info
                                </>        
                            }
                            name="1"
                        >
                            <div className="text-left">
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Note: {user.note}</p>
                            </div>
                        </Tabs.Pane>

                        <Tabs.Pane
                            label={
                                <>
                                    <Icon name="document" className="icon" />
                                    Matching History
                                </>
                            }
                        >
                            This has matching history
                        </Tabs.Pane>
                    </Tabs>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ () => setIsViewing(false) }>Cancel</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )}
        
    </div>
    );
};
    
export default UserTable;
