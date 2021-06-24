import React, { Component, useState } from 'react';

const Phonetable = {
    'border': '1px solid black',
    'textAlign': "center",
    'width': '90%',
    'borderCollapse': 'collapse',
    'marginTop': '2%'
}

const Phonetable_td = {
    'border': '1px solid black',
    'textAlign': "center",
    'width': '33.3%',
}

const Form = props => {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [phone, setPhone] = useState("");

    const fillDetails = (event) => {
        event.preventDefault();
        const obj = {Firstname: FName, Lastname: LName, Phone: phone}
        props.pushData(obj);
    }
    return(
        <div>
            <h2>Enter Details:</h2>
            <form onSubmit={event => fillDetails(event)}>
                <label for='FirstName'>Firstname</label><br/>
                <input type='text' name="FirstName" id='FirstName' value={FName} onChange={event => setFName(event.target.value)}/><br/>
                <label for='LastName'>Lastname</label><br/>
                <input type='text' name="LastName" id='LastName' value={LName} onChange={event => setLName(event.target.value)}/><br/>
                <label for='Phone'>Phone</label><br/>
                <input type='text' name="Phone" id='Phone' value={phone} onChange={event => setPhone(event.target.value)}/><br/>
                <input type='submit' value='Submit'/>
            </form>
        </div>        
    )
};

const TableList = props => {
    return (
        <table style={Phonetable}>
            <thead>
                <tr>
                    <td style={Phonetable_td}>FirstName</td>
                    <td style={Phonetable_td}>LastName</td>
                    <td style={Phonetable_td}>Phone</td>
                </tr>
            </thead>
            <tbody>
                {props.data.map( (el, index) => <tr key={index}>
                    <td style={Phonetable_td}>{el.Firstname}</td>
                    <td style={Phonetable_td}>{el.Lastname}</td>
                    <td style={Phonetable_td}>{el.Phone}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

class PhoneBook extends Component{
    state = {
        data:[]
    }

    storeData = (obj) => {
        const newData = [...this.state.data, obj];
        this.setState({
            data: newData
        })

        
    }

    compare = (a, b) =>{
        if(a.Lastname < b.Lastname){
            return -1;
        }
        else if(a.Lastname > b.Lastname){
            return 1;
        }
        else{
            return 0;
        }
    }


    render(){
        
        const newArray = this.state.data.sort( this.compare );
        return(
            <div>
                <Form pushData={this.storeData}></Form>
                <TableList data={newArray}/>
            </div>
        );
    }
};

export default PhoneBook;