import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Landing Page/Dashboard</strong>
          </CCardHeader>
          <CCardBody>
            <div className="d-grid gap-2 col-6 mx-auto">
            <CRow>
              <strong>Company Name: LUM GmbH</strong>
            </CRow>
            <CRow>
              Candidate Name: Asif Mahamud
            </CRow><CRow>
              Email: asif.kucse@gmail.com
            </CRow><CRow>
              Mobile: +4917616743289
            </CRow><CRow>  
              <strong>Assignment Description</strong>
            </CRow><CRow>  
            <a href='https://github.com/lum-gmbh/material-db-api/issues/2' target='_blank'>Assignment Requirement Description</a>
            </CRow>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>      
  )
}

export default Dashboard
