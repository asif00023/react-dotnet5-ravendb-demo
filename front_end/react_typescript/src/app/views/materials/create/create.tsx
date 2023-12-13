import React, { useState, useRef, FormEvent, useEffect } from "react";
import CIcon from '@coreui/icons-react';
import axios from 'axios';
import { cilList, cilSave } from '@coreui/icons';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CFormInput,
  CRow,
  CLink,
  CContainer,
} from '@coreui/react'
import Material from "src/app/model/Material";
import { saveMaterialData } from "src/app/service/materialService";


interface MaterialCreateFormProps {
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
const MaterialsCreate : React.FC<MaterialCreateFormProps> = ({onSubmit}) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const [material, setUser] = useState<Material>({id:'', name: '', isVisible: false, typeOfPhase: '',minTemperature:'',maxTemperature:''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...material, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    material.typeOfPhase=selectedOption;
    material.isVisible=isChecked;
    console.log(material);
    try {
      saveMaterialData(material);
      alert("Data saved successfully");
      setUser({id: '', name: '',isVisible: false, typeOfPhase: '',minTemperature:'',maxTemperature:''});
      setSelectedOption('');
      setChecked(false);
      
    } catch (er) {
      console.error('Error creating user:');
      
    }
    
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CContainer>
              <CRow>
                <CCol><strong>  Materials Create</strong></CCol>
                <CCol><CLink href="/#/materials/list" className="d-grid gap-2 d-md-flex justify-content-md-end link-info" >List</CLink></CCol>
              </CRow>
            </CContainer>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol xs={12} sm={12} className="mb-3">
                  <CFormLabel htmlFor="name">Material Name(*)</CFormLabel>
                  <CFormInput type="text" id="name" name="name" value={material.name} placeholder="material name" onChange={handleChange} feedbackInvalid="Please provide material name" required />
                </CCol>
              </CRow>
              <CRow>  
                <CCol xs={12} sm={12} className="mb-3">
                <CFormLabel htmlFor="typeOfPhase">Type Of Phase</CFormLabel>
                  <CFormSelect aria-label="Default select example" value={selectedOption} id="typeOfPhase" name="typeOfPhase" onChange={option => handleSelectChange(option)} options={options}  >                  
                  </CFormSelect>
                  
                </CCol>
              </CRow>
              <CRow>  
                <CCol xs={5} sm={5} className="mb-3">
                  <CFormLabel htmlFor="minTemparature">Minimum Temparature(*)</CFormLabel>
                  <CFormInput type="text" id="minTemperature" name="minTemperature" value={material.minTemperature} placeholder="Minimum Temparature" onChange={handleChange} required />
                </CCol>
                <CCol xs={5} sm={5} className="mb-3">
                  <CFormLabel htmlFor="maxTemparature">Maximum Temparature(*)</CFormLabel>
                  <CFormInput type="text" id="maxTemperature" name="maxTemperature" value={material.maxTemperature} placeholder="material name" onChange={handleChange} required />
                  {/* <CFormInput type="text" id="maxTemparature" name="maxTemparature" value={material.maxTemperature} placeholder="Maximum Temparature" onChange={handleChange} /> */}
                </CCol>
                <CCol xs={2} sm={2} className="mb-3">
                  <CFormLabel htmlFor="isVisibale">Please check if you want to visible this material</CFormLabel>
                  <CFormSwitch size="lg" id="isVisibale" name="isVisibale" label="&nbsp;" checked={isChecked}
          onChange={handleCheckboxChange}/>
          {/* {isChecked && <p>The checkbox is checked!</p>} */}
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

export default MaterialsCreate
