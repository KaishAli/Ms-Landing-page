import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, ColumnChooser, ColumnFixing, Toolbar, Item } from 'devextreme-react/data-grid';
import '../../Admin/AdminData/Admin.css'
import Button from 'devextreme-react/button';

import { useEffect, useRef, useState } from 'react';
function Admin() {
    const [localRegisterData, setLocalRegisterData] = useState([])
    const storedData = localStorage.getItem('formDataArray');
    const gridRef = useRef()

    useEffect(() => {
        if (localRegisterData) {
            getFormData(storedData)
        }
    }, [])

    async function getFormData(storedData) {
        let formDataArrayObj = [];
        if (storedData) {
            formDataArrayObj = JSON.parse(storedData);
            setLocalRegisterData(formDataArrayObj);
        }
    }


    function refreshDataGrid() {
        window.location.reload()
        console.log("call");
    }
    return (
        <>
            <div className='datagrid-div'>
                <DataGrid
                    dataSource={localRegisterData}
                    keyExpr="email"
                    showBorders={true}
                    ref={gridRef}
                >
                    <Toolbar>
                        <Item location="after">
                            <Button
                                icon='refresh'
                                onClick={refreshDataGrid}
                            />
                        </Item>
                        <Item name="columnChooserButton" />
                    </Toolbar>
                    <ColumnChooser enabled={true} />
                    <ColumnFixing enabled={true} />
                    {/* <Column
                        caption="S.No"
                        width="110px"
                        fixed={true}
                    /> */}
                    <Column
                        dataField="name"
                        caption="Name"
                        width="240px"
                    // alignment="right"

                    />
                    <Column
                        dataField="address"
                        caption="address"
                        width="240px"
                    // dataType="date"
                    />
                    <Column
                        dataField="college"
                        caption="college"
                        width="240px"
                    />
                    <Column
                        dataField="education"
                        caption="education"
                        width="240px"
                    // alignment="right"

                    />
                    <Column
                        dataField="email"
                        caption="email"
                        width="240px"
                    // alignment="right"

                    />


                </DataGrid>
            </div >

        </>
    )


}
export default Admin