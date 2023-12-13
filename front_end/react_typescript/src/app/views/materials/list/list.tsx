
  import React, { useState, useRef, FormEvent, useEffect } from "react";
  import CIcon from '@coreui/icons-react';
  import { cilList, cilSave,cilListRich,cilLowVision,cilPencil } from '@coreui/icons';
  
import axios from 'axios';
  import {
    CButton,
    CCard,CTooltip,
    CCardBody,
    CCardHeader,
    CCol,
    CContainer,
    CForm,
    CTable,
    CTableHead,
    CTableBody,
    CTableHeaderCell,
    CTableRow,
    CTableDataCell,
    CRow,
    CFormLabel,
    CLink,
  } from '@coreui/react'
  import Material from "src/app/model/Material";
import { getAllMaterialData } from "src/app/service/materialService";
// import Material from "src/app/model/Material";
  
  
  interface MaterialListFormProps {
    materials: Material[];
    // onSubmit: (material: Material) => void;
  }
  
  const MaterialsList : React.FC<MaterialListFormProps> = ({materials}) => {
    
    const[mItems,msetItems]=useState<Material[]>([]);

    
    useEffect(() => {
  
      const fetchData = async () => {
        try {
          const data = await getAllMaterialData();
          msetItems(data);
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
                <CCol><strong>  Materials List</strong></CCol>
                <CCol><CLink href="/#/materials/create" className="d-grid gap-2 d-md-flex justify-content-md-end link-info" >New</CLink></CCol>
              </CRow>
            </CContainer>
          </CCardHeader>
            <CCardBody>
              <CForm >
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      
                      {/* <CTableHeaderCell scope="col">Id</CTableHeaderCell> */}
                      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Types of Phase</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Minimum Temparature</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Maximum Temparature</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    
                  {mItems.map((mitem) => (
                    <CTableRow>
                      {/* <CTableHeaderCell scope="row">{mitem.id.toString()}</CTableHeaderCell> */}
                      <CTableDataCell>{mitem.name}</CTableDataCell>
                      <CTableDataCell>{mitem.typeOfPhase}</CTableDataCell>
                      <CTableDataCell>{mitem.minTemperature}</CTableDataCell>
                      <CTableDataCell>{mitem.maxTemperature}</CTableDataCell>
                      <CTableDataCell>
                          <CLink href={"/#/materials/details?id="+mitem.id.toString()} className="link-info">
                            <CTooltip content="Click here to show the details of materials" placement="right">
                              <CIcon icon={cilLowVision} />  
                            </CTooltip>
                          </CLink>&nbsp;&nbsp;
                      
                          <CLink href={"/#/materials/edit?id="+mitem.id.toString()} className="link-info">
                            <CTooltip content="Click here to show the details of materials" placement="right">
                            <CIcon icon={cilPencil} />  
                            </CTooltip>
                          </CLink>
                        
                        
                        
                      </CTableDataCell>
                    </CTableRow>
  ))}
                  </CTableBody>
                </CTable>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
  
export default MaterialsList