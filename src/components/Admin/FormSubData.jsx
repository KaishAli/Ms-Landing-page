
function FormSubData({ formData }) {
    console.log(formData, 'hdsfh');



    return <>{
        formData ?
            <h1>{formData.college}</h1> :""
    }

    </>
}
export default FormSubData;

