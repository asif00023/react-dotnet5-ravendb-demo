import { useLocation } from "react-router-dom";
import React, { useState, useRef, FormEvent, useEffect } from "react";
import CIcon from '@coreui/icons-react';
import axios from 'axios';
// import Select, { ValueType } from "react-select";
import { cilList, cilSave } from '@coreui/icons';
import {
  CButton,
  CCard,CContainer,CLink,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CFormInput,
  CRow,
} from '@coreui/react'
import Material from "src/app/model/Material";
import { getMaterialDataById, updateMaterialData } from "src/app/service/materialService";


interface MaterialEditFormProps {
    material:Material;
  onSubmit: (material: Material) => void;
}
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "", label: "Please select one" },
  { value: "solid", label: "Solid" },
  { value: "liquid", label: "Liquid" }
];
const MaterialsEdit : React.FC<MaterialEditFormProps> = ({onSubmit}) => {
    const search = useLocation().search;
    const queryStringId = new URLSearchParams(search).get("id");
    // console.log(id);
  const [isChecked, setChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const [material, setMaterial] = useState<Material>({id:'', name: '', isVisible: false, typeOfPhase: '',minTemperature:'',maxTemperature:''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const val = await getMaterialDataById(queryStringId?.toString());
            setMaterial(val);
        setSelectedOption(val.typeOfPhase);
        setChecked(val.isVisible);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  
  }, []);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    material.typeOfPhase=selectedOption;
    material.isVisible=isChecked;
    
    try {
    
      const response =updateMaterialData(queryStringId?.toString(),material); //axios.put('https://localhost:44340/api/material/'+material.id, material);

    
      alert("Material saved successfully");
      setMaterial({id: '', name: '',isVisible: false, typeOfPhase: '',minTemperature:'',maxTemperature:''});
      setSelectedOption('');
      setChecked(false);
    
    } catch (er) {
      console.error('Error creating user:');
      // Handle errors here, display an error message, etc.
    }
    //onSubmit(material);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>            
            <CContainer>
              <CRow>
                <CCol><strong>  Materials Edit</strong></CCol>
                <CCol>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                  <CLink href="/#/materials/create" className="link-info" >New</CLink>
                  &nbsp;|&nbsp;
                  <CLink href={"/#/materials/list"} className="link-info" >List</CLink>
                  </div>
                </CCol>
              </CRow>
            </CContainer>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol xs={12} sm={12} className="mb-3">
                  <CFormLabel htmlFor="name">Material Name</CFormLabel>
                  <CFormInput type="text" id="name" name="name" value={material.name} placeholder="material name" onChange={handleChange} />
                </CCol>
              </CRow>
              <CRow>  
                <CCol xs={12} sm={12} className="mb-3">
                <CFormLabel htmlFor="typeOfPhase">Type Of Phase</CFormLabel>
                  <CFormSelect aria-label="Default select example" value={selectedOption} id="typeOfPhase" defaultValue={"liquid"} name="typeOfPhase" onChange={option => handleSelectChange(option)} options={options}  >                  
                  </CFormSelect>
                  
                </CCol>
              </CRow>
              <CRow>  
                <CCol xs={5} sm={5} className="mb-3">
                  <CFormLabel htmlFor="minTemparature">Minimum Temparature</CFormLabel>
                  <CFormInput type="text" id="minTemperature" name="minTemperature" value={material.minTemperature} placeholder="Minimum Temparature" onChange={handleChange} />
                </CCol>
                <CCol xs={5} sm={5} className="mb-3">
                  <CFormLabel htmlFor="maxTemparature">Maximum Temparature</CFormLabel>
                  <CFormInput type="text" id="maxTemperature" name="maxTemperature" value={material.maxTemperature} placeholder="material name" onChange={handleChange} />
                  
                </CCol>
                <CCol xs={2} sm={2} className="mb-3">
                  <CFormLabel htmlFor="isVisibale">Please check if you want to visible this material</CFormLabel>
                  <CFormSwitch size="lg" id="isVisibale" name="isVisibale" label="&nbsp;" checked={isChecked} 
          onChange={handleCheckboxChange}/>
          
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} sm={12} className="mb-3">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton color="success" shape="rounded-pill" className="me-md-2" type="submit">
                    &nbsp;<CIcon icon={cilSave} />&nbsp;Save&nbsp;</CButton>
                  </div>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MaterialsEdit
