import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, ColumnChooser, ColumnFixing } from 'devextreme-react/data-grid';
import '../../Admin/AdminData/Admin.css'
import { useEffect, useState } from 'react';
function Admin() {
    const [localRegisterData, setLocalRegisterData] = useState([])
    const storedData = localStorage.getItem('formData');
    const myDataObject = storedData ? JSON.parse(storedData) : null;

    useEffect(() => {
        if (myDataObject) {
            console.log(myDataObject, myDataObject.name, 'myDataObject');
            setLocalRegisterData([myDataObject])
        }
    }, [])
    console.log(localRegisterData, 'localRegisterData');

    return (
        <>
            <div className='datagrid-div'>
                <DataGrid
                    dataSource={localRegisterData}
                    keyExpr="email"
                    showBorders={true}
                >
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
            </div>

        </>
    )


}
export default Admin