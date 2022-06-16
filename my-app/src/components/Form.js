import React , { useEffect, useState } from "react";
import InputForm from './inputForm';
import SelectForm from './selectForm';
import { useDispatch,useSelector } from "react-redux";
import {setName ,setAge,setPhone ,setGender ,setValueCity ,setValueDistrict ,setValueWard} from "../redux/formSlice"
import axios from 'axios';

function Form(){
    let { name, age, phone ,gender ,valueCity ,valueDistrict ,valueWard} = useSelector(state => state.form);
    // useEffect(() => {
    //     console.log(name);
    // },[name, age, phone ,gender ,valueCity ,valueDistrict ,valueWard]);
    
    const dispatch = useDispatch();
    const gt = [{value:"nam",label:"Nam"},{value:"nữ",label:"Nữ"},{value:"khác",label:"Khác"}]
    const city = [{ 
        "label" : "Hà Nội", 
        "value" : "1", 
    },{ 
        "label" : "TPHCM", 
        "value" : "2", 
    },{ 
        "label" : "Binh Duong", 
        "value" : "3", 
    }]
    const districtOptions = [{ 
        "city_id" : "2", 
        "value" : "220", 
        "label" : "Thành phố Hạ Long", 
    },{ 

        "city_id" : "2", 
        "value" : "111", 
        "label" : "Thành phố Tịnh Biên", 
    },{ 

        "city_id" : "2", 
        "value" : "154", 
        "label" : "Thành phố Hoa Binh", 
    }]
    const wardOptions = [{ 
        "district_id" : "220", 
        "label" : "Xã Trầm Lộng", 
        "value" : "1014715", 
    },{ 

        "district_id" : "220", 
        "label" : "Xã Núi Voi", 
        "value" : "1014716", 
    },{ 

        "district_id" : "220", 
        "label" : "Xã ", 
        "value" : "1014716", 
    }]

    const [districtOps,setDistrictOps] = useState([])
    const [wardOps,setWardOps] = useState([])
    const sendApi = () => {
        let data = {
            name ,age,phone ,gender ,valueCity ,valueDistrict ,valueWard  
        };

        console.log(data);
        axios.post("http://localhost:5000/",data)
        .then(d => {
            console.log(d);
        })
        .catch(err => alert(err));
    };
    
    function onChangeCity(e){
        let valuecity = e.target.value;
        let _districtOption = [];
        districtOptions.forEach(item => {
            if(item['city_id'] == valuecity)
            {
                _districtOption.push(item);
                console.log(_districtOption);
            }
        })
        setDistrictOps(_districtOption);
        dispatch(setValueCity());
    }

    function onChangeDistrict(e){
        let valuedistrict = e.target.value;
        let _wardOption = [];
        wardOptions.forEach(item => {
            if(item['district_id'] == valuedistrict)
            {
                _wardOption.push(item);
                console.log(_wardOption);
            }
        })
        setWardOps(_wardOption);
        dispatch(setValueDistrict());
        
    }
    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                sendApi();
            }}
        >
            <h2 className="form-signin-heading">Nhập thông tin cho vui</h2>
            <div class="form-group">
                <InputForm 
                type="text" 
                placeholder="Họ và Tên"
                textlable = "Họ và Tên"
                onChange = {e => {dispatch(setName(e.target.value));console.log(e.target.value)}}
                />
            </div>
            <div class="form-group">
            
                <InputForm 
                type="number" 
                placeholder="Tuổi"
                textlable = "nhập thông tin Tuổi"
                onChange = {e => {dispatch(setAge(e.target.value))}}
                />
            </div>
            <div class="form-group">
                <InputForm 
                type="number" 
                placeholder="Số Điện Thoại"
                textlable = "Nhập thông tin số điện thoại"
                onChange = {e => {dispatch(setPhone(e.target.value))}}
                />
            </div>
            <div class="form-group">
                <SelectForm 
                textlable = "Nhập thông tin Giới Tính"
                options = {gt}
                onChange = {e => {dispatch(setGender(e.target.value))}}
                />
            </div>
            <div class="form-group">
                <SelectForm 
                textlable = " Thành Phố"
                options = {city}
                
                onChange = {onChangeCity}
                />
                <SelectForm 
                textlable = " Quận/Huyện"
                options = {districtOps}
                onChange = {onChangeDistrict}
                />
                <SelectForm 
                textlable = " Xã/Phường"
                options = {wardOps}
                onChange = {e => {dispatch(setValueWard(e.target.value))}}
                />
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">gửi api xuống node</button>
      </form>
    );
}

export default Form