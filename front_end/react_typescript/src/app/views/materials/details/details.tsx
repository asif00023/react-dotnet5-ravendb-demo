import { useLocation } from "react-router-dom";
import React, { useState, useRef, FormEvent, useEffect } from "react";
  import CIcon from '@coreui/icons-react';
  import { cilList, cilSave } from '@coreui/icons';
  import {
    CButton,
    CCard,CLink,CContainer,
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
  import axios from 'axios';
import { getMaterialDataById } from "src/app/service/materialService";
  
  interface MaterialDetailFormProps {
    material:Material;
    // onSubmit: (material: Material) => void;
  }
  
  const MaterialsDetail : React.FC<MaterialDetailFormProps> = () => {
    const search = useLocation().search;
    const queryStringId = new URLSearchParams(search).get("id");
    console.log(queryStringId);

    const [material, setMaterial] = useState<Material>({id:'', name: '', isVisible: false, typeOfPhase: '',minTemperature:'',maxTemperature:''});
    useEffect(() => {
    
      const fetchData = async () => {
        try {
          const data = await getMaterialDataById(queryStringId?.toString());
          setMaterial(data);
        } catch (error) {
          // Handle errors
        }
      };
  
      fetchData();
    }, []);
      
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>              
              <CContainer>
              <CRow>
                <CCol><strong>  Materials Details</strong></CCol>
                <CCol>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                  <CLink href="/#/materials/list" className="link-info" >List | </CLink>
                  <CLink href={"/#/materials/edit?id="+queryStringId} className="link-info" >Edit</CLink>
                  </div>
                </CCol>
              </CRow>
            </CContainer>
            </CCardHeader>
            <CCardBody>
              <CForm >
                <CRow>
                  <CCol xs={12} sm={12} className="mb-3">
                    <CFormLabel htmlFor="name">Material Name:&nbsp;</CFormLabel>
                    <CFormLabel id="name">{material.name}</CFormLabel>
                    
                  </CCol>
                </CRow>
                <CRow>  
                  <CCol xs={12} sm={12} className="mb-3">
                  <CFormLabel htmlFor="typeOfPhase">Type Of Phase:&nbsp;</CFormLabel>
                  <CFormLabel id="typeOfPhase">{material.typeOfPhase}</CFormLabel>
                  </CCol>
                </CRow>
                <CRow>  
                  <CCol xs={12} sm={12} className="mb-3">
                    <CFormLabel htmlFor="minTemparature">Minimum Temparature:&nbsp;</CFormLabel>
                    <CFormLabel id="minTemparature">{material.minTemperature}</CFormLabel>                    
                  </CCol>
                  <CCol xs={12} sm={12} className="mb-3">
                    <CFormLabel htmlFor="maxTemparature">Maximum Temparature:&nbsp;</CFormLabel>
                    <CFormLabel id="maxTemperature">{material.maxTemperature}</CFormLabel>                    
                  </CCol>
                  <CCol xs={12} sm={12} className="mb-3">
                    <CFormLabel htmlFor="isVisibale">Visible:&nbsp;</CFormLabel>
                    <CFormLabel id="isVisible">{material.isVisible.toString()}</CFormLabel>                    
                  </CCol>
                </CRow>                
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
  
export default MaterialsDetail